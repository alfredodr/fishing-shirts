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
    asin: "B088PQSL51",
    slug: "performance-fishing-hoodie-with-face-mask-hooded-sunblock-shirt-sun-shield-long-sleeve-upf50-tops-half-zip",
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
    asin: "B0BN7SC7VM",
    slug: "habit-mens-outdoor-long-sleeve-lightweight-Cooling-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B098NBK9PT",
    slug: "habit-mens-fourche-mountain-long-sleeve-mens-river-guide-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B081PSDQHY",
    slug: "xtansuo-upf-50-uv-hoodie-t-shirt",
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
    asin: "B08LMCR5CR",
    slug: "under-armour-womens-coldgear-authentics-mock-neck",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
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
    asin: "B07C4YXCFH",
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
    asin: "B06XRKK9V3",
    slug: "hanes-mens-long-sleeve-t-shirt",
    categories: [{ _id: "fishing-shirts-hanes" }],
  },
  {
    asin: "B014VGKIAU",
    slug: "hook-tackle-mens-seacliff-short-sleeve-uv-sun-protection-fishing-shirt",
    categories: [{ _id: "fishing-shirts-short-sleeve" }],
  },
  {
    asin: "B07NKM8YCM",
    slug: "bamboo-cay-mens-chest-bird-of-paradise-tropical-style-embroidered-hawaiian-button-down-shir",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B083KZ9BXV",
    slug: "american-flag-fishing-shirt-vintage-usa-bass-fisherman-gift-t-shirt",
    categories: [{ _id: "fishing-shirts-american-flag" }],
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
    asin: "B00V5CQDQC",
    slug: "aftco-samurai-rashguard-long-sleeve-shirt",
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
    asin: "B01MY8ZMX6",
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
      { _id: "fishing-shirts-for-cold" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07849VL73",
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
    asin: "B00GD22JNA",
    slug: "oneill-wetsuits",
    categories: [{ _id: "fishing-shirts-long-sleeve" }],
  },
  {
    asin: "B083BD1T7P",
    slug: "cqr-mens-performance-fishing-gear-upf-50-short-sleeve-breathable-pfg-rip-stop-shirt",
    categories: [
      { _id: "fishing-shirts-short-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07JYPRHCD",
    slug: "pretchic-mens-upf-50-uv-sun-protection-performance-long-sleeve-outdoor-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-pretchic" },
    ],
  },
  {
    asin: "B07XHNVX9G",
    slug: "g-h-bass-co-mens-explorer-short-sleeve-crewneck-t-shirt",
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
    ],
  },
  {
    asin: "B08XTRHPBW",
    slug: "huk-mens-icon-x-camo-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07RLVYQ4K",
    slug: "bassdash-mens-long-sleeve-fishing-shirt-upf50",
    categories: [
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07MWCSH9W",
    slug: "simms-solarflex-upf-50-shirt-long-sleeve-sun-protection-breathable",
    categories: [
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-simms" },
    ],
  },
  {
    asin: "B08CM528HZ",
    slug: "fish-skinz-womens-performance-fishing-shirt-upf-50-protection-mermaid-hot-pink",
    categories: [{ _id: "fishing-shirts-for-her" }],
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
    asin: "B09Z67SJK5",
    slug: "piscifun-performance-upf50-long-sleeve-fishing-t-shirt-with-hoodie",
    categories: [
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B08D69VR65",
    slug: "ogeenier-mens-upf-50-sun-protection-hoodie-shirt-long-sleeve-uv-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-hoodie" },
    ],
  },
  {
    asin: "B07JNGKLSD",
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
    asin: "B07NPFW2M6",
    slug: "habit-mens-belcoast-short-sleeve-river-guide-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-short-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B09M8LVQFH",
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
    ],
  },
  {
    asin: "B08WRSH7VH",
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
    asin: "B07ZZ53JHW",
    slug: "bassdash-womens-upf-50-sun-protection-long-sleeve-performance",
    categories: [{ _id: "fishing-shirts-hoodie" }],
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
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08CMMV17T",
    slug: "fish-skinz-mens-performance-fishing-shirt-uv-50-protection-blueline-flag-gray",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-performance" },
    ],
  },
  {
    asin: "B083R1S9DD",
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
    asin: "B07GQDJ2LB",
    slug: "huk-mens-performance-fishing-tee",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07M9Q4K8W",
    slug: "pretchic-mens-uv-sun-protection-upf-50-performance-short-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-pretchic" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07NPJTK38",
    slug: "habit-belcoast-short-sleeve-river-guide-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-short-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B08JCJMYKV",
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
    asin: "B087GH9JN2",
    slug: "mens-performance-vented-long-sleeve-fishing-shirt-1-4-zip-upf50-sun-protection-dry-fit-moisture-wicking",
    categories: [
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B08LTXPD6N",
    slug: "sougayilang-professional-fishing-jersey-long-sleeve-for-men-women-upf-50-sun-protection-with-moisture-wicking",
    categories: [{ _id: "fishing-shirts-jersey" }],
  },
  {
    asin: "B07MFX4G1X",
    slug: "baleaf-boys-upf-50-youth-spf-shirts-long-sleeve-shirt-basic-skins-sun-protection",
    categories: [
      { _id: "fishing-shirts-for-kids" },
      { _id: "fishing-shirts-baleaf" },
    ],
  },
  {
    asin: "B07H45Q9HT",
    slug: "huk-womens-performance-hoodie-water-resistant-stain-resistant-lightweight-performance-fleece",
    categories: [
      { _id: "fishing-shirts-for-cold" },
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
    asin: "B07QCQXP4X",
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
    asin: "B08GC5P4T3",
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
    asin: "B08B7XKFDJ",
    slug: "sun-protection-upf-50-linafin-chiller-pullover-long-sleeve-mens-fishing-hoodie-shirt-with-face-gaiter-performance",
    categories: [{ _id: "fishing-shirts-hoodie" }],
  },
  {
    asin: "B07P5DV67X",
    slug: "simms-mens-stone-cold-shirt-upf-30-quick-dry-long-sleeve-shirt-helps-you-stay-cool-anti-odor-technology-fishing-shirt-for-men",
    categories: [
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
    asin: "B01MTUPFXA",
    slug: "bigfish-skelefish-bass-upf50-long-sleeve-performance-fishing-shirt",
    categories: [{ _id: "fishing-shirts-long-sleeve" }],
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
    ],
  },
  {
    asin: "B073V9NP18",
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
    asin: "B07SJK3JP1",
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
    asin: "B07RS1CBZD",
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
    asin: "B082TY2BY2",
    slug: "womens-upf-50-uv-sun-protection-hoodie-shirt-dry-fit-spf-long-sleeve-outdoor-performance-fishing-hiking-shirts",
    categories: [{ _id: "fishing-shirts-for-her" }],
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
    asin: "B07NPN7SPF",
    slug: "habit-taku-bay-short-sleeve-river-guide-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B08573H1XH",
    slug: "spowind-mens-upf-50-sun-protection-hoodie-shirts-long-sleeve-spf-performance-fishing-t-shirt-with-thumbhole",
    categories: [{ _id: "fishing-shirts-hoodie" }],
  },
  {
    asin: "B07CW24VTB",
    slug: "under-armour-mens-tide-chaser-short-sleeve-shirt",
    categories: [{ _id: "fishing-shirts-short-sleeve" }],
  },
  {
    asin: "B014WDK8XY",
    slug: "a4-adult-cooling-performance-long-sleeve-t-shirt",
    categories: [{ _id: "fishing-shirts-long-sleeve" }],
  },
  {
    asin: "B0754S2HYK",
    slug: "amazon-brand-peak-velocity-mens-vxe-long-sleeve-quick-dry-loose-fit-t-shirt",
    categories: [{ _id: "fishing-shirts-long-sleeve" }],
  },
  {
    asin: "B0753FYCJB",
    slug: "baleaf-mens-rain-jacket-waterproof-with-hooded-lightweight-packable-bike-pullover-running-raincoat-poncho-windbreaker",
    categories: [{ _id: "fishing-shirts-hoodie" }],
  },
  {
    asin: "B01LXII55T",
    slug: "bamboo-cay-mens-short-sleeve-hurricane-palm-casual-embroidered-woven-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B018GWQ4Y4",
    slug: "bamboo-cay-mens-short-sleeve-peekaboo-palm-casual-embroidered-woven-shirt",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B00V63XPGQ",
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
    asin: "B002617RSO",
    slug: "columbia-mens-super-bonehead-classic-long-sleeve-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-performance" },
    ],
  },
  {
    asin: "B07DQ6Q5Q9",
    slug: "columbia-womens-bonehead-ii-w-long-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B072WFGF1H",
    slug: "columbia-womens-pfg-bahama-short-sleeve-shirt",
    categories: [
      { _id: "fishing-shirts-columbia" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B077441SJJ",
    slug: "g-h-bass-co-mens-summit-creek-seersucker-short-sleeve-button-down-plaid-shirt",
    categories: [{ _id: "fishing-shirts-short-sleeve" }],
  },
  {
    asin: "B0774LM8WH",
    slug: "g-h-bass-co-mens-trail-flex-short-sleeve-button-down-plaid-shirt",
    categories: [{ _id: "fishing-shirts-short-sleeve" }],
  },
  {
    asin: "B07NPLYV3D",
    slug: "habit-womens-schooner-cove-short-sleeve-river-guide-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B07HVG72MP",
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
    asin: "B087CJ8PRQ",
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
    asin: "B07NPMCX6W",
    slug: "habit-mens-taku-bay-long-sleeve-river-guide-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-habit" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B086CXLGJX",
    slug: "tortuga-moon-fishing-shirt-men-womens-upf-50-performance-long-sleeve",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-performance" },
    ],
  },
  {
    asin: "B07ZZ4BJK2",
    slug: "bassdash-upf-50-mens-uv-sun-protection-long-sleeve-performance-fishing-hoodie-hooded-shirts",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07R6YD6Y8",
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
    asin: "B07R56K91W",
    slug: "ezrun-mens-upf-50-uv-protection-hoodie-shirts-long-sleeve-sun-fishing-shirts",
    categories: [
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B07JNGKP2R",
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
    asin: "B073PQ8SG3",
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
    asin: "B088PS77GS",
    slug: "koofin-gear-womens-performance-fishing-hoodie-long-sleeve-upf50-tops-half-zip-thumb-hole-workout-sunshirt-drawcords",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-koofin" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B01CD8TVYM",
    slug: "kryptek-hyperion-long-sleeve-camo-shirt-lightweight-birds-eye-mesh-for-hunting-fishing-shirt-k-ore-collection",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0841K2R2N",
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
    asin: "B0887TB6VX",
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
    asin: "B084T4CSH6",
    slug: "mossy-oak-mens-long-sleeve-performance-fishing-shirt-with-gaiter",
    categories: [{ _id: "fishing-shirts-mossy-oak" }],
  },
  {
    asin: "B08C76X5Z2",
    slug: "reel-life-mens-short-sleeve-woven-fishing-shirt-pacific-series-fishin-all-over-uv-protection-breathable",
    categories: [
      { _id: "fishing-shirts-embroidery" },
      { _id: "fishing-shirts-for-him" },
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
    asin: "B00IEJ31N2",
    slug: "pelagic-ultratek-hooded-fishing-shirt-2",
    categories: [
      { _id: "fishing-shirts-pelagic" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
      { _id: "fishing-shirts-fish" },
    ],
  },
  {
    asin: "B08MPXQ79D",
    slug: "pelagic-deluxe-long-sleeve-fishing-t-shirt-size",
    categories: [
      { _id: "fishing-shirts-pelagic" },
      { _id: "fishing-shirts-fish" },
    ],
  },
  {
    asin: "B0855SLGKV",
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
    asin: "B08MLN7K5H",
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
    asin: "B07WLMXBSW",
    slug: "tsla-womens-upf-50-hoodie-long-sleeve-swim-shirt-uv-sun-protection-rash-guard-quick-dry-water-shirts",
    categories: [
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B084TQYKKS",
    slug: "womens-upf-50-uv-sun-protection-hoodie-long-sleeve-hiking-shirt-outdoor-performance-running-fishing-hoodie",
    categories: [{ _id: "fishing-shirts-for-her" }],
  },
  {
    asin: "B07RZ1GCLW",
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
    asin: "B003VCVRMO",
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
    asin: "B01MDOQNQ6",
    slug: "under-armour-womens-coldgear-armour-compression-crew-long-sleeve-t-shirt",
    categories: [
      { _id: "fishing-shirts-for-cold-weather" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B077Y8362K",
    slug: "under-armour-womens-coldgear-graphic-1-2-zip",
    categories: [
      { _id: "fishing-shirts-for-cold-weather" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B07BZ5J8K2",
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
    asin: "B07J1FVCSY",
    slug: "habit-kids-youth-long-sleeve-fishing-guide-shirt",
    categories: [
      { _id: "fishing-shirts-for-kids" },
      { _id: "fishing-shirts-habit" },
    ],
  },
  {
    asin: "B01GS9TUAC",
    slug: "columbia-mens-terminal-tackle-pfg-sleeve-ls-shirt",
    categories: [{ _id: "fishing-shirts-columbia" }],
  },
  {
    asin: "B082CF4ZP4",
    slug: "pretchic-mens-upf-50-uv-sun-protection-quick-dry-outdoor-t-shirt",
    categories: [{ _id: "fishing-shirts-pretchic" }],
  },
  {
    asin: "B07QJ36L2M",
    slug: "pretchic-mens-performance-cationic-long-sleeve-sport-t-shirt",
    categories: [{ _id: "fishing-shirts-pretchic" }],
  },
  {
    asin: "B082YHGSPH",
    slug: "simms-womens-solarflex-printed-fishing-hoody-with-upf-50",
    categories: [
      { _id: "fishing-shirts-simms" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B07TT7VQSQ",
    slug: "simms-lager-script-t-shirt-for-men-short-sleeve-crewneck-slim-fit-shirt-cotton-athletic-tee-shirt",
    categories: [
      { _id: "fishing-shirts-simms" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-short-sleeve" },
    ],
  },
  {
    asin: "B07P5FW6G5",
    slug: "simms-solarflex-upf-50-crewneck-shirt-long-sleeve-sun-protection-fishing-shirt-for-men-lightweight-breathable-moisture-wicking-anti-odor",
    categories: [
      { _id: "fishing-shirts-simms" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07JHX115W",
    slug: "simms-bass-logo-tech-tee-long-sleeve-fishing-shirt-sun-protection-angler-shirt-lightweight-breathable-moisture-wicking-anti-odor",
    categories: [
      { _id: "fishing-shirts-simms" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B0828RV9Q2",
    slug: "pelagic-vaportek-long-sleeve-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-pelagic" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B08MQBWNH3",
    slug: "pelagic-deluxe-premium-t-shirt",
    categories: [{ _id: "fishing-shirts-pelagic" }],
  },
  {
    asin: "B07L3GXFD9",
    slug: "pelagic-ultratek-hoodie-fishing-shirt",
    categories: [
      { _id: "fishing-shirts-pelagic" },
      { _id: "fishing-shirts-fish" },
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
    asin: "B00KRYP70M",
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
    asin: "B081G3SH6S",
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
    asin: "B017UXZRO8",
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
    asin: "B07BPBD6KX",
    slug: "jason-mathias-high-performance-fishing-shirt-sea-spirit-sailfish",
    categories: [{ _id: "fishing-shirts-performance" }],
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
    asin: "B076HQMVDB",
    slug: "hooked-soul-fishing-mens-upf-50-uv-sun-protection-outdoor-long-sleeve-performance-dri-fit-shirts",
    categories: [
      { _id: "fishing-shirts-performance" },
      { _id: "fishing-shirts-for-him" },
    ],
  },
  {
    asin: "B00DQAGAQY",
    slug: "under-armour-womens-tac-coldgear-infrared-crew-shirt",
    categories: [{ _id: "fishing-shirts-for-cold-weather" }],
  },
  {
    asin: "B085T9XZGJ",
    slug: "baleaf-mens-upf-50-hiking-shirt-long-sleeve-shirt-outdoor-lightweight-quick-dry-fishing-shirts",
    categories: [{ _id: "fishing-shirts-baleaf" }],
  },
  {
    asin: "B07TJ34QYS",
    slug: "baleaf-womens-long-sleeve-v-neck-dri-fit-uv-t-shirt-athletic-running-wicking-shirts",
    categories: [{ _id: "fishing-shirts-baleaf" }],
  },
  {
    asin: "B0719GTW1F",
    slug: "baleaf-mens-long-sleeve-rashguard-sun-protective-swim-shirt-upf-50",
    categories: [{ _id: "fishing-shirts-baleaf" }],
  },
  {
    asin: "B086V4YZB5",
    slug: "baleaf-womens-long-sleeve-hooded-rash-guard-sun-protection-side-adjustable-swim-shirt-coverups-upf-50",
    categories: [
      { _id: "fishing-shirts-baleaf" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B07V4M2PN1",
    slug: "huk-womens-picture-perfect-pursuit-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection",
    categories: [
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-for-her" },
    ],
  },
  {
    asin: "B07GSYVDC5",
    slug: "huk-mens-icon-x-hoodie-long-sleeve-performance-shirt-with-upf-30-sun-protection",
    categories: [
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-hoodie" },
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07V6SNLBN",
    slug: "huk-womens-southern-feed-pursuit-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection",
    categories: [
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-for-her" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07V6SKW81",
    slug: "huk-mens-mossy-oak-pursuit-long-sleeve-shirt-camo-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07SG6JVLV",
    slug: "huk-mens-icon-x-camo-fade-shirt",
    categories: [
      { _id: "fishing-shirts-for-him" },
      { _id: "fishing-shirts-huk" },
      { _id: "fishing-shirts-long-sleeve" },
    ],
  },
  {
    asin: "B07GQQ53S3",
    slug: "huk-mens-icon-x-camo-fade-long-sleeve-shirt",
    categories: [
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
    asin: "B07QZ6GYBM",
    slug: "weekend-hooker-fishing-shirt-long-sleeve-funny-t-shirt-cool-dry",
    categories: [{ _id: "fishing-shirts-funny" }],
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
    asin: "B07SSP2DTT",
    slug: "funny-fisherman-here-fishy-fishy-fishy-t-shirt-gift",
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
];

export default productDetails;
