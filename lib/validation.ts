import * as z from 'zod';

export const MeetingFormSchema = z.object({
  date: z.string().min(1, 'Date is required'),
  meetingType: z.enum(['testimony', 'regular', 'stake', 'general', 'special'], {
    message: 'Please select a valid meeting type',
  }),
  presiding: z.string().min(1, 'Presiding officer is required'),
  conducting: z.string().min(1, 'Conducting officer is required'),
  openingHymnNumber: z.coerce.number().int().positive('Opening hymn number is required'),
  openingHymnTitle: z.string().min(1, 'Opening hymn title is required'),
  openingPrayer: z.string().min(1, 'Opening prayer is required'),
  sacramentHymnNumber: z.coerce.number().int().positive('Sacrament hymn number is required'),
  sacramentHymnTitle: z.string().min(1, 'Sacrament hymn title is required'),
  closingHymnNumber: z.coerce.number().int().positive('Closing hymn number is required'),
  closingHymnTitle: z.string().min(1, 'Closing hymn title is required'),
  closingPrayer: z.string().min(1, 'Closing prayer is required'),
  stakeBusiness: z.string().optional(),
});

export type MeetingFormState = {
  message: string | null;
  errors: Record<string, string[]>;
};

export const initialState: MeetingFormState = { message: null, errors: {} };