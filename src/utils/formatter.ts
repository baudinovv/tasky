const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const formatter = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'full',
  timeStyle: 'short',
  timeZone
});