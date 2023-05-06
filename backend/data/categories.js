const categories = [
  {
    _id: "fishing-shirts-embroidery",
    name: "Fishing Shirts Embroidery",
    slug: "fishing-shirts-embroidery",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-embroidery.webp",
      alt: "Fishing Shirts Embroidery",
    },
  },
  {
    _id: "fishing-shirts-baleaf",
    name: "Fishing Shirts Baleaf",
    slug: "fishing-shirts-baleaf",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-baleaf.webp",
      alt: "Fishing Shirts Baleaf",
    },
    products: [{ _id: "B0725FVGV5" }, { _id: "B071HLPCPS" }],
  },
  {
    _id: "fishing-shirts-columbia",
    name: "Fishing Shirts Columbia",
    slug: "fishing-shirts-columbia",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-columbia.webp",
      alt: "Fishing Shirts Columbia",
    },
    products: [{ _id: "B0002MGM7Q" }],
  },
  {
    _id: "fishing-shirts-hoodie",
    name: "Fishing Shirts Hoodie",
    slug: "fishing-shirts-hoodie",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-hoodie.webp",
      alt: "Fishing Shirts Hoodie",
    },
    products: [
      { _id: "B08B1N25FT" },
      { _id: "B07BVSZJ94" },
      { _id: "B07CDP44SZ" },
      { _id: "B086PH8Y9C" },
      { _id: "B07F1FTW2P" },
      { _id: "B081PV4W8G" },
      { _id: "B07RQVMGK5" },
      { _id: "B07R4Y48V6" },
      { _id: "B07Q1G3486" },
    ],
  },
  {
    _id: "fishing-shirts-face-mask",
    name: "Fishing Shirts Face Mask",
    slug: "fishing-shirts-face-mask",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-face-mask.webp",
      alt: "Fishing Shirts Face Mask",
    },
    products: [
      { _id: "B08B1N25FT" },
      { _id: "B07BVSZJ94" },
      { _id: "B07CDP44SZ" },
      { _id: "B086PH8Y9C" },
      { _id: "B07RQVMGK5" },
      { _id: "B07R4Y48V6" },
    ],
  },
  {
    _id: "fishing-shirts-for-him",
    name: "Fishing Shirts For Him",
    slug: "fishing-shirts-for-him",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-for-him.webp",
      alt: "Fishing Shirts For Him",
    },
    products: [
      { _id: "B081PV4W8G" },
      { _id: "B0002MGM7Q" },
      { _id: "B011VRQ0SQ" },
      { _id: "B07Q1G3486" },
    ],
  },
  {
    _id: "fishing-shirts-fish",
    name: "Fishing Shirts Fish",
    slug: "fishing-shirts-fish",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-fish.jpg.webp",
      alt: "Fishing Shirts Fish",
    },
  },
  {
    _id: "fishing-shirts-for-her",
    name: "Fishing Shirts For Her",
    slug: "fishing-shirts-for-her",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-for-her.webp",
      alt: "Fishing Shirts For Her",
    },
    products: [
      { _id: "B01C3CO9TA" },
      { _id: "B0725FVGV5" },
      { _id: "B003Z711BC" },
      { _id: "B07Q81MG6W" },
      { _id: "B01HSPWR2I" },
      { _id: "B011VRQ0SQ" },
    ],
  },
  {
    _id: "fishing-shirts-habit",
    name: "Fishing Shirts Habit",
    slug: "fishing-shirts-habit",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-habit.webp",
      alt: "Fishing Shirts Habit",
    },
    products: [{ _id: "B07NPMSJK4" }, { _id: "B07BY6MDYR" }],
  },
  {
    _id: "fishing-shirts-long-sleeve",
    name: "Fishing Shirts Long Sleeve",
    slug: "fishing-shirts-long-sleeve",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-long-sleeve.webp",
      alt: "Fishing Shirts Long Sleeve",
    },
    products: [
      { _id: "B08B1N25FT" },
      { _id: "B07BVSZJ94" },
      { _id: "B086PH8Y9C" },
      { _id: "B07F1FTW2P" },
      { _id: "B07NPMSJK4" },
      { _id: "B07BY6MDYR" },
      { _id: "B081PV4W8G" },
      { _id: "B07RQVMGK5" },
      { _id: "B07R4Y48V6" },
      { _id: "B01C3CO9TA" },
      { _id: "B003Z711BC" },
      { _id: "B07Q81MG6W" },
      { _id: "B01HSPWR2I" },
      { _id: "B071HLPCPS" },
      { _id: "B07P9XK9QQ" },
      { _id: "B011VRQ0SQ" },
      { _id: "B07Q1G3486" },
    ],
  },
  {
    _id: "fishing-shirts-for-cold",
    name: "Fishing Shirts For Cold Weather",
    slug: "fishing-shirts-for-cold-weather",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-for-cold-weather.webp",
      alt: "Fishing Shirts For Cold Weather",
    },
  },
  {
    _id: "fishing-shirts-for-kids",
    name: "Fishing Shirts For Kids",
    slug: "fishing-shirts-for-kids",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-for-kids.webp",
      alt: "Fishing Shirts For Kids",
    },
    products: [{ _id: "B07CDP44SZ" }],
  },
  {
    _id: "fishing-shirts-funny",
    name: "Fishing Shirts Funny",
    slug: "fishing-shirts-funny",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-funny.webp",
      alt: "Fishing Shirts Funny",
    },
    products: [
      { _id: "B07CNWT88T" },
      { _id: "B017RSLLK0" },
      { _id: "B00U7ZF1RA" },
      { _id: "B01DCJXJPS" },
      { _id: "B07RPPHPQ4" },
      { _id: "B01N15FFSY" },
    ],
  },
  {
    _id: "fishing-shirts-hanes",
    name: "Fishing Shirts Hanes",
    slug: "fishing-shirts-hanes",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-hanes.webp",
      alt: "Fishing Shirts Hanes",
    },
  },
  {
    _id: "fishing-shirts-hulk",
    name: "Fishing Shirts Hulk",
    slug: "fishing-shirts-hulk",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-huk.webp",
      alt: "Fishing Shirts Hulk",
    },
  },
  {
    _id: "fishing-shirts-jersey",
    name: "Fishing Shirts Jersey",
    slug: "fishing-shirts-jersey",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-jersey.webp",
      alt: "Fishing Shirts Jersey",
    },
  },
  {
    _id: "fishing-shirts-koofin",
    name: "Fishing Shirts Koofin",
    slug: "fishing-shirts-koofin",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-koofin.webp",
      alt: "Fishing Shirts Koofin",
    },
    products: [
      { _id: "B086PH8Y9C" },
      { _id: "B07RQVMGK5" },
      { _id: "B07R4Y48V6" },
      { _id: "B07Q81MG6W" },
    ],
  },
  {
    _id: "fishing-shirts-mossy-oak",
    name: "Fishing Shirts Mossy Oak",
    slug: "fishing-shirts-mossy-oak",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-mossy-oak.webp",
      alt: "Fishing Shirts Mossy Oak",
    },
  },
  {
    _id: "fishing-shirts-pelagic",
    name: "Fishing Shirts Pelagic",
    slug: "fishing-shirts-pelagic",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-pelagic.webp",
      alt: "Fishing Shirts Pelagic",
    },
  },
  {
    _id: "fishing-shirts-performance",
    name: "Fishing Shirts Performance",
    slug: "fishing-shirts-performance",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-performance.webp",
      alt: "Fishing Shirts Performance",
    },
  },
  {
    _id: "fishing-shirts-pretchic",
    name: "Fishing Shirts Pretchic",
    slug: "fishing-shirts-pretchic",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-performance.webp",
      alt: "Fishing Shirts Pretchic",
    },
  },
  {
    _id: "fishing-shirts-short-sleeve",
    name: "Fishing Shirts Short Sleeve",
    slug: "fishing-shirts-short-sleeve",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-short-sleeve.webp",
      alt: "Fishing Shirts Short Sleeve",
    },
    products: [{ _id: "B0002MGM7Q" }],
  },
  {
    _id: "fishing-shirts-simms",
    name: "Fishing Shirts Simms",
    slug: "fishing-shirts-simms",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-simms.webp",
      alt: "Fishing Shirts Simms",
    },
  },
  {
    _id: "fishing-shirts-tournament",
    name: "Fishing Shirts Tournament",
    slug: "fishing-shirts-tournament",
    image: {
      src: "https://fsn-site.s3.amazonaws.com/categories/fishing-shirts-tournament.webp",
      alt: "Fishing Shirts Tournament",
    },
  },
];

export default categories;
