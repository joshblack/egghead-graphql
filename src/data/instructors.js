import { resource } from './resource';

const instructors = [
  {
    "id": "0ec1d359",
    "name": "Dan Abramov",
    "handle": "@dan_abramov",
    "bio": "Making hot reloading mainstream. Created React Hot Loader, Redux, React DnD.",
    "site": "https://github.com/gaearon",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/bio/9VsY9i09.jpeg?1444932586",
    "videos": [
      "314f198e",
      "dd64a4b8",
      "eb1906d9",
      "c55b205f",
      "ee4f8a5d"
    ]
  },
  {
    "id": "2fea5dcb",
    "name": "Joel Hooks",
    "handle": "@jhooks",
    "bio": "Joel is a software developer living in Fort Worth, Texas. He's passionate about home educating his 4 kids and all things technology. He's also keeps egghead.io up and running for your learning pleasure!",
    "site": "Google+",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/003/bio/joel_head.jpg?1421260465",
    "videos": [
      "10bdf932",
      "b762d9cd",
      "1ea07770",
      "42328375",
      "ec6946be"
    ]
  },
  {
    "id": "5e48e78a",
    "name": "J.S. Leonard",
    "handle": "@jslauthor",
    "bio": "J.S. Leonard resides in his birthplace, Las Vegas, Nevada, where he weaves words, code and colors into remarkable experiences. He is married to a pretty rad chick and has two crazy young boys. No, he doesn't gamble. Yes, people actually live in Las Vegas.",
    "site": "http://www.jslauthor.com/",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/022/bio/outdoor_500x500.jpg?1433949656",
    "videos": [
      "df1f6a22",
      "7776e51c",
      "ad930827",
      "e3dae633",
      "61460854"
    ]
  },
  {
    "id": "fa4cf2d5",
    "name": "John  Lindquist",
    "handle": "@johnlindquist",
    "bio": "John Lindquist is a co-founder of egghead.io",
    "site": "http://egghead.io/",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/005/bio/920452_10151765169388510_756889833_o.jpg?1387142639",
    "videos": [
      "ca37dfa8",
      "40041a10",
      "1b5f868d",
      "d5d11ade",
      "83888e02"
    ]
  },
  {
    "id": "34112383",
    "name": "Marcy Sutton",
    "handle": "@marcysutton",
    "bio": "Senior Front-End Engineer at Deque Systems working on the aXe accessibility engine, Angular team member, GDI Seattle coordinator.",
    "site": "https://egghead.io/instructors/marcysutton.com",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/057/bio/marcy-ffconf.jpg?1456422458",
    "videos": [
      "029d1f3b"
    ]
  },
  {
    "id": "a5ee08b5",
    "name": "Raquel Moss",
    "handle": "@raquelxmoss",
    "bio": "Cats, code, and feminism.",
    "site": "http://www.github.com/raquelxmoss",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/044/bio/raquel.jpg?1451800097",
    "videos": [
      "49d07497"
    ]
  },
  {
    "id": "834666cf",
    "name": "Iheanyi Ekechukwu",
    "handle": "@kwuchu",
    "bio": "Iheanyi is a Software Engineer at IBM Watson Life in Austin, TX. He graduated from the University of Notre Dame with degrees in both Computer Science and Graphic Design. He enjoys designing and building ambitious web applications, especially with Ember.js.",
    "site": "iheanyi.com",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/037/bio/PodiumMeCropped.png?1447979773",
    "videos": [
      "d852c265"
    ]
  }
];

const { getAllOfInstructor, getInstructor } = resource('Instructor', instructors);

export { getAllOfInstructor, getInstructor };
