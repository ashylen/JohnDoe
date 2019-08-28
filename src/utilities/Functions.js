import format from 'date-fns/format';
import { FNS_DATE_FORMAT } from './DateFormat';

export const GetStringFromDateObject = item => {
  if (typeof item === 'object' && item !== null) {
    item = format(item, FNS_DATE_FORMAT);
  }

  return item;
};

export const GetYouTubeVideoId = URL => {
  // Get VideoId from Youtube URL
  const regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
  const match = URL.match(regExp);
  const result = match && match[1].length === 11 ? match[1] : '';
  return result;
};
