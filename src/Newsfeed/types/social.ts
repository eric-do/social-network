import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ISocialInfo {
  comments: {
    active: boolean,
    count: number
  },
  retweets: {
    active: boolean,
    count: number
  },
  favorites: {
    active: boolean,
    count: number
  }
}

export interface ISocialIconMap {
  [key: string]: IconDefinition
}

export interface ISocialColorMap {
  [key: string]: string
}