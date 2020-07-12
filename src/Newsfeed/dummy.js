const data = [
  {
    tweet_id: 1,
    handle: 'eric',
    alias: 'Cool guy',
    created_at: '2020-06-17',
    avatar: 'https://loremflickr.com/320/320/dog',
    full_text: 'it\'s my birthday',
    social: {
      comments: {
        active: true,
        count: 4
      },
      retweets: {
        active: false,
        count: 2
      },
      favorites: {
        active: true,
        count: 564
      }
    }
  },
  {
    tweet_id: 2,
    handle: 'Tina',
    alias: 'Cool girl',
    created_at: '2018-06-17',
    avatar: 'https://loremflickr.com/320/320/cat',
    full_text: 'it\'s my brother\'s birthday! I really love him because he\'s the best brother. Sometimes I\'m like, "how am i so lucky"',
    social: {
      comments: {
        active: true,
        count: 6
      },
      retweets: {
        active: false,
        count: 4
      },
      favorites: {
        active: true,
        count: 2
      }
    }
  },
  {
    tweet_id: 3,
    handle: 'lorem',
    alias: 'Lorem Ipsum',
    created_at: '2020-04-17',
    avatar: 'https://loremflickr.com/320/320/bird',
    full_text: `Integer porttitor ipsum id orci dignissim, nec consectetur lorem consectetur.
    Donec eleifend erat eu metus tempor, vitae facilisis enim eleifend. 
    Quisque eu nisi ac enim lobortis lobortis sed vel arcu. 
    Ut at mollis lacus. Ut egestas mi nec ullamcorper aliquam.`,
    social: {
      comments: {
        active: true,
        count: 5
      },
      retweets: {
        active: true,
        count: 2
      },
      favorites: {
        active: true,
        count: 4
      }
    }
  }
];

export default data;