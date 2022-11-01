import { getSignFormGreenwich } from './getSignFormGreenwich';

export const getTimeZoneOffsetFromGreenwichData = (greenwich: string, hours: string, minutes: string) => {
  return `${getSignFormGreenwich(greenwich)}${hours}:${minutes}`;
};
