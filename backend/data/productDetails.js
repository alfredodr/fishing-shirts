const productDetails = [
  {
    asin: "B08B1N25FT",
    slug: "baleaf-mens-long-sleeve-upf-50-uv-sun-protection-shirt-spf-lightweight-quick-dry-hiking-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-face-mask" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07BVSZJ94",
    slug: "coolibar-upf-50-mens-andros-fishing-hoodie-sun-protective",
    categories: [
      { _id: "fishing-shirts-face-mask" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07CDP44SZ",
    slug: "coolibar-upf-50-kids-andros-fishing-hoodie-sun-protective",
    categories: [
      { _id: "fishing-shirts-face-mask" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-for-kids" },
    ],
  },
  {
    asin: "B086PH8Y9C",
    slug: "performance-fishing-hoodie-with-face-mask-hooded-sunblock-shirt-sun-shield-long-sleeve-upf50-dry-fit-quick-dry",
    categories: [
      { _id: "fishing-shirts-face-mask" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07F1FTW2P",
    slug: "salty-crew-mens-tailed-hood-fleece",
    categories: [
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B07NPMSJK4",
    slug: "habit-mens-ts1156-long-sleeve-river-guide-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07BY6MDYR",
    slug: "habit-long-sleeve-mens-river-guide-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B081PV4W8G",
    slug: "upf-50-uv-hoodie-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07RQVMGK5",
    slug: "performance-fishing-hoodie-with-face-mask-hooded-sunblock-shirt-sun-shield-long-sleeve-shirt-upf-50-dry-fit-quick-dry",
    categories: [
      { _id: "fishing-shirts-face-mask" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07R4Y48V6",
    slug: "koofin-fishing-hooded-shirt",
    categories: [
      { _id: "fishing-shirts-face-mask" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B01C3CO9TA",
    slug: "southern-attitude-salty-anchor",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0725FVGV5",
    slug: "baleaf-womens-upf-50",
    categories: [
      { _id: "fishing-shirts-baleaf" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B003Z711BC",
    slug: "under-armour-womens-coldgear",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07Q81MG6W",
    slug: "womens-performance-long-sleeve-fishing-shirt-upf50-rash-guard-v-neck-athletic-workout-tops-moisture-wicking",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B01HSPWR2I",
    slug: "southern-fin-apparel-womens",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0002MGM7Q",
    slug: "columbia-mens-pfg-bahama",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B071HLPCPS",
    slug: "baleaf-mens-upf-50",
    categories: [
      { _id: "fishing-shirts-baleaf" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07P9XK9QQ",
    slug: "got-sports-upf-50-performance-long-sleeve-shirt-for-fishing-sailing-kayaking",
    categories: [{ _id: "fishing-shirts-long-sleeve" }],
  },
  {
    asin: "B011VRQ0SQ",
    slug: "long-sleeve-fishing-t-shirt-for-men-and-women-upf-50-dri-fit-performance-clothing-southern-fin-apparel",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07Q1G3486",
    slug: "baleaf-mens-upf-50-sun-protection-hoodie-long-sleeve-performance-hiking-fishing-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B07CNWT88T",
    slug: "crazy-dog-funny-fishing-tee",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-funny" },
    ],
  },
  {
    asin: "B017RSLLK0",
    slug: "ann-arbor-funny-fishing-tee",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B00U7ZF1RA",
    slug: "gbond-apparel-the-rodfather-funny-parody-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-funny" },
    ],
  },
  {
    asin: "B01DCJXJPS",
    slug: "worlds-okayest-fisherman-fishing-dad-graphic-novelty-sarcastic-funny-t-shirt",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B07RPPHPQ4",
    slug: "my-fishing-retirement-plan-funny-fish-pole-humor-fisherman-men-joke-t-shirt",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B01N15FFSY",
    slug: "mens-keepin-it-reel-tshirt-funny-cool-fishing-bass-outdoors-sporting-tee",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-funny" },
    ],
  },
  {
    asin: "B0031RFXBA",
    slug: "columbia-mens-bahama-ii-short-sleeve-shirt-2",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-columbia" },
    ],
  },
  {
    asin: "B016J2CWJE",
    slug: "hanes-mens-cool-dri-performance-long-sleeve-t-shirt482l-deep-royal-white-xl",
    categories: [{ _id: "fishing-shirts-hanes" }],
  },
  {
    asin: "B01ERQUDMM",
    slug: "hook-tackle-mens-anglers-delight-short-sleeve-embroidered-uv-sun-protection-fishing-shirt",
    categories: [{ _id: "fishing-shirts-embroidery" }],
  },
  {
    asin: "B07NKM8YCM",
    slug: "bamboo-cay-mens-chest-bird-of-paradise-tropical-style-embroidered-hawaiian-button-down-shir",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
];

export default productDetails;
