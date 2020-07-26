export interface ITweet {
  tweet_id: number;
  handle: string;
  alias: string;
  avatar: string;
  created_at: string;
  full_text: string;
  social: ISocialInfo;
}

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