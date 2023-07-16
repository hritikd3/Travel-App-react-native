/* eslint-disable prettier/prettier */
const USERS = {
  1: {
    id: 1,
    username: 'Alexia Jane',
    avatar: require('../../assets/images/users/32.jpeg'),
  },
  2: {
    id: 2,
    username: 'Jacky Depp',
    avatar: require('../../assets/images/users/35.jpeg'),
  },
};

const REVIEWS = {
  1: {
    id: 1,
    date: '21 May, 2023',
    author: USERS[1],
    rating: 7,
    text: 'Lorem ipsum dolor sit amet. Iusto nihil et porro soluta ut labore nesciunt sed dolor nihil qui laudantium consequatur',
  },
  2: {
    id: 2,
    date: '14 July, 2023',
    author: USERS[2],
    rating: 9.1,
    text: 'Lorem ipsum dolor sit amet.',
  },
};

export const HOTELS = {
  1: {
    id: 1,
    title: 'The Nest Camp ',
    image: require('../../assets/images/hotels/cp-1.jpeg'),
    location: 'Kedarnath, Uttrakhand',
    rating: 9,
    pricePeerDay: '1300Rs',
    type: 'HOTEL',
  },
  2: {
    id: 2,
    title: 'OYO Flagship 81403 Subhashish Homestay ',
    image: require('../../assets/images/hotels/cp-2.jpeg'),
    location: 'Kedarnath, Uttrakhand',
    rating: 9.3,
    pricePeerDay: '2300Rs',
    type: 'HOTEL',
  },
  3: {
    id: 3,
    title: 'OYO Flagship 81367 Shri Hari Om Tatsat Homestay',
    image: require('../../assets/images/hotels/capri-1.jpeg'),
    location: 'Kedarnath, Uttrakhand',
    rating: 9.4,
    pricePeerDay: '2800Rs',
    type: 'HOTEL',
  },
  4: {
    id: 4,
    title: 'POP Hotel ',
    image: require('../../assets/images/hotels/capri-2.jpeg'),
    location: 'Kedarnath, Uttrakhand',
    rating: 9.3,
    pricePeerDay: '1900Rs',
    type: 'HOTEL',
  },
  5: {
    id: 5,
    title: 'Bagwari House',
    image: require('../../assets/images/hotels/polynesia-1.jpeg'),
    location: 'Kedarnath, Uttrakhand',
    rating: 9.2,
    pricePeerDay: '2500Rs',
    type: 'HOTEL',
  },
  6: {
    id: 6,
    title: 'Kedar Bhairav Camp',
    image: require('../../assets/images/hotels/polynesia-2.jpeg'),
    location: 'Kedarnath, Uttrakhand',
    rating: 9.4,
    pricePeerDay: '2700Rs',
    type: 'HOTEL',
  },
  7: {
    id: 7,
    title: 'Monal Tent House',
    image: require('../../assets/images/hotels/phuket-1.jpg'),
    location: 'Kedarnath, Uttrakhand',
    rating: 9.2,
    pricePeerDay: '2100Rs',
    type: 'HOTEL',
  },
  8: {
    id: 8,
    title: 'Ganga Ashrey, Netala, Uttarkashi',
    image: require('../../assets/images/hotels/phuket-2.jpeg'),
    location: 'Gangotri, Uttrakhand',
    rating: 9.4,
    pricePeerDay: '4300Rs',
    type: 'HOTEL',
  },
  9: {
    id: 9,
    title: 'HOTEL MANISHA ',
    image: require('../../assets/images/hotels/ac-1.jpeg'),
    location: 'Badrinath, Uttrakhand',
    rating: 9.2,
    pricePeerDay: '3100Rs',
    type: 'HOTEL',
  },
  10: {
    id: 10,
    title: 'Retreat cottage',
    image: require('../../assets/images/hotels/ac-2.jpeg'),
    location: 'Gangotri , Uttrakhand',
    rating: 9.4,
    pricePeerDay: '3500Rs',
    type: 'HOTEL',
  },
  11: {
    id: 11,
    title: 'Tapovan Cottage, Gangotri',
    image: require('../../assets/images/hotels/granada-1.jpeg'),
    location: 'Gangotri , Uttrakhand',
    rating: 9.2,
    pricePeerDay: '2300Rs',
    type: 'HOTEL',
  },
  12: {
    id: 12,
    title: 'Rupali guest House',
    image: require('../../assets/images/hotels/granada-2.jpeg'),
    location: 'Badrinath , Uttrakhand',
    rating: 9.4,
    pricePeerDay: '6112Rs',
    type: 'HOTEL',
  },

  13: {
    id: 13,
    title: 'Kanha hotel',
    image: require('../../assets/images/hotels/cb-1.jpeg'),
    location: 'Yamnotri, Uttrakhand',
    rating: 9.2,
    pricePeerDay: '2000Rs',
    type: 'HOTEL',
  },
  14: {
    id: 14,
    title: 'Yamuna Darshan MLS Divi',
    image: require('../../assets/images/hotels/cb-2.jpeg'),
    location: 'Yamnotri, Uttrakhand',
    rating: 9.4,
    pricePeerDay: '1220Rs',
    type: 'HOTEL',
  },
};

export const TOP_PLACES = [
  {
    id: 1,
    image: require('../../assets/images/trips/2082f59465c39094ce90bebd0fcf8fa7.jpeg'),
    title: 'Hotel Narmada Bhawan, Badrinath',
    location: 'Badrinath',
    description:
      'Hotel Narmada Bhawan, Badrinath is a 3-star property set in Badrīnāth. This 3-star hotel offers room service and a 24-hour front desk. All guest rooms in the hotel are fitted with a flat-screen TV.',
    rating: 9.4,
    gallery: [
      require('../../assets/images/trips/3722dd4614a5a58f2ec8ebf17c22f76d.jpeg'),
      require('../../assets/images/trips/af933a359582704eee05be198e882be0.jpeg'),
    ],
    reviews: [REVIEWS[2], REVIEWS[1]],
    hotels: [HOTELS[9], HOTELS[10]],
    type: 'PLACE',
  },
  {
    id: 4,
    image: require('../../assets/images/trips/922a0cb274208ccd234f6c14f2174b8b.jpeg'),
    title: 'OYO Flagship',
    location: 'Kedarnath',
    description:
      'OYO Flagship 81367 Shri Hari Om Tatsat Homestay offers air-conditioned rooms in Kedārnāth. This 3-star hotel offers room service and a 24-hour front desk.',
    rating: 8.9,
    gallery: [],
    reviews: [REVIEWS[1], REVIEWS[2]],
    hotels: [HOTELS[11], HOTELS[12]],
    type: 'PLACE',
  },
  {
    id: 6,
    image: require('../../assets/images/trips/e57a2a310330ee1d8928eb75d416a53d.jpeg'),
    title: 'Homestay Holy Spirit',
    location: 'Kedarnath',
    description:
      'Featuring a garden, a terrace, and a restaurant, Homestay Holy Spirit offers accommodation in Kedārnāth with free WiFi and mountain views.',
    rating: 7.4,
    gallery: [],
    reviews: [REVIEWS[1], REVIEWS[2]],
    hotels: [HOTELS[13], HOTELS[14]],
    type: 'PLACE',
  },
];

export const PLACES = [
  {
    id: 5,
    image: require('../../assets/images/trips/e57a2a310330ee1d8928eb75d416a53d.jpeg'),
    title: 'Chandrashila',
    location: 'Kedarnath',
    description:
      'Chandrashila is the summit above Tungnath temple. It literally means Moon Rock. It is located at a height of about 3,690 metres above sea level.',
    rating: 9.2,
    gallery: [
      require('../../assets/images/trips/4c73f37e70dded978374960fb29360f2.jpeg'),
      require('../../assets/images/trips/55608c7000bb15d24ee022f3d3f0bf8a.jpeg'),
      require('../../assets/images/trips/c68a4484f89d0c087ebdaa43629d2a7a.jpeg'),
    ],
    reviews: [REVIEWS[1], REVIEWS[2]],
    hotels: [HOTELS[1], HOTELS[2]],
    type: 'PLACE',
  },
  {
    id: 2,
    image: require('../../assets/images/trips/e57a2a310330ee1d8928eb75d416a53d.jpeg'),
    title: 'Tungnath Temple',
    location: 'Kedarnath',
    description:
      'Tungnath is one of the highest Shiva temples in the world and is the highest of the five Panch Kedar temples located in the Rudraprayag district, in the Indian state of Uttarakhand.',
    rating: 9.1,
    gallery: [],
    reviews: [REVIEWS[2], REVIEWS[1]],
    hotels: [HOTELS[3], HOTELS[4]],
    type: 'PLACE',
  },
  {
    id: 3,
    image: require('../../assets/images/trips/e57a2a310330ee1d8928eb75d416a53d.jpeg'),
    title: 'Madmaheshwar Temple',
    location: 'Kedarnath',
    description:
      'Home of some the magnificent Himalayan peaks in the world that gives rise to beautiful trekking experience, Uttarakhand is a potpourri of adventure activities such as hiking and trekking ',
    rating: 8.9,
    gallery: [],
    reviews: [REVIEWS[1], REVIEWS[2]],
    hotels: [HOTELS[5], HOTELS[6]],
    type: 'PLACE',
  },
  {
    id: 7,
    image: require('../../assets/images/trips/e57a2a310330ee1d8928eb75d416a53d.jpeg'),
    title: 'Gomukh',
    location: 'Gangotri',
    description:
      'Gomukh, also known as "Gaumukh" or "Gomukhi", is the terminus or pout of the Gangotri Glacier and the source of the Bhagirathi River, one of the primary headstreams of the Ganga River.',
    rating: 9.2,
    gallery: [],
    reviews: [REVIEWS[2], REVIEWS[1]],
    hotels: [HOTELS[7], HOTELS[8]],
    type: 'PLACE',
  },
];

export const SEARCH_PLACES = [...PLACES, ...TOP_PLACES].map(item => ({
  ...item,
  id: Math.random().toString(),
}));

export const SEARCH_HOTELS = [...Object.values(HOTELS)].map(item => ({
  ...item,
  id: Math.random().toString(),
}));

export const SEARCH_ALL = [...SEARCH_PLACES, ...SEARCH_HOTELS];
