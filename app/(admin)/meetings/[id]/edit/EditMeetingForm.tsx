'use client';

import { useActionState } from 'react';
import { updateMeetingAction } from '@/lib/actions';
import { initialState } from '@/lib/validation';
import type { SacramentMeeting } from '@/lib/types';

export default function EditMeetingForm({ meeting }: { meeting: SacramentMeeting }) {
  const updateWithId = updateMeetingAction.bind(null, meeting.id);
  const [state, formAction, isPending] = useActionState(updateWithId, initialState);

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-6 text-2xl font-bold text-slate-800">Edit Meeting</h1>

      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-slate-700">
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            defaultValue={meeting.date}
            aria-describedby="date-error"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          />
          <div id="date-error" aria-live="polite" className="mt-1 text-sm text-red-600">
            {state.errors?.date?.map((err) => <p key={err}>{err}</p>)}
          </div>
        </div>

        <div>
          <label htmlFor="meetingType" className="block text-sm font-medium text-slate-700">
            Meeting Type
          </label>
          <select
            id="meetingType"
            name="meetingType"
            defaultValue={meeting.meetingType}
            aria-describedby="meetingType-error"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          >
            <option value="regular">Regular</option>
            <option value="testimony">Testimony</option>
            <option value="stake">Stake</option>
            <option value="general">General</option>
            <option value="special">Special</option>
          </select>
          <div id="meetingType-error" aria-live="polite" className="mt-1 text-sm text-red-600">
            {state.errors?.meetingType?.map((err) => <p key={err}>{err}</p>)}
          </div>
        </div>

        <div>
          <label htmlFor="presiding" className="block text-sm font-medium text-slate-700">
            Presiding
          </label>
          <input
            id="presiding"
            name="presiding"
            type="text"
            defaultValue={meeting.presiding}
            aria-describedby="presiding-error"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          />
          <div id="presiding-error" aria-live="polite" className="mt-1 text-sm text-red-600">
            {state.errors?.presiding?.map((err) => <p key={err}>{err}</p>)}
          </div>
        </div>

        <div>
          <label htmlFor="conducting" className="block text-sm font-medium text-slate-700">
            Conducting
          </label>
          <input
            id="conducting"
            name="conducting"
            type="text"
            defaultValue={meeting.conducting}
            aria-describedby="conducting-error"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          />
          <div id="conducting-error" aria-live="polite" className="mt-1 text-sm text-red-600">
            {state.errors?.conducting?.map((err) => <p key={err}>{err}</p>)}
          </div>
        </div>

        <fieldset className="rounded-md border border-slate-200 p-4">
          <legend className="px-1 text-sm font-medium text-slate-700">Opening Hymn</legend>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label htmlFor="openingHymnNumber" className="block text-sm text-slate-600">
                Number
              </label>
              <input
                id="openingHymnNumber"
                name="openingHymnNumber"
                type="number"
                defaultValue={meeting.openingHymn.number}
                aria-describedby="openingHymnNumber-error"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="openingHymnTitle" className="block text-sm text-slate-600">
                Title
              </label>
              <input
                id="openingHymnTitle"
                name="openingHymnTitle"
                type="text"
                defaultValue={meeting.openingHymn.title}
                aria-describedby="openingHymnTitle-error"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
              />
            </div>
          </div>
        </fieldset>

        <div>
          <label htmlFor="openingPrayer" className="block text-sm font-medium text-slate-700">
            Opening Prayer
          </label>
          <input
            id="openingPrayer"
            name="openingPrayer"
            type="text"
            defaultValue={meeting.openingPrayer}
            aria-describedby="openingPrayer-error"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          />
          <div id="openingPrayer-error" aria-live="polite" className="mt-1 text-sm text-red-600">
            {state.errors?.openingPrayer?.map((err) => <p key={err}>{err}</p>)}
          </div>
        </div>

        <fieldset className="rounded-md border border-slate-200 p-4">
          <legend className="px-1 text-sm font-medium text-slate-700">Sacrament Hymn</legend>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label htmlFor="sacramentHymnNumber" className="block text-sm text-slate-600">
                Number
              </label>
              <input
                id="sacramentHymnNumber"
                name="sacramentHymnNumber"
                type="number"
                defaultValue={meeting.sacramentHymn.number}
                aria-describedby="sacramentHymnNumber-error"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="sacramentHymnTitle" className="block text-sm text-slate-600">
                Title
              </label>
              <input
                id="sacramentHymnTitle"
                name="sacramentHymnTitle"
                type="text"
                defaultValue={meeting.sacramentHymn.title}
                aria-describedby="sacramentHymnTitle-error"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="rounded-md border border-slate-200 p-4">
          <legend className="px-1 text-sm font-medium text-slate-700">Closing Hymn</legend>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label htmlFor="closingHymnNumber" className="block text-sm text-slate-600">
                Number
              </label>
              <input
                id="closingHymnNumber"
                name="closingHymnNumber"
                type="number"
                defaultValue={meeting.closingHymn.number}
                aria-describedby="closingHymnNumber-error"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="closingHymnTitle" className="block text-sm text-slate-600">
                Title
              </label>
              <input
                id="closingHymnTitle"
                name="closingHymnTitle"
                type="text"
                defaultValue={meeting.closingHymn.title}
                aria-describedby="closingHymnTitle-error"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
              />
            </div>
          </div>
        </fieldset>

        <div>
          <label htmlFor="closingPrayer" className="block text-sm font-medium text-slate-700">
            Closing Prayer
          </label>
          <input
            id="closingPrayer"
            name="closingPrayer"
            type="text"
            defaultValue={meeting.closingPrayer}
            aria-describedby="closingPrayer-error"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          />
          <div id="closingPrayer-error" aria-live="polite" className="mt-1 text-sm text-red-600">
            {state.errors?.closingPrayer?.map((err) => <p key={err}>{err}</p>)}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            id="stakeBusiness"
            name="stakeBusiness"
            type="checkbox"
            defaultChecked={meeting.stakeBusiness}
            className="h-4 w-4"
          />
          <label htmlFor="stakeBusiness" className="text-sm text-slate-700">
            Stake Business
          </label>
        </div>

        {state.message && (
          <p aria-live="polite" className="text-sm font-medium text-red-600">
            {state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-blue-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-800 disabled:opacity-50"
        >
          {isPending ? 'Saving…' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
}