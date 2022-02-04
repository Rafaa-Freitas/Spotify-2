import moment from 'moment';

export function milliToMinutesAndSeconds(milliseconds) {
  return moment.utc(milliseconds).format('mm:ss');
}
