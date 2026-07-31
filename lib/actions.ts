'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { addMeeting, updateMeeting, deleteMeeting } from './meetings-db';
import { MeetingFormSchema, type MeetingFormState } from './validation';

function buildMeetingData(raw: import('zod').infer<typeof MeetingFormSchema>) {
  return {
    date: raw.date,
    meetingType: raw.meetingType,
    presiding: raw.presiding,
    conducting: raw.conducting,
    announcements: [],
    openingHymn: { number: raw.openingHymnNumber, title: raw.openingHymnTitle },
    openingPrayer: raw.openingPrayer,
    wardBusiness: [],
    stakeBusiness: raw.stakeBusiness === 'on',
    sacramentHymn: { number: raw.sacramentHymnNumber, title: raw.sacramentHymnTitle },
    speakers: [],
    closingHymn: { number: raw.closingHymnNumber, title: raw.closingHymnTitle },
    closingPrayer: raw.closingPrayer,
  };
}

export async function createMeeting(
  prevState: MeetingFormState,
  formData: FormData
): Promise<MeetingFormState> {
  const parsed = MeetingFormSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return {
      message: 'Please fix the errors below.',
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    await addMeeting(buildMeetingData(parsed.data));
  } catch (error) {
    console.error('Failed to create meeting:', error);
    return {
      message: 'Something went wrong while creating the meeting. Please try again.',
      errors: {},
    };
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}

export async function updateMeetingAction(
  id: number,
  prevState: MeetingFormState,
  formData: FormData
): Promise<MeetingFormState> {
  const parsed = MeetingFormSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return {
      message: 'Please fix the errors below.',
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    const result = await updateMeeting(id, buildMeetingData(parsed.data));
    if (!result) {
      return { message: 'Meeting not found.', errors: {} };
    }
  } catch (error) {
    console.error('Failed to update meeting:', error);
    return {
      message: 'Something went wrong while updating the meeting. Please try again.',
      errors: {},
    };
  }

  revalidatePath('/meetings');
  revalidatePath(`/meetings/${id}`);
  redirect('/meetings');
}

export async function deleteMeetingAction(id: number) {
  try {
    await deleteMeeting(id);
  } catch (error) {
    console.error('Failed to delete meeting:', error);
    throw new Error('Something went wrong while deleting the meeting.');
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}