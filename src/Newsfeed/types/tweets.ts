import { ISocialInfo } from './social';

export interface ITweet {
  tweet_id: number;
  handle: string;
  alias: string;
  avatar: string;
  created_at: string;
  full_text: string;
  social: ISocialInfo;
}
