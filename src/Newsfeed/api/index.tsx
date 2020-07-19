import axios from 'axios';
import { ITweet } from '../types/tweets'

const fetchTimeline = async (handle: string) : Promise<ITweet[]> => {
  const options = {
    params: { handle }
  }
  const { data }: { data: ITweet[]} = await axios.get(`/tweets/user_timeline`, options);
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

export { fetchTweet, fetchTimeline };