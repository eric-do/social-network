import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ITweet {
  tweet_id: number;
  handle: string;
  alias: string;
  avatar: string;
  created_at: string;
  full_text: string;
  favorite_count: number;
  reply_count: number;
  retweet_count: number;
}

export interface ISocialIconMap {
  [key: string]: IconDefinition
}

export interface ISocialColorMap {
  [key: string]: string
}