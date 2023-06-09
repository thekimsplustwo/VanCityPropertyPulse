// a dummy user whose info to be used for the other components

const user = {
  id: 1,
  firstName: 'Pukku',
  lastName: 'Kim',
  age: 7,
  email: 'pukku@ubc.ca',
  phoneNum: '778-778-7788',
  region: 'Vancouver',
  photo: 'https://storage.googleapis.com/pukkukim/%E1%84%88%E1%85%AE.jpg',
  favourites: [
    'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg',
    'https://easydrawingguides.com/wp-content/uploads/2022/04/how-to-draw-a-simple-house-featured-image-1200-1024x864.png',
    'https://www.edinarealty.com/media/3678/difference-between-condo.jpg',
    'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=1',
  ],
};

const images = [
  {
    pid: '5500-Grand-Lake-Dr,-San-Antonio,-TX-78244',
    images: [
      'https://photos.zolo.ca/32-flynn-court-st-catharines-X6108900-1-p.jpg?2023-06-06+19%3A32%3A02',
      'https://photos.zolo.ca/32-flynn-court-st-catharines-X6108900-2-p.jpg?2023-06-06+19%3A32%3A04',
      'https://photos.zolo.ca/32-flynn-court-st-catharines-X6108900-7-p.jpg?2023-06-06+19%3A32%3A10',
      'https://photos.zolo.ca/32-flynn-court-st-catharines-X6108900-12-p.jpg?2023-06-06+19%3A32%3A16',
    ],
  },
  { pid: 2, images: [] },
  { pid: 3, images: [] },
];

const properties = [
  {
    addressLine1: '5500 Grand Lake Dr',
    city: 'San Antonio',
    state: 'TX',
    zipCode: '78244',
    formattedAddress: '5500 Grand Lake Dr, San Antonio, TX 78244',
    assessorID: '05076-103-0500',
    bedrooms: 3,
    county: 'Bexar',
    legalDescription: 'B 5076A BLK 3 LOT 50',
    squareFootage: 1878,
    subdivision: 'CONV A/S CODE',
    yearBuilt: 1973,
    bathrooms: 2,
    lotSize: 8843,
    propertyType: 'Single Family',
    lastSaleDate: '2017-10-19T00:00:00.000Z',
    features: {
      architectureType: 'Contemporary',
      cooling: true,
      coolingType: 'Central',
      exteriorType: 'Wood',
      floorCount: 1,
      foundationType: 'Slab',
      garage: true,
      garageType: 'Garage',
      heating: true,
      heatingType: 'Forced Air',
      pool: true,
      roofType: 'Asphalt',
      roomCount: 5,
      unitCount: 1,
    },
    taxAssessment: {
      2018: {
        value: 126510,
        land: 18760,
        improvements: 107750,
      },
      2019: {
        value: 135430,
        land: 23450,
        improvements: 111980,
      },
      2020: {
        value: 142610,
        land: 23450,
        improvements: 119160,
      },
      2021: {
        value: 163440,
        land: 45050,
        improvements: 118390,
      },
      2022: {
        value: 197600,
        land: 49560,
        improvements: 148040,
      },
    },
    propertyTaxes: {
      2019: {
        total: 2997,
      },
      2021: {
        total: 3468,
      },
    },
    owner: {
      names: ['MICHEAL ONEAL SMITH'],
      mailingAddress: {
        id: '149-Weaver-Blvd,-Weaverville,-NC-28787',
        addressLine1: '149 Weaver Blvd',
        city: 'Weaverville',
        state: 'NC',
        zipCode: '28787',
      },
    },
    id: '5500-Grand-Lake-Dr,-San-Antonio,-TX-78244',
    longitude: -98.351442,
    latitude: 29.475962,
  },
];

export { user, images, properties };
