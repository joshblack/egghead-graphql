import { resource } from './resource';

const subscribers = [
  {
    "id": "44fcc29f",
    "name": "Monserrate Bradtke",
    "email": "Troy_Koch7@hotmail.com",
    "videosWatched": [
      "42328375",
      "61460854",
      "b762d9cd",
      "029d1f3b",
      "7776e51c",
      "83888e02",
      "dd64a4b8",
      "ca37dfa8",
      "ee4f8a5d",
      "314f198e",
      "1b5f868d",
      "e3dae633",
      "d5d11ade"
    ],
    "videosWatching": [],
    "videosQueued": []
  },
  {
    "id": "5afb8316",
    "name": "Joany Mann",
    "email": "Aracely42@yahoo.com",
    "videosWatched": [
      "e3dae633",
      "ca37dfa8",
      "1b5f868d",
      "83888e02",
      "40041a10"
    ],
    "videosWatching": [
      {
        "currentTime": "00:58",
        "videoId": "42328375"
      },
      {
        "currentTime": "02:09",
        "videoId": "61460854"
      },
      {
        "currentTime": "00:52",
        "videoId": "dd64a4b8"
      },
      {
        "currentTime": "00:54",
        "videoId": "d5d11ade"
      },
      {
        "currentTime": "02:11",
        "videoId": "b762d9cd"
      },
      {
        "currentTime": "02:25",
        "videoId": "1ea07770"
      },
      {
        "currentTime": "00:35",
        "videoId": "ec6946be"
      },
      {
        "currentTime": "00:08",
        "videoId": "10bdf932"
      },
      {
        "currentTime": "03:56",
        "videoId": "ad930827"
      },
      {
        "currentTime": "00:18",
        "videoId": "ee4f8a5d"
      }
    ],
    "videosQueued": [
      "49d07497",
      "df1f6a22"
    ]
  },
  {
    "id": "6ff68a85",
    "name": "Mrs. Russ Ondricka",
    "email": "Laurence.Luettgen11@gmail.com",
    "videosWatched": [
      "eb1906d9",
      "83888e02",
      "314f198e",
      "d5d11ade"
    ],
    "videosWatching": [
      {
        "currentTime": "00:30",
        "videoId": "42328375"
      },
      {
        "currentTime": "01:06",
        "videoId": "61460854"
      },
      {
        "currentTime": "06:47",
        "videoId": "49d07497"
      },
      {
        "currentTime": "03:55",
        "videoId": "1b5f868d"
      },
      {
        "currentTime": "00:12",
        "videoId": "ca37dfa8"
      },
      {
        "currentTime": "02:12",
        "videoId": "b762d9cd"
      },
      {
        "currentTime": "02:31",
        "videoId": "c55b205f"
      },
      {
        "currentTime": "03:18",
        "videoId": "ec6946be"
      }
    ],
    "videosQueued": [
      "7776e51c",
      "029d1f3b",
      "ee4f8a5d",
      "1ea07770",
      "dd64a4b8",
      "ad930827"
    ]
  },
  {
    "id": "97b54ba5",
    "name": "Margret Haley",
    "email": "Ron.Dickens21@hotmail.com",
    "videosWatched": [
      "83888e02",
      "df1f6a22",
      "40041a10",
      "314f198e",
      "b762d9cd",
      "10bdf932",
      "ee4f8a5d",
      "1b5f868d",
      "49d07497",
      "eb1906d9"
    ],
    "videosWatching": [
      {
        "currentTime": "00:08",
        "videoId": "42328375"
      },
      {
        "currentTime": "01:10",
        "videoId": "ec6946be"
      }
    ],
    "videosQueued": [
      "1ea07770",
      "c55b205f",
      "d5d11ade",
      "ca37dfa8"
    ]
  },
  {
    "id": "9bd41ab4",
    "name": "Maymie Howell",
    "email": "Ross28@yahoo.com",
    "videosWatched": [
      "10bdf932",
      "7776e51c",
      "ad930827",
      "83888e02",
      "d5d11ade",
      "1ea07770",
      "ca37dfa8",
      "c55b205f",
      "df1f6a22",
      "029d1f3b",
      "eb1906d9",
      "ee4f8a5d",
      "e3dae633",
      "b762d9cd",
      "1b5f868d",
      "40041a10"
    ],
    "videosWatching": [
      {
        "currentTime": "01:21",
        "videoId": "42328375"
      },
      {
        "currentTime": "06:41",
        "videoId": "61460854"
      }
    ],
    "videosQueued": []
  },
  {
    "id": "48c9648e",
    "name": "Kyla Zulauf MD",
    "email": "Euna_Kutch@gmail.com",
    "videosWatched": [
      "1ea07770",
      "eb1906d9",
      "029d1f3b",
      "1b5f868d",
      "c55b205f"
    ],
    "videosWatching": [
      {
        "currentTime": "03:21",
        "videoId": "314f198e"
      }
    ],
    "videosQueued": [
      "ca37dfa8",
      "df1f6a22",
      "ec6946be",
      "83888e02"
    ]
  },
  {
    "id": "5b590bb1",
    "name": "Jacinto McDermott PhD",
    "email": "Clifford_Heidenreich8@yahoo.com",
    "videosWatched": [
      "42328375",
      "61460854",
      "e3dae633",
      "7776e51c",
      "ec6946be",
      "49d07497",
      "ca37dfa8",
      "1b5f868d",
      "c55b205f",
      "10bdf932",
      "1ea07770",
      "df1f6a22",
      "83888e02",
      "d5d11ade",
      "b762d9cd"
    ],
    "videosWatching": [],
    "videosQueued": []
  },
  {
    "id": "5d312876",
    "name": "Queenie Koch",
    "email": "Melyna63@hotmail.com",
    "videosWatched": [
      "ad930827",
      "dd64a4b8",
      "ec6946be"
    ],
    "videosWatching": [
      {
        "currentTime": "05:08",
        "videoId": "61460854"
      },
      {
        "currentTime": "00:08",
        "videoId": "1ea07770"
      },
      {
        "currentTime": "03:17",
        "videoId": "eb1906d9"
      },
      {
        "currentTime": "04:20",
        "videoId": "b762d9cd"
      },
      {
        "currentTime": "01:47",
        "videoId": "df1f6a22"
      },
      {
        "currentTime": "02:37",
        "videoId": "ca37dfa8"
      },
      {
        "currentTime": "00:15",
        "videoId": "314f198e"
      },
      {
        "currentTime": "00:00",
        "videoId": "83888e02"
      },
      {
        "currentTime": "04:56",
        "videoId": "49d07497"
      }
    ],
    "videosQueued": [
      "40041a10",
      "c55b205f",
      "ee4f8a5d",
      "7776e51c",
      "10bdf932",
      "1b5f868d"
    ]
  },
  {
    "id": "3f9d6db",
    "name": "Alyson Leannon",
    "email": "Kendall_Roob91@hotmail.com",
    "videosWatched": [
      "314f198e",
      "e3dae633",
      "d5d11ade",
      "c55b205f",
      "df1f6a22",
      "83888e02",
      "ec6946be",
      "ee4f8a5d",
      "49d07497",
      "eb1906d9",
      "7776e51c",
      "ca37dfa8",
      "b762d9cd"
    ],
    "videosWatching": [],
    "videosQueued": [
      "42328375",
      "61460854",
      "10bdf932"
    ]
  },
  {
    "id": "695f3923",
    "name": "Jarrett Swift Sr.",
    "email": "Ricky_Mertz99@yahoo.com",
    "videosWatched": [
      "83888e02",
      "e3dae633",
      "dd64a4b8",
      "ad930827",
      "c55b205f",
      "ca37dfa8",
      "49d07497"
    ],
    "videosWatching": [
      {
        "currentTime": "00:43",
        "videoId": "42328375"
      }
    ],
    "videosQueued": [
      "61460854",
      "7776e51c",
      "ee4f8a5d",
      "ec6946be"
    ]
  }
];

const {
  getAllOfSubscriber,
  getSubscriber,
  setKeyOnSubscriber
} = resource('Subscriber', subscribers);

export {
  getAllOfSubscriber,
  getSubscriber,
  setKeyOnSubscriber,
};


// Generator Logic

// import faker from 'faker';
// import moment from 'moment';
// import { getAllOfVideo } from '../data/videos';

// const random = (min, max) => () => Math.floor((Math.random() * max) + min);

// async function seed() {
  // const videos = await getAllOfVideo();
  // const rand = random(0, videos.length - 1);
  // const getRandomVideo = () => videos[rand()];
  // const getDistinctRandomVideos = (count) => {
    // const randomVideos = {};
    // let keyLength = 0;

    // while (keyLength <= count) {
      // const randomVideo = getRandomVideo();

      // if (!randomVideos[randomVideo.id]) {
        // randomVideos[randomVideo.id] = randomVideo;
        // keyLength += 1;
      // }
    // }

    // return Object.keys(randomVideos).map((key) => randomVideos[key]);
  // };
  // const randomSplit = (array) => {
    // const length = array.length;
    // const splitIndex = Math.floor(Math.random() * length);

    // return [
      // array.slice(0, splitIndex),
      // array.slice(splitIndex, length - 1)
    // ];
  // };

  // const subscribers = [...Array(10)]
    // .map(() => {
      // const videoPoolSize = random(10, videos.length - 11)();
      // const subscriberVideos = getDistinctRandomVideos(videoPoolSize);
      // const [remainingPool, videosWatched] = randomSplit(subscriberVideos);
      // const [videosWatching, videosQueued] = randomSplit(remainingPool);

      // const processedVideosWatching = videosWatching.map((video) => {
        // const [minutes, seconds] = video.duration.split(':');
        // const time = moment.duration({ minutes, seconds })
        // const totalTime = time.asMilliseconds();
        // const currentTime = random(0, totalTime)();

        // return {
          // currentTime: moment.utc(currentTime).format('mm:ss'),
          // videoId: video.id,
        // }
      // });

      // return {
        // id: '' + Math.random().toString(16).substr(2, 8),
        // name: faker.name.findName(),
        // email: faker.internet.email(),
        // videosWatched: videosWatched.map((video) => video.id),
        // videosWatching: processedVideosWatching,
        // videosQueued: videosQueued.map((video) => video.id)
      // };
    // });

  // return subscribers;
// }

// seed()
  // .then((data) => console.log(JSON.stringify(data, null, 2)))
  // .catch(() => console.log('error'));
