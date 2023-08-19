const redirects = [
  {
    source: "/product-category/long-sleeve/",
    destination: "/product-category/fishing-shirts-long-sleeve",
    permanent: true,
  },
  {
    source: "/product-category/funny-fishing-shirts/",
    destination: "/product-category/fishing-shirts-funny",
    permanent: true,
  },
  {
    source: "/product/ann-arbor-funny-fishing-tee",
    destination:
      "/product/gotta-love-a-good-pole-dance-funny-fishing-pole-humor-fisherman-unisex-t-shirt",
    permanent: true,
  },
  {
    source:
      "/product/mens-cant-work-today-my-arm-is-in-a-cast-t-shirt-funny-fishing-graphic-top-guys/",
    destination: "/product/crazy-dog-funny-fishing-tee",
    permanent: true,
  },
  {
    source: "/product-category/for-her/",
    destination: "/product-category/fishing-shirts-for-her",
    permanent: true,
  },
  {
    source:
      "/product/i-just-want-to-drink-beer-and-jerk-my-rod-funny-fishing-t-shirt",
    destination:
      "/product/i-just-want-to-drink-beer-and-jerk-my-rod-funny-fishing-tee-t-shirt",
    permanent: true,
  },
  {
    source: "/product/aftco-samurai-hooded-performance-long-sleeve-shirt",
    destination: "/product/aftco-samurai-rashguard-long-sleeve-shirt",
    permanent: true,
  },
  {
    source:
      "/product/jason-mathias-strike-zone-sailfish-ls-high-performance-shirt",
    destination:
      "/product/jason-mathias-strike-zone-mako-shark-ls-high-performance-shirt",
    permanent: true,
  },
  {
    source:
      "/product/gamefish-usa-upf-50-microfiber-moisture-wicking-long-sleeve-performance-bass-fishing-shirt-2",
    destination:
      "/product/gamefish-usa-upf-50-microfiber-moisture-wicking-long-sleeve-performance-bass-fishing-shirt",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-bahama-ii-short-sleeve-shirt-2",
    destination: "/product/columbia-mens-bahama-ii-short-sleeve-shirt",
    permanent: true,
  },
  {
    source:
      "/product/american-flag-fishing-poles-fisherman-reel-rod-and-hook-t-shirt",
    destination: "/product/fishing-shirt-funny-american-flag-fishing-shirt",
    permanent: true,
  },
  {
    source: "/product/habit-men39s-belcoast-river-guide-s-s-shirt-black",
    destination: "/product/habit-men39s-belcoast-river-guide-s-s-shirt",
    permanent: true,
  },
  {
    source: "/articles/funny-fishing-shirts-that-put-a-smile-on-your-face/",
    destination: "/blog/funny-fishing-shirts-that-put-a-smile-on-your-face",
    permanent: true,
  },
  {
    source:
      "/product/id-rather-be-fishing-funny-novelty-humor-anti-social-fisher-fisherman-fish-tee-mens-tshirt",
    destination:
      "/product/crazy-bros-tees-id-rather-be-fishing-funny-sarcastic-fish-gift-for-dad-fisherman-mens-t-shirt",
    permanent: true,
  },
  {
    source: "/product/funny-fisherman-here-fishy-fishy-fishy-t-shirt-gift",
    destination:
      "/product/crazy-dog-t-shirts-mens-beer-fishy-fishy-tshirt-funny-fishing-drinking-tee",
    permanent: true,
  },
  {
    source:
      "/performance-fishing-hoodie-with-face-mask-hooded-sunblock-shirt-sun-shield-long-sleeve-upf50-dry-fit-quick-dry",
    destination:
      "/product/performance-fishing-hoodie-with-face-mask-hooded-sunblock-shirt-sun-shield-long-sleeve-upf50-dry-fit-quick-dry",
    permanent: true,
  },
  {
    source:
      "/products/columbia-womens-pfg-bahama-ii-long-sleeve-shirt-breathable-with-uv-protection",
    destination:
      "/product/columbia-womens-pfg-bahama-ii-long-sleeve-shirt-breathable-with-uv-protection",
    permanent: true,
  },
  {
    source: "/amdesco-mens-master-baiter-awesome-funny-fishing-t-shirt",
    destination:
      "/product/amdesco-mens-master-baiter-awesome-funny-fishing-t-shirt",
    permanent: true,
  },
  {
    source:
      "/vapor-apparel-mens-upf-50-uv-sun-protection-long-sleeve-performance-t-shirt-for-sports-and-outdoor-lifestyle",
    destination:
      "/product/vapor-apparel-mens-upf-50-uv-sun-protection-long-sleeve-performance-t-shirt-for-sports-and-outdoor-lifestyle",
    permanent: true,
  },
  {
    source:
      "/huk-mens-icon-x-hoodie-long-sleeve-performance-shirt-with-upf-30-sun-protection",
    destination:
      "/product/huk-mens-icon-x-hoodie-long-sleeve-performance-shirt-with-upf-30-sun-protection",
    permanent: true,
  },
  {
    source: "/fishing-shirts-performance",
    destination: "/product-category/fishing-shirts-performance",
    permanent: true,
  },
  {
    source: "/fishing-shirts-embroidery",
    destination: "/product-category/fishing-shirts-embroidery",
    permanent: true,
  },
  {
    source:
      "/simms-lager-script-t-shirt-for-men-short-sleeve-crewneck-slim-fit-shirt-cotton-athletic-tee-shirt",
    destination:
      "/product/simms-lager-script-t-shirt-for-men-short-sleeve-crewneck-slim-fit-shirt-cotton-athletic-tee-shirt",
    permanent: true,
  },
  {
    source:
      "/upf-50-long-sleeve-performance-fishing-shirt-eat-drink-fish-repeat-bass",
    destination:
      "/product/upf-50-long-sleeve-performance-fishing-shirt-eat-drink-fish-repeat-bass",
    permanent: true,
  },
  {
    source:
      "/performance-fishing-hoodie-long-sleeve-dry-fit-sun-protection-shirt-lightweight-outdoor",
    destination:
      "/product/performance-fishing-hoodie-long-sleeve-dry-fit-sun-protection-shirt-lightweight-outdoor",
    permanent: true,
  },
  {
    source:
      "/tsla-womens-upf-50-hoodie-long-sleeve-swim-shirt-uv-sun-protection-rash-guard-quick-dry-water-shirts",
    destination:
      "/product/tsla-womens-upf-50-hoodie-long-sleeve-swim-shirt-uv-sun-protection-rash-guard-quick-dry-water-shirts",
    permanent: true,
  },
  {
    source:
      "/long-sleeve-fishing-t-shirt-for-men-and-women-upf-50-dri-fit-performance-clothing-southern-fin-apparel",
    destination:
      "/product/long-sleeve-fishing-t-shirt-for-men-and-women-upf-50-dri-fit-performance-clothing-southern-fin-apparel",
    permanent: true,
  },
  {
    source: "/under-armour-womens-coldgear",
    destination: "/product/under-armour-womens-coldgear",
    permanent: true,
  },
  {
    source:
      "/baleaf-womens-long-sleeve-hooded-rash-guard-sun-protection-side-adjustable-swim-shirt-coverups-upf-50",
    destination:
      "/product/baleaf-womens-long-sleeve-hooded-rash-guard-sun-protection-side-adjustable-swim-shirt-coverups-upf-50",
    permanent: true,
  },
  {
    source:
      "/habit-womens-schooner-cove-short-sleeve-river-guide-fishing-shirt",
    destination:
      "/product/habit-womens-schooner-cove-short-sleeve-river-guide-fishing-shirt",
    permanent: true,
  },
  {
    source:
      "/baleaf-womens-upf-50-sun-protection-t-shirt-long-short-sleeve-outdoor-performance",
    destination:
      "/product/baleaf-womens-upf-50-sun-protection-t-shirt-long-short-sleeve-outdoor-performance",
    permanent: true,
  },
  {
    source: "/southern-fin-apparel-womens",
    destination: "/product/southern-fin-apparel-womens",
    permanent: true,
  },
  {
    source:
      "/pretchic-mens-uv-sun-protection-upf-50-performance-short-sleeve-t-shirt",
    destination:
      "/product/pretchic-mens-uv-sun-protection-upf-50-performance-short-sleeve-t-shirt",
    permanent: true,
  },
  {
    source:
      "/huk-mens-kryptek-icon-x-long-sleeve-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection-reflective-coating",
    destination:
      "/product/huk-mens-kryptek-icon-x-long-sleeve-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection-reflective-coating",
    permanent: true,
  },
  {
    source:
      "/performance-fishing-hoodie-long-sleeve-hooded-sunblock-shirt-upf-50-dry-fit-quick-dry-hoody-sports-sweatshirt",
    destination:
      "/product/performance-fishing-hoodie-long-sleeve-hooded-sunblock-shirt-upf-50-dry-fit-quick-dry-hoody-sports-sweatshirt",
    permanent: true,
  },
  {
    source: "/pelagic-game-fish-premium-t-shirt",
    destination: "/product/pelagic-game-fish-premium-t-shirt",
    permanent: true,
  },
  {
    source: "/habit-mens-ts1156-long-sleeve-river-guide-fishing-shirt",
    destination:
      "/product/habit-mens-ts1156-long-sleeve-river-guide-fishing-shirt",
    permanent: true,
  },
  {
    source: "/products/under-armour-womens-coldgear-graphic-1-2-zip",
    destination: "/product/under-armour-womens-coldgear-graphic-1-2-zip",
    permanent: true,
  },
  {
    source:
      "/products/simms-womens-solarflex-printed-fishing-hoody-with-upf-50",
    destination:
      "/product/simms-womens-solarflex-printed-fishing-hoody-with-upf-50",
    permanent: true,
  },
  {
    source:
      "/products/telaleo-mens-long-sleeve-sun-protection-t-shirt-upf-50-athletic-workout-hoodie-spf-for-outdoor-fishing-running-hiking",
    destination:
      "/product/telaleo-mens-long-sleeve-sun-protection-t-shirt-upf-50-athletic-workout-hoodie-spf-for-outdoor-fishing-running-hiking",
    permanent: true,
  },
  {
    source:
      "/products/baleaf-womens-long-sleeve-hooded-rash-guard-sun-protection-side-adjustable-swim-shirt-coverups-upf-50",
    destination:
      "/product/baleaf-womens-long-sleeve-hooded-rash-guard-sun-protection-side-adjustable-swim-shirt-coverups-upf-50",
    permanent: true,
  },
  {
    source: "/products/aftco-samurai-rashguard-long-sleeve-shirt",
    destination: "/product/aftco-samurai-rashguard-long-sleeve-shirt",
    permanent: true,
  },
  {
    source: "/products/baleaf-mens-upf-50",
    destination: "/product/baleaf-mens-upf-50",
    permanent: true,
  },
  {
    source:
      "/products/g-h-bass-co-mens-summit-creek-seersucker-short-sleeve-button-down-plaid-shirt",
    destination:
      "/product/g-h-bass-co-mens-summit-creek-seersucker-short-sleeve-button-down-plaid-shirt",
    permanent: true,
  },
  {
    source: "/products/threadrock-mens-fishing-american-flag-t-shirt",
    destination: "/product/threadrock-mens-fishing-american-flag-t-shirt",
    permanent: true,
  },
  {
    source:
      "/products/coolibar-upf-50-kids-andros-fishing-hoodie-sun-protective",
    destination:
      "/product/coolibar-upf-50-kids-andros-fishing-hoodie-sun-protective",
    permanent: true,
  },
  {
    source:
      "/salty-scales-redfish-snook-trout-long-sleeve-fishing-shirt-for-men-dri-fit-performance-clothing",
    destination:
      "/product/salty-scales-redfish-snook-trout-long-sleeve-fishing-shirt-for-men-dri-fit-performance-clothing",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-long-sleeve/page/3/",
    destination: "/product-category/fishing-shirts-long-sleeve?page=3",
    permanent: true,
  },
  {
    source:
      "/biylaclesen-mens-jersey-golf-polo-shirts-outdoor-pique-performance-tactical-military-long-sleeve-shirts",
    destination:
      "/product/biylaclesen-mens-jersey-golf-polo-shirts-outdoor-pique-performance-tactical-military-long-sleeve-shirts",
    permanent: true,
  },
  {
    source: "/habit-mens-belcoast-short-sleeve-river-guide-fishing-shirt",
    destination:
      "/product/habit-mens-belcoast-short-sleeve-river-guide-fishing-shirt",
    permanent: true,
  },
  {
    source: "/huk-mens-cw-cold-weather-water-resistant-icon-x-hoodie",
    destination: "/product-category/fishing-shirts-huk",
    permanent: true,
  },
  {
    source:
      "/gamefish-usa-upf-50-microfiber-moisture-wicking-long-sleeve-performance-bass-fishing-shirt-2",
    destination:
      "/product/gamefish-usa-upf-50-microfiber-moisture-wicking-long-sleeve-performance-bass-fishing-shirt",
    permanent: true,
  },
  {
    source: "/huk-mens-icon-camo-hoodie-long-sleeve-fishing-shirts",
    destination:
      "/product/huk-mens-icon-camo-hoodie-long-sleeve-fishing-shirts",
    permanent: true,
  },
  {
    source: "/columbia-mens-pfg-tamiami-ii-long-sleeve-shirt",
    destination: "/product/columbia-mens-pfg-tamiami-ii-long-sleeve-shirt",
    permanent: true,
  },
  {
    source: "/fishing-shirts-jersey",
    destination: "/product-category/fishing-shirts-jersey",
    permanent: true,
  },
  {
    source: "/habit-mens-coolcore-whitehorn-l-s-performance-gaiter-hoodie",
    destination:
      "/product/habit-mens-coolcore-whitehorn-l-s-performance-gaiter-hoodie",
    permanent: true,
  },
  {
    source:
      "/huk-womens-southern-feed-pursuit-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection",
    destination:
      "/product/huk-womens-southern-feed-pursuit-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection",
    permanent: true,
  },
  {
    source: "/oneill-wetsuits",
    destination: "/product/oneill-wetsuits",
    permanent: true,
  },
  {
    source:
      "/ogeenier-mens-upf-50-sun-protection-hoodie-shirt-long-sleeve-uv-fishing-shirt",
    destination:
      "/product/ogeenier-mens-upf-50-sun-protection-hoodie-shirt-long-sleeve-uv-fishing-shirt",
    permanent: true,
  },
  {
    source: "/southern-attitude-salty-anchor",
    destination: "/product/southern-attitude-salty-anchor",
    permanent: true,
  },
  {
    source:
      "/sand-salt-surf-sun-vintage-crab-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    destination:
      "/product/sand-salt-surf-sun-vintage-crab-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    permanent: true,
  },
  {
    source:
      "/womens-hooking-aint-easy-funny-fishing-girl-women-flower-saying-t-shirt",
    destination:
      "/product/womens-hooking-aint-easy-funny-fishing-girl-women-flower-saying-t-shirt",
    permanent: true,
  },
  {
    source:
      "/telaleo-mens-long-sleeve-sun-protection-t-shirt-upf-50-athletic-workout-hoodie-spf-for-outdoor-fishing-running-hiking",
    destination:
      "/product/telaleo-mens-long-sleeve-sun-protection-t-shirt-upf-50-athletic-workout-hoodie-spf-for-outdoor-fishing-running-hiking",
    permanent: true,
  },
  {
    source:
      "/trailcrest-fishing-mossy-oak-elements-womens-pullover-long-sleeve-fishing-t-shirt-4-way-stretch-50-upf-sun-protection",
    destination:
      "/product/trailcrest-fishing-mossy-oak-elements-womens-pullover-long-sleeve-fishing-t-shirt-4-way-stretch-50-upf-sun-protection",
    permanent: true,
  },
  {
    source: "/willit-mens-hooded-ls-long-sleeve-fishing-shirt",
    destination: "/product/willit-mens-hooded-ls-long-sleeve-fishing-shirt",
    permanent: true,
  },
  {
    source:
      "/baleaf-womens-hoodie-shirts-with-face-cover-long-sleeve-upf-50-lightweight-quick-dry-spf-neck-gaiter-hiking-fishing-outdoor",
    destination:
      "/product/baleaf-womens-hoodie-shirts-with-face-cover-long-sleeve-upf-50-lightweight-quick-dry-spf-neck-gaiter-hiking-fishing-outdoor",
    permanent: true,
  },
  {
    source:
      "/baleaf-womens-hoodie-shirts-with-face-cover-long-sleeve-upf-50-lightweight-quick-dry-spf-neck-gaiter-hiking-fishing-outdoor",
    destination:
      "/product/baleaf-womens-hoodie-shirts-with-face-cover-long-sleeve-upf-50-lightweight-quick-dry-spf-neck-gaiter-hiking-fishing-outdoor",
    permanent: true,
  },
  {
    source:
      "/willit-womens-upf-50-sun-protection-hoodie-shirt-long-sleeve-spf-uv-top-lightweight-quick-dry",
    destination:
      "/product/willit-womens-upf-50-sun-protection-hoodie-shirt-long-sleeve-spf-uv-top-lightweight-quick-dry",
    permanent: true,
  },
  {
    source:
      "/aw-fashions-hooker-on-the-weekend-funny-fisherman-gifts-fathers-day-mens-fishing-t-shirt",
    destination:
      "/product/weekend-hooker-fishing-shirt-long-sleeve-funny-t-shirt-cool-dry",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-for-her/feed/",
    destination: "/product-category/fishing-shirts-for-her",
    permanent: true,
  },
  {
    source: "/fishing-shirts-short-sleeve",
    destination: "/product-category/fishing-shirts-short-sleeve",
    permanent: true,
  },
  {
    source:
      "/pretchic-mens-upf-50-uv-sun-protection-performance-long-sleeve-outdoor-t-shirt",
    destination:
      "/product/pretchic-mens-upf-50-uv-sun-protection-performance-long-sleeve-outdoor-t-shirt",
    permanent: true,
  },
  {
    source:
      "/gamefish-usa-mens-upf-50-long-sleeve-microfiber-moisture-wicking-performance-fishing-shirt-sport-fishing",
    destination:
      "/product/gamefish-usa-mens-upf-50-long-sleeve-microfiber-moisture-wicking-performance-fishing-shirt-sport-fishing",
    permanent: true,
  },
  {
    source: "/funny-fisherman-here-fishy-fishy-fishy-t-shirt-gift",
    destination:
      "/product/crazy-dog-t-shirts-mens-beer-fishy-fishy-tshirt-funny-fishing-drinking-tee",
    permanent: true,
  },
  {
    source: "/coolibar-upf-50-mens-andros-fishing-hoodie-sun-protective",
    destination:
      "/product/coolibar-upf-50-mens-andros-fishing-hoodie-sun-protective",
    permanent: true,
  },
  {
    source: "/fishing-shirts-for-her",
    destination: "/product-category/fishing-shirts-for-her",
    permanent: true,
  },
  {
    source: "/reel-cool-poppa-shirt-american-flag-fishing-birthday-gifts",
    destination:
      "/product/reel-cool-poppa-shirt-american-flag-fishing-birthday-gifts",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-funny/page/1/",
    destination: "/product-category/fishing-shirts-funny",
    permanent: true,
  },
  {
    source: "/fishing-shirts-for-cold-weather",
    destination: "/product-category/fishing-shirts-for-cold-weather",
    permanent: true,
  },
  {
    source:
      "/mossy-oak-short-sleeve-fishing-shirts-for-men-sun-protection-clothing-men",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/boladeci-mens-upf-50-sun-protection-quick-dry-long-sleeve-hoodie-t-shirts-for-fishing-hiking-swimming",
    destination:
      "/product/boladeci-mens-upf-50-sun-protection-quick-dry-long-sleeve-hoodie-t-shirts-for-fishing-hiking-swimming",
    permanent: true,
  },
  {
    source: "/baleaf-womens-long-sleeve-sun-protection-quick-dry",
    destination: "/product/baleaf-womens-long-sleeve-sun-protection-quick-dry",
    permanent: true,
  },
  {
    source: "/fishing-shirts-for-him",
    destination: "/product-category/fishing-shirts-for-him",
    permanent: true,
  },
  {
    source:
      "/jason-mathias-american-flag-bass-ls-high-performance-long-sleeve-t-shirt",
    destination:
      "/product/jason-mathias-american-flag-bass-ls-high-performance-long-sleeve-t-shirt",
    permanent: true,
  },
  {
    source: "/product/hanes-mens-long-sleeve",
    destination: "/product/hanes-mens-long-sleeve-t-shirt",
    permanent: true,
  },
  {
    source: "/this-girl-loves-fishing-with-her-husband-funny-t-shirts",
    destination:
      "/product/this-girl-loves-fishing-with-her-husband-funny-t-shirts",
    permanent: true,
  },
  {
    source: "/coolibar-upf-50-kids-andros-fishing-hoodie-sun-protective",
    destination:
      "/product/coolibar-upf-50-kids-andros-fishing-hoodie-sun-protective",
    permanent: true,
  },
  {
    source:
      "/womens-upf-50-uv-sun-protection-hoodie-long-sleeve-hiking-shirt-outdoor-performance-running-fishing-hoodie",
    destination:
      "/product/womens-upf-50-uv-sun-protection-hoodie-long-sleeve-hiking-shirt-outdoor-performance-running-fishing-hoodie",
    permanent: true,
  },
  {
    source:
      "/habit-mens-fourche-mountain-long-sleeve-mens-river-guide-fishing-shirt",
    destination:
      "/product/habit-mens-fourche-mountain-long-sleeve-mens-river-guide-fishing-shirt",
    permanent: true,
  },
  {
    source:
      "/hiskywin-womens-long-sleeve-uv-sun-protection-rash-guard-side-adjustable-wetsuit-swimsuit-top",
    destination:
      "/product/hiskywin-womens-long-sleeve-uv-sun-protection-rash-guard-side-adjustable-wetsuit-swimsuit-top",
    permanent: true,
  },
  {
    source:
      "/mens-keepin-it-reel-tshirt-funny-cool-fishing-bass-outdoors-sporting-tee",
    destination:
      "/product/mens-keepin-it-reel-tshirt-funny-cool-fishing-bass-outdoors-sporting-tee",
    permanent: true,
  },
  {
    source:
      "/little-donkey-andy-mens-upf-50-uv-protection-shirt-long-sleeve-fishing-shirt-breathable-and-fast-dry",
    destination:
      "/product/little-donkey-andy-mens-upf-50-uv-protection-shirt-long-sleeve-fishing-shirt-breathable-and-fast-dry",
    permanent: true,
  },
  {
    source: "/mossy-oak-fishing-hoodie",
    destination: "/product/mossy-oak-fishing-hoodie",
    permanent: true,
  },
  {
    source:
      "/simms-solarflex-upf-50-shirt-long-sleeve-sun-protection-breathable",
    destination:
      "/product/simms-solarflex-upf-50-shirt-long-sleeve-sun-protection-breathable",
    permanent: true,
  },
  {
    source:
      "/sand-salt-surf-sun-colorful-rather-be-fishing-youth-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    destination:
      "/product/sand-salt-surf-sun-colorful-rather-be-fishing-youth-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    permanent: true,
  },
  {
    source: "/this-is-my-lucky-fishing-shirt-funny-retro-t-shirt",
    destination: "/product/this-is-my-lucky-fishing-shirt-funny-retro-t-shirt",
    permanent: true,
  },
  {
    source: "/pretchic-mens-performance-cationic-long-sleeve-sport-t-shirt",
    destination:
      "/product/pretchic-mens-performance-cationic-long-sleeve-sport-t-shirt",
    permanent: true,
  },
  {
    source: "/koofin-gear-womens-long-sleeve-performance-fishing-hoodie",
    destination:
      "/product/koofin-gear-womens-long-sleeve-performance-fishing-hoodie",
    permanent: true,
  },
  {
    source: "/koofin-fishing-hooded-shirt",
    destination: "/product/koofin-fishing-hooded-shirt",
    permanent: true,
  },
  {
    source: "/weekend-hooker-fishing-shirt-long-sleeve-funny-t-shirt-cool-dry",
    destination:
      "/product/weekend-hooker-fishing-shirt-long-sleeve-funny-t-shirt-cool-dry",
    permanent: true,
  },
  {
    source: "/hanes-mens-cool-dri-long-sleeve-performance-t-shirt-482l",
    destination:
      "/product/hanes-mens-cool-dri-long-sleeve-performance-t-shirt-482l",
    permanent: true,
  },
  {
    source: "/g-h-bass-co-mens-explorer-short-sleeve-crewneck-t-shirt",
    destination:
      "/product/g-h-bass-co-mens-explorer-short-sleeve-crewneck-t-shirt",
    permanent: true,
  },
  {
    source:
      "/simms-mens-solarflex-upf-50-uv-sun-protection-outdoor-long-sleeve-performance-fishing-shirt",
    destination:
      "/product/simms-mens-solarflex-upf-50-uv-sun-protection-outdoor-long-sleeve-performance-fishing-shirt",
    permanent: true,
  },
  {
    source: "/oneill-youth-basic-skins-upf-50-long-sleeve-sun-shirt",
    destination:
      "/product/oneill-youth-basic-skins-upf-50-long-sleeve-sun-shirt",
    permanent: true,
  },
  {
    source: "/ist-hooded-spearfishing-rashguard-with-loading-pad",
    destination: "/product/ist-hooded-spearfishing-rashguard-with-loading-pad",
    permanent: true,
  },
  {
    source: "/walleye-fishing-gift-american-flag-funny-fisherman-tshirt",
    destination:
      "/product/walleye-fishing-gift-american-flag-funny-fisherman-tshirt",
    permanent: true,
  },
  {
    source: "/jason-mathias-strike-zone-mako-shark-ls-high-performance-shirt",
    destination:
      "/product/jason-mathias-strike-zone-mako-shark-ls-high-performance-shirt",
    permanent: true,
  },
  {
    source: "/columbia-mens-low-drag-offshore-short-sleeve-shirt",
    destination: "/product/columbia-mens-low-drag-offshore-short-sleeve-shirt",
    permanent: true,
  },
  {
    source:
      "/my-fishing-retirement-plan-funny-fish-pole-humor-fisherman-men-joke-t-shirt",
    destination:
      "/product/my-fishing-retirement-plan-funny-fish-pole-humor-fisherman-men-joke-t-shirt",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-long-sleeve/page/1/",
    destination: "/product-category/fishing-shirts-long-sleeve",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-hoodie/page/1/",
    destination: "/product-category/fishing-shirts-hoodie",
    permanent: true,
  },
  {
    source: "/go-all-out-inc-funny-tee",
    destination: "/product/go-all-out-inc-funny-tee",
    permanent: true,
  },
  {
    source: "/product-category/funny-fishing-shirts/page/2/",
    destination: "/product-category/fishing-shirts-funny?page=2",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-womens-upf-50-sun-protection-hooded-shirt-long-sleeve-athletic-quick-dry-tops/",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/piscifun-performance-upf50-long-sleeve-fishing-t-shirt-with-hoodie",
    destination:
      "/product/piscifun-performance-upf50-long-sleeve-fishing-t-shirt-with-hoodie",
    permanent: true,
  },
  {
    source: "/product/pelagic-aquatek-game-fish-performance-fishing-shirt",
    destination: "/product-category/fishing-shirts-pelagic",
    permanent: true,
  },
  {
    source:
      "/product/naviskin-mens-upf-50-sun-protection-fishing-shirt-long-sleeve-quick-drying-lightweight-hiking-shirt-cooling",
    destination:
      "/product/naviskin-mens-upf-50-sun-protection-fishing-shirt-long-sleeve",
    permanent: true,
  },
  {
    source:
      "/product/performance-fishing-hoodie-with-face-mask-hooded-sunblock-shirt-sun-shield-long-sleeve-upf50-tops-half-zip",
    destination:
      "/product/baleaf-mens-long-sleeve-upf-50-uv-sun-protection-shirt-spf-lightweight-quick-dry-hiking-fishing-shirt",
    permanent: true,
  },
  {
    source: "/fishingshirtsnow-com-sitemap",
    destination: "/sitemap",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-funny/page/2",
    destination: "/product-category/fishing-shirts-funny?page=2",
    permanent: true,
  },
  {
    source:
      "/crazy-dog-t-shirts-mens-part-time-hooker-tshirt-funny-outdoor-fishing-tee-for-guy",
    destination:
      "/product/crazy-dog-t-shirts-mens-part-time-hooker-tshirt-funny-outdoor-fishing-tee-for-guys",
    permanent: true,
  },
  {
    source: "/jason-mathias-high-performance-fishing-shirt-sea-spirit-sailfish",
    destination:
      "/product/jason-mathias-high-performance-fishing-shirt-sea-spirit-sailfish",
    permanent: true,
  },
  {
    source:
      "/piscifun-performance-upf50-long-sleeve-fishing-t-shirt-with-hoodie",
    destination:
      "/product/piscifun-performance-upf50-long-sleeve-fishing-t-shirt-with-hoodie",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-mens-rain-jacket-waterproof-with-hooded-lightweight-packable-bike-pullover-running-raincoat-poncho-windbreaker",
    destination: "/store",
    permanent: true,
  },
];
export default redirects;
