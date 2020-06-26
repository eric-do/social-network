import axios from 'axios';
import { ITweet } from '../lib/types';

const fetchNewsfeed = async (user_id: number) : Promise<ITweet[]> => {
  try {
    const { data }: { data: ITweet[]} = await axios.get(`/api/tweets`);
    return data;
  } catch (e) {
    throw new Error(`Could not fetch newsfeed`);
  }
}

const fetchTweet = async (tweet_id: number) : Promise<ITweet> => {
  try {
    const { data }: {data: ITweet} = await axios.get(`/api/tweet/id=${tweet_id}`);
    return data;
  } catch (e) {
    throw new Error(`Could not fetch tweet`);
  }
}

export { fetchTweet };