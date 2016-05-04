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
    "site": "http://joelhooks.com/",
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
  },
  {
    "id": "cb9d8bd1",
    "name": "Craig McKeachie",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/036/bio/craig-mckeachie-headshot.png?1447939149",
    "videos": []
  },
  {
    "id": "fb3a9a9e",
    "name": "Thomas Burleson",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/006/bio/ThomasB.jpg?1387407307",
    "videos": []
  },
  {
    "id": "3b1bc9a7",
    "name": "Merrick Christensen",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/038/bio/aChLd0Cx.jpeg?1448058267",
    "videos": []
  },
  {
    "id": "6de62241",
    "name": "Jacob Carter",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/028/bio/profile-pic.jpg?1455693549",
    "videos": []
  },
  {
    "id": "890b832c",
    "name": "Will Button",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/014/bio/Will_headshot.png?1426020297",
    "videos": []
  },
  {
    "id": "feef4c25",
    "name": "Ben Clinkinbeard",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/001/bio/headShot_large.jpg?1387142514",
    "videos": []
  },
  {
    "id": "01772fca",
    "name": "David Tucker",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/061/bio/david-tucker-headshot-500.jpeg?1457718712",
    "videos": []
  },
  {
    "id": "129ecf89",
    "name": "Preethi Kasireddy",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/042/bio/11895272_10154078186552506_3411075844880369856_o.jpg?1451517982",
    "videos": []
  },
  {
    "id": "21684e50",
    "name": "Trevor Miller",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/027/bio/FullSizeRender.jpg?1458427425",
    "videos": []
  },
  {
    "id": "2e2d5197",
    "name": "Brett Shollenberger",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/002/bio/brett.jpg?1387142580",
    "videos": []
  },
  {
    "id": "c5dfb210",
    "name": "Ronn Ross",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/049/bio/Ronn_Ross_500x500.jpg?1452481580",
    "videos": []
  },
  {
    "id": "c32a9553",
    "name": "Murphy Randle",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/051/bio/Avatar2.jpg?1453245799",
    "videos": []
  },
  {
    "id": "5ea09859",
    "name": "Mykola Bilokonsky",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/031/bio/IMG_0057.jpg?1444527536",
    "videos": []
  },
  {
    "id": "4537c7c2",
    "name": "Joe Maddalone",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/007/bio/Cropped-Portrait-Attempt.jpg?1391746899",
    "videos": []
  },
  {
    "id": "14e4a575",
    "name": "Tim Kindberg",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/010/bio/IMG_4220.JPG?1404257177",
    "videos": []
  },
  {
    "id": "2f3e0c15",
    "name": "Brian Troncone",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/064/bio/brian_troncone.png?1458090709",
    "videos": []
  },
  {
    "id": "44912e94",
    "name": "Shane Osbourne",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/030/bio/Untitled-1.jpg?1441957411",
    "videos": []
  },
  {
    "id": "891569ff",
    "name": "Ari Picker",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/056/bio/ari-avatar.jpg?1455483682",
    "videos": []
  },
  {
    "id": "333887a3",
    "name": "Erik Aybar",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/025/bio/ErikAybar_500x500.jpeg?1435600125",
    "videos": []
  },
  {
    "id": "aa46731d",
    "name": "Robert Penner",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/016/bio/Robert-Penner-headshot-500x500.jpg?1426554478",
    "videos": []
  },
  {
    "id": "d99a1276",
    "name": "Scott Moss",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/015/bio/scott_headshot.jpg?1426531840",
    "videos": []
  },
  {
    "id": "dc12eaff",
    "name": "Simon Bailey",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/018/bio/simon-headshot.jpg?1430674598",
    "videos": []
  },
  {
    "id": "48132e7e",
    "name": "Jeremy Robertson",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/023/bio/HeadshotCrop3.png?1434059159",
    "videos": []
  },
  {
    "id": "e7e03ee9",
    "name": "Benjamin Roth",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/021/bio/tete_bis_mod.jpg?1433374782",
    "videos": []
  },
  {
    "id": "607c0e68",
    "name": "Ben Lesh",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/019/bio/11402677_10153292063120659_5138577124041649571_o_%281%29.jpg?1459217701",
    "videos": []
  },
  {
    "id": "0c6e55f2",
    "name": "Kent C. Dodds",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/011/bio/photo.png?1425176578",
    "videos": []
  },
  {
    "id": "7e26d704",
    "name": "Mike Hartington",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/062/bio/mike-headshot.png?1457958228",
    "videos": []
  },
  {
    "id": "6e4b9bd1",
    "name": "Keith Peters",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/013/bio/eggheadphoto.png?1421766974",
    "videos": []
  },
  {
    "id": "70495e20",
    "name": "Tyler McGinnis",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/017/bio/tylermcginnis.png?1427213937",
    "videos": []
  },
  {
    "id": "3c0a7949",
    "name": "Phil Holden",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/033/bio/IMG_3123-small.JPG?1445691628",
    "videos": []
  },
  {
    "id": "c0b55693",
    "name": "Aaron Frost",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/009/bio/UCvQytmY.jpeg?1401981826",
    "videos": []
  },
  {
    "id": "e2f9f5c5",
    "name": "Jafar Husain",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/012/bio/image1.jpeg?1420665163",
    "videos": []
  },
  {
    "id": "18241123",
    "name": "Josh Black",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/058/bio/XJGtEzxg.jpeg?1457387913",
    "videos": []
  },
  {
    "id": "223c0911",
    "name": "Lukas Ruebbelke",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/008/bio/lukas-warm.jpg?1395280602",
    "videos": []
  },
  {
    "id": "32a5c470",
    "name": "Garth Braithwaite",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/026/bio/park_avatar.jpg?1437494877",
    "videos": []
  },
  {
    "id": "a68e2bff",
    "name": "Mike Frey",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/020/bio/headshot.png?1432933593",
    "videos": []
  },
  {
    "id": "0e3df055",
    "name": "André Staltz",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/024/bio/andre_500.jpg?1435599944",
    "videos": []
  },
  {
    "id": "278e6d1e",
    "name": "Trevor Ewen",
    "handle": "",
    "bio": "",
    "site": "",
    "avatar": "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/004/bio/big_profile_image.jpg?1387142668",
    "videos": []
  },
];

const { getAllOfInstructor, getInstructor } = resource('Instructor', instructors);

export { getAllOfInstructor, getInstructor };
