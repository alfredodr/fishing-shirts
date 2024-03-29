const products = [
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
    asin: "B07F1FTW2P",
    slug: "salty-crew-mens-tailed-hood-fleece",
    categories: [
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B084KKWSBB",
    slug: "habit-mens-outdoor-long-sleeve-lightweight-Cooling-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08WRG8LGG",
    slug: "habit-mens-fourche-mountain-long-sleeve-mens-river-guide-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B081PQT1VS",
    slug: "xtansuo-upf-50-uv-hoodie-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-hoodie" },
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
    asin: "B08LMCR5CR",
    slug: "under-armour-womens-coldgear-authentics-mock-neck",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-cold-weather" },
    ],
  },
  {
    asin: "B088PR8HQ2",
    slug: "womens-performance-long-sleeve-koofin-gear-performance-fishing-hoodie-upf50",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B01LXU9HQ6",
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
    asin: "B07D5JYL2L",
    slug: "long-sleeve-fishing-t-shirt-for-men-and-women-upf-50-dri-fit-performance-clothing-southern-fin-apparel",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07CNWT88T",
    slug: "mens-cant-work-today-my-arm-is-in-a-cast-t-shirt-funny-fishing-graphic-top-guys",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-funny" },
    ],
  },
  {
    asin: "B017RSLLK0",
    slug: "gotta-love-a-good-pole-dance-funny-fishing-pole-humor-fisherman-unisex-t-shirt",
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
    asin: "B00KBZPNX8",
    slug: "hanes-mens-long-sleeve-t-shirt",
    categories: [{ _id: "fishing-shirts-hanes" }],
  },
  {
    asin: "B014VGM4J8",
    slug: "hook-tackle-mens-seacliff-short-sleeve-uv-sun-protection-fishing-shirt",
    categories: [{ _id: "fishing-shirts-short-sleeve" }],
  },
  {
    asin: "B083KZ9BXV",
    slug: "american-flag-fishing-shirt-vintage-usa-bass-fisherman-gift-t-shirt",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B079DDCKFC",
    slug: "irish-american-flag-fishing-rod-st-patricks-day-t-shirt",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07X9H7279",
    slug: "pike-fishing-american-usa-flag-camouflage-musky-graphic-camo-t-shirt",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-camo" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07SH95BB4",
    slug: "fishing-gift-mako-shark-fish-american-flag-usa-4th-of-july-t-shirt",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07KMX23GW",
    slug: "usa-fishing-rod-bass-american-flag-fishing-t-shirt",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07DGZCV4V",
    slug: "reel-cool-poppa-shirt-american-flag-fishing-birthday-gifts",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B017UY56JI",
    slug: "sand-salt-surf-sun-pirate-life-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-tournament" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07G1CKWC5",
    slug: "aftco-mens-rashguard",
    categories: [
      { _id: "fishing-shirts-tournament" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07K7W2ZVP",
    slug: "sand-salt-surf-sun-pirate-life-tribal-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-tournament" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B06WRPH9MY",
    slug: "gamefish-usa-mens-upf-50-long-sleeve-microfiber-moisture-wicking-performance-bass-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-tournament" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B00QHAQPDS",
    slug: "under-armour-mens-coldgear-armour-compression-mock-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-cold-weather" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07THD52MY",
    slug: "salty-scales-redfish-snook-trout-long-sleeve-fishing-shirt-for-men-dri-fit-performance-clothing",
    categories: [
      { _id: "fishing-shirts-fish" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08C54LL7S",
    slug: "bassdash-womens-upf-50-performance-hoodie-long-sleeve-uv-fishing-hiking-shirt",
    categories: [
      { _id: "fishing-shirts-bassdash" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07X9VDT4G",
    slug: "jason-mathias-high-performance-fishing-shirt-womens-turtle-bliss-sea-spirit",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07Z67K97Q",
    slug: "priessei-womens-long-sleeve-upf-50-uv-sun-protection-hoodie-for-fishing",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B001TXDPY0",
    slug: "columbia-mens-pfg-tamiami-ii-short-sleeve-shirt-upf-40-sun-protection-wicking-fabric-2",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08G1HMB4L",
    slug: "koofin-gear-womens-long-sleeve-performance-fishing-hoodie",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08971X6KM",
    slug: "bassdash-mens-upf-50-Sun-protection-fishing-shirt-short-sleeve-uv-t-shirt",
    categories: [
      { _id: "fishing-shirts-bassdash" },
      { _id: "fishing-shirts-short-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B08W21YZH8",
    slug: "g-h-bass-co-mens-big-and-tall-explorer-short-sleeve-fishing-shirt-solid-button-pocket",
    categories: [{ _id: "fishing-shirts-short-sleeve" }],
  },
  {
    asin: "B083R2RB5T",
    slug: "willit-mens-upf-50-sun-protection-hoodie-shirt-long-sleeve-spf-fishing-outdoor-uv-shirt-hiking-lightweight",
    categories: [{ _id: "fishing-shirts-for-him" }],
  },
  {
    asin: "B08XT7B9BD",
    slug: "huk-mens-icon-camo-hoodie-long-sleeve-fishing-shirts",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-camo" },
    ],
  },
  {
    asin: "B08XTRHPBW",
    slug: "huk-mens-icon-x-camo-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection",
    categories: [
      { _id: "fishing-shirts-camo" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0BVFRBHGL",
    slug: "bassdash-mens-long-sleeve-fishing-shirt-upf50",
    categories: [
      { _id: "fishing-shirts-bassdash" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B08B1KN1YK",
    slug: "baleaf-womens-hoodie-shirts-with-face-cover-long-sleeve-upf-50-lightweight-quick-dry-spf-neck-gaiter-hiking-fishing-outdoor",
    categories: [
      { _id: "fishing-shirts-face-mask" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B09Z6ZTW4K",
    slug: "piscifun-performance-upf50-long-sleeve-fishing-t-shirt-with-hoodie",
    categories: [
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B07TWQ2CP8",
    slug: "ogeenier-mens-upf-50-sun-protection-hoodie-shirt-long-sleeve-uv-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B0164EJLBO",
    slug: "g-h-bass-co-mens-explorer-short-sleeve-button-down-fishing-shirt-plaid-button-pocket",
    categories: [{ _id: "fishing-shirts-short-sleeve" }],
  },
  {
    asin: "B07NPNSTB5",
    slug: "habit-womens-shell-cove-short-sleeve-fishing-guide-shirt",
    categories: [{ _id: "fishing-shirts-habit" }],
  },
  {
    asin: "B07QXB7Q7K",
    slug: "womens-quick-dry-sun-uv-protection-convertible-long-sleeve-shirts-for-hiking-camping-fishing-sailing",
    categories: [{ _id: "fishing-shirts-for-her" }],
  },
  {
    asin: "B004GKBVSK",
    slug: "columbia-womens-pfg-bahama-ii-long-sleeve-shirt-breathable-with-uv-protection",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B07NPM7GGT",
    slug: "habit-mens-belcoast-short-sleeve-river-guide-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-short-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B08HLJ8NNH",
    slug: "alimens-gentle-short-sleeve-wicking-fabric-sun-protection-fishing-casual-shirts",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B087JLHYX2",
    slug: "boladeci-mens-upf-50-sun-protection-quick-dry-long-sleeve-hoodie-t-shirts-for-fishing-hiking-swimming",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B08B4RYF6P",
    slug: "bamboo-cay-embroidered-mens-short-sleeve-flying-parrots-tropical-hawaiian-button-down-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B08WRKNC2F",
    slug: "habit-mens-fourche-river-guide-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B085FYNGQZ",
    slug: "hiskywin-womens-long-sleeve-uv-sun-protection-rash-guard-side-adjustable-wetsuit-swimsuit-top",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07MHJWMLM",
    slug: "kryptek-aura-camo-shirt-quick-dry-fabric-for-fishing-swimming-upf-30-uv-sun-protection-k-ore-collection",
    categories: [
      { _id: "fishing-shirts-camo" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07NPKZK7M",
    slug: "habit-shell-cove-short-sleeve-river-guide-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B07ZZ4BJK2",
    slug: "bassdash-womens-upf-50-sun-protection-long-sleeve-performance",
    categories: [
      { _id: "fishing-shirts-bassdash" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B088823NZT",
    slug: "little-donkey-andy-mens-upf-50-uv-protection-shirt-long-sleeve-fishing-shirt-breathable-and-fast-dry",
    categories: [{ _id: "fishing-shirts-for-him" }],
  },
  {
    asin: "B08D646SGS",
    slug: "baleaf-womens-long-sleeve-sun-protection-quick-dry",
    categories: [
      { _id: "fishing-shirts-baleaf" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B08B1KC1RQ",
    slug: "baleaf-womens-upf-50-sun-protection-hoodies-mask-long-sleeve-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-baleaf" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B0BXXF6PMY",
    slug: "willit-mens-hooded-ls-long-sleeve-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07MDY4GK1",
    slug: "kryptek-zephyr-camo-lightweight-hoodie-quick-dry-fabric-for-fishing-swimming-upf-30-uv-sun-protection-k-ore-collection",
    categories: [
      { _id: "fishing-shirts-camo" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08CM58DFW",
    slug: "fish-skinz-mens-performance-fishing-shirt-uv-50-protection-blueline-flag-gray",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-performance" },
    ],
  },
  {
    asin: "B08CXRNWL5",
    slug: "roadbox-mens-long-sleeve-hoodie-shirt-outdoor-with-mesh-sides",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B07RNQZJXJ",
    slug: "womens-pfg-long-sleeve-shirt-uv-sun-protection-moisture-wicking-fabric",
    categories: [{ _id: "fishing-shirts-for-her" }],
  },
  {
    asin: "B09FQBKLGH",
    slug: "huk-mens-performance-fishing-tee",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07JF4ZMGW",
    slug: "pretchic-mens-uv-sun-protection-upf-50-performance-short-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-pretchic" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07NPFW2M6",
    slug: "habit-belcoast-short-sleeve-river-guide-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-short-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07RQVBKYR",
    slug: "performance-fishing-long-sleeve-shirt-with-face-mask-neck-gaiter-hoodie-upf-50-sun-protection",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-performance" },
    ],
  },
  {
    asin: "B01AAXGE74",
    slug: "fishing-ruler-long-sleeve-wicking-fisherman-shirt-w-ruler-on-forearm-t-shirt",
    categories: [{ _id: "fishing-shirts-for-him" }],
  },
  {
    asin: "B07VGVPY49",
    slug: "telaleo-mens-long-sleeve-sun-protection-t-shirt-upf-50-athletic-workout-hoodie-spf-for-outdoor-fishing-running-hiking",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07QNKDF23",
    slug: "mens-performance-vented-long-sleeve-fishing-shirt-1-4-zip-upf50-sun-protection-dry-fit-moisture-wicking",
    categories: [
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B08SBFB6CL",
    slug: "performance-fishing-hoodie-with-face-mask-sunblock-shirt-hooded-long-sleeve-with-drawstrings-pocket",
    categories: [
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-face-mask" },
    ],
  },
  {
    asin: "B09NNBCYTL",
    slug: "baleaf-boys-upf-50-youth-spf-shirts-long-sleeve-shirt-basic-skins-sun-protection",
    categories: [
      { _id: "fishing-shirts-for-kids" },
      { _id: "fishing-shirts-baleaf" },
    ],
  },
  {
    asin: "B08BLQJ4FX",
    slug: "huk-womens-performance-hoodie-water-resistant-stain-resistant-lightweight-performance-fleece",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07QDPNSZY",
    slug: "habit-hooded-performance-layer",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B09J9WPJZG",
    slug: "habit-hooded-1-4-zip-performance-layer",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07LFKM2CC",
    slug: "performance-vented-fishing-shirt-long-sleeve-shirt-mesh-side-vents-upf-50-dye-sublimation-print",
    categories: [
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08SBTB2CB",
    slug: "performance-fishing-hoodie-long-sleeve-dry-fit-sun-protection-shirt-lightweight-outdoor",
    categories: [
      { _id: "fishing-shirts-face-mask" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-performance" },
    ],
  },
  {
    asin: "B0BKL4BNK2",
    slug: "fisheal-mens-performance-fishing-hoodie-shirt-upf-50-camo-long-sleeve-thumbholes-with-mesh-face-mask",
    categories: [
      { _id: "fishing-shirts-camo" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-face-mask" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B0BN4NMQ34",
    slug: "simms-mens-stone-cold-shirt-upf-30-quick-dry-long-sleeve-shirt-helps-you-stay-cool-anti-odor-technology-fishing-shirt-for-men",
    categories: [
      { _id: "fishing-shirts-camo" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-simms" },
    ],
  },
  {
    asin: "B08CMCV2NP",
    slug: "fish-skinz-womens-performance-fishing-shirt-upf-50-protection-octopus-white",
    categories: [{ _id: "fishing-shirts-for-her" }],
  },
  {
    asin: "B074MYLY2Q",
    slug: "performance-fishing-shirt-mens-vented-long-sleeve-upf-50-sun-protection-quick-dry-cooling-mesh-sides-rash-guard",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B089QVF44L",
    slug: "midubi-mens-t-shirts-long-sleeve-rash-guard-upf-50-uv-protection-outdoor-golf-tees-fishing-hiking-running-shirts-with-hood",
    categories: [{ _id: "fishing-shirts-hoodie" }],
  },
  {
    asin: "B08GLDQV3S",
    slug: "bassdash-upf-50-mens-long-sleeve-fishing-shirt-with-mask-uv-neck-gaiter-hoodie",
    categories: [
      { _id: "fishing-shirts-face-mask" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-bassdash" },
    ],
  },
  {
    asin: "B00WUYEQ3Q",
    slug: "ist-hooded-spearfishing-rashguard-with-loading-pad",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07QV2XFLJ",
    slug: "jason-mathias-american-flag-bass-ls-high-performance-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-performance" },
    ],
  },
  {
    asin: "B07MJLNV3P",
    slug: "koofin-gear-performance-fishing-hoodie-upf50-sunblock-shirt-outdoor-quick-dry-athletic-sweatshirt",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07M7PDH28",
    slug: "performance-fishing-hoodie-50-sunblock-shirt-spf-long-sleeve-quick-dry-sweatshirt-fade-pattern",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07RQX8H7K",
    slug: "performance-fishing-hoodie-long-sleeve-hooded-sunblock-shirt-upf-50-dry-fit-quick-dry-hoody-sports-sweatshirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-koofin" },
    ],
  },
  {
    asin: "B07SC1VRVR",
    slug: "performance-fishing-shirt-sun-protection-shirt-upf50-outdoor-long-sleeve-dry-fit-athletic-shirts-us-flag",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B09HXCR6C9",
    slug: "bassdash-mens-hunting-sun-shirt-upf-50-lightweight-camo-tactical-tees",
    categories: [
      { _id: "fishing-shirts-bassdash" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07NQDTCSX",
    slug: "caracilia-womens-uv-sun-protection-long-sleeve-hooded-rash-guard-wetsuit-swimsuit-top",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B088P8T389",
    slug: "habit-mens-coolcore-whitehorn-l-s-performance-gaiter-hoodie",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08WR99F14",
    slug: "habit-taku-bay-short-sleeve-river-guide-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B09VP43DJZ",
    slug: "spowind-mens-upf-50-sun-protection-hoodie-shirts-long-sleeve-spf-performance-fishing-t-shirt-with-thumbhole",
    categories: [{ _id: "fishing-shirts-hoodie" }],
  },
  {
    asin: "B07PMTLK82",
    slug: "under-armour-mens-tide-chaser-short-sleeve-shirt",
    categories: [{ _id: "fishing-shirts-short-sleeve" }],
  },
  {
    asin: "B014WDK8XY",
    slug: "a4-adult-cooling-performance-long-sleeve-t-shirt",
    categories: [{ _id: "fishing-shirts-long-sleeve" }],
  },
  {
    asin: "B08Z3HCR76",
    slug: "mens-upf-50-sun-protection-hoodie-shirt-kong-sleeve-spf-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07X7KG8CM",
    slug: "shimano-long-sleeve-hooded-tech-tee-fishing-gear",
    categories: [{ _id: "fishing-shirts-hoodie" }],
  },
  {
    asin: "B01LXII55T",
    slug: "bamboo-cay-mens-short-sleeve-hurricane-palm-casual-embroidered-woven-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B018GWQ4Y4",
    slug: "bamboo-cay-mens-short-sleeve-peekaboo-palm-embroidered-woven-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B09LVVHVWR",
    slug: "carhartt-boys-long-sleeve-force-tee-shirt",
    categories: [{ _id: "fishing-shirts-for-kids" }],
  },
  {
    asin: "B01MT1V5B3",
    slug: "columbia-mens-pfg-bahama-ii-short-sleeve-shirt-cool-grey-xx-large",
    categories: [
      { _id: "fishing-shirts-short-sleeve" },
      { _id: "fishing-shirts-columbia" },
    ],
  },
  {
    asin: "B008HAQ2PW",
    slug: "columbia-mens-super-bonehead-classic-long-sleeve-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-performance" },
    ],
  },
  {
    asin: "B072WDMFY9",
    slug: "columbia-womens-bonehead-ii-w-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0058YTLI0",
    slug: "columbia-womens-pfg-bahama-short-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B077LP51TM",
    slug: "g-h-bass-co-mens-trail-flex-short-sleeve-button-down-plaid-shirt",
    categories: [{ _id: "fishing-shirts-short-sleeve" }],
  },
  {
    asin: "B07NPR86JY",
    slug: "habit-womens-schooner-cove-short-sleeve-river-guide-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B07NPL52Q9",
    slug: "habit-womens-short-sleeve-fishing-guide-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07GQK3TGG",
    slug: "huk-womens-pursuit-vented-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B087CGPBF7",
    slug: "mens-upf-50-long-sleeves-shirt-dry-fit-sun-protection-outdoor-workout-swim-hoodies-running-hiking-fishing",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07GC5QZKB",
    slug: "rattlin-jack-mens-upf-50-fishing-skeleton-performance-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07HVCK5GK",
    slug: "habit-kids-youth-short-sleeve-fishing-guide-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-for-kids" },
    ],
  },
  {
    asin: "B084JBLDQC",
    slug: "habit-mens-taku-bay-long-sleeve-river-guide-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B086CTPGCJ",
    slug: "tortuga-moon-fishing-shirt-men-womens-upf-50-performance-long-sleeve",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-performance" },
    ],
  },
  {
    asin: "B07RM1CR6F",
    slug: "bassdash-upf-50-mens-uv-sun-protection-long-sleeve-performance-fishing-hoodie-hooded-shirts",
    categories: [
      { _id: "fishing-shirts-bassdash" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07R8221PX",
    slug: "columbia-mens-grander-marlin-woven-ls",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B00DGR0RFM",
    slug: "columbia-mens-tamiami-ii-ss-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07Q47PDZ4",
    slug: "denali-performance-mens-upf-50-protectuv-mega-solar-long-sleeve-t-shirt-trophy-bones-collection-by-marcos-augusto-permit",
    categories: [
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B0BQBK79MJ",
    slug: "ezrun-mens-upf-50-uv-protection-hoodie-shirts-long-sleeve-sun-fishing-shirts",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B01M0AYG8V",
    slug: "g-h-bass-co-mens-big-and-tall-explorer-short-sleeve-button-down-fishing-shirt-solid-flap-pocket-2",
    categories: [
      { _id: "fishing-shirts-short-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B0848X22YL",
    slug: "gamefish-usa-long-sleeve-fishing-shirt-american-flag-bass-for-women-upf-50-dri-fit-microfiber-performance-clothing",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B073PQGT1F",
    slug: "gamefish-usa-upf-50-long-sleeve-microfiber-moisture-wicking-performance-fishing-shirt-scuba-diving-tank",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-tournament" },
    ],
  },
  {
    asin: "B07HVJ4G1V",
    slug: "habit-mens-short-sleeve-travel-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B088PR43J3",
    slug: "koofin-gear-womens-performance-fishing-hoodie-long-sleeve-upf50-tops-half-zip-thumb-hole-workout-sunshirt-drawcords",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B00TIM0W7W",
    slug: "kryptek-hyperion-long-sleeve-camo-shirt-lightweight-birds-eye-mesh-for-hunting-fishing-shirt-k-ore-collection",
    categories: [
      { _id: "fishing-shirts-camo" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B097YLY29S",
    slug: "mens-upf-50-uv-sun-protection-outdoor-hoodie-long-sleeve-rash-guard-hiking-fishing-swimming-workout-shirts",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B087VS443M",
    slug: "mossy-oak-fishing-hoodie",
    categories: [{ _id: "fishing-shirts-mossy-oak" }],
  },
  {
    asin: "B093DS7CGF",
    slug: "mossy-oak-performance-fishing-shirts-for-men-long-sleeve-shirt-quick-dry",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07MFRYL69",
    slug: "trailcrest-fishing-mossy-oak-elements-womens-pullover-long-sleeve-fishing-t-shirt-4-way-stretch-50-upf-sun-protection",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B094YNTB5D",
    slug: "mossy-oak-mens-long-sleeve-performance-fishing-shirt-with-gaiter",
    categories: [{ _id: "fishing-shirts-mossy-oak" }],
  },
  {
    asin: "B07NTV6NHQ",
    slug: "bamboo-cay-shake-the-hook-hawaiian-mens-tropical-embroidered-casual-woven-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07MWB26MR",
    slug: "simms-mens-solarflex-upf-50-uv-sun-protection-outdoor-long-sleeve-performance-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-simms" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08P74GF9T",
    slug: "pelagic-ultratek-hooded-fishing-shirt-2",
    categories: [
      { _id: "fishing-shirts-pelagic" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-fish" },
    ],
  },
  {
    asin: "B09BRL57K4",
    slug: "pelagic-deluxe-long-sleeve-fishing-t-shirt-size",
    categories: [
      { _id: "fishing-shirts-pelagic" },
      { _id: "fishing-shirts-fish" },
    ],
  },
  {
    asin: "B09SPLD3MQ",
    slug: "pelagic-aquatek-hoodie-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-pelagic" },
      { _id: "fishing-shirts-fish" },
    ],
  },
  {
    asin: "B07BHVHXXZ",
    slug: "pelagic-aquatek-performance-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-pelagic" },
      { _id: "fishing-shirts-fish" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0BTVQRGQM",
    slug: "pelagic-game-fish-premium-t-shirt",
    categories: [
      { _id: "fishing-shirts-pelagic" },
      { _id: "fishing-shirts-fish" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07XKW5YBP",
    slug: "performance-fishing-hoodie-shirt-for-men-women-upf-uv-50-lightweight-with-hood",
    categories: [
      { _id: "fishing-shirts-fish" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B07K72SS96",
    slug: "long-sleeve-fishing-shirts-fishing-hoodie-for-men-and-women-fit-performance-clothing-upf-50quick-dry",
    categories: [
      { _id: "fishing-shirts-fish" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B071YPX6GM",
    slug: "upf-50-long-sleeve-performance-fishing-shirt-eat-drink-fish-repeat-bass",
    categories: [
      { _id: "fishing-shirts-fish" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B078Y7136K",
    slug: "tsla-womens-upf-50-hoodie-long-sleeve-swim-shirt-uv-sun-protection-rash-guard-quick-dry-water-shirts",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08B1TWJ5T",
    slug: "womens-upf-50-uv-sun-protection-hoodie-long-sleeve-hiking-shirt-outdoor-performance-running-fishing-hoodie",
    categories: [{ _id: "fishing-shirts-for-her" }],
  },
  {
    asin: "B09PLP6699",
    slug: "huk-cold-weather-icon-x-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-cold-weather" },
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B00EF1K0DC",
    slug: "coldpruf-mens-basic-dual-layer-long-sleeve-crew-neck-base-layer-top-p2021530",
    categories: [
      { _id: "fishing-shirts-for-cold-weather" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08LMTDNBF",
    slug: "under-armour-womens-cold-gear-authentic-crew-shirt",
    categories: [
      { _id: "fishing-shirts-for-cold-weather" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B077XPQ5FD",
    slug: "under-armour-womens-move-mock",
    categories: [
      { _id: "fishing-shirts-for-cold-weather" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B08LMLJPD6",
    slug: "under-armour-womens-coldgear-armour-compression-crew-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-cold-weather" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B071NW7H47",
    slug: "under-armour-womens-coldgear-graphic-1-2-zip",
    categories: [
      { _id: "fishing-shirts-for-cold-weather" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B07BZ5J9HX",
    slug: "sand-salt-surf-sun-colorful-rather-be-fishing-youth-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    categories: [{ _id: "fishing-shirts-for-kids" }],
  },
  {
    asin: "B00DCZJRWW",
    slug: "columbia-sportswear-boys-bahamatm-l-s-shirt-little-big-kids",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-kids" },
    ],
  },
  {
    asin: "B07HVK3F7K",
    slug: "habit-kids-youth-long-sleeve-fishing-guide-shirt",
    categories: [
      { _id: "fishing-shirts-for-kids" },
      { _id: "fishing-shirts-habit" },
    ],
  },
  {
    asin: "B08N4TNB58",
    slug: "baleaf-womens-upf-50-sun-protection-t-shirt-long-short-sleeve-outdoor-performance",
    categories: [
      { _id: "fishing-shirts-baleaf" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B0B5CKBT42",
    slug: "pretchic-mens-upf-50-uv-sun-protection-quick-dry-outdoor-t-shirt",
    categories: [
      { _id: "fishing-shirts-pretchic" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0B5CRCQT5",
    slug: "pretchic-mens-performance-cationic-long-sleeve-sport-t-shirt",
    categories: [{ _id: "fishing-shirts-pretchic" }],
  },
  {
    asin: "B09L8NVFVZ",
    slug: "simms-womens-solarflex-printed-fishing-hoody-with-upf-50",
    categories: [
      { _id: "fishing-shirts-simms" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B06XHCSZB9",
    slug: "bamboo-cay-mens-short-sleeve-catch-of-the-day-casual-embroidered-woven-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0BTVNRV35",
    slug: "pelagic-vaportek-long-sleeve-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-pelagic" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0BL42673F",
    slug: "pelagic-deluxe-fish-camo-t-shirt",
    categories: [
      { _id: "fishing-shirts-camo" },
      { _id: "fishing-shirts-pelagic" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B097R435Z2",
    slug: "pelagic-ultratek-hoodie-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-pelagic" },
      { _id: "fishing-shirts-fish" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B014C39PZQ",
    slug: "hanes-mens-2-pack-long-sleeve-cool-dri-t-shirt-upf-50-1-graphite-1-white",
    categories: [{ _id: "fishing-shirts-hanes" }],
  },
  {
    asin: "B014C39N8A",
    slug: "hanes-mens-long-sleeve-cool-dri-t-shirt-upf-50-large-2-pack-1-graphite-1-navy",
    categories: [{ _id: "fishing-shirts-hanes" }],
  },
  {
    asin: "B071D3QVFJ",
    slug: "hanes-womens-long-sleeve-v-neck-t-shirt",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B00KRYOPKA",
    slug: "hanes-sport-womens-cool-dri-performance-v-neck-tee",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B00C179XNK",
    slug: "hanes-mens-cool-dri-long-sleeve-performance-t-shirt-482l",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B08T871QDT",
    slug: "fishing-clothes-outdoor-long-sleeve-fishing-shirts-breathable-jersey-men-pants",
    categories: [{ _id: "fishing-shirts-jersey" }],
  },
  {
    asin: "B08F7F4NVF",
    slug: "biylaclesen-mens-jersey-golf-polo-shirts-outdoor-pique-performance-tactical-military-long-sleeve-shirts",
    categories: [{ _id: "fishing-shirts-jersey" }],
  },
  {
    asin: "B017UXVRVU",
    slug: "sand-salt-surf-sun-shark-and-anchor-tribal-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-tournament" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B081G3GHDP",
    slug: "staghorn-mens-short-sleeve-performance-tech-fishing-tee",
    categories: [
      { _id: "fishing-shirts-tournament" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B01KTOYJ26",
    slug: "sand-salt-surf-sun-tuna-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-tournament" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B014VGM8Y4",
    slug: "hook-tackle-mens-seacliff-2-0-short-sleeve-vented-uv-sun-protection-performance-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-tournament" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B017UXZBX0",
    slug: "sand-salt-surf-sun-captain-pirate-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-tournament" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B01KTP1D0G",
    slug: "sand-salt-surf-sun-vintage-crab-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-tournament" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B06X3RPG37",
    slug: "gamefish-usa-mens-upf-50-long-sleeve-microfiber-moisture-wicking-performance-fishing-shirt-sport-fishing",
    categories: [
      { _id: "fishing-shirts-tournament" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B01KTOY09I",
    slug: "sand-salt-surf-sun-shark-blood-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-tournament" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07BNV7JT3",
    slug: "jason-mathias-high-performance-fishing-shirt-sea-spirit-sailfish",
    categories: [
      { _id: "fishing-shirts-performance" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B075CFFZFQ",
    slug: "jason-mathias-high-performance-fishing-shirt-lobster-diving",
    categories: [{ _id: "fishing-shirts-performance" }],
  },
  {
    asin: "B07565YQHN",
    slug: "jason-mathias-redfish-ls-high-performance-long-sleeve-t-shirt",
    categories: [{ _id: "fishing-shirts-performance" }],
  },
  {
    asin: "B076CL64K7",
    slug: "jason-mathias-strike-zone-mako-shark-ls-high-performance-shirt",
    categories: [{ _id: "fishing-shirts-performance" }],
  },
  {
    asin: "B0981VQJ3S",
    slug: "rodeel-upf-50-mens-long-sleeve-performance-fishing-hiking-shirt-with-mask-gaiter-hoodie",
    categories: [
      { _id: "fishing-shirts-performance" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B00LG7CPQ8",
    slug: "under-armour-womens-tac-coldgear-infrared-crew-shirt",
    categories: [{ _id: "fishing-shirts-for-cold-weather" }],
  },
  {
    asin: "B0718XT9Q2",
    slug: "baleaf-mens-upf-50-hiking-shirt-long-sleeve-shirt-outdoor-lightweight-quick-dry-fishing-shirts",
    categories: [{ _id: "fishing-shirts-baleaf" }],
  },
  {
    asin: "B09TT9H53H",
    slug: "baleaf-womens-long-sleeve-v-neck-dri-fit-uv-t-shirt-athletic-running-wicking-shirts",
    categories: [{ _id: "fishing-shirts-baleaf" }],
  },
  {
    asin: "B0719GTW1F",
    slug: "baleaf-mens-long-sleeve-rashguard-sun-protective-swim-shirt-upf-50",
    categories: [{ _id: "fishing-shirts-baleaf" }],
  },
  {
    asin: "B08N4XC95K",
    slug: "baleaf-womens-long-sleeve-hooded-rash-guard-sun-protection-side-adjustable-swim-shirt-coverups-upf-50",
    categories: [
      { _id: "fishing-shirts-baleaf" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B07GQLHJRS",
    slug: "huk-womens-picture-perfect-pursuit-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection",
    categories: [
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B09FQDCFQK",
    slug: "huk-mens-icon-x-hoodie-long-sleeve-performance-shirt-with-upf-30-sun-protection",
    categories: [
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08XTSGVP6",
    slug: "huk-womens-southern-feed-pursuit-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection",
    categories: [
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B09PLNM36M",
    slug: "huk-mens-mossy-oak-pursuit-long-sleeve-shirt-camo-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection",
    categories: [
      { _id: "fishing-shirts-camo" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B09FQD6CTN",
    slug: "huk-mens-icon-x-camo-fade-shirt",
    categories: [
      { _id: "fishing-shirts-camo" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B09FQD49QJ",
    slug: "huk-mens-icon-x-camo-fade-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-camo" },
      { _id: "fishing-shirts-tournament" },
      { _id: "fishing-shirts-huk" },
    ],
  },
  {
    asin: "B079L6YMH8",
    slug: "funny-fishing-shirt-sometimes-its-a-fish-fishing-tshirt",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B07KVXHQMD",
    slug: "mens-funny-fishing-shirts-for-men-give-a-man-a-fish-t-shirt",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B08CVKWKX9",
    slug: "i-just-want-to-drink-beer-and-jerk-my-rod-funny-fishing-tee-t-shirt",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B07D7819C5",
    slug: "walleye-fishing-gift-american-flag-funny-fisherman-tshirt",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-american-flag" },
    ],
  },
  {
    asin: "B07PZQ632V",
    slug: "i-fish-like-a-girl-tshirts-funny-fishing-shirt-with-sayings",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B07RL19RMJ",
    slug: "hookin-aint-easy-funny-fishing-lovers-gift-t-shirt-tank-top",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B07NZ6H535",
    slug: "crazy-dog-t-shirts-mens-fishin-bum-t-shirt-funny-graphic-fishing-tee-fisherman-gifts",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B07MCVFPTG",
    slug: "crazy-dog-t-shirts-mens-a-reel-expert-can-tackle-anything-tshirt-funny-fishing-tee",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B00SG190AQ",
    slug: "they-see-me-trollin-t-shirt-funny-fishing-shirts-fish-jokes-summer-camping",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B07SB1SGQK",
    slug: "i-love-it-when-she-bends-over-fisherman-humor-eat-sleep-fish-repeat-funny-fishing-tee-mens-tshirt",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B07CG3Z9HN",
    slug: "funny-fishing-shirt-gifts-for-fisherman-fishing-tees-for-men-premium-t-shirt",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B07QXLZVQB",
    slug: "this-is-my-lucky-fishing-shirt-funny-retro-t-shirt",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B01FCUIWWK",
    slug: "go-all-out-inc-funny-tee",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B07VGBBZ89",
    slug: "funny-jerk-it-till-she-swallows-trout-bass-fishing-gear-men-t-shirt",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B07PSCB9TP",
    slug: "this-girl-loves-fishing-with-her-husband-funny-t-shirts",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B07RCPLQDT",
    slug: "womens-hooking-aint-easy-funny-fishing-girl-women-flower-saying-t-shirt",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B07G995ZZ6",
    slug: "fishing-shirt-funny-american-flag-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-american-flag" },
    ],
  },
  {
    asin: "B01LZJAYBZ",
    slug: "amdesco-mens-master-baiter-awesome-funny-fishing-t-shirt",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B07M6RFD9C",
    slug: "mens-dont-be-a-dumb-bass-tshirt-funny-fishing-tee-for-guys",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B071Z466W6",
    slug: "bamboo-cay-mens-short-sleeve-flying-bamboos-casual-embroidered-woven-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B01JHDDOM6",
    slug: "a-day-without-fishing-probably-wont-kill-me-gift-idea-to-dad-funny-t-shirt",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B07MZ9F78W",
    slug: "crazy-dog-t-shirts-mens-procrastifishing-tshirt-funny-outdoor-fishing-procrastination-tee",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B096BMXJZX",
    slug: "mens-grandpa-is-my-name-fishing-is-my-game-tshirt-funny-fathers-day-tee",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07P17PTW6",
    slug: "mens-mines-so-big-i-have-to-use-two-hands-tshirt-funny-fishing-tee",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B073SP1VC2",
    slug: "crazy-dog-t-shirts-womens-fishing-saved-me-from-becoming-a-pornstar-tshirt-funny-outdoor-tee",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07PMF7S5P",
    slug: "crazy-dog-t-shirts-mens-beer-fishy-fishy-tshirt-funny-fishing-drinking-tee",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B0718X8BJL",
    slug: "crazy-bros-tees-id-rather-be-fishing-funny-sarcastic-fish-gift-for-dad-fisherman-mens-t-shirt",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07MCVGRSZ",
    slug: "mens-im-so-good-with-my-rod-i-make-fish-come-tshirt-funny-sarcastic-fishing-tee",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07MQVMX4L",
    slug: "crazy-dog-t-shirts-mens-i-like-fishing-and-maybe-3-people-tshirt-funny-outdoorsman-fathers-day-tee",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07F9Z5FDL",
    slug: "gamefish-usa-upf-50-microfiber-moisture-wicking-long-sleeve-performance-bass-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-performance" },
    ],
  },
  {
    asin: "B07VLLPBMP",
    slug: "naviskin-mens-sun-protection-upf-50-uv-outdoor-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B006PDDICS",
    slug: "columbia-mens-terminal-tackle-pfg-sleeve-ls-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B001SF77M0",
    slug: "columbia-mens-pfg-tamiami-ii-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B071F55CY7",
    slug: "koofin-performance-fishing-shirt-vented-long-sleeve-sunblock-shirt-with-mesh",
    categories: [{ _id: "fishing-shirts-koofin" }],
  },
  {
    asin: "B07BKRWG43",
    slug: "naviskin-mens-upf-50-sun-protection-fishing-shirt-long-sleeve",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B000EOO76K",
    slug: "columbia-mens-bahama-ii-l-s-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B08SMH59GS",
    slug: "bassdash-fishing-t-shirts-for-men-uv-sun-protection-upf-50-long-sleeve-tee-t-shirt",
    categories: [
      { _id: "fishing-shirts-bassdash" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07RBCGHSN",
    slug: "columbia-mens-bahama-ii-short-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07674DB6R",
    slug: "columbia-pfg-americana-saltwater-fish-flag-t-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0089OQ3SW",
    slug: "columbia-bahama-short-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B004GIXGCQ",
    slug: "columbia-mens-pfg-tamiami-ii-short-sleeve-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B08B1N359D",
    slug: "mens-upf-50-long-sleeve-sun-protection-shirts-outdoor-lightweight-quick-dry-uv-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B08V6KKH4D",
    slug: "oneill-womens-basic-skins-upf-50-long-sleeve-rash-guard",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07NGJHZ5P",
    slug: "southern-attitude-pineapple-anchor-coral-womens-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08LN16P1J",
    slug: "under-armour-womens-coldgear",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-cold-weather" },
    ],
  },
  {
    asin: "B07BTL26WT",
    slug: "costa-del-mar-mens-tech-crew-performance-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07FX9V56S",
    slug: "naviskin-mens-upf-50-sun-protection-outdoor-long-sleeve-shirt-lightweight-quick-dry-cooling-fishing-shirts",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B001MF68QW",
    slug: "columbia-womens-pfg-tamiami-ii-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B01BKW8G3Y",
    slug: "southern-attitude-salty-anchor-navy-blue-preppy-short-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07M8BD7DQ",
    slug: "little-donkey-andy-womens-upf-50-uv-protection-shirt-long-sleeve-fishing-shirt-breathable-and-fast-dry",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B00GD234RA",
    slug: "oneill-youth-basic-skins-upf-50-long-sleeve-sun-shirt",
    categories: [
      { _id: "fishing-shirts-for-kids" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B00KHC4PG6",
    slug: "crazy-dog-t-shirts-youth-eat-sleep-fish-t-shirt-funny-fishing-tee-for-kids",
    categories: [
      { _id: "fishing-shirts-for-kids" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B00DNNS0VW",
    slug: "columbia-mens-low-drag-offshore-short-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B01C7NBC0E",
    slug: "threadrock-mens-fishing-american-flag-t-shirt",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07F98CZC5",
    slug: "haase-unlimited-fishing-pole-american-flag-fisherman-usa-mens-t-shirt",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-for-cold-weather" },
    ],
  },
  {
    asin: "B01N33D4XJ",
    slug: "bamboo-cay-mens-short-sleeve-always-5-oclock-casual-embroidered-button-up-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B01ACK21F4",
    slug: "hook-tackle-mens-american-sailfish-long-sleeve-uv-sun-protection-performance-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B075641NRR",
    slug: "grunt-style-rifle-flag-mens-t-shirt",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B01GSMQZ6G",
    slug: "hook-tackle-mens-liberty-long-sleeve-vented-uv-sun-protection-performance-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07F1YD4J5",
    slug: "bigfoot-fishing-shirt-funny-sasquatch-and-fish",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B07NKDCDJ2",
    slug: "bamboo-cay-mens-chest-bird-of-paradise-tropical-style-embroidered-hawaiian-button-down-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B00K581GFA",
    slug: "erazor-bits-wicked-crab-long-sleeve-t-shirt-wf110ls",
    categories: [{ _id: "fishing-shirts-short-sleeve" }],
  },
  {
    asin: "B07T657C9X",
    slug: "its-ok-if-you-dont-like-fishing-gift-idea-funny-quotes-t-shirt",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B00F9LLVHQ",
    slug: "vapor-apparel-mens-upf-50-uv-sun-protection-long-sleeve-performance-t-shirt-for-sports-and-outdoor-lifestyle",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07TKCXK4R",
    slug: "willit-womens-upf-50-sun-protection-hoodie-shirt-long-sleeve-spf-uv-top-lightweight-quick-dry",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08SBWNSV3",
    slug: "performance-fishing-hoodie-with-face-mask-hooded-sunblock-shirt-sun-shield-long-sleeve-upf50-dry-fit-quick-dry",
    categories: [
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B09TMRH83Q",
    slug: "habit-mens-ts1156-long-sleeve-river-guide-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B08WRGTGKB",
    slug: "habit-long-sleeve-mens-river-guide-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B00AB0IT0W",
    slug: "columbia-mens-low-drag-offshore-short-sleeve-shirt-upf-40-protection-moisture-wicking-fabric",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-short-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B00QOALVP8",
    slug: "columbia-womens-pfg-super-bahama-long-sleeve-shirt-breathable-uv-protection",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B00DCZGTM8",
    slug: "columbia-boys-bonehead-short-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-kids" },
    ],
  },
  {
    asin: "B01096CHGY",
    slug: "huk-mens-kryptek-icon-x-long-sleeve-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection-reflective-coating",
    categories: [
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0814Q1FBX",
    slug: "columbia-mens-thistletown-park-raglan-shirt-long-sleeve-sun-protection",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B09FQGX3YD",
    slug: "huk-mens-pursuit-camo-vented-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-camo" },
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B00KRYNQKU",
    slug: "hanes-womens-sport-cool-dri-performance-polo",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B07R6Y9TDK",
    slug: "mens-pfg-zero-rules-ls-shirt-carbon",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-short-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07FGLS54K",
    slug: "columbia-boys-terminal-tackle-long-sleeve-tee",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-kids" },
    ],
  },
  {
    asin: "B0058YRHEA",
    slug: "columbia-mens-low-drag-offshore-upf-40-vivid-blue-large",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B096T3BH1Q",
    slug: "pelagic-exo-tech-hooded-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-pelagic" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07RW7XT7Z",
    slug: "columbia-womens-silver-ridge-lite-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B00GD22JF8",
    slug: "oneill-mens-basic-skins-upf-50-long-sleeve-sun-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07RWY14YS",
    slug: "columbia-kids-baby-pfg-printed-logo-graphic-tee",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-kids" },
    ],
  },
  {
    asin: "B0BN4M8FD2",
    slug: "simms-solarflex-upf-50-shirt-long-sleeve-sun-protection-breathable",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07FC23Y17",
    slug: "mens-funny-fishing-shirts-novelty-gift-men-grandpa-dad-bobbers-t-shirt",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B0002MGM44",
    slug: "columbia-mens-bahama-ii-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07S5H9C31",
    slug: "mossy-oak-mens-elements-long-sleeve-moisture-wicking-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07PBPQP5C",
    slug: "frequent-flyer-premium-fly-fishing-shirt",
    categories: [{ _id: "fishing-shirts-short-sleeve" }],
  },
  {
    asin: "B08B7WNDZJ",
    slug: "mossy-oak-mens-long-sleeve-performance-moisture-wicking-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B08CBB4LYQ",
    slug: "bite-me-funny-fishing-t-shirts",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B07BLW4GRR",
    slug: "comical-shirt-ladies-wtf-wheres-the-fish-funny-fishing-shirt-game-v-neck-tee",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B07HGGCS55",
    slug: "fishing-tee-shirts-fishing-girl-try-to-keep-up-funny-fishing-t-shirt",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B08BLT63FL",
    slug: "huk-youth-icon-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-for-kids" },
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B010ON3BSU",
    slug: "columbia-womens-lo-drag-short-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B078M4BP74",
    slug: "baleaf-mens-short-sleeve-solid-sun-protection-quick-dry-rashguard-swim-shirt-upf-50",
    categories: [
      { _id: "fishing-shirts-baleaf" },
      { _id: "fishing-shirts-short-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B08DVD8TNM",
    slug: "upf-long-sleeve-fishing-shirts-for-men-vented-sides-light-weight-wicking",
    categories: [{ _id: "fishing-shirts-long-sleeve" }],
  },
  {
    asin: "B0B7F5JZQ6",
    slug: "long-sleeve-lightweight-dri-fit-upf40-sun-protection-quick-dry-running-hiking-tshirt",
    categories: [
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07DHSYRSF",
    slug: "crazy-dog-t-shirts-mens-part-time-hooker-tshirt-funny-outdoor-fishing-tee-for-guys",
    categories: [{ _id: "fishing-shirts-funny" }],
  },
  {
    asin: "B07GZLD6K4",
    slug: "wanayou-womens-compression-shirt-dry-fit-long-sleeve-running-athletic-t-shirt-workout-tops",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B00G0NF00Q",
    slug: "g-h-bass-co-mens-explorer-short-sleeve-crewneck-t-shirt",
    categories: [{ _id: "fishing-shirts-short-sleeve" }],
  },
  {
    asin: "B09V7FS5JG",
    slug: "baleaf-mens-quick-dry-short-sleeve-t-shirt-sun-protection-running-workout-shirts",
    categories: [
      { _id: "fishing-shirts-baleaf" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B09PLM9Z9J",
    slug: "huk-mens-cw-cold-weather-water-resistant-icon-x-hoodie",
    categories: [
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-for-cold-weather" },
    ],
  },
  {
    asin: "B07V7WSNJP",
    slug: "huk-womens-schooled-pursuit-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection",
    categories: [
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08B4RN3LC",
    slug: "bamboo-cay-mens-embroidered-hawaiian-tropical-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07BTGHMT7",
    slug: "costa-del-mar-mens-s-s-beachside-tee",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B004ECLR2A",
    slug: "bamboo-cay-mens-relaxed-fit-short-sleeve-camp-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B09NQJ2HD3",
    slug: "reel-life-mens-short-sleeve-woven-fishing-shirt-pacific-series-fishin-all-over-uv-protection-breathable",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B002BZ0TY4",
    slug: "columbia-womens-tamiami-ii-short-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B00KQFK5AE",
    slug: "hanes-mens-size-tall-short-sleeve-beefy-t-shirt-pack-of-two",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B075NPYWVP",
    slug: "mossy-oak-long-sleeve-quarter-zip-camo-shirts-for-men-mens-hunting-shirts",
    categories: [
      { _id: "fishing-shirts-camo" },
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B01IGC8D4I",
    slug: "g-h-bass-co-mens-explorer-long-sleeve-crewneck-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07RXJ3S5S",
    slug: "ogeenier-mens-upf-50-sun-protection-hoodie-shirt-with-mask-long-sleeve-uv-fishing-workout-hiking-thumbholes-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B09P4SF72N",
    slug: "izod-mens-surfcaster-short-sleeve-button-down-solid-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B08W2KS1GQ",
    slug: "g-h-bass-co-mens-explorer-short-sleeve-button-down-fishing-shirt-solid-flap-pocket",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07VD3HH7S",
    slug: "hiskywin-womens-upf-50-sun-protection-tops-long-sleeve-half-zip-thumb-hole-outdoor-performance-workout-shirt",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B01GVSC9S0",
    slug: "arctic-cool-womens-v-neck-instant-cooling-moisture-wicking-performance-upf-50-short-sleeve-workout-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B083NS1CWW",
    slug: "womens-performance-long-sleeve-fishing-shirt-upf50-rash-guard-v-neck-athletic-workout-tops-moisture-wicking",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08MFNK4QM",
    slug: "tsla-1-or-2-pack-mens-thermal-long-sleeve-compression-shirts-athletic-base-layer-top-winter-gear-running-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B089XWCS9G",
    slug: "qualidyne-womens-uv-upf-50-sun-protection-hoodie-zip-up-long-sleeve-hiking-jacket-outdoor-performance-shirt",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07Q8W1QK4",
    slug: "koofin-gear-womens-long-sleeve-hooded-sunshirt-upf-50-sun-protection-performance-fishing-hoodie-athletic-workout-tops-moisture-wicking",
    categories: [
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B01NCK33FY",
    slug: "columbia-mens-thistletown-park-crew-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07NZ1Z3NC",
    slug: "aftco-samurai-performance-long-sleeve-shirt-mint-xl",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07NPLHFW2",
    slug: "habit-men39s-belcoast-river-guide-s-s-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07TCNDQVG",
    slug: "wrangler-authentics-mens-long-sleeve-classic-woven-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B00KBZPO32",
    slug: "hanes-x-temp-long-sleeve-t-shirt-o5716",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07TWQD71P",
    slug: "naviskin-womens-upf-50-uv-sun-protection-hoodie-lightweight-outdoor-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07YXN71FB",
    slug: "under-armour-mens-tide-chaser-long-sleeve",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B093T99RZK",
    slug: "hooked-soul-american-flag-performance-fishing-shirt-apparel-upf-50-dri-fit-mens-x-large-long-sleeve-xl-american-flag",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B09BLMB66N",
    slug: "fishing-shirt-for-men-long-sleeve-with-hood-and-gaiter-upf-50-sun-protection-spf-hiking-running-pfg-dri-fit",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B097L28H19",
    slug: "bassdash-mens-upf-50-performance-fishing-shirt-cooling-hoodie-camo-long-sleeve-fs17m",
    categories: [
      { _id: "fishing-shirts-camo" },
      { _id: "fishing-shirts-bassdash" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08RDLLC3G",
    slug: "rodeel-mens-loose-fit-fishing-t-shirt-vented-river-bluff-performance-long-sleeve-shirt-upf-50-sleeve",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08R3YXWRM",
    slug: "got-sports-upf-50-long-sleeve-fishing-t-shirt-for-men-and-women-uv-sun-protection-moisture-wicking",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B089K7GHJR",
    slug: "columbia-mens-long-sleeve-tee-shirt-outdoors-fishing-camping-hiking",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07MJG6SRJ",
    slug: "baleaf-mens-sun-protection-hoodie-shirt-upf-50-long-sleeve-uv-spf-t-shirts-rash-guard-fishing-swimming-lightweight",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B09WD4D97X",
    slug: "under-armour-mens-fish-hook-logo-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B08P7DRW1L",
    slug: "amazon-essentials-mens-regular-fit-short-sleeve-print-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B09CKNQGCS",
    slug: "riverruns-upf-50-fishing-hoodie-sun-hooded-fishing-shirt-sun-protection-long-sleeves-shirt-for-men-fishing",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B0B4MW9JBD",
    slug: "bassdash-mens-upf-50-camo-fishing-shirt-quick-dry-long-sleeve-kayaking-hiking-t-shirts",
    categories: [
      { _id: "fishing-shirts-bassdash" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-american-flag" },
    ],
  },
  {
    asin: "B085HN67VN",
    slug: "palmyth-fishing-shirt-for-mMen-long-sleeve-sun-protection-uv-upf-50-t-shirts-with-pocket",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0C78CYT9P",
    slug: "winking-clam-outfitters-fishing-shirts-for-Men-Long-seeve-fishing-gifts-for-men-upf-50-sunproof",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07WTT4ZLB",
    slug: "cqr-mens-performance-fishing-gear-upf-50-short-sleeve-breathable-pfg-rip-stop-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B09L8MJP7D",
    slug: "simms-womens-solarflex-fishing-hoody-shirt-with-upf-50",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07QR163RN",
    slug: "mens-i-speak-3-languages-sarcasm-hunting-and-fishing-t-shirt-hunter-sarcastic",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B09LHN7SYW",
    slug: "ocean-sea-world-beach-shells-starfish-mens-hoodies-long-sleeve-zipper-hooded-jacket-sweatshirt-boys-soft",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0B2QDVRMT",
    slug: "aftco-samurai-rashguard-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B089K275J6",
    slug: "columbia-mens-pfg-terminal-deflector-printed-long-sleeve-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0B4K2JCSY",
    slug: "mens-long-sleeve-sun-protection-shirt-quick-dry-safari-outdoor-dri-fit-t-shirt-for-running-fishing-hiking",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07KGFK3HK",
    slug: "sand-salt-surf-sun-mandala-turtle-womens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B092ZY78LH",
    slug: "bassdash-womens-upf-50-uv-sun-protection-t-shirt-long-sleeve-fishing-hiking-performance-shirts",
    categories: [
      { _id: "fishing-shirts-bassdash" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B09FQH4DFH",
    slug: "huk-womens-icon-x-hoodie-long-sleeve-performance-shirt-with-upf-30-sun-protection",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B017UXR1A6",
    slug: "sand-salt-surf-sun-polynesian-hammerhead-tribal-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07QZ6GYBM",
    slug: "weekend-hooker-fishing-shirt-long-sleeve-funny-t-shirt-cool-dry",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-funny" },
    ],
  },
  {
    asin: "B07NTTFT8W",
    slug: "bamboo-cay-mens-casual-shake-the-hook-embroidered-button-up-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
      { _id: "fishing-shirts-embroidery" },
    ],
  },

  {
    asin: "B082TXKLTV",
    slug: "womens-upf-50-uv-sun-protection-hoodie-shirt-dry-fit-spf-long-sleeve-outdoor-performance-fishing-hiking-shirts",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07XZKG6B6",
    slug: "shimano-long-sleeve-tech-tee-fishing-gear",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07RWH1FC5",
    slug: "columbia-kids-baby-super-terminal-tackle-long-sleeve",
    categories: [
      { _id: "fishing-shirts-for-kids" },
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07PZ8SGJJ",
    slug: "nautica-boys-long-sleeve-graphic-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-kids" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B01N59GCKU",
    slug: "bigfish-skelefish-muskie-upf50-long-sleeve-performance-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07WS4XPWZ",
    slug: "mocoly-mens-upf-50-sun-protection-hoodie-long-sleeve-outdoor-running-performance-t-shirt-with-thumbholes",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B008VM7WJQ",
    slug: "bamboo-cay-mens-chest-bird-of-paradise-casual-embroidered-hawaiian-button-down-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
      { _id: "fishing-shirts-embroidery" },
    ],
  },
  {
    asin: "B08WRSF25J",
    slug: "bamboo-cay-mens-coral-harmony-embroidered-casual-button-down-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
      { _id: "fishing-shirts-embroidery" },
    ],
  },
  {
    asin: "B07Q8YJGVD",
    slug: "koofin-gear-performance-fishing-hoodie-womens-long-sleeve-sunshirt-quick-dry-upf50",
    categories: [
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B088PRHHGV",
    slug: "koofin-gear-womens-performance-fishing-hoodie-long-sleeve-upf50-tops-half-zip-thumb-hole",
    categories: [
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B087G4WB31",
    slug: "performance-long-sleeve-bass-fishing-shirt-upf50-sun-protection-dry-fit-moisture-wicking-loose-fit",
    categories: [
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-american-flag" },
    ],
  },
  {
    asin: "B087G5PV39",
    slug: "mens-koofin-gear-performance-long-sleeve-bass-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B072B9W8T3",
    slug: "baleaf-mens-long-sleeve-hiking-shirts-fishing-button-down-lightweight-upf-50-uv-sun-shirt-nylon-quick-dry",
    categories: [
      { _id: "fishing-shirts-baleaf" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08YQP456T",
    slug: "baleaf-mens-upf-50-full-zip-light-jacket-hooded-long-sleeve-cooling-shirt",
    categories: [
      { _id: "fishing-shirts-baleaf" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B0BWPP7GVW",
    slug: "winking-clam-outfitters-fishing-shirts-for-men-long-sleeve-fishing-gear-fishing-gifts",
    categories: [
      { _id: "fishing-shirts-fish" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08WCDNN95",
    slug: "guy-harvey-mens-long-sleeve-performance-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-fish" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0B832FQD7",
    slug: "huk-mens-crew-long-sleeve-sun-protecting-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-fish" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07KW937H4",
    slug: "funny-i-love-it-when-my-wife-lets-me-go-fishing-t-shirt",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07BLPZJSK",
    slug: "columbia-mens-pfg-triangle",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07R6V1MVD",
    slug: "mossy-oak-womens-long-sleeve",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07R821S7V",
    slug: "columbia-mens-super-bahama-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B08BMNLN36",
    slug: "mossy-oak-short-sleeve-fishing-shirts-for-men-sun-protection-clothing-men",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B097CKM84C",
    slug: "mossy-oak-youth-black-front-logo-hunting-kids-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-kids" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0883FTDWW",
    slug: "mossy-oak-mens-americana-printed-short-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B01MUBQJKH",
    slug: "jaws-movie-quints-shark-fishing-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B073GXFTMS",
    slug: "columbia-mens-pfg-tamiami-ii-long-sleeve-shirt-big",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B00C17A0QY",
    slug: "hanes-mens-2-pack-long-sleeve-cool-dri-t-shirt-upf-50-1-graphite-1-safety-green",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07V6SL5S3",
    slug: "mossy-oak-mens-ss-performance-moisture-wicking-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B086GTB6W1",
    slug: "izod-mens-surfcaster-short-sleeve-button-down-patterned-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07HSW614Y",
    slug: "mens-fishing-saved-me-from-being-a-pornstar-now-im-just-a-hooker-tshirt",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B071HWK3T2",
    slug: "hook-tackle-mens-tarpon-run-short-sleeve-embroidered-uv-sun-protection-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07XKDTTQV",
    slug: "g-h-bass-co-mens-big-and-tall-madawaska-short-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B014C38ZA2",
    slug: "hanes-mens-long-sleeve-cool-dri-t-shirt-upf-50-medium-2-pack-1-navy-1-white",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0753TLD38",
    slug: "jason-mathias-inshore-slam-ls-high-performance-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0BB8DVHBK",
    slug: "costa-womens-technical-crew-ls-shirt",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B00KBZRRJQ",
    slug: "hanes-mens-nano-premium-cotton-t-shirt-pack-of-2",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B086M5DH7X",
    slug: "hde-womens-long-sleeve-rash-guard-sun-protection-t-shirt-upf-50-beach-swim-shirt",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B06ZYCS9PK",
    slug: "hanes-tagless-t-shirt",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B075XH3NFN",
    slug: "baleaf-mens-evo-cooling-workout-running-athletic-shirts-quick-dry-soft-upf-50-short-sleeve-lightweight-t-shirt",
    categories: [
      { _id: "fishing-shirts-baleaf" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B01ES40BGQ",
    slug: "hanes-sport-mens-heathered-performance-t-shirt",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07S4QKSSG",
    slug: "here-fishy-fishy-fishy-t-shirt-fisherman-shirt",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07SSKJSTB",
    slug: "im-a-flip-flops-and-fishing-kinda-girl-funny-t-shirt",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0959WZZGT",
    slug: "mossy-oak-mens-printed-short-sleeve-crew-neck-t-shirt",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07R7BRGXC",
    slug: "mens-hunting-and-fishing-what-else-is-there-t-shirt-funny-gift-for-hunter-fish",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07HNTZK7R",
    slug: "vintage-usa-fish-american-flag-shirt-fishing-gifts-abs001",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B00KBZT6LS",
    slug: "hanes-mens-2-pack-long-sleeve-cool-dri-t-shirt-upf-50-1-safety-green-1-white-xx-large",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08SJBD5BG",
    slug: "jaws-movie-quints-shark-fishing-t-shirt-2",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0BPBBG2M8",
    slug: "isnowood-sun-shirt-upf-50-mens-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B096MXTT83",
    slug: "columbia-mens-terminal-tackle-heather-long-sleeve-shirt-2",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07DQFV3F4",
    slug: "naviskin-womens-sun-protection-upf-50-uv-outdoor-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B09WCVRXFL",
    slug: "under-armour-iso-chill-shore-break-camo-fish-hoodie",
    categories: [
      { _id: "fishing-shirts-camo" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07FK5GFD3",
    slug: "masterbaiter-funny-fishing-fisherman-fish-master-baiter-dad-grandpa-joke-t-shirt",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B00AP30SWM",
    slug: "columbia-fishing-shirts-vs-bass-fishing-shirts",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07V8L4CVW",
    slug: "mens-i-jerk-it-every-chance-i-get-tshirt-funny-fishing-tee",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "",
    slug: "",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B072J5VJ1J",
    slug: "bamboo-cay-mens-short-sleeve-casual-hawaiian-chest-bird-of-paradise-embroidered-button-up",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0B2VMS15W",
    slug: "mossy-oak-upf30-all-over-camo-with-chest-graphic-fishing-tee-with-wicking",
    categories: [
      { _id: "fishing-shirts-camo" },
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0727MS68T",
    slug: "womens-upf-50-lightweight-microfiber-moisture-wicking-performance-fishing-shirt-sharks",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B071G2NVD3",
    slug: "piscifun-performance-upf-long-sleeve-fishing-t-shirt-sun-protection-clothing-fishing-jersey-m-l-xl-2xl-3xl",
    categories: [
      { _id: "fishing-shirts-jersey" },
      { _id: "fishing-shirts-performance" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07DQ8T57X",
    slug: "columbia-womens-silver-ridge-lite-sleeveless",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07R6Y7ZPW",
    slug: "columbia-mens-pfg-terminal-tackle-fish-flag-long-sleeve-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07QVM85XH",
    slug: "salinity-gear-ladies-v-neck-performance-fishing-shirt-upf-50-dri-fit-shirt",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07F9581ZY",
    slug: "haase-unlimited-fishing-pole-american-flag-fisherman-usa-mens-tank-top",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07W5X4ZQW",
    slug: "filthy-anglers-fishing-american-flag-t-shirt-for-men-women-short-sleeve-multiple-designs-colors",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07WQXDSN8",
    slug: "baleaf-mens-athletic-long-sleeve-running-shirts-thumbholes-lightweight-workout-t-shirt-quick-dry-tops",
    categories: [
      { _id: "fishing-shirts-baleaf" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B016J3PKIS",
    slug: "hanes-482l-100-polyester-adult-cool-dri-long-sleeve-performance-t-shirt-1-navy-1-safety-orange-large",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B00GBDB5ZE",
    slug: "mossy-oak-mens-camo-short-sleeve-performance-tech-tee-hunting-shirt",
    categories: [
      { _id: "fishing-shirts-camo" },
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B005GR0WWI",
    slug: "hanes-cool-dri-tagless-mens-t-2pk_deep-royal_3xl",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07J52HDRM",
    slug: "columbia-mens-silver-ridge-lite-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07PYMB8WL",
    slug: "go-all-out-adult-sorry-cant-talk-im-on-another-line-fisherman-gift-t-shirt",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07N1HQN9H",
    slug: "i-love-it-when-she-bends-over-funny-fishing-t-shirt",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B06Y184FJH",
    slug: "hanes-sport-boys-graphic-short-sleeve-tech-tee",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B09L8ML78V",
    slug: "simms-solarflex-upf-50-hoody-shirt-ladies-long-sleeve-sun-protection-fishing-shirt-lightweight-breathable-moisture-wicking-anti-odor",
    categories: [
      { _id: "fishing-shirts-simms" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B014C3950Q",
    slug: "hanes-mens-long-sleeve-cool-dri-t-shirt-upf-50-large-2-pack-1-black-1-white",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B06Y4B4KTQ",
    slug: "performance-fishing-shirt-vented-long-sleeve-sunblock-sun-protection-upf50-moisture-wicking-rash-guard-mesh-sides-loose-fit",
    categories: [
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0787N6725",
    slug: "columbia-youth-boys-pfg-tamiami-short-sleeve-shirt-upf-protection-moisture-wicking",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-kids" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07BPQRT6P",
    slug: "buck-wear-mens-chevy-more-american-cotton-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B00XPF9GIE",
    slug: "hanes-boys-cotton-blend-jersey-polo",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-kids" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B014C38YLW",
    slug: "hanes-mens-2-pack-long-sleeve-cool-dri-t-shirt-upf-50-1-navy-1-safety-green",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0853FCKXL",
    slug: "aftco-barracuda-geo-cool-hooded-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B07KCN4G6T",
    slug: "hanes-mens-comfortsoft-t-shirt-pack-of-4",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B081WBNY61",
    slug: "habit-mens-belcoast-long-sleeve-river-guide-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08Y671C2M",
    slug: "hanes-mens-s-s-cooldri-tee",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07SZBB4DV",
    slug: "columbia-womens-super-bahama-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B075ZTXRHD",
    slug: "hurley-mens-nike-dri-fit-long-sleeve-sun-protection-50-upf-rashguard",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B01MFDB2IE",
    slug: "oneill-mens-basic-skins-upf-50-short-sleeve-sun-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B004IYYVTU",
    slug: "columbia-mens-pfg-tamiami-ii-short-sleeve-shirt-upf-40-sun-protection-wicking-fabric",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B01NB0Q07U",
    slug: "la-leela-mens-loose-front-pocket-short-sleeve-hawaiian-shirt-a",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B071W73WW6",
    slug: "columbia-mens-pfg-low-drag-1-4-zip-pullover-moisture-wicking-sun-protection",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B018IOOBZ4",
    slug: "columbia-mens-pfg-bahama-ii-short-sleeve-shirt-sage-xx-large",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B01EKB6GFW",
    slug: "hanes-mens-graphic-tee",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B08CM528HZ",
    slug: "fish-skinz-womens-performance-fishing-shirt-upf-50-protection-mermaid-hot-pink",
    categories: [
      { _id: "fishing-shirts-fish" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07Z738TMG",
    slug: "g-h-bass-co-mens-explorer-short-sleeve-fishing-shirt-plaid-button-pocket",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0B945BDCN",
    slug: "mens-flex-short-sleeve-button-up-wrinkle-resistance-fishing-shirt-upf50-sun-protection-with-quick-dry-technology",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07Z75D7HM",
    slug: "g-h-bass-co-mens-salt-cove-soft-short-sleeve-button-down-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07ZLDB6N6",
    slug: "columbia-girls-tamiami-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0BR8F1L7W",
    slug: "salty-crew-kids-boys-bruce-long-sleeve-tee-little-kids-big-kids",
    categories: [
      { _id: "fishing-shirts-for-kids" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B081PJQTX6",
    slug: "columbia-girls-tamiami-long-sleeve-shirt-2",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B09XXH2LDT",
    slug: "upf-50-uv-hoodie-t-shirt",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B00JUM5ODC",
    slug: "hanes-mens-long-sleeve-beefy-t-shirt-pack-of-2",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07BLLJJSX",
    slug: "columbia-mens-pfg-graphic-t-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B00KQFK57C",
    slug: "hanes-cool-dri-tagless-mens-t-shirt",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B06XDFNRPT",
    slug: "fresh-fish-funny-fishing-shirt-graphic-fish-t-shirt-for-men-packed-like-a-fish-wrap-ready-fathers-day-grandpa-gifts",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07R821DMN",
    slug: "columbia-mens-blood-and-guts-iii-short-sleeve-woven",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B000VKQZUI",
    slug: "hanes-comfortblend-ecosmart-crewneck-mens-t-shirt",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07CMK24HY",
    slug: "salty-crew-mens-angry-bull-short-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B071KS5576",
    slug: "womens-upf-50-lightweight-microfiber-moisture-wicking-performance-fishing-shirt-turtles",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B087DXLPNX",
    slug: "habit-mens-high-water-long-sleeve-river-guide-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07L1X2YK2",
    slug: "columbia-mens-super-tamiami-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B004R1LH14",
    slug: "hanes-sport-mens-heathered-performance-t-shir",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07V3H2HNY",
    slug: "baleaf-womens-fleece-thermal-long-sleeve-running-shirt",
    categories: [
      { _id: "fishing-shirts-baleaf" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B096MW73TZ",
    slug: "columbia-mens-trollers-best-ss-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07RXJ25XY",
    slug: "ogeenier-womens-1-4-zip-pullover-upf-50-uv-sun-protection-long-sleeve-shirts-outdoor-running-athletic-shirts",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07GQDSGKY",
    slug: "huk-womens-subphantis-icon-x-camo-hoodie-long-sleeve-performance-shirt-with-upf-30-sun-protection-moisture-transport",
    categories: [
      { _id: "fishing-shirts-camo" },
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07PK34YH2",
    slug: "bow-fishing-american-flag-t-shirt-fishing-t-shirts",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07FSG8JZS",
    slug: "happiness-is-a-big-fish-and-a-witness-t-shirt-fishing-tee",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07N7T34M5",
    slug: "salty-crew-mens-paddle-tail-short-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07SQB1JFQ",
    slug: "fishing-fish-island-art-surreal-funny-carp-fisherman-gift-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-kids" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B08L4ZLS9V",
    slug: "kyopp-womens-upf-50-uv-sun-protection-hoodie-spf-long-sleeve-t-shirt-outdoor-performance-fishing-hiking-shirt",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B01GQN8DJY",
    slug: "columbia-mens-pfg-blood-guts-iii-long-sleeve-woven-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B082YHYT6M",
    slug: "simms-logo-t-shirt-for-men-short-sleeve-crewneck-shirt-preshrunk-cotton-athletic-tee-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B09MK72NWC",
    slug: "baleaf-womens-long-sleeve-half-zip-sun-protection-rashguard-side-adjustable-swim-shirt",
    categories: [
      { _id: "fishing-shirts-baleaf" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B06XMY29GG",
    slug: "pack-my-diapers-im-going-fishing-with-grandpa-baby-one-piece-or-toddler-t-shirt",
    categories: [{ _id: "fishing-shirts-for-kids" }],
  },
  {
    asin: "B07DD2VJ1L",
    slug: "mossy-oak-elements-short-sleeve-performance-moisture-wicking-fishing-shirt-for-men",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07745RFWK",
    slug: "g-h-bass-co-mens-summit-creek-seersucker-short-sleeve-button-down-plaid-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07QB93MY2",
    slug: "salty-crew-mens-twin-fin-l-s-tech-tee",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07DQB5J36",
    slug: "columbia-mens-pfg-terminal-tackle-hoodie",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B0BL3WDGNP",
    slug: "baleaf-mens-short-sleeve-rashguard-swim-shirt-upf-50-sun-protection-rash-guard",
    categories: [
      { _id: "fishing-shirts-baleaf" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0C62GQL8F",
    slug: "columbia-mens-utilizer-polo-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B01L9H8E8M",
    slug: "hanes-sport-mens-x-temp-performance-long-sleeve-training-tee",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07RRYMXNN",
    slug: "sun-protection-upf-50-linafin-chiller-pullover-long-sleeve-mens-fishing-hoodie-shirt-with-face-gaiter-performance",
    categories: [
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-face-mask" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B07RKYRMDQ",
    slug: "columbia-womens-pfg-lo-drag-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B01BIBS6V4",
    slug: "animal-den-ladies-long-sleeve-moisture-wicking-athletic-shirts-sizes-xs-4xl",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B015G1T1F2",
    slug: "columbia-womens-plus-size-bahama-long-sleeve",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07GPTS633",
    slug: "columbia-mens-regular-white-large",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B072KZ39GX",
    slug: "gamefish-usa-womens-upf-50-lightweight-microfiber-moisture-wicking-performance-fishing-shirt-snook",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07RBCCCM2",
    slug: "columbia-mens-grander-marlin-woven-ss",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0BKS6DHM5",
    slug: "columbia-mens-pfg-terminal-tackle-heather-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08CYNW7GV",
    slug: "mens-im-one-fly-dad-tshirt-funny-fishing-fathers-day-tee-for-guys",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B00ZDN6A8A",
    slug: "hanes-tagless-nano-t-mens-long-sleeve-tee",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07NVXRDNX",
    slug: "womens-upf-50-uv-long-sleeve-sun-protection-crew-neck-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B096W7XBJ2",
    slug: "pelagic-solar-performance-long-sleeve-upf-shirt",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07RCVLQ5N",
    slug: "columbia-mens-silver-ridge-2-0-multi-plaid-short-sleeve-vented-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07TT7W7SL",
    slug: "simms-solarflex-upf-50-printed-hoody-shirt-mens-long-sleeve-sun-protection-fishing-shirt-lightweight-breathable-moisture-wicking-anti-odor",
    categories: [
      { _id: "fishing-shirts-simms" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B094YMYWKC",
    slug: "mossy-oak-unisex-adult-long-sleeve-performance-tech-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07RBCF95Z",
    slug: "columbia-mens-half-moon-short-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0C9ZX6J6T",
    slug: "salty-crew-mens-tailed-long-sleeve-tee",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07NPG4Z4G",
    slug: "habit-womens-long-sleeve-fishing-guide-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07PZBB9QW",
    slug: "baleaf-mens-workout-sleeveless-tank-top-hooded-muscle-shirts-upf50-lightweight-running-gym-quick-dry",
    categories: [
      { _id: "fishing-shirts-baleaf" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07VXMSTMK",
    slug: "mens-she-swallows-funny-fishing-gift-for-men-adult-humor-fishing-t-shirt",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B09WJ25TDL",
    slug: "columbia-mens-terminal-tackle-1-4-zip",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0BF5Y9D43",
    slug: "denali-performance-mens-upf-50-protectuv-mega-solar-long-sleeve-t-shirt-with-denali-marlin-logo",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07MTNR3R7",
    slug: "mossy-oak-triblend-burnout-logo-t-shirt-for-men",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0B21F5H9R",
    slug: "sougayilang-professional-fishing-jersey-long-sleeve-for-men-women-upf-50-sun-protection-with-moisture-wicking",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B000OVVC7U",
    slug: "columbia-mens-perfect-cast-polo-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07RB7XXW3",
    slug: "mossy-oak-womens-long-sleeve-performance-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0199T06FQ",
    slug: "under-armour-womens-base-3-0-crew-long-sleeve",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B096MXRLL7",
    slug: "columbia-mens-super-bahama-short-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0076RMVDE",
    slug: "columbia-mens-thistletown-park-long-sleeve-crew",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B09QJPFFTX",
    slug: "baleaf-womens-long-sleeve-uv-shirts-quick-dry-running-workout-shirts",
    categories: [
      { _id: "fishing-shirts-baleaf" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07V7WRXX3",
    slug: "huk-womens-salty-long-sleeve-fishing-shirt-ladies-button-down-performance-shirt-with-30-upf-sun-protection",
    categories: [
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07SZFJHYH",
    slug: "fish-american-flag-shirt-patriotic-fishing-4th-of-july-tank-top",
    categories: [{ _id: "fishing-shirts-for-her" }],
  },
  {
    asin: "B07H3HFWBV",
    slug: "fitst4-mens-sun-protection-upf-40-uv-outdoor-long-sleeve-quick-drying-mesh-fishing-shirts-with-hood-thumb-hole",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B09WDQ2HQJ",
    slug: "under-armour-womens-heatgear-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B09QJQCXMF",
    slug: "baleaf-womens-upf-50-sun-protection-hooded-shirt-long-sleeve-athletic-quick-dry-tops",
    categories: [
      { _id: "fishing-shirts-baleaf" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08TWGSBH2",
    slug: "baleaf-womens-short-sleeve-hiking-shirt-upf-50-for-safari-fishing-camping-travelling-quick-dry",
    categories: [
      { _id: "fishing-shirts-baleaf" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B01NBJDHGQ",
    slug: "hanes-stretch-cotton-womens-raglan-sleeve-tee",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07J5RP9FT",
    slug: "salinity-gear-performance-fishing-hoodie-upf-50-dri-fit-shirt",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B09RWMZ82T",
    slug: "inktastic-lucky-fishing-shirt-fish-youth-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-kids" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B077T5BPMM",
    slug: "columbia-mens-pfg-tamiami-ii-long-sleeve-shirt-tall",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07RHQNSFL",
    slug: "columbia-womens-lo-drag-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0C7Q44SK8",
    slug: "roadbox-mens-sun-shirts-upf-50-uv-protection-quick-dry-hoodies-long-sleeve-for-swimming-fishing-hiking",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0B1LNY58D",
    slug: "columbia-mens-pfg-terminal-tackle-americana-long-sleeve-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B072M325NR",
    slug: "columbia-mens-skiff-cast-polo",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0155Z4C76",
    slug: "salt-life-mens-hook-line-and-sinker-fade-long-sleeve-classic-fit-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B00A2LNPV8",
    slug: "columbia-womens-bonehead-sleeve-extended",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B072B9W6TS",
    slug: "baleaf-sleeve-hiking-fishing-lightweight",
    categories: [
      { _id: "fishing-shirts-baleaf" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07TKMZ18P",
    slug: "mocoly-womens-upf-50-sun-protection-hoodie-long-sleeve-spf-outdoor-running-workout-t-shirt-with-thumbholes",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08WQ1S4RF",
    slug: "habit-ts1161-short-sleeve-mens-river-guide-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07WVRN297",
    slug: "mens-upf-50-sun-protection-hoodie-outdoor-long-sleeve-t-shirt-for-running-fishing-hiking",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0CP4D9RVR",
    slug: "simms-big-sky-plaid-vented-fishing-shirt-mens-long-sleeve-50-upf-shirt-lightweight-breathable-moisture-wicking",
    categories: [
      { _id: "fishing-shirts-simms" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07KFRX4F9",
    slug: "yizzam-luckyrod-american-flag-mens-long-sleeve-upf-50-performance-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B096SRG7XW",
    slug: "columbia-womens-tidal-tee-hoodie",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B076KVZW2K",
    slug: "hooked-soul-fishing-mens-upf-50-uv-sun-protection-outdoor-long-sleeve-performance-dri-fit-shirts",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07PZF5XZV",
    slug: "mossy-oak-long-sleeve-logo-tee-with-3-graphic-prints",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B01KN3AHSS",
    slug: "hanes-comfort-ecosmart-pullover-hooded-sweatshirt",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B00KBZSQ4Q",
    slug: "multi-pack-hanes-mens-cool-dri-long-sleeve-performance-t-shirt",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0BN4KFXN7",
    slug: "simms-solarflex-upf-50-shirt-long-sleeve-sun-protection-fishing-hoodie-lightweight-breathable-moisture-wicking-anti-odor",
    categories: [
      { _id: "fishing-shirts-simms" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07CHG8GRV",
    slug: "fishing-is-like-boobs-cute-fishing-shirts-funny-quote-gifts",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0058YSN3Y",
    slug: "columbia-mens-pfg-super-tamiami-short-sleeve-shirt-upf-40-sun-protection-wicking-fabric",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B08KV3KCSB",
    slug: "funny-fishing-saying-shirt-docking-a-boat-tshirt-marriage-t-shirt",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07DNG3P83",
    slug: "mossy-oak-mens-ls-performance-moisture-wicking-1-4-zip-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B096MVJZHF",
    slug: "columbia-mens-super-slack-tide-camp-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0C2C61MK9",
    slug: "pelagic-ultratek-hooded-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-pelagic" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B09XQMBKDZ",
    slug: "pelagic-game-fish-premium-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-pelagic" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B07RJM3RCQ",
    slug: "pretchic-mens-upf-50-uv-sun-protection-performance-long-sleeve-outdoor-t-shirt",
    categories: [
      { _id: "fishing-shirts-pretchic" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B01M20WB7R",
    slug: "hanes-sport-womens-cool-dri-performance-long-sleeve-tee",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0CP4BYZ1B",
    slug: "simms-mens-morada-fishing-shirt-upf-30-long-sleeve-shirt-water-resistant-angler-shirt-wrinkle-resistant-button-down-fishing-shirt-for-men",
    categories: [
      { _id: "fishing-shirts-simms" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B075F9CRBW",
    slug: "hook-tackle-mens-crossing-rods-short-sleeve-embroidered-uv-sun-protection-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07ZBHD8ZP",
    slug: "i-was-thinking-about-fishing-funny-fishing-gift-t-shirt",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B00HKFWODE",
    slug: "la-leela-mens-big-and-tall-casual-short-sleeve-aloha-hawaiian-shirt-a",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07QXTSNSP",
    slug: "mossy-oak-fishing-shirts-for-men-quick-dry-with-upf-sun-protection",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B095TNWVS1",
    slug: "performance-fishing-shirt-long-sleeve-sun-protection-upf50-lightweight-outdoor-quick-dry",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B071DLRKW6",
    slug: "gamefish-usa-womens-upf-50-lightweight-microfiber-moisture-wicking-performance-fishing-shirt-redfish",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07DNHBRLH",
    slug: "mossy-oak-mens-elements-ls-performance-moisture-wicking-1-4-zip",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07K4642ST",
    slug: "amazon-brand-peak-velocity-mens-vxe-long-sleeve-quick-dry-loose-fit-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B09Z8THLY7",
    slug: "under-armour-womens-locker-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B096STTQ9V",
    slug: "columbia-kids-baby-terminal-tackle-hoodie",
    categories: [
      { _id: "fishing-shirts-for-kids" },
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07VWSWLWW",
    slug: "plan-for-the-day-coffee-fish-beer-funny-adult-mens-fishing-t-shirt",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B087T2JB48",
    slug: "skull-mask-hooded-short-sleeve-shirt-men-solid-color-casual-fashion-top",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07NPLF6H7",
    slug: "habit-mens-bohannon-creek-performance-fishing-long-sleeve-tee",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B01HG8I9DI",
    slug: "mossy-oak-mens-front-logo-short-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B096N22WS7",
    slug: "columbia-womens-pfg-tidal-tee-ii-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07CQDCZSY",
    slug: "mossy-oak-long-sleeve-work-shirts-for-men-construction-shirts-for-men",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07BPBF9R6",
    slug: "jason-mathias-sea-spirit-mahi-womens-ls-high-performance-shirt",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07857116Y",
    slug: "refire-gear-mens-army-special-ops-military-tactical-jacket-softshell-fleece-hooded-outdoor-coat",
    categories: [
      { _id: "fishing-shirts-for-cold-weather" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B087W6524D",
    slug: "mossy-oak-fishing-hoodie-hooded-fishing-shirts-for-men-cooling-hoodie",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B088RQS4T9",
    slug: "mossy-oak-fishing-shirts-for-men-swim-shirts-beach-shirt-short-sleeve",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B01KN4MRF8",
    slug: "aw-fashions-hooker-on-the-weekend-funny-fisherman-gifts-fathers-day-mens-fishing-t-shirt",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B01L9H8E8C",
    slug: "hanes-sport-x-temp-mens-performance-long-sleeve-training-t-shirt",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B00KBZSQ64",
    slug: "hanes-mens-long-sleeve-cool-dri-t-shirt-upf-50-x-small-2-pack-safety-green",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07XGN8H2W",
    slug: "g-h-bass-co-mens-explorer-short-sleeve-fishing-shirt-solid-button-pocket",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B002616YYC",
    slug: "columbia-mens-tamiami-ii-long-sleeve-shirt-2",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08WRDXLZC",
    slug: "habit-mens-short-sleeve-river-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B088P8H78D",
    slug: "habit-womens-kachemak-hooded-performance-layer",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08KSFNB3X",
    slug: "hook-tackle-mens-anglers-delight-short-sleeve-embroidered-uv-sun-protection-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08675VPMS",
    slug: "o2tee-mens-american-flag-soft-slim-long-sleeve-compression-gym-trainning-casual-top",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B015EQG5K8",
    slug: "columbia-mens-pfg-bahama-ii-short-sleeve-shirt-sail-large",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B09L8MMYT3",
    slug: "simms-bass-pine-camo-t-shirt-100-cotton-tee-with-breathable-fabric-quality-fishing-apparel-for-men",
    categories: [
      { _id: "fishing-shirts-camo" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B09TM4LWDH",
    slug: "womens-upf-50-sun-protection-long-sleeve-t-shirt-outdoor-rashguard-hiking-hoodies-athletic-top-spf-shirt-all-season",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B09VS3YBJS",
    slug: "womens-upf-50-uv-sun-protection-shirt-rash-guard-dry-fit-spf-long-sleeve-swim-fishing-hiking-shirts-outdoor",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B082WW2LNL",
    slug: "bass-fishing-irish-american-flag-st-patricks-day-fisherman-t-shirt",
    categories: [
      { _id: "fishing-shirts-american-flag" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-for-kids" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B09FS4C1BY",
    slug: "huk-youth-performance-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-for-kids" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0C12FJS4Z",
    slug: "under-armour-womens-heatgear-armour-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0CG4D3X7C",
    slug: "columbia-mens-terminal-tackle-hoodie",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0819JVHQJ",
    slug: "sportides-mens-upf-50-uv-sun-protection-outdoor-sport-t-shirt-tee-la245",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B09C2HTL42",
    slug: "mossy-oak-mens-the-series-keep-calm-hunt-on-tee-short-sleeve-t-shirt-size-xl",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B08841ZNJK",
    slug: "mossy-oak-elements-fishing-brand-tee",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B014C39MRM",
    slug: "hanes-mens-long-sleeve-cool-dri-t-shirt-upf-50-medium-2-pack-1-graphite-1-navy",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B00L3LB4QO",
    slug: "columbia-sportswear-womens-bonehead-ii-short-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B08KRV4Q8L",
    slug: "charmleaks-womens-long-sleeve-rashguard-upf-50-sun-protection-swimsuit-top-striped-swim-shirts",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B071D3XCQ2",
    slug: "hanes-cool-dri-performance-mens-long-sleeve-t-shirt_deep-royal_l",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B071XPJQT1",
    slug: "hanes-cool-dri-performance-mens-long-sleeve-t-shirt_deep-red_s",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B06ZZLTT45",
    slug: "hanes-mens-tagless-t-shirt",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B006L89DOE",
    slug: "mossy-oak-mens-chamois-camouflage-hunting-shirt",
    categories: [
      { _id: "fishing-shirts-camo" },
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07B3VXVX7",
    slug: "amazon-brand-daily-ritual-womens-jersey-long-sleeve-scoop-neck-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0009MKNCO",
    slug: "hanes-tagless-t-shirt_deep-red_l",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B081VY13NG",
    slug: "priessei-mens-long-sleeve-upf-50-uv-sun-protection-hoodie-for-fishing-running-hiking",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B001BZDMF8",
    slug: "hanes-tagless-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0BTVLLTQF",
    slug: "pelagic-aquatek-marlin-dot-hoodie-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-pelagic" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B079THTM6Y",
    slug: "costa-del-mar-mens-top-water-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B00JUM2VAQ",
    slug: "hanes-mens-full-zip-eco-smart-fleece-hoodie",
    categories: [
      { _id: "fishing-shirts-hanes" },
      { _id: "fishing-shirts-for-cold-weather" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08SR1VYR7",
    slug: "salty-crew-mens-mariner-short-sleeve-tee",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B09WTZT9V8",
    slug: "pelagic-aquatek-game-fish-performance-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-pelagic" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0B82YJSTX",
    slug: "huk-mens-pursuit-crew-long-sleeve-sun-protecting-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B01NAUT1NZ",
    slug: "bamboo-cay-mens-embroidered-sailfish-freedom-button-up-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B01N7QWJJD",
    slug: "bamboo-cay-mens-short-sleeve-toucan-lounge-embroidered-hawaiian-tropical-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B084FT27DT",
    slug: "bamboo-cay-mens-short-sleeve-par-and-bar-casual-embroidered-woven-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B09RGP1JPT",
    slug: "bamboo-cay-menss-flying-turtles-embroidered-camp-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B06XHMTV9X",
    slug: "bamboo-cay-mens-short-sleeve-catch-of-the-day-embroidered-woven-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B018GWQ516",
    slug: "bamboo-cay-mens-short-sleeve-peekaboo-palm-casual-embroidered-woven-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0854GMM9W",
    slug: "bamboo-cay-mens-key-west-tropical-style-embroidered-camp-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B095JDNYS3",
    slug: "bamboo-cay-mens-vertical-salamanca-embroidered-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B072592NTP",
    slug: "bamboo-cay-mens-short-sleeve-pacific-paneled-palms-casual-embroidered-woven-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0BGZWGB23",
    slug: "bamboo-cay-mens-short-sleeve-island-leaf-nation-casual-embroidered-woven-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0B9VKKRT5",
    slug: "bamboo-cay-merry-christmas-shirt-men-short-sleeve-embroidered-button-down-shirts",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07N8H3SKF",
    slug: "bamboo-cay-mens-short-sleeve-flying-palms-casual-embroidered-hawaiian-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07NSP2113",
    slug: "bamboo-cay-mens-all-star-bird-of-paradise-casual-embroidered-hawaiian-button-down-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0BJVQQ37M",
    slug: "kastKing-upf50-fishing-shirts-for-men",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B09PTTNR2Q",
    slug: "coorun-mens-outdoor-hooded-shirts-with-mask",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-face-mask" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0953W9BNW",
    slug: "kastKing-upf-50-fishing-hoodie-shirt-for-men-and-women",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-face-mask" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B09GRHM2GC",
    slug: "riverruns-upf-50-fishing-hoodie",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-face-mask" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B096B5GB4K",
    slug: "bassdash-upf-50-mens-camo-fishing-hoodie",
    categories: [
      { _id: "fishing-shirts-camo" },
      { _id: "fishing-shirts-bassdash" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-face-mask" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0B9KQPDM5",
    slug: "bassdash-mens-upf-50-fishing-hiking-camo-hoodie-shirt-with-face-mask",
    categories: [
      { _id: "fishing-shirts-bassdash" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-face-mask" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B095SNPVPH",
    slug: "bassdash-womens-fishing-hoodie-shirt-with-face-mask-thumb-holes-upf-50-fs23w",
    categories: [
      { _id: "fishing-shirts-bassdash" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-face-mask" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0BWXGYB4B",
    slug: "piqidig-mens-sun-protection-hoodie-shirts-upf-50-song-sleeve-rash-guard-performance-athletic-running-hiking-t-shirt",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-face-mask" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B09H5MSXNX",
    slug: "bassdash-youth-upf50-performance-t-shirt-with-hood",
    categories: [
      { _id: "fishing-shirts-bassdash" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-for-kids" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0B833QQPN",
    slug: "huk-mens-pursuit-hoodie-sun-protecting-fishing-shirt-with-hood",
    categories: [
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07RDRZDX3",
    slug: "columbia-mens-terminal-tackle-long-sleeve-shirt-wicking-material",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B087W3KLVL",
    slug: "mossy-oak-fishing-hoodie-fishing-sweatshirts-for-men",
    categories: [
      { _id: "fishing-shirts-mossy-oak" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07NWZ6PBF",
    slug: "real-essentials-4-pack-mens-dry-fit-uv-moisture-wicking-upf-50-spf-sun-protective-fishing-hiking-swim-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07FVTG3YW",
    slug: "maviskin-mens-rash-guard-swim-shirts",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B084YH8MMF",
    slug: "bamboo-cay-mens-short-sleeve-florida-embroidered-camp-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0BGGR782W",
    slug: "funny-bass-fishing-quote-shirt-fishing-adult-humor-quote-t-shirt",
    categories: [
      { _id: "fishing-shirts-funny" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B09VPDLWQ3",
    slug: "cadmus-mens-workout-long-sleeve-fishing-shirts",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B09BLL1DWP",
    slug: "baitium-performance-fishing-gear",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-face-mask" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08NJM8SLT",
    slug: "bassdash-upf-50-mens-long-sleeve-fishing-shirt-with-mask-neck-gaiter-hoodie",
    categories: [
      { _id: "fishing-shirts-bassdash" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-face-mask" },
    ],
  },
  {
    asin: "B086DFYH3G",
    slug: "tortuga-moon-fishing-shirt-men-womens-performance-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0919W4ZLH",
    slug: "bassdash-mens-upf-50-sun-protection-uv-t-shirt",
    categories: [
      { _id: "fishing-shirts-bassdash" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0B832K1C9",
    slug: "huk-mens-pursuit-crew-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B085H6Z8ZC",
    slug: "palmyth-fishing-shirt-for-men-long-sleeve-sun-protection-uv-upf-50-t-shirts-with-pocket",
    categories: [
      { _id: "fishing-shirts-fish" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0C32VTGCT",
    slug: "rodeel-mens-fishing-shirts-for-men-long-sleeve-wicking-fabric-upf-50-sun-protection-performance-shirt",
    categories: [
      { _id: "fishing-shirts-fish" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0BF3G4GJP",
    slug: "baitium-fishing-shirts-long-sleeve-hooded",
    categories: [
      { _id: "fishing-shirts-fish" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-face-mask" },
    ],
  },
  {
    asin: "B0BKTBSRP6",
    slug: "guy-harvey-mens-offshore-fish-collection-short-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-fish" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B0B831Y1F8",
    slug: "huk-mens-kc-pursuit-long-sleeve-sun-protecting-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-fish" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0979NL42R",
    slug: "lrd-fishing-shirts-for-men-long-sleeve-upf-50-sun-protection-performance-shirt",
    categories: [
      { _id: "fishing-shirts-fish" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B09NS3BSVJ",
    slug: "salt-life-mens-incognito-long-sleeve-performance-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B00ZQ2H51E",
    slug: "bamboo-cay-mens-bamboos-on-the-loose-casual-embroidered-short-sleeve-woven-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B082YKBVP9",
    slug: "bamboo-cay-mens-crescent-flower-tropical-hawaiian-embroidered-camp-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B085LSRGZH",
    slug: "bamboo-cay-mens-hawaiian-pineapple-tropical-style-embroidered-camp-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
];

export default products;
