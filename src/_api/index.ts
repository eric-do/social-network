import axios from 'axios';
import { ITweet, ISocialInfo } from '../_types'

const fetchTimeline = async (handle: string) : Promise<ITweet[]> => {
  const { data }: { data: ITweet[]} = await axios.get(`/api/timeline/${handle}`);
  return data;
}

const fetchTweet = async (tweet_id: number) : Promise<ITweet> => {
  try {
    const { data }: {data: ITweet} = await axios.get(`/api/tweet/id=${tweet_id}`);
    return data;
  } catch (e) {
    throw new Error(`Could not fetch tweet`);
  }
}

const fetchTweetSocial = async (tweet_id: number, handle: string) : Promise<ISocialInfo> => {
  const url = `/tweets/${tweet_id}/social/${handle}`;

  const { data }: { data: ISocialInfo } = await axios.get(url);
  return data;
}

export { fetchTweet, fetchTimeline, fetchTweetSocial };