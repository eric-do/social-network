import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ISocialIconMap {
  [key: string]: IconDefinition
}

interface ISocialColorMap {
  [key: string]: string
}

const socialIconMap: ISocialIconMap = {
  comment: faComment,
  favorite: faHeart,
  retweet: faRetweet
};

const socialColorMap: ISocialColorMap = {
  comment: 'rgb(29, 161, 242)',
  favorite: 'rgb(224, 36, 94)',
  retweet: 'rgb(23, 191, 99)'
}

export const getSocialIconClass = (type: string) => socialIconMap[type];

export const getSocialColor = (type: string) => socialColorMap[type];