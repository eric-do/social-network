import axios from 'axios';
import { ITweet } from '../Newsfeed';

const fetchTweet = async (tweet_id: number) : Promise<ITweet> => {
  try {
    const tweet: ITweet = await axios.get(`/api/tweet/id=${tweet_id}`);
    return tweet;
  } catch (e) {
    throw new Error(`Could not fetch tweet`);
  }
}

export { fetchTweet };