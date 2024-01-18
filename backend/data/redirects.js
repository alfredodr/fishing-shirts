const redirects = [
  {
    source: "/product-category/long-sleeve/",
    destination: "/product-category/fishing-shirts-long-sleeve/",
    permanent: true,
  },
  {
    source: "/product-category/funny-fishing-shirts/",
    destination: "/product-category/fishing-shirts-funny/",
    permanent: true,
  },
  {
    source: "/product/ann-arbor-funny-fishing-tee",
    destination:
      "/product/gotta-love-a-good-pole-dance-funny-fishing-pole-humor-fisherman-unisex-t-shirt/",
    permanent: true,
  },
  {
    source: "/product-category/for-her/",
    destination: "/product-category/fishing-shirts-for-her/",
    permanent: true,
  },
  {
    source:
      "/product/i-just-want-to-drink-beer-and-jerk-my-rod-funny-fishing-t-shirt",
    destination:
      "/product/i-just-want-to-drink-beer-and-jerk-my-rod-funny-fishing-tee-t-shirt/",
    permanent: true,
  },
  {
    source: "/product/aftco-samurai-hooded-performance-long-sleeve-shirt",
    destination: "/product/aftco-samurai-rashguard-long-sleeve-shirt/",
    permanent: true,
  },
  {
    source:
      "/product/jason-mathias-strike-zone-sailfish-ls-high-performance-shirt",
    destination:
      "/product/jason-mathias-strike-zone-mako-shark-ls-high-performance-shirt/",
    permanent: true,
  },
  {
    source:
      "/product/gamefish-usa-upf-50-microfiber-moisture-wicking-long-sleeve-performance-bass-fishing-shirt-2",
    destination:
      "/product/gamefish-usa-upf-50-microfiber-moisture-wicking-long-sleeve-performance-bass-fishing-shirt/",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-bahama-ii-short-sleeve-shirt-2",
    destination: "/product/columbia-mens-bahama-ii-short-sleeve-shirt/",
    permanent: true,
  },
  {
    source:
      "/product/american-flag-fishing-poles-fisherman-reel-rod-and-hook-t-shirt",
    destination: "/product/fishing-shirt-funny-american-flag-fishing-shirt/",
    permanent: true,
  },
  {
    source: "/product/habit-men39s-belcoast-river-guide-s-s-shirt-black",
    destination: "/product/habit-men39s-belcoast-river-guide-s-s-shirt/",
    permanent: true,
  },
  {
    source: "/articles/funny-fishing-shirts-that-put-a-smile-on-your-face/",
    destination: "/blog/funny-fishing-shirts-that-put-a-smile-on-your-face/",
    permanent: true,
  },
  {
    source:
      "/product/id-rather-be-fishing-funny-novelty-humor-anti-social-fisher-fisherman-fish-tee-mens-tshirt",
    destination:
      "/product/crazy-bros-tees-id-rather-be-fishing-funny-sarcastic-fish-gift-for-dad-fisherman-mens-t-shirt/",
    permanent: true,
  },
  {
    source: "/product/funny-fisherman-here-fishy-fishy-fishy-t-shirt-gift",
    destination:
      "/product/crazy-dog-t-shirts-mens-beer-fishy-fishy-tshirt-funny-fishing-drinking-tee/",
    permanent: true,
  },
  {
    source:
      "/performance-fishing-hoodie-with-face-mask-hooded-sunblock-shirt-sun-shield-long-sleeve-upf50-dry-fit-quick-dry",
    destination:
      "/product/performance-fishing-hoodie-with-face-mask-hooded-sunblock-shirt-sun-shield-long-sleeve-upf50-dry-fit-quick-dry/",
    permanent: true,
  },
  {
    source:
      "/products/columbia-womens-pfg-bahama-ii-long-sleeve-shirt-breathable-with-uv-protection",
    destination:
      "/product/columbia-womens-pfg-bahama-ii-long-sleeve-shirt-breathable-with-uv-protection/",
    permanent: true,
  },
  {
    source: "/amdesco-mens-master-baiter-awesome-funny-fishing-t-shirt",
    destination:
      "/product/amdesco-mens-master-baiter-awesome-funny-fishing-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/vapor-apparel-mens-upf-50-uv-sun-protection-long-sleeve-performance-t-shirt-for-sports-and-outdoor-lifestyle",
    destination:
      "/product/vapor-apparel-mens-upf-50-uv-sun-protection-long-sleeve-performance-t-shirt-for-sports-and-outdoor-lifestyle/",
    permanent: true,
  },
  {
    source:
      "/huk-mens-icon-x-hoodie-long-sleeve-performance-shirt-with-upf-30-sun-protection",
    destination:
      "/product/huk-mens-icon-x-hoodie-long-sleeve-performance-shirt-with-upf-30-sun-protection/",
    permanent: true,
  },
  {
    source: "/fishing-shirts-performance",
    destination: "/product-category/fishing-shirts-performance/",
    permanent: true,
  },
  {
    source: "/fishing-shirts-embroidery",
    destination: "/product-category/fishing-shirts-embroidery/",
    permanent: true,
  },
  {
    source:
      "/simms-lager-script-t-shirt-for-men-short-sleeve-crewneck-slim-fit-shirt-cotton-athletic-tee-shirt",
    destination:
      "/product/simms-lager-script-t-shirt-for-men-short-sleeve-crewneck-slim-fit-shirt-cotton-athletic-tee-shirt/",
    permanent: true,
  },
  {
    source:
      "/upf-50-long-sleeve-performance-fishing-shirt-eat-drink-fish-repeat-bass",
    destination:
      "/product/upf-50-long-sleeve-performance-fishing-shirt-eat-drink-fish-repeat-bass/",
    permanent: true,
  },
  {
    source:
      "/performance-fishing-hoodie-long-sleeve-dry-fit-sun-protection-shirt-lightweight-outdoor",
    destination:
      "/product/performance-fishing-hoodie-long-sleeve-dry-fit-sun-protection-shirt-lightweight-outdoor/",
    permanent: true,
  },
  {
    source:
      "/tsla-womens-upf-50-hoodie-long-sleeve-swim-shirt-uv-sun-protection-rash-guard-quick-dry-water-shirts",
    destination:
      "/product/tsla-womens-upf-50-hoodie-long-sleeve-swim-shirt-uv-sun-protection-rash-guard-quick-dry-water-shirts/",
    permanent: true,
  },
  {
    source:
      "/long-sleeve-fishing-t-shirt-for-men-and-women-upf-50-dri-fit-performance-clothing-southern-fin-apparel",
    destination:
      "/product/long-sleeve-fishing-t-shirt-for-men-and-women-upf-50-dri-fit-performance-clothing-southern-fin-apparel/",
    permanent: true,
  },
  {
    source: "/under-armour-womens-coldgear",
    destination: "/product/under-armour-womens-coldgear/",
    permanent: true,
  },
  {
    source:
      "/baleaf-womens-long-sleeve-hooded-rash-guard-sun-protection-side-adjustable-swim-shirt-coverups-upf-50",
    destination:
      "/product/baleaf-womens-long-sleeve-hooded-rash-guard-sun-protection-side-adjustable-swim-shirt-coverups-upf-50/",
    permanent: true,
  },
  {
    source:
      "/habit-womens-schooner-cove-short-sleeve-river-guide-fishing-shirt",
    destination:
      "/product/habit-womens-schooner-cove-short-sleeve-river-guide-fishing-shirt/",
    permanent: true,
  },
  {
    source:
      "/baleaf-womens-upf-50-sun-protection-t-shirt-long-short-sleeve-outdoor-performance",
    destination:
      "/product/baleaf-womens-upf-50-sun-protection-t-shirt-long-short-sleeve-outdoor-performance/",
    permanent: true,
  },
  {
    source: "/southern-fin-apparel-womens",
    destination: "/product/southern-fin-apparel-womens/",
    permanent: true,
  },
  {
    source:
      "/pretchic-mens-uv-sun-protection-upf-50-performance-short-sleeve-t-shirt",
    destination:
      "/product/pretchic-mens-uv-sun-protection-upf-50-performance-short-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/huk-mens-kryptek-icon-x-long-sleeve-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection-reflective-coating",
    destination:
      "/product/huk-mens-kryptek-icon-x-long-sleeve-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection-reflective-coating/",
    permanent: true,
  },
  {
    source:
      "/performance-fishing-hoodie-long-sleeve-hooded-sunblock-shirt-upf-50-dry-fit-quick-dry-hoody-sports-sweatshirt",
    destination:
      "/product/performance-fishing-hoodie-long-sleeve-hooded-sunblock-shirt-upf-50-dry-fit-quick-dry-hoody-sports-sweatshirt/",
    permanent: true,
  },
  {
    source: "/pelagic-game-fish-premium-t-shirt",
    destination: "/product/pelagic-game-fish-premium-t-shirt/",
    permanent: true,
  },
  {
    source: "/habit-mens-ts1156-long-sleeve-river-guide-fishing-shirt",
    destination:
      "/product/habit-mens-ts1156-long-sleeve-river-guide-fishing-shirt/",
    permanent: true,
  },
  {
    source: "/products/under-armour-womens-coldgear-graphic-1-2-zip",
    destination: "/product/under-armour-womens-coldgear-graphic-1-2-zip/",
    permanent: true,
  },
  {
    source:
      "/products/simms-womens-solarflex-printed-fishing-hoody-with-upf-50",
    destination:
      "/product/simms-womens-solarflex-printed-fishing-hoody-with-upf-50/",
    permanent: true,
  },
  {
    source:
      "/products/telaleo-mens-long-sleeve-sun-protection-t-shirt-upf-50-athletic-workout-hoodie-spf-for-outdoor-fishing-running-hiking",
    destination:
      "/product/telaleo-mens-long-sleeve-sun-protection-t-shirt-upf-50-athletic-workout-hoodie-spf-for-outdoor-fishing-running-hiking/",
    permanent: true,
  },
  {
    source:
      "/products/baleaf-womens-long-sleeve-hooded-rash-guard-sun-protection-side-adjustable-swim-shirt-coverups-upf-50",
    destination:
      "/product/baleaf-womens-long-sleeve-hooded-rash-guard-sun-protection-side-adjustable-swim-shirt-coverups-upf-50/",
    permanent: true,
  },
  {
    source: "/products/aftco-samurai-rashguard-long-sleeve-shirt",
    destination: "/product/aftco-samurai-rashguard-long-sleeve-shirt/",
    permanent: true,
  },
  {
    source: "/products/baleaf-mens-upf-50",
    destination: "/product/baleaf-mens-upf-50/",
    permanent: true,
  },
  {
    source:
      "/products/g-h-bass-co-mens-summit-creek-seersucker-short-sleeve-button-down-plaid-shirt",
    destination:
      "/product/g-h-bass-co-mens-summit-creek-seersucker-short-sleeve-button-down-plaid-shirt/",
    permanent: true,
  },
  {
    source: "/products/threadrock-mens-fishing-american-flag-t-shirt",
    destination: "/product/threadrock-mens-fishing-american-flag-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/products/coolibar-upf-50-kids-andros-fishing-hoodie-sun-protective",
    destination:
      "/product/coolibar-upf-50-kids-andros-fishing-hoodie-sun-protective/",
    permanent: true,
  },
  {
    source:
      "/salty-scales-redfish-snook-trout-long-sleeve-fishing-shirt-for-men-dri-fit-performance-clothing",
    destination:
      "/product/salty-scales-redfish-snook-trout-long-sleeve-fishing-shirt-for-men-dri-fit-performance-clothing/",
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
      "/product/biylaclesen-mens-jersey-golf-polo-shirts-outdoor-pique-performance-tactical-military-long-sleeve-shirts/",
    permanent: true,
  },
  {
    source: "/habit-mens-belcoast-short-sleeve-river-guide-fishing-shirt",
    destination:
      "/product/habit-mens-belcoast-short-sleeve-river-guide-fishing-shirt/",
    permanent: true,
  },
  {
    source: "/huk-mens-cw-cold-weather-water-resistant-icon-x-hoodie",
    destination: "/product-category/fishing-shirts-huk/",
    permanent: true,
  },
  {
    source:
      "/gamefish-usa-upf-50-microfiber-moisture-wicking-long-sleeve-performance-bass-fishing-shirt-2",
    destination:
      "/product/gamefish-usa-upf-50-microfiber-moisture-wicking-long-sleeve-performance-bass-fishing-shirt/",
    permanent: true,
  },
  {
    source: "/huk-mens-icon-camo-hoodie-long-sleeve-fishing-shirts",
    destination:
      "/product/huk-mens-icon-camo-hoodie-long-sleeve-fishing-shirts/",
    permanent: true,
  },
  {
    source: "/columbia-mens-pfg-tamiami-ii-long-sleeve-shirt",
    destination: "/product/columbia-mens-pfg-tamiami-ii-long-sleeve-shirt/",
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
      "/product/habit-mens-coolcore-whitehorn-l-s-performance-gaiter-hoodie/",
    permanent: true,
  },
  {
    source:
      "/huk-womens-southern-feed-pursuit-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection",
    destination:
      "/product/huk-womens-southern-feed-pursuit-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection/",
    permanent: true,
  },
  {
    source: "/oneill-wetsuits",
    destination: "/product/oneill-wetsuits/",
    permanent: true,
  },
  {
    source:
      "/ogeenier-mens-upf-50-sun-protection-hoodie-shirt-long-sleeve-uv-fishing-shirt",
    destination:
      "/product/ogeenier-mens-upf-50-sun-protection-hoodie-shirt-long-sleeve-uv-fishing-shirt/",
    permanent: true,
  },
  {
    source: "/southern-attitude-salty-anchor",
    destination: "/product/southern-attitude-salty-anchor/",
    permanent: true,
  },
  {
    source:
      "/sand-salt-surf-sun-vintage-crab-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    destination:
      "/product/sand-salt-surf-sun-vintage-crab-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/womens-hooking-aint-easy-funny-fishing-girl-women-flower-saying-t-shirt",
    destination:
      "/product/womens-hooking-aint-easy-funny-fishing-girl-women-flower-saying-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/telaleo-mens-long-sleeve-sun-protection-t-shirt-upf-50-athletic-workout-hoodie-spf-for-outdoor-fishing-running-hiking",
    destination:
      "/product/telaleo-mens-long-sleeve-sun-protection-t-shirt-upf-50-athletic-workout-hoodie-spf-for-outdoor-fishing-running-hiking/",
    permanent: true,
  },
  {
    source:
      "/trailcrest-fishing-mossy-oak-elements-womens-pullover-long-sleeve-fishing-t-shirt-4-way-stretch-50-upf-sun-protection",
    destination:
      "/product/trailcrest-fishing-mossy-oak-elements-womens-pullover-long-sleeve-fishing-t-shirt-4-way-stretch-50-upf-sun-protection/",
    permanent: true,
  },
  {
    source: "/willit-mens-hooded-ls-long-sleeve-fishing-shirt",
    destination: "/product/willit-mens-hooded-ls-long-sleeve-fishing-shirt/",
    permanent: true,
  },
  {
    source:
      "/baleaf-womens-hoodie-shirts-with-face-cover-long-sleeve-upf-50-lightweight-quick-dry-spf-neck-gaiter-hiking-fishing-outdoor",
    destination:
      "/product/baleaf-womens-hoodie-shirts-with-face-cover-long-sleeve-upf-50-lightweight-quick-dry-spf-neck-gaiter-hiking-fishing-outdoor/",
    permanent: true,
  },
  {
    source:
      "/baleaf-womens-hoodie-shirts-with-face-cover-long-sleeve-upf-50-lightweight-quick-dry-spf-neck-gaiter-hiking-fishing-outdoor",
    destination:
      "/product/baleaf-womens-hoodie-shirts-with-face-cover-long-sleeve-upf-50-lightweight-quick-dry-spf-neck-gaiter-hiking-fishing-outdoor/",
    permanent: true,
  },
  {
    source:
      "/willit-womens-upf-50-sun-protection-hoodie-shirt-long-sleeve-spf-uv-top-lightweight-quick-dry",
    destination:
      "/product/willit-womens-upf-50-sun-protection-hoodie-shirt-long-sleeve-spf-uv-top-lightweight-quick-dry/",
    permanent: true,
  },
  {
    source:
      "/aw-fashions-hooker-on-the-weekend-funny-fisherman-gifts-fathers-day-mens-fishing-t-shirt",
    destination:
      "/product/weekend-hooker-fishing-shirt-long-sleeve-funny-t-shirt-cool-dry/",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-for-her/feed/",
    destination: "/product-category/fishing-shirts-for-her/",
    permanent: true,
  },
  {
    source: "/fishing-shirts-short-sleeve",
    destination: "/product-category/fishing-shirts-short-sleeve/",
    permanent: true,
  },
  {
    source:
      "/pretchic-mens-upf-50-uv-sun-protection-performance-long-sleeve-outdoor-t-shirt",
    destination:
      "/product/pretchic-mens-upf-50-uv-sun-protection-performance-long-sleeve-outdoor-t-shirt/",
    permanent: true,
  },
  {
    source: "/funny-fisherman-here-fishy-fishy-fishy-t-shirt-gift",
    destination:
      "/product/crazy-dog-t-shirts-mens-beer-fishy-fishy-tshirt-funny-fishing-drinking-tee/",
    permanent: true,
  },
  {
    source: "/coolibar-upf-50-mens-andros-fishing-hoodie-sun-protective",
    destination:
      "/product/coolibar-upf-50-mens-andros-fishing-hoodie-sun-protective/",
    permanent: true,
  },
  {
    source: "/fishing-shirts-for-her",
    destination: "/product-category/fishing-shirts-for-her/",
    permanent: true,
  },
  {
    source: "/reel-cool-poppa-shirt-american-flag-fishing-birthday-gifts",
    destination:
      "/product/reel-cool-poppa-shirt-american-flag-fishing-birthday-gifts/",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-funny/page/1/",
    destination: "/product-category/fishing-shirts-funny/",
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
    destination: "/store/",
    permanent: true,
  },
  {
    source:
      "/boladeci-mens-upf-50-sun-protection-quick-dry-long-sleeve-hoodie-t-shirts-for-fishing-hiking-swimming",
    destination:
      "/product/boladeci-mens-upf-50-sun-protection-quick-dry-long-sleeve-hoodie-t-shirts-for-fishing-hiking-swimming/",
    permanent: true,
  },
  {
    source: "/baleaf-womens-long-sleeve-sun-protection-quick-dry",
    destination: "/product/baleaf-womens-long-sleeve-sun-protection-quick-dry/",
    permanent: true,
  },
  {
    source: "/fishing-shirts-for-him",
    destination: "/product-category/fishing-shirts-for-him/",
    permanent: true,
  },
  {
    source:
      "/jason-mathias-american-flag-bass-ls-high-performance-long-sleeve-t-shirt",
    destination:
      "/product/jason-mathias-american-flag-bass-ls-high-performance-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source: "/product/hanes-mens-long-sleeve",
    destination: "/product/hanes-mens-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source: "/this-girl-loves-fishing-with-her-husband-funny-t-shirts",
    destination:
      "/product/this-girl-loves-fishing-with-her-husband-funny-t-shirts/",
    permanent: true,
  },
  {
    source: "/coolibar-upf-50-kids-andros-fishing-hoodie-sun-protective",
    destination:
      "/product/coolibar-upf-50-kids-andros-fishing-hoodie-sun-protective/",
    permanent: true,
  },
  {
    source:
      "/womens-upf-50-uv-sun-protection-hoodie-long-sleeve-hiking-shirt-outdoor-performance-running-fishing-hoodie",
    destination:
      "/product/womens-upf-50-uv-sun-protection-hoodie-long-sleeve-hiking-shirt-outdoor-performance-running-fishing-hoodie/",
    permanent: true,
  },
  {
    source:
      "/habit-mens-fourche-mountain-long-sleeve-mens-river-guide-fishing-shirt",
    destination:
      "/product/habit-mens-fourche-mountain-long-sleeve-mens-river-guide-fishing-shirt/",
    permanent: true,
  },
  {
    source:
      "/hiskywin-womens-long-sleeve-uv-sun-protection-rash-guard-side-adjustable-wetsuit-swimsuit-top",
    destination:
      "/product/hiskywin-womens-long-sleeve-uv-sun-protection-rash-guard-side-adjustable-wetsuit-swimsuit-top/",
    permanent: true,
  },
  {
    source:
      "/mens-keepin-it-reel-tshirt-funny-cool-fishing-bass-outdoors-sporting-tee",
    destination:
      "/product/mens-keepin-it-reel-tshirt-funny-cool-fishing-bass-outdoors-sporting-tee/",
    permanent: true,
  },
  {
    source:
      "/little-donkey-andy-mens-upf-50-uv-protection-shirt-long-sleeve-fishing-shirt-breathable-and-fast-dry",
    destination:
      "/product/little-donkey-andy-mens-upf-50-uv-protection-shirt-long-sleeve-fishing-shirt-breathable-and-fast-dry/",
    permanent: true,
  },
  {
    source: "/mossy-oak-fishing-hoodie",
    destination: "/product/mossy-oak-fishing-hoodie/",
    permanent: true,
  },
  {
    source:
      "/simms-solarflex-upf-50-shirt-long-sleeve-sun-protection-breathable",
    destination:
      "/product/simms-solarflex-upf-50-shirt-long-sleeve-sun-protection-breathable/",
    permanent: true,
  },
  {
    source:
      "/sand-salt-surf-sun-colorful-rather-be-fishing-youth-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    destination:
      "/product/sand-salt-surf-sun-colorful-rather-be-fishing-youth-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source: "/this-is-my-lucky-fishing-shirt-funny-retro-t-shirt",
    destination: "/product/this-is-my-lucky-fishing-shirt-funny-retro-t-shirt/",
    permanent: true,
  },
  {
    source: "/pretchic-mens-performance-cationic-long-sleeve-sport-t-shirt",
    destination:
      "/product/pretchic-mens-performance-cationic-long-sleeve-sport-t-shirt/",
    permanent: true,
  },
  {
    source: "/koofin-gear-womens-long-sleeve-performance-fishing-hoodie",
    destination:
      "/product/koofin-gear-womens-long-sleeve-performance-fishing-hoodie/",
    permanent: true,
  },
  {
    source: "/koofin-fishing-hooded-shirt",
    destination: "/product/koofin-fishing-hooded-shirt/",
    permanent: true,
  },
  {
    source: "/weekend-hooker-fishing-shirt-long-sleeve-funny-t-shirt-cool-dry",
    destination:
      "/product/weekend-hooker-fishing-shirt-long-sleeve-funny-t-shirt-cool-dry/",
    permanent: true,
  },
  {
    source: "/hanes-mens-cool-dri-long-sleeve-performance-t-shirt-482l",
    destination:
      "/product/hanes-mens-cool-dri-long-sleeve-performance-t-shirt-482l/",
    permanent: true,
  },
  {
    source: "/g-h-bass-co-mens-explorer-short-sleeve-crewneck-t-shirt",
    destination:
      "/product/g-h-bass-co-mens-explorer-short-sleeve-crewneck-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/simms-mens-solarflex-upf-50-uv-sun-protection-outdoor-long-sleeve-performance-fishing-shirt",
    destination:
      "/product/simms-mens-solarflex-upf-50-uv-sun-protection-outdoor-long-sleeve-performance-fishing-shirt/",
    permanent: true,
  },
  {
    source: "/oneill-youth-basic-skins-upf-50-long-sleeve-sun-shirt",
    destination:
      "/product/oneill-youth-basic-skins-upf-50-long-sleeve-sun-shirt/",
    permanent: true,
  },
  {
    source: "/ist-hooded-spearfishing-rashguard-with-loading-pad",
    destination: "/product/ist-hooded-spearfishing-rashguard-with-loading-pad/",
    permanent: true,
  },
  {
    source: "/walleye-fishing-gift-american-flag-funny-fisherman-tshirt",
    destination:
      "/product/walleye-fishing-gift-american-flag-funny-fisherman-tshirt/",
    permanent: true,
  },
  {
    source: "/jason-mathias-strike-zone-mako-shark-ls-high-performance-shirt",
    destination:
      "/product/jason-mathias-strike-zone-mako-shark-ls-high-performance-shirt/",
    permanent: true,
  },
  {
    source: "/columbia-mens-low-drag-offshore-short-sleeve-shirt",
    destination: "/product/columbia-mens-low-drag-offshore-short-sleeve-shirt/",
    permanent: true,
  },
  {
    source:
      "/my-fishing-retirement-plan-funny-fish-pole-humor-fisherman-men-joke-t-shirt",
    destination:
      "/product/my-fishing-retirement-plan-funny-fish-pole-humor-fisherman-men-joke-t-shirt/",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-long-sleeve/page/1/",
    destination: "/product-category/fishing-shirts-long-sleeve/",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-hoodie/page/1/",
    destination: "/product-category/fishing-shirts-hoodie/",
    permanent: true,
  },
  {
    source: "/go-all-out-inc-funny-tee",
    destination: "/product/go-all-out-inc-funny-tee/",
    permanent: true,
  },
  {
    source: "/product-category/funny-fishing-shirts/page/2/",
    destination: "/product-category/fishing-shirts-funny?page=2",
    permanent: true,
  },
  {
    source:
      "/piscifun-performance-upf50-long-sleeve-fishing-t-shirt-with-hoodie",
    destination:
      "/product/piscifun-performance-upf50-long-sleeve-fishing-t-shirt-with-hoodie/",
    permanent: true,
  },
  {
    source: "/product/pelagic-aquatek-game-fish-performance-fishing-shirt",
    destination: "/product-category/fishing-shirts-pelagic/",
    permanent: true,
  },
  {
    source:
      "/product/naviskin-mens-upf-50-sun-protection-fishing-shirt-long-sleeve-quick-drying-lightweight-hiking-shirt-cooling",
    destination:
      "/product/naviskin-mens-upf-50-sun-protection-fishing-shirt-long-sleeve/",
    permanent: true,
  },
  {
    source:
      "/product/performance-fishing-hoodie-with-face-mask-hooded-sunblock-shirt-sun-shield-long-sleeve-upf50-tops-half-zip",
    destination:
      "/product/baleaf-mens-long-sleeve-upf-50-uv-sun-protection-shirt-spf-lightweight-quick-dry-hiking-fishing-shirt/",
    permanent: true,
  },
  {
    source: "/fishingshirtsnow-com-sitemap",
    destination: "/sitemap/",
    permanent: true,
  },
  {
    source:
      "/crazy-dog-t-shirts-mens-part-time-hooker-tshirt-funny-outdoor-fishing-tee-for-guy",
    destination:
      "/product/crazy-dog-t-shirts-mens-part-time-hooker-tshirt-funny-outdoor-fishing-tee-for-guys/",
    permanent: true,
  },
  {
    source: "/jason-mathias-high-performance-fishing-shirt-sea-spirit-sailfish",
    destination:
      "/product/jason-mathias-high-performance-fishing-shirt-sea-spirit-sailfish/",
    permanent: true,
  },
  {
    source:
      "/piscifun-performance-upf50-long-sleeve-fishing-t-shirt-with-hoodie",
    destination:
      "/product/piscifun-performance-upf50-long-sleeve-fishing-t-shirt-with-hoodie/",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-mens-rain-jacket-waterproof-with-hooded-lightweight-packable-bike-pullover-running-raincoat-poncho-windbreaker",
    destination: "/store/",
    permanent: true,
  },
  {
    source:
      "/products/gamefish-usa-upf-50-long-sleeve-microfiber-moisture-wicking-performance-fishing-shirt-scuba-diving-tank",
    destination:
      "/product/gamefish-usa-upf-50-long-sleeve-microfiber-moisture-wicking-performance-fishing-shirt-scuba-diving-tank/",
    permanent: true,
  },
  {
    source: "/products/salty-crew-mens-tailed-hood-fleece",
    destination: "/product/salty-crew-mens-tailed-hood-fleece/",
    permanent: true,
  },
  {
    source: "/crazy-dog-funny-fishing-tee",
    destination:
      "/product/mens-cant-work-today-my-arm-is-in-a-cast-t-shirt-funny-fishing-graphic-top-guys/",
    permanent: true,
  },
  {
    source:
      "/a-day-without-fishing-probably-wont-kill-me-gift-idea-to-dad-funny-t-shirt",
    destination:
      "/product/a-day-without-fishing-probably-wont-kill-me-gift-idea-to-dad-funny-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/products/mens-dont-be-a-dumb-bass-tshirt-funny-fishing-tee-for-guys",
    destination:
      "/product/mens-dont-be-a-dumb-bass-tshirt-funny-fishing-tee-for-guys/",
    permanent: true,
  },
  {
    source:
      "/products/ogeenier-mens-upf-50-sun-protection-hoodie-shirt-long-sleeve-uv-fishing-shirt",
    destination:
      "/product/ogeenier-mens-upf-50-sun-protection-hoodie-shirt-long-sleeve-uv-fishing-shirt/",
    permanent: true,
  },
  {
    source: "/product/mossy-oak-mens-breathable-tri-blend-short-sleeve-t-shirt",
    destination: "/store/",
    permanent: true,
  },
  {
    source: "/product/mossy-oak-mens-all-outdoor-flex-short",
    destination: "/store/",
    permanent: true,
  },
  {
    source: "/author/aldodigitalmax",
    destination: "/",
    permanent: true,
  },
  {
    source:
      "/articles/learn-all-about-fishing-shirts-to-pick-the-right-one-for-you",
    destination:
      "/blog/learn-all-about-fishing-shirts-to-pick-the-right-one-for-you/",
    permanent: true,
  },
  {
    source: "/products/habit-mens-short-sleeve-travel-shirt",
    destination: "/product/habit-mens-short-sleeve-travel-shirt/",
    permanent: true,
  },
  {
    source: "/product/hanes-mens-full-zip-eco-smart-fleece-hoodie",
    destination: "/store/",
    permanent: true,
  },
  {
    source:
      "/products/gamefish-usa-long-sleeve-fishing-shirt-american-flag-bass-for-women-upf-50-dri-fit-microfiber-performance-clothing",
    destination:
      "/product/gamefish-usa-long-sleeve-fishing-shirt-american-flag-bass-for-women-upf-50-dri-fit-microfiber-performance-clothing/",
    permanent: true,
  },
  {
    source:
      "/performance-fishing-hoodie-with-face-mask-hooded-sunblock-shirt-sun-shield-long-sleeve-shirt-upf-50-dry-fit-quick-dry",
    destination:
      "/product/performance-fishing-hoodie-with-face-mask-hooded-sunblock-shirt-sun-shield-long-sleeve-shirt-upf-50-dry-fit-quick-dry/",
    permanent: true,
  },
  {
    source:
      "/products/naviskin-mens-sun-protection-upf-50-uv-outdoor-long-sleeve-t-shirt",
    destination:
      "/product/naviskin-mens-sun-protection-upf-50-uv-outdoor-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/products/denali-performance-mens-upf-50-protectuv-mega-solar-long-sleeve-t-shirt-trophy-bones-collection-by-marcos-augusto-permit",
    destination:
      "/product/denali-performance-mens-upf-50-protectuv-mega-solar-long-sleeve-t-shirt-trophy-bones-collection-by-marcos-augusto-permit/",
    permanent: true,
  },
  {
    source:
      "/products/denali-performance-mens-upf-50-protectuv-mega-solar-long-sleeve-t-shirt-trophy-bones-collection-by-marcos-augusto-permit",
    destination:
      "/product/denali-performance-mens-upf-50-protectuv-mega-solar-long-sleeve-t-shirt-trophy-bones-collection-by-marcos-augusto-permit/",
    permanent: true,
  },
  {
    source: "/products/ist-hooded-spearfishing-rashguard-with-loading-pad",
    destination: "/product/ist-hooded-spearfishing-rashguard-with-loading-pad/",
    permanent: true,
  },
  {
    source:
      "/products/womens-upf-50-uv-sun-protection-hoodie-shirt-dry-fit-spf-long-sleeve-outdoor-performance-fishing-hiking-shirts",
    destination:
      "/product/womens-upf-50-uv-sun-protection-hoodie-shirt-dry-fit-spf-long-sleeve-outdoor-performance-fishing-hiking-shirts/",
    permanent: true,
  },
  {
    source:
      "/products/pretchic-mens-performance-cationic-long-sleeve-sport-t-shirt",
    destination:
      "/product/pretchic-mens-performance-cationic-long-sleeve-sport-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/products/mens-funny-fishing-shirts-for-men-give-a-man-a-fish-t-shirt",
    destination:
      "/product/mens-funny-fishing-shirts-for-men-give-a-man-a-fish-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/products/tortuga-moon-fishing-shirt-men-womens-upf-50-performance-long-sleeve",
    destination:
      "/product/tortuga-moon-fishing-shirt-men-womens-upf-50-performance-long-sleeve/",
    permanent: true,
  },
  {
    source:
      "/products/hookin-aint-easy-funny-fishing-lovers-gift-t-shirt-tank-top",
    destination:
      "/product/hookin-aint-easy-funny-fishing-lovers-gift-t-shirt-tank-top/",
    permanent: true,
  },
  {
    source:
      "/products/hanes-mens-cool-dri-long-sleeve-performance-t-shirt-482l",
    destination:
      "/product/hanes-mens-cool-dri-long-sleeve-performance-t-shirt-482l/",
    permanent: true,
  },
  {
    source: "/products/habit-mens-ts1156-long-sleeve-river-guide-fishing-shirt",
    destination:
      "/product/habit-mens-ts1156-long-sleeve-river-guide-fishing-shirt/",
    permanent: true,
  },
  {
    source:
      "/products/crazy-dog-t-shirts-mens-a-reel-expert-can-tackle-anything-tshirt-funny-fishing-tee",
    destination:
      "/product/crazy-dog-t-shirts-mens-a-reel-expert-can-tackle-anything-tshirt-funny-fishing-tee/",
    permanent: true,
  },
  {
    source:
      "/products/rattlin-jack-mens-upf-50-fishing-skeleton-performance-long-sleeve-shirt",
    destination:
      "/product/rattlin-jack-mens-upf-50-fishing-skeleton-performance-long-sleeve-shirt/",
    permanent: true,
  },
  {
    source: "/products/columbia-pfg-americana-saltwater-fish-flag-t-shirt",
    destination: "/product/columbia-pfg-americana-saltwater-fish-flag-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/products/pretchic-mens-upf-50-uv-sun-protection-performance-long-sleeve-outdoor-t-shirt",
    destination:
      "/product/pretchic-mens-upf-50-uv-sun-protection-performance-long-sleeve-outdoor-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/products/bamboo-cay-embroidered-mens-short-sleeve-flying-parrots-tropical-hawaiian-button-down-shirt",
    destination:
      "/product/bamboo-cay-embroidered-mens-short-sleeve-flying-parrots-tropical-hawaiian-button-down-shirt/",
    permanent: true,
  },
  {
    source:
      "/products/midubi-mens-t-shirts-long-sleeve-rash-guard-upf-50-uv-protection-outdoor-golf-tees-fishing-hiking-running-shirts-with-hood",
    destination:
      "/product/midubi-mens-t-shirts-long-sleeve-rash-guard-upf-50-uv-protection-outdoor-golf-tees-fishing-hiking-running-shirts-with-hood/",
    permanent: true,
  },
  {
    source:
      "/products/biylaclesen-mens-jersey-golf-polo-shirts-outdoor-pique-performance-tactical-military-long-sleeve-shirts",
    destination:
      "/product/biylaclesen-mens-jersey-golf-polo-shirts-outdoor-pique-performance-tactical-military-long-sleeve-shirts/",
    permanent: true,
  },
  {
    source:
      "/products/crazy-dog-t-shirts-mens-procrastifishing-tshirt-funny-outdoor-fishing-procrastination-tee",
    destination:
      "/product/crazy-dog-t-shirts-mens-procrastifishing-tshirt-funny-outdoor-fishing-procrastination-tee/",
    permanent: true,
  },
  {
    source:
      "/products/simms-solarflex-upf-50-crewneck-shirt-long-sleeve-sun-protection-fishing-shirt-for-men-lightweight-breathable-moisture-wicking-anti-odor",
    destination:
      "/product/simms-solarflex-upf-50-crewneck-shirt-long-sleeve-sun-protection-fishing-shirt-for-men-lightweight-breathable-moisture-wicking-anti-odor/",
    permanent: true,
  },
  {
    source:
      "/products/southern-attitude-salty-anchor-navy-blue-preppy-short-sleeve-shirt",
    destination:
      "/product/southern-attitude-salty-anchor-navy-blue-preppy-short-sleeve-shirt/",
    permanent: true,
  },
  {
    source: "/products/willit-mens-hooded-ls-long-sleeve-fishing-shirt",
    destination: "/product/willit-mens-hooded-ls-long-sleeve-fishing-shirt/",
    permanent: true,
  },
  {
    source:
      "/products/jason-mathias-high-performance-fishing-shirt-sea-spirit-sailfish",
    destination:
      "/product/jason-mathias-high-performance-fishing-shirt-sea-spirit-sailfish/",
    permanent: true,
  },
  {
    source:
      "/products/willit-mens-upf-50-sun-protection-hoodie-shirt-long-sleeve-spf-fishing-outdoor-uv-shirt-hiking-lightweight",
    destination:
      "/product/willit-mens-upf-50-sun-protection-hoodie-shirt-long-sleeve-spf-fishing-outdoor-uv-shirt-hiking-lightweight/",
    permanent: true,
  },
  {
    source:
      "/products/under-armour-mens-coldgear-armour-compression-mock-long-sleeve-t-shirt",
    destination:
      "/product/under-armour-mens-coldgear-armour-compression-mock-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/products/columbia-sportswear-boys-bahamatm-l-s-shirt-little-big-kids",
    destination:
      "/product/columbia-sportswear-boys-bahamatm-l-s-shirt-little-big-kids/",
    permanent: true,
  },
  {
    source: "/products/pelagic-game-fish-premium-t-shirt",
    destination: "/product/pelagic-game-fish-premium-t-shirt/",
    permanent: true,
  },
  {
    source: "/products/fishing-shirt-funny-american-flag-fishing-shirt",
    destination: "",
    permanent: true,
  },
  {
    source:
      "/products/koofin-performance-fishing-shirt-vented-long-sleeve-sunblock-shirt-with-mesh",
    destination:
      "/product/koofin-performance-fishing-shirt-vented-long-sleeve-sunblock-shirt-with-mesh/",
    permanent: true,
  },
  {
    source:
      "/products/fish-skinz-womens-performance-fishing-shirt-upf-50-protection-octopus-white",
    destination:
      "/product/fish-skinz-womens-performance-fishing-shirt-upf-50-protection-octopus-white/",
    permanent: true,
  },
  {
    source: "/products/funny-fisherman-here-fishy-fishy-fishy-t-shirt-gift",
    destination:
      "/product/funny-fisherman-here-fishy-fishy-fishy-t-shirt-gift/",
    permanent: true,
  },
  {
    source:
      "/products/coolibar-upf-50-mens-andros-fishing-hoodie-sun-protective",
    destination:
      "/product/coolibar-upf-50-mens-andros-fishing-hoodie-sun-protective/",
    permanent: true,
  },
  {
    source:
      "/products/cqr-mens-performance-fishing-gear-upf-50-short-sleeve-breathable-pfg-rip-stop-shirt",
    destination:
      "/product/cqr-mens-performance-fishing-gear-upf-50-short-sleeve-breathable-pfg-rip-stop-shirt/",
    permanent: true,
  },
  {
    source:
      "/products/performance-fishing-hoodie-with-face-mask-hooded-sunblock-shirt-sun-shield-long-sleeve-shirt-upf-50-dry-fit-quick-dry",
    destination:
      "/product/performance-fishing-hoodie-with-face-mask-hooded-sunblock-shirt-sun-shield-long-sleeve-shirt-upf-50-dry-fit-quick-dry/",
    permanent: true,
  },
  {
    source:
      "/products/coldpruf-mens-basic-dual-layer-long-sleeve-crew-neck-base-layer-top-p2021530",
    destination:
      "/product/coldpruf-mens-basic-dual-layer-long-sleeve-crew-neck-base-layer-top-p2021530/",
    permanent: true,
  },
  {
    source: "/products/a4-adult-cooling-performance-long-sleeve-t-shirt",
    destination: "/product/a4-adult-cooling-performance-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/products/g-h-bass-co-mens-summit-creek-seersucker-short-sleeve-button-down-plaid-shirt",
    destination: "",
    permanent: true,
  },
  {
    source:
      "/products/bassdash-upf-50-mens-uv-sun-protection-long-sleeve-performance-fishing-hoodie-hooded-shirts",
    destination:
      "/product/g-h-bass-co-mens-summit-creek-seersucker-short-sleeve-button-down-plaid-shirt/",
    permanent: true,
  },
  {
    source: "/products/bigfoot-fishing-shirt-funny-sasquatch-and-fish",
    destination: "/product/bigfoot-fishing-shirt-funny-sasquatch-and-fish/",
    permanent: true,
  },
  {
    source: "/products/columbia-womens-pfg-bahama-short-sleeve-shirt",
    destination: "/product/columbia-womens-pfg-bahama-short-sleeve-shirt/",
    permanent: true,
  },
  {
    source:
      "/products/huk-womens-performance-hoodie-water-resistant-stain-resistant-lightweight-performance-fleece",
    destination:
      "/product/huk-womens-performance-hoodie-water-resistant-stain-resistant-lightweight-performance-fleece/",
    permanent: true,
  },
  {
    source: "/products/threadrock-mens-fishing-american-flag-t-shirt",
    destination: "/product/threadrock-mens-fishing-american-flag-t-shirt/",
    permanent: true,
  },
  {
    source: "/products/under-armour-womens-coldgear-graphic-1-2-zip",
    destination: "/product/under-armour-womens-coldgear-graphic-1-2-zip/",
    permanent: true,
  },
  {
    source: "/products/aftco-samurai-rashguard-long-sleeve-shirt",
    destination: "/product/aftco-samurai-rashguard-long-sleeve-shirt/",
    permanent: true,
  },
  {
    source:
      "/products/telaleo-mens-long-sleeve-sun-protection-t-shirt-upf-50-athletic-workout-hoodie-spf-for-outdoor-fishing-running-hiking",
    destination:
      "/product/telaleo-mens-long-sleeve-sun-protection-t-shirt-upf-50-athletic-workout-hoodie-spf-for-outdoor-fishing-running-hiking/",
    permanent: true,
  },
  {
    source:
      "/products/columbia-womens-pfg-bahama-ii-long-sleeve-shirt-breathable-with-uv-protection",
    destination:
      "/product/columbia-womens-pfg-bahama-ii-long-sleeve-shirt-breathable-with-uv-protection/",
    permanent: true,
  },
  {
    source:
      "/products/simms-womens-solarflex-printed-fishing-hoody-with-upf-50",
    destination:
      "/product/simms-womens-solarflex-printed-fishing-hoody-with-upf-50/",
    permanent: true,
  },
  {
    source: "/cart/",
    destination: "/",
    permanent: true,
  },
  {
    source: "/disclosure/",
    destination: "/",
    permanent: true,
  },
  {
    source: "/category/articles/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/my-account/",
    destination: "/",
    permanent: true,
  },
  {
    source: "/ann-arbor-t-shirt-co-funny-fishing-shirt",
    destination:
      "/product/my-fishing-retirement-plan-funny-fish-pole-humor-fisherman-men-joke-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/womens-pfg-long-sleeve-shirt-uv-sun-protection-moisture-wicking-fabric",
    destination:
      "/product/womens-pfg-long-sleeve-shirt-uv-sun-protection-moisture-wicking-fabric/",
    permanent: true,
  },
  {
    source:
      "/naviskin-womens-sun-protection-upf-50-uv-outdoor-long-sleeve-t-shirt",
    destination:
      "/product/naviskin-womens-sun-protection-upf-50-uv-outdoor-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/mens-upf-50-long-sleeves-shirt-dry-fit-sun-protection-outdoor-workout-swim-hoodies-running-hiking-fishing",
    destination:
      "/product/mens-upf-50-long-sleeves-shirt-dry-fit-sun-protection-outdoor-workout-swim-hoodies-running-hiking-fishing/",
    permanent: true,
  },
  {
    source: "/aftco-samurai-rashguard-long-sleeve-shirt",
    destination: "/product/aftco-samurai-rashguard-long-sleeve-shirt/",
    permanent: true,
  },
  {
    source: "/fishing-shirts-pelagic",
    destination: "/product-category/fishing-shirts-pelagic/",
    permanent: true,
  },
  {
    source:
      "/reel-life-mens-short-sleeve-woven-fishing-shirt-pacific-series-fishin-all-over-uv-protection-breathable",
    destination:
      "/product/reel-life-mens-short-sleeve-woven-fishing-shirt-pacific-series-fishin-all-over-uv-protection-breathable",
    permanent: true,
  },
  {
    source: "/fishing-shirts-baleaf",
    destination: "/product-category/fishing-shirts-baleaf/",
    permanent: true,
  },
  {
    source: "/under-armour-iso-chill-shore-break-camo-fish-hoodie",
    destination:
      "/product/under-armour-iso-chill-shore-break-camo-fish-hoodie/",
    permanent: true,
  },
  {
    source:
      "/masterbaiter-funny-fishing-fisherman-fish-master-baiter-dad-grandpa-joke-t-shirt",
    destination:
      "/product/masterbaiter-funny-fishing-fisherman-fish-master-baiter-dad-grandpa-joke-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/crazy-dog-t-shirts-mens-beer-fishy-fishy-tshirt-funny-fishing-drinking-tee",
    destination:
      "/product/crazy-dog-t-shirts-mens-beer-fishy-fishy-tshirt-funny-fishing-drinking-tee/",
    permanent: true,
  },
  {
    source:
      "/sand-salt-surf-sun-pirate-life-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    destination:
      "/product/sand-salt-surf-sun-pirate-life-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/rattlin-jack-mens-upf-50-fishing-skeleton-performance-long-sleeve-shirt",
    destination:
      "/product/rattlin-jack-mens-upf-50-fishing-skeleton-performance-long-sleeve-shirt",
    permanent: true,
  },
  {
    source: "/fishing-shirts/",
    destination: "/",
    permanent: true,
  },
  {
    source: "/122CM),3XL(49.6",
    destination: "/",
    permanent: true,
  },
  {
    source: "/106CM),M(43.3",
    destination: "/",
    permanent: true,
  },
  {
    source: "/130CM),5XL(52.76",
    destination: "/",
    permanent: true,
  },
  {
    source: "/114CM),XL(46.46",
    destination: "/",
    permanent: true,
  },
  {
    source: "/category/fishing-shirts/",
    destination: "/store/",
    permanent: true,
  },
  {
    source: "/checkout/",
    destination: "/",
    permanent: true,
  },
  {
    source: "/size/xx-large/page/9/",
    destination: "/",
    permanent: true,
  },
  {
    source: "/columbia-fishing-shirts-vs-bass-fishing-shirts/",
    destination: "/product/columbia-fishing-shirts-vs-bass-fishing-shirts/",
    permanent: true,
  },
  {
    source: "/articles/funny-fishing-shirts-that-put-a-smile-on-your-face/",
    destination: "/blog/funny-fishing-shirts-that-put-a-smile-on-your-face/",
    permanent: true,
  },
  {
    source: "/fishing-shirts-pretchic",
    destination: "/product-category/fishing-shirts-pretchic/",
    permanent: true,
  },
  {
    source: "/fishing-shirts-mossy-oak",
    destination: "/product-category/fishing-shirts-mossy-oak/",
    permanent: true,
  },
  {
    source: "/fishing-shirts-long-sleeve",
    destination: "/product-category/fishing-shirts-long-sleeve/",
    permanent: true,
  },
  {
    source: "/fishing-shirts-habit",
    destination: "/product-category/fishing-shirts-habit/",
    permanent: true,
  },
  {
    source: "/fishing-shirts-for-her",
    destination: "/product-category/fishing-shirts-for-her/",
    permanent: true,
  },
  {
    source: "/reel-cool-poppa-shirt-american-flag-fishing-birthday-gifts",
    destination:
      "/product/reel-cool-poppa-shirt-american-flag-fishing-birthday-gifts/",
    permanent: true,
  },
  {
    source: "/baleaf-womens-long-sleeve-sun-protection-quick-dry",
    destination: "/product/baleaf-womens-long-sleeve-sun-protection-quick-dry/",
    permanent: true,
  },
  {
    source:
      "/jason-mathias-american-flag-bass-ls-high-performance-long-sleeve-t-shirt",
    destination:
      "/product/jason-mathias-american-flag-bass-ls-high-performance-long-sleeve-t-shirt/",
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
      "/product/coolibar-upf-50-kids-andros-fishing-hoodie-sun-protective/",
    permanent: true,
  },
  {
    source: "/hanes-mens-cool-dri-long-sleeve-performance-t-shirt-482l",
    destination:
      "/product/hanes-mens-cool-dri-long-sleeve-performance-t-shirt-482l/",
    permanent: true,
  },
  {
    source: "/columbia-mens-bahama-ii-short-sleeve-shirt",
    destination: "/product/columbia-mens-bahama-ii-short-sleeve-shirt/",
    permanent: true,
  },
  {
    source:
      "/little-donkey-andy-womens-upf-50-uv-protection-shirt-long-sleeve-fishing-shirt-breathable-and-fast-dry",
    destination:
      "/product/little-donkey-andy-womens-upf-50-uv-protection-shirt-long-sleeve-fishing-shirt-breathable-and-fast-dry/",
    permanent: true,
  },
  {
    source:
      "/crazy-dog-t-shirts-mens-i-like-fishing-and-maybe-3-people-tshirt-funny-outdoorsman-fathers-day-tee",
    destination:
      "/product/crazy-dog-t-shirts-mens-i-like-fishing-and-maybe-3-people-tshirt-funny-outdoorsman-fathers-day-tee/",
    permanent: true,
  },
  {
    source: "/habit-womens-shell-cove-short-sleeve-fishing-guide-shirt",
    destination:
      "/product/habit-womens-shell-cove-short-sleeve-fishing-guide-shirt/",
    permanent: true,
  },
  {
    source: "/huk-mens-performance-fishing-tee",
    destination: "/product/huk-mens-performance-fishing-tee/",
    permanent: true,
  },
  {
    source:
      "/sand-salt-surf-sun-captain-pirate-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    destination:
      "/product/sand-salt-surf-sun-captain-pirate-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source: "/grunt-style-rifle-flag-mens-t-shirt",
    destination: "/product/grunt-style-rifle-flag-mens-t-shirt/",
    permanent: true,
  },
  {
    source: "/staghorn-mens-short-sleeve-performance-tech-fishing-tee",
    destination:
      "/product/staghorn-mens-short-sleeve-performance-tech-fishing-tee/",
    permanent: true,
  },
  {
    source:
      "/huk-womens-performance-hoodie-water-resistant-stain-resistant-lightweight-performance-fleece",
    destination:
      "/product/huk-womens-performance-hoodie-water-resistant-stain-resistant-lightweight-performance-fleece/",
    permanent: true,
  },
  {
    source:
      "/mens-upf-50-long-sleeve-sun-protection-shirts-outdoor-lightweight-quick-dry-uv-shirt",
    destination:
      "/product/mens-upf-50-long-sleeve-sun-protection-shirts-outdoor-lightweight-quick-dry-uv-shirt/",
    permanent: true,
  },
  {
    source:
      "/american-flag-fishing-shirt-vintage-usa-bass-fisherman-gift-t-shirt",
    destination:
      "/product/american-flag-fishing-shirt-vintage-usa-bass-fisherman-gift-t-shirt/",
    permanent: true,
  },
  {
    source: "/columbia-bahama-short-sleeve-shirt",
    destination: "/product/columbia-bahama-short-sleeve-shirt/",
    permanent: true,
  },
  {
    source:
      "/i-just-want-to-drink-beer-and-jerk-my-rod-funny-fishing-tee-t-shirt",
    destination:
      "/product/i-just-want-to-drink-beer-and-jerk-my-rod-funny-fishing-tee-t-shirt/",
    permanent: true,
  },
  {
    source: "/hanes-womens-long-sleeve-v-neck-t-shirt",
    destination: "/product/hanes-womens-long-sleeve-v-neck-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/amazon-brand-peak-velocity-mens-vxe-long-sleeve-quick-dry-loose-fit-t-shirt",
    destination:
      "/product/amazon-brand-peak-velocity-mens-vxe-long-sleeve-quick-dry-loose-fit-t-shirt/",
    permanent: true,
  },
  {
    source: "/under-armour-womens-tac-coldgear-infrared-crew-shirt",
    destination:
      "/product/under-armour-womens-tac-coldgear-infrared-crew-shirt/",
    permanent: true,
  },
  {
    source:
      "/bassdash-womens-upf-50-performance-hoodie-long-sleeve-uv-fishing-hiking-shirt",
    destination:
      "/product/bassdash-womens-upf-50-performance-hoodie-long-sleeve-uv-fishing-hiking-shirt/",
    permanent: true,
  },
  {
    source:
      "/performance-vented-fishing-shirt-long-sleeve-shirt-mesh-side-vents-upf-50-dye-sublimation-print",
    destination:
      "/product/performance-vented-fishing-shirt-long-sleeve-shirt-mesh-side-vents-upf-50-dye-sublimation-print/",
    permanent: true,
  },
  {
    source:
      "/bassdash-upf-50-mens-uv-sun-protection-long-sleeve-performance-fishing-hoodie-hooded-shirts",
    destination:
      "/product/bassdash-upf-50-mens-uv-sun-protection-long-sleeve-performance-fishing-hoodie-hooded-shirts/",
    permanent: true,
  },
  {
    source:
      "/baleaf-mens-long-sleeve-upf-50-uv-sun-protection-shirt-spf-lightweight-quick-dry-hiking-fishing-shirt",
    destination:
      "/product/baleaf-mens-long-sleeve-upf-50-uv-sun-protection-shirt-spf-lightweight-quick-dry-hiking-fishing-shirt/",
    permanent: true,
  },
  {
    source:
      "/ezrun-mens-upf-50-uv-protection-hoodie-shirts-long-sleeve-sun-fishing-shirts",
    destination:
      "/product/ezrun-mens-upf-50-uv-protection-hoodie-shirts-long-sleeve-sun-fishing-shirts/",
    permanent: true,
  },
  {
    source:
      "/baleaf-mens-upf-50-hiking-shirt-long-sleeve-shirt-outdoor-lightweight-quick-dry-fishing-shirts",
    destination:
      "/product/baleaf-mens-upf-50-hiking-shirt-long-sleeve-shirt-outdoor-lightweight-quick-dry-fishing-shirts/",
    permanent: true,
  },
  {
    source: "/hookin-aint-easy-funny-fishing-lovers-gift-t-shirt-tank-top",
    destination:
      "/product/hookin-aint-easy-funny-fishing-lovers-gift-t-shirt-tank-top/",
    permanent: true,
  },
  {
    source:
      "/hook-tackle-mens-american-sailfish-long-sleeve-uv-sun-protection-performance-fishing-shirt",
    destination:
      "/product/hook-tackle-mens-american-sailfish-long-sleeve-uv-sun-protection-performance-fishing-shirt/",
    permanent: true,
  },
  {
    source:
      "/bamboo-cay-embroidered-mens-short-sleeve-flying-parrots-tropical-hawaiian-button-down-shirt",
    destination:
      "/product/bamboo-cay-embroidered-mens-short-sleeve-flying-parrots-tropical-hawaiian-button-down-shirt/",
    permanent: true,
  },
  {
    source:
      "/haase-unlimited-fishing-pole-american-flag-fisherman-usa-mens-t-shirt",
    destination:
      "/product/haase-unlimited-fishing-pole-american-flag-fisherman-usa-mens-t-shirt/",
    permanent: true,
  },
  {
    source: "/carhartt-boys-long-sleeve-force-tee-shirt",
    destination: "/product/carhartt-boys-long-sleeve-force-tee-shirt/",
    permanent: true,
  },
  {
    source: "/usa-fishing-rod-bass-american-flag-fishing-t-shirt",
    destination: "/product/usa-fishing-rod-bass-american-flag-fishing-t-shirt/",
    permanent: true,
  },
  {
    source: "/thiswear-patriotic-fishing-pole-american-flag-t-shirt",
    destination:
      "/product/thiswear-patriotic-fishing-pole-american-flag-t-shirt/",
    permanent: true,
  },
  {
    source: "/xtansuo-upf-50-uv-hoodie-t-shirt",
    destination: "/product/xtansuo-upf-50-uv-hoodie-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/naviskin-mens-upf-50-sun-protection-outdoor-long-sleeve-shirt-lightweight-quick-dry-cooling-fishing-shirts",
    destination:
      "/product/naviskin-mens-upf-50-sun-protection-outdoor-long-sleeve-shirt-lightweight-quick-dry-cooling-fishing-shirts/",
    permanent: true,
  },
  {
    source: "/g-h-bass-co-mens-trail-flex-short-sleeve-button-down-plaid-shirt",
    destination:
      "/product/g-h-bass-co-mens-trail-flex-short-sleeve-button-down-plaid-shirt/",
    permanent: true,
  },
  {
    source: "/under-armour-womens-move-mock",
    destination: "/product/under-armour-womens-move-mock/",
    permanent: true,
  },
  {
    source: "/hanes-mens-long-sleeve-t-shirt",
    destination: "/product/hanes-mens-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/crazy-dog-t-shirts-mens-procrastifishing-tshirt-funny-outdoor-fishing-procrastination-tee",
    destination:
      "/product/crazy-dog-t-shirts-mens-procrastifishing-tshirt-funny-outdoor-fishing-procrastination-tee/",
    permanent: true,
  },
  {
    source:
      "/funny-jerk-it-till-she-swallows-trout-bass-fishing-gear-men-t-shirt",
    destination:
      "/product/funny-jerk-it-till-she-swallows-trout-bass-fishing-gear-men-t-shirt/",
    permanent: true,
  },
  {
    source: "/mens-funny-fishing-shirts-for-men-give-a-man-a-fish-t-shirt",
    destination:
      "/product/mens-funny-fishing-shirts-for-men-give-a-man-a-fish-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/id-rather-be-fishing-funny-novelty-humor-anti-social-fisher-fisherman-fish-tee-mens-tshirt",
    destination:
      "/product/id-rather-be-fishing-funny-novelty-humor-anti-social-fisher-fisherman-fish-tee-mens-tshirt/",
    permanent: true,
  },
  {
    source: "/under-armour-mens-fish-hook-logo-t",
    destination: "/product/under-armour-mens-fish-hook-logo-t/",
    permanent: true,
  },
  {
    source:
      "/fish-skinz-womens-performance-fishing-shirt-upf-50-protection-octopus-white",
    destination:
      "/product/fish-skinz-womens-performance-fishing-shirt-upf-50-protection-octopus-white/",
    permanent: true,
  },
  {
    source:
      "/midubi-mens-t-shirts-long-sleeve-rash-guard-upf-50-uv-protection-outdoor-golf-tees-fishing-hiking-running-shirts-with-hood",
    destination:
      "/product/midubi-mens-t-shirts-long-sleeve-rash-guard-upf-50-uv-protection-outdoor-golf-tees-fishing-hiking-running-shirts-with-hood/",
    permanent: true,
  },
  {
    source: "/pretchic-mens-upf-50-uv-sun-protection-quick-dry-outdoor-t-shirt",
    destination:
      "/product/pretchic-mens-upf-50-uv-sun-protection-quick-dry-outdoor-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/worlds-okayest-fisherman-fishing-dad-graphic-novelty-sarcastic-funny-t-shirt",
    destination:
      "/product/worlds-okayest-fisherman-fishing-dad-graphic-novelty-sarcastic-funny-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/columbia-mens-pfg-bahama-ii-short-sleeve-shirt-cool-grey-xx-large",
    destination:
      "/product/columbia-mens-pfg-bahama-ii-short-sleeve-shirt-cool-grey-xx-large/",
    permanent: true,
  },
  {
    source:
      "/performance-fishing-hoodie-shirt-for-men-women-upf-uv-50-lightweight-with-hood",
    destination:
      "/product/performance-fishing-hoodie-shirt-for-men-women-upf-uv-50-lightweight-with-hood/",
    permanent: true,
  },
  {
    source:
      "/sand-salt-surf-sun-shark-and-anchor-tribal-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    destination:
      "/product/sand-salt-surf-sun-shark-and-anchor-tribal-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/hooked-soul-fishing-mens-upf-50-uv-sun-protection-outdoor-long-sleeve-performance-dri-fit-shirts",
    destination:
      "/product/hooked-soul-fishing-mens-upf-50-uv-sun-protection-outdoor-long-sleeve-performance-dri-fit-shirts/",
    permanent: true,
  },
  {
    source:
      "/performance-fishing-long-sleeve-shirt-with-face-mask-neck-gaiter-hoodie-upf-50-sun-protection",
    destination:
      "/product/performance-fishing-long-sleeve-shirt-with-face-mask-neck-gaiter-hoodie-upf-50-sun-protection/",
    permanent: true,
  },
  {
    source: "/habit-kids-youth-short-sleeve-fishing-guide-shirt",
    destination: "/product/habit-kids-youth-short-sleeve-fishing-guide-shirt/",
    permanent: true,
  },
  {
    source: "/pelagic-ultratek-hooded-fishing-shirt-2",
    destination: "/product/pelagic-ultratek-hooded-fishing-shirt-2/",
    permanent: true,
  },
  {
    source: "/southern-fin-apparel-womens",
    destination: "/product/southern-fin-apparel-womens/",
    permanent: true,
  },
  {
    source: "/pelagic-vaportek-long-sleeve-fishing-shirt",
    destination: "/product/pelagic-vaportek-long-sleeve-fishing-shirt/",
    permanent: true,
  },
  {
    source: "/oneill-womens-basic-skins-upf-50-long-sleeve-rash-guard",
    destination:
      "/product/oneill-womens-basic-skins-upf-50-long-sleeve-rash-guard/",
    permanent: true,
  },
  {
    source:
      "/o2tee-mens-american-flag-soft-slim-long-sleeve-compression-gym-trainning-casual-top",
    destination: "/store/",
    permanent: true,
  },
  {
    source:
      "/crazy-dog-t-shirts-womens-fishing-saved-me-from-becoming-a-pornstar-tshirt-funny-outdoor-tee",
    destination:
      "/product/crazy-dog-t-shirts-womens-fishing-saved-me-from-becoming-a-pornstar-tshirt-funny-outdoor-tee/",
    permanent: true,
  },
  {
    source: "/columbia-mens-terminal-tackle-pfg-sleeve-ls-shirt",
    destination: "/product/columbia-mens-terminal-tackle-pfg-sleeve-ls-shirt/",
    permanent: true,
  },
  {
    source: "/under-armour-womens-coldgear-graphic-1-2-zip",
    destination: "/product/under-armour-womens-coldgear-graphic-1-2-zip/",
    permanent: true,
  },
  {
    source: "/naviskin-mens-upf-50-sun-protection-fishing-shirt-long-sleeve",
    destination:
      "/product/naviskin-mens-upf-50-sun-protection-fishing-shirt-long-sleeve/",
    permanent: true,
  },
  {
    source: "/columbia-sportswear-boys-bahamatm-l-s-shirt-little-big-kids",
    destination:
      "/product/columbia-sportswear-boys-bahamatm-l-s-shirt-little-big-kids/",
    permanent: true,
  },
  {
    source: "/threadrock-mens-fishing-american-flag-t-shirt",
    destination: "/product/threadrock-mens-fishing-american-flag-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/baleaf-mens-upf-50-sun-protection-hoodie-long-sleeve-performance-hiking-fishing-t-shirt",
    destination:
      "/product/baleaf-mens-upf-50-sun-protection-hoodie-long-sleeve-performance-hiking-fishing-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/kryptek-aura-camo-shirt-quick-dry-fabric-for-fishing-swimming-upf-30-uv-sun-protection-k-ore-collection",
    destination:
      "/product/kryptek-aura-camo-shirt-quick-dry-fabric-for-fishing-swimming-upf-30-uv-sun-protection-k-ore-collection/",
    permanent: true,
  },
  {
    source: "/habit-belcoast-short-sleeve-river-guide-fishing-shirt",
    destination:
      "/product/habit-belcoast-short-sleeve-river-guide-fishing-shirt/",
    permanent: true,
  },
  {
    source:
      "/huk-mens-icon-x-camo-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection",
    destination:
      "/product/huk-mens-icon-x-camo-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection/",
    permanent: true,
  },
  {
    source:
      "/southern-attitude-pineapple-anchor-coral-womens-long-sleeve-t-shirt",
    destination:
      "/product/southern-attitude-pineapple-anchor-coral-womens-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source: "/jason-mathias-high-performance-fishing-shirt-lobster-diving",
    destination:
      "/product/jason-mathias-high-performance-fishing-shirt-lobster-diving/",
    permanent: true,
  },
  {
    source:
      "/baleaf-womens-long-sleeve-v-neck-dri-fit-uv-t-shirt-athletic-running-wicking-shirts",
    destination:
      "/product/baleaf-womens-long-sleeve-v-neck-dri-fit-uv-t-shirt-athletic-running-wicking-shirts/",
    permanent: true,
  },
  {
    source:
      "/gamefish-usa-long-sleeve-fishing-shirt-american-flag-bass-for-women-upf-50-dri-fit-microfiber-performance-clothing",
    destination:
      "/product/gamefish-usa-long-sleeve-fishing-shirt-american-flag-bass-for-women-upf-50-dri-fit-microfiber-performance-clothing/",
    permanent: true,
  },
  {
    source:
      "/g-h-bass-co-mens-summit-creek-seersucker-short-sleeve-button-down-plaid-shirt",
    destination:
      "/product/g-h-bass-co-mens-summit-creek-seersucker-short-sleeve-button-down-plaid-shirt/",
    permanent: true,
  },
  {
    source: "/jason-mathias-redfish-ls-high-performance-long-sleeve-t-shirt",
    destination:
      "/product/jason-mathias-redfish-ls-high-performance-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/huk-womens-picture-perfect-pursuit-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection",
    destination:
      "/product/huk-womens-picture-perfect-pursuit-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection/",
    permanent: true,
  },
  {
    source:
      "/sand-salt-surf-sun-pirate-life-tribal-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    destination:
      "/product/sand-salt-surf-sun-pirate-life-tribal-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source: "/roadbox-mens-long-sleeve-hoodie-shirt-outdoor-with-mesh-sides",
    destination:
      "/product/roadbox-mens-long-sleeve-hoodie-shirt-outdoor-with-mesh-sides/",
    permanent: true,
  },
  {
    source:
      "/mens-mines-so-big-i-have-to-use-two-hands-tshirt-funny-fishing-tee",
    destination:
      "/product/mens-mines-so-big-i-have-to-use-two-hands-tshirt-funny-fishing-tee/",
    permanent: true,
  },
  {
    source:
      "/coldpruf-mens-basic-dual-layer-long-sleeve-crew-neck-base-layer-top-p2021530",
    destination:
      "/product/coldpruf-mens-basic-dual-layer-long-sleeve-crew-neck-base-layer-top-p2021530/",
    permanent: true,
  },
  {
    source:
      "/performance-fishing-hoodie-50-sunblock-shirt-spf-long-sleeve-quick-dry-sweatshirt-fade-pattern",
    destination:
      "/product/performance-fishing-hoodie-50-sunblock-shirt-spf-long-sleeve-quick-dry-sweatshirt-fade-pattern/",
    permanent: true,
  },
  {
    source: "/habit-mens-outdoor-long-sleeve-lightweight-Cooling-fishing-shirt",
    destination:
      "/product/habit-mens-outdoor-long-sleeve-lightweight-Cooling-fishing-shirt/",
    permanent: true,
  },
  {
    source:
      "/performance-fishing-shirt-sun-protection-shirt-upf50-outdoor-long-sleeve-dry-fit-athletic-shirts-us-flag",
    destination:
      "/product/performance-fishing-shirt-sun-protection-shirt-upf50-outdoor-long-sleeve-dry-fit-athletic-shirts-us-flag/",
    permanent: true,
  },
  {
    source:
      "/simms-mens-stone-cold-shirt-upf-30-quick-dry-long-sleeve-shirt-helps-you-stay-cool-anti-odor-technology-fishing-shirt-for-men",
    destination:
      "/product/simms-mens-stone-cold-shirt-upf-30-quick-dry-long-sleeve-shirt-helps-you-stay-cool-anti-odor-technology-fishing-shirt-for-men/",
    permanent: true,
  },
  {
    source: "/bassdash-womens-upf-50-sun-protection-long-sleeve-performance",
    destination:
      "/product/bassdash-womens-upf-50-sun-protection-long-sleeve-performance/",
    permanent: true,
  },
  {
    source: "/baleaf-mens-upf-50",
    destination: "/product/baleaf-mens-upf-50/",
    permanent: true,
  },
  {
    source: "/funny-fishing-shirt-sometimes-its-a-fish-fishing-tshirt",
    destination:
      "/product/funny-fishing-shirt-sometimes-its-a-fish-fishing-tshirt/",
    permanent: true,
  },
  {
    source:
      "/mossy-oak-performance-fishing-shirts-for-men-long-sleeve-shirt-quick-dry",
    destination:
      "/product/mossy-oak-performance-fishing-shirts-for-men-long-sleeve-shirt-quick-dry/",
    permanent: true,
  },
  {
    source:
      "/funny-fishing-shirt-gifts-for-fisherman-fishing-tees-for-men-premium-t-shirt",
    destination:
      "/product/funny-fishing-shirt-gifts-for-fisherman-fishing-tees-for-men-premium-t-shirt/",
    permanent: true,
  },
  {
    source: "/columbia-womens-pfg-tamiami-ii-long-sleeve-shirt",
    destination: "/product/columbia-womens-pfg-tamiami-ii-long-sleeve-shirt/",
    permanent: true,
  },
  {
    source: "/columbia-mens-tamiami-ii-ss-shirt",
    destination: "/product/columbia-mens-tamiami-ii-ss-shirt/",
    permanent: true,
  },
  {
    source:
      "/baleaf-womens-upf-50-sun-protection-hoodies-mask-long-sleeve-fishing-shirt",
    destination:
      "/product/baleaf-womens-upf-50-sun-protection-hoodies-mask-long-sleeve-fishing-shirt/",
    permanent: true,
  },
  {
    source:
      "/hook-tackle-mens-seacliff-2-0-short-sleeve-vented-uv-sun-protection-performance-fishing-shirt",
    destination:
      "/product/hook-tackle-mens-seacliff-2-0-short-sleeve-vented-uv-sun-protection-performance-fishing-shirt/",
    permanent: true,
  },
  {
    source:
      "/g-h-bass-co-mens-big-and-tall-explorer-short-sleeve-button-down-fishing-shirt-solid-flap-pocket-2",
    destination:
      "/product/g-h-bass-co-mens-big-and-tall-explorer-short-sleeve-button-down-fishing-shirt-solid-flap-pocket-2/",
    permanent: true,
  },
  {
    source:
      "/baleaf-boys-upf-50-youth-spf-shirts-long-sleeve-shirt-basic-skins-sun-protection",
    destination:
      "/product/baleaf-boys-upf-50-youth-spf-shirts-long-sleeve-shirt-basic-skins-sun-protection/",
    permanent: true,
  },
  {
    source:
      "/caracilia-womens-uv-sun-protection-long-sleeve-hooded-rash-guard-wetsuit-swimsuit-top",
    destination:
      "/product/caracilia-womens-uv-sun-protection-long-sleeve-hooded-rash-guard-wetsuit-swimsuit-top/",
    permanent: true,
  },
  {
    source:
      "/koofin-gear-womens-performance-fishing-hoodie-long-sleeve-upf50-tops-half-zip-thumb-hole-workout-sunshirt-drawcords",
    destination:
      "/product/koofin-gear-womens-performance-fishing-hoodie-long-sleeve-upf50-tops-half-zip-thumb-hole-workout-sunshirt-drawcords/",
    permanent: true,
  },
  {
    source: "/habit-shell-cove-short-sleeve-river-guide-fishing-shirt",
    destination:
      "/product/habit-shell-cove-short-sleeve-river-guide-fishing-shirt/",
    permanent: true,
  },
  {
    source: "/columbia-womens-pfg-bahama-short-sleeve-shirt",
    destination: "/product/columbia-womens-pfg-bahama-short-sleeve-shirt/",
    permanent: true,
  },
  {
    source: "/huk-mens-icon-x-camo-fade-shirt",
    destination: "/product/huk-mens-icon-x-camo-fade-shirt/",
    permanent: true,
  },
  {
    source: "/columbia-pfg-americana-saltwater-fish-flag-t-shirt",
    destination: "/product/columbia-pfg-americana-saltwater-fish-flag-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/baleaf-mens-rain-jacket-waterproof-with-hooded-lightweight-packable-bike-pullover-running-raincoat-poncho-windbreaker",
    destination:
      "/product/baleaf-mens-rain-jacket-waterproof-with-hooded-lightweight-packable-bike-pullover-running-raincoat-poncho-windbreaker/",
    permanent: true,
  },
  {
    source:
      "/huk-mens-mossy-oak-pursuit-long-sleeve-shirt-camo-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection",
    destination:
      "/product/huk-mens-mossy-oak-pursuit-long-sleeve-shirt-camo-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection/",
    permanent: true,
  },
  {
    source:
      "/pike-fishing-american-usa-flag-camouflage-musky-graphic-camo-t-shirt",
    destination:
      "/product/pike-fishing-american-usa-flag-camouflage-musky-graphic-camo-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/crazy-dog-t-shirts-youth-eat-sleep-fish-t-shirt-funny-fishing-tee-for-kids",
    destination:
      "/product/crazy-dog-t-shirts-youth-eat-sleep-fish-t-shirt-funny-fishing-tee-for-kids/",
    permanent: true,
  },
  {
    source: "/mossy-oak-mens-long-sleeve-performance-fishing-shirt-with-gaiter",
    destination:
      "/product/mossy-oak-mens-long-sleeve-performance-fishing-shirt-with-gaiter/",
    permanent: true,
  },
  {
    source: "/under-armour-womens-coldgear-authentics-mock-neck",
    destination: "/product/under-armour-womens-coldgear-authentics-mock-neck/",
    permanent: true,
  },
  {
    source: "/habit-hooded-performance-layer",
    destination: "/product/habit-hooded-performance-layer/",
    permanent: true,
  },
  {
    source:
      "/long-sleeve-fishing-t-shirt-for-men-and-women-upf-50-dri-fit-performance-clothing-southern-fin-apparel",
    destination:
      "/product/long-sleeve-fishing-t-shirt-for-men-and-women-upf-50-dri-fit-performance-clothing-southern-fin-apparel/",
    permanent: true,
  },
  {
    source: "/its-ok-if-you-dont-like-fishing-gift-idea-funny-quotes-t-shirt",
    destination:
      "/product/its-ok-if-you-dont-like-fishing-gift-idea-funny-quotes-t-shirt/",
    permanent: true,
  },
  {
    source: "/weekend-hooker-fishing-shirt-long-sleeve-funny-t-shirt-cool-dry",
    destination:
      "/product/weekend-hooker-fishing-shirt-long-sleeve-funny-t-shirt-cool-dry/",
    permanent: true,
  },
  {
    source:
      "/sand-salt-surf-sun-shark-blood-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    destination:
      "/product/sand-salt-surf-sun-shark-blood-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/under-armour-womens-coldgear-armour-compression-crew-long-sleeve-t-shirt",
    destination:
      "/product/under-armour-womens-coldgear-armour-compression-crew-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source: "/pelagic-deluxe-premium-t-shirt",
    destination: "/product/pelagic-deluxe-premium-t-shirt/",
    permanent: true,
  },
  {
    source: "/columbia-mens-grander-marlin-woven-ls",
    destination: "/product/columbia-mens-grander-marlin-woven-ls/",
    permanent: true,
  },
  {
    source:
      "/willit-mens-upf-50-sun-protection-hoodie-shirt-long-sleeve-spf-fishing-outdoor-uv-shirt-hiking-lightweight",
    destination:
      "/product/willit-mens-upf-50-sun-protection-hoodie-shirt-long-sleeve-spf-fishing-outdoor-uv-shirt-hiking-lightweight/",
    permanent: true,
  },
  {
    source:
      "/simms-bass-logo-tech-tee-long-sleeve-fishing-shirt-sun-protection-angler-shirt-lightweight-breathable-moisture-wicking-anti-odor",
    destination:
      "/product/simms-bass-logo-tech-tee-long-sleeve-fishing-shirt-sun-protection-angler-shirt-lightweight-breathable-moisture-wicking-anti-odor/",
    permanent: true,
  },
  {
    source: "/irish-american-flag-fishing-rod-st-patricks-day-t-shirt",
    destination:
      "/product/irish-american-flag-fishing-rod-st-patricks-day-t-shirt/",
    permanent: true,
  },
  {
    source: "/under-armour-womens-cold-gear-authentic-crew-shirt",
    destination: "/product/under-armour-womens-cold-gear-authentic-crew-shirt/",
    permanent: true,
  },
  {
    source:
      "/hook-tackle-mens-liberty-long-sleeve-vented-uv-sun-protection-performance-fishing-shirt",
    destination:
      "/product/hook-tackle-mens-liberty-long-sleeve-vented-uv-sun-protection-performance-fishing-shirt/",
    permanent: true,
  },
  {
    source: "/a4-adult-cooling-performance-long-sleeve-t-shirt",
    destination: "/product/a4-adult-cooling-performance-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/mens-upf-50-uv-sun-protection-outdoor-hoodie-long-sleeve-rash-guard-hiking-fishing-swimming-workout-shirts",
    destination:
      "/product/mens-upf-50-uv-sun-protection-outdoor-hoodie-long-sleeve-rash-guard-hiking-fishing-swimming-workout-shirts/",
    permanent: true,
  },
  {
    source:
      "/hanes-mens-2-pack-long-sleeve-cool-dri-t-shirt-upf-50-1-graphite-1-white",
    destination:
      "/product/hanes-mens-2-pack-long-sleeve-cool-dri-t-shirt-upf-50-1-graphite-1-white/",
    permanent: true,
  },
  {
    source: "/costa-del-mar-mens-s-s-beachside-tee",
    destination: "/product/costa-del-mar-mens-s-s-beachside-tee/",
    permanent: true,
  },
  {
    source:
      "/under-armour-mens-coldgear-armour-compression-mock-long-sleeve-t-shirt",
    destination:
      "/product/under-armour-mens-coldgear-armour-compression-mock-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/sand-salt-surf-sun-tuna-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    destination:
      "/product/sand-salt-surf-sun-tuna-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/performance-fishing-shirt-mens-vented-long-sleeve-upf-50-sun-protection-quick-dry-cooling-mesh-sides-rash-guard",
    destination:
      "/product/performance-fishing-shirt-mens-vented-long-sleeve-upf-50-sun-protection-quick-dry-cooling-mesh-sides-rash-guard/",
    permanent: true,
  },
  {
    source: "/columbia-mens-pfg-bahama",
    destination: "/product/columbia-mens-pfg-bahama/",
    permanent: true,
  },
  {
    source: "/erazor-bits-wicked-crab-long-sleeve-t-shirt-wf110ls",
    destination:
      "/product/erazor-bits-wicked-crab-long-sleeve-t-shirt-wf110ls/",
    permanent: true,
  },
  {
    source: "/jaws-movie-quints-shark-fishing-t-shirt",
    destination: "/product/jaws-movie-quints-shark-fishing-t-shirt/",
    permanent: true,
  },
  {
    source: "/mens-dont-be-a-dumb-bass-tshirt-funny-fishing-tee-for-guys",
    destination:
      "/product/mens-dont-be-a-dumb-bass-tshirt-funny-fishing-tee-for-guys/",
    permanent: true,
  },
  {
    source: "/habit-kids-youth-long-sleeve-fishing-guide-shirt",
    destination: "/product/habit-kids-youth-long-sleeve-fishing-guide-shirt/",
    permanent: true,
  },
  {
    source: "/under-armour-mens-tide-chaser-short-sleeve-shirt",
    destination: "/product/under-armour-mens-tide-chaser-short-sleeve-shirt/",
    permanent: true,
  },
  {
    source:
      "/they-see-me-trollin-t-shirt-funny-fishing-shirts-fish-jokes-summer-camping",
    destination:
      "/product/they-see-me-trollin-t-shirt-funny-fishing-shirts-fish-jokes-summer-camping/",
    permanent: true,
  },
  {
    source:
      "/bamboo-cay-mens-short-sleeve-peekaboo-palm-casual-embroidered-woven-shirt",
    destination:
      "/product/bamboo-cay-mens-short-sleeve-peekaboo-palm-casual-embroidered-woven-shirt/",
    permanent: true,
  },
  {
    source:
      "/bamboo-cay-mens-short-sleeve-hurricane-palm-casual-embroidered-woven-shirt",
    destination:
      "/product/bamboo-cay-mens-short-sleeve-hurricane-palm-casual-embroidered-woven-shirt/",
    permanent: true,
  },
  {
    source:
      "/bigfish-skelefish-bass-upf50-long-sleeve-performance-fishing-shirt",
    destination:
      "/product/bigfish-skelefish-bass-upf50-long-sleeve-performance-fishing-shirt/",
    permanent: true,
  },
  {
    source:
      "/fish-skinz-womens-performance-fishing-shirt-upf-50-protection-mermaid-hot-pink",
    destination:
      "/product/fish-skinz-womens-performance-fishing-shirt-upf-50-protection-mermaid-hot-pink/",
    permanent: true,
  },
  {
    source:
      "/womens-performance-long-sleeve-koofin-gear-performance-fishing-hoodie-upf50",
    destination:
      "/product/womens-performance-long-sleeve-koofin-gear-performance-fishing-hoodie-upf50/",
    permanent: true,
  },
  {
    source: "/habit-womens-short-sleeve-fishing-guide-shirt",
    destination: "/product/habit-womens-short-sleeve-fishing-guide-shirt/",
    permanent: true,
  },
  {
    source:
      "/sougayilang-professional-fishing-jersey-long-sleeve-for-men-women-upf-50-sun-protection-with-moisture-wicking",
    destination:
      "/product/sougayilang-professional-fishing-jersey-long-sleeve-for-men-women-upf-50-sun-protection-with-moisture-wicking/",
    permanent: true,
  },
  {
    source: "/bassdash-mens-long-sleeve-fishing-shirt-upf50",
    destination: "/product/bassdash-mens-long-sleeve-fishing-shirt-upf50/",
    permanent: true,
  },
  {
    source:
      "/koofin-gear-performance-fishing-hoodie-upf50-sunblock-shirt-outdoor-quick-dry-athletic-sweatshirt",
    destination:
      "/product/koofin-gear-performance-fishing-hoodie-upf50-sunblock-shirt-outdoor-quick-dry-athletic-sweatshirt/",
    permanent: true,
  },
  {
    source:
      "/priessei-womens-long-sleeve-upf-50-uv-sun-protection-hoodie-for-fishing",
    destination:
      "/product/priessei-womens-long-sleeve-upf-50-uv-sun-protection-hoodie-for-fishing/",
    permanent: true,
  },
  {
    source: "/huk-mens-icon-x-camo-fade-long-sleeve-shirt",
    destination: "/product/huk-mens-icon-x-camo-fade-long-sleeve-shirt/",
    permanent: true,
  },
  {
    source:
      "/performance-fishing-hoodie-with-face-mask-hooded-sunblock-shirt-sun-shield-long-sleeve-upf50-tops-half-zip",
    destination:
      "/product/performance-fishing-hoodie-with-face-mask-hooded-sunblock-shirt-sun-shield-long-sleeve-upf50-tops-half-zip/",
    permanent: true,
  },
  {
    source: "/habit-taku-bay-short-sleeve-river-guide-fishing-shirt",
    destination:
      "/product/habit-taku-bay-short-sleeve-river-guide-fishing-shirt/",
    permanent: true,
  },
  {
    source: "/i-fish-like-a-girl-tshirts-funny-fishing-shirt-with-sayings",
    destination:
      "/product/i-fish-like-a-girl-tshirts-funny-fishing-shirt-with-sayings/",
    permanent: true,
  },
  {
    source:
      "/mens-performance-vented-long-sleeve-fishing-shirt-1-4-zip-upf50-sun-protection-dry-fit-moisture-wicking",
    destination:
      "/product/mens-performance-vented-long-sleeve-fishing-shirt-1-4-zip-upf50-sun-protection-dry-fit-moisture-wicking/",
    permanent: true,
  },
  {
    source: "/salty-crew-mens-tailed-hood-fleece",
    destination: "/product/salty-crew-mens-tailed-hood-fleece/",
    permanent: true,
  },
  {
    source: "/habit-mens-taku-bay-long-sleeve-river-guide-fishing-shirt",
    destination:
      "/product/habit-mens-taku-bay-long-sleeve-river-guide-fishing-shirt/",
    permanent: true,
  },
  {
    source: "/bigfoot-fishing-shirt-funny-sasquatch-and-fish",
    destination: "/product/bigfoot-fishing-shirt-funny-sasquatch-and-fish/",
    permanent: true,
  },
  {
    source: "/habit-mens-short-sleeve-travel-shirt",
    destination: "/product/habit-mens-short-sleeve-travel-shirt/",
    permanent: true,
  },
  {
    source:
      "/southern-attitude-salty-anchor-navy-blue-preppy-short-sleeve-shirt",
    destination:
      "/product/southern-attitude-salty-anchor-navy-blue-preppy-short-sleeve-shirt/",
    permanent: true,
  },
  {
    source:
      "/i-love-it-when-she-bends-over-fisherman-humor-eat-sleep-fish-repeat-funny-fishing-tee-mens-tshirt",
    destination:
      "/product/i-love-it-when-she-bends-over-fisherman-humor-eat-sleep-fish-repeat-funny-fishing-tee-mens-tshirt/",
    permanent: true,
  },
  {
    source: "/costa-del-mar-mens-tech-crew-performance-long-sleeve-shirt",
    destination:
      "/product/costa-del-mar-mens-tech-crew-performance-long-sleeve-shirt/",
    permanent: true,
  },
  {
    source:
      "/fish-skinz-mens-performance-fishing-shirt-uv-50-protection-blueline-flag-gray",
    destination:
      "/product/fish-skinz-mens-performance-fishing-shirt-uv-50-protection-blueline-flag-gray/",
    permanent: true,
  },
  {
    source:
      "/cqr-mens-performance-fishing-gear-upf-50-short-sleeve-breathable-pfg-rip-stop-shirt",
    destination:
      "/product/cqr-mens-performance-fishing-gear-upf-50-short-sleeve-breathable-pfg-rip-stop-shirt/",
    permanent: true,
  },
  {
    source:
      "/got-sports-upf-50-performance-long-sleeve-shirt-for-fishing-sailing-kayaking",
    destination:
      "/product/got-sports-upf-50-performance-long-sleeve-shirt-for-fishing-sailing-kayaking/",
    permanent: true,
  },
  {
    source: "/fishing-shirt-funny-american-flag-fishing-shirt",
    destination: "/product/fishing-shirt-funny-american-flag-fishing-shirt/",
    permanent: true,
  },
  {
    source: "/gbond-apparel-the-rodfather-funny-parody-t-shirt",
    destination: "/product/gbond-apparel-the-rodfather-funny-parody-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/mens-im-so-good-with-my-rod-i-make-fish-come-tshirt-funny-sarcastic-fishing-tee",
    destination:
      "/product/mens-im-so-good-with-my-rod-i-make-fish-come-tshirt-funny-sarcastic-fishing-tee/",
    permanent: true,
  },
  {
    source:
      "/gamefish-usa-mens-upf-50-long-sleeve-microfiber-moisture-wicking-performance-bass-fishing-shirt",
    destination:
      "/product/gamefish-usa-mens-upf-50-long-sleeve-microfiber-moisture-wicking-performance-bass-fishing-shirt/",
    permanent: true,
  },
  {
    source:
      "/fishing-ruler-long-sleeve-wicking-fisherman-shirt-w-ruler-on-forearm-t-shirt",
    destination:
      "/product/fishing-ruler-long-sleeve-wicking-fisherman-shirt-w-ruler-on-forearm-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/long-sleeve-fishing-shirts-fishing-hoodie-for-men-and-women-fit-performance-clothing-upf-50quick-dry",
    destination:
      "/product/long-sleeve-fishing-shirts-fishing-hoodie-for-men-and-women-fit-performance-clothing-upf-50quick-dry/",
    permanent: true,
  },
  {
    source: "/hanes-sport-womens-cool-dri-performance-v-neck-tee",
    destination: "/product/hanes-sport-womens-cool-dri-performance-v-neck-tee/",
    permanent: true,
  },
  {
    source:
      "/womens-upf-50-uv-sun-protection-hoodie-shirt-dry-fit-spf-long-sleeve-outdoor-performance-fishing-hiking-shirts",
    destination:
      "/product/womens-upf-50-uv-sun-protection-hoodie-shirt-dry-fit-spf-long-sleeve-outdoor-performance-fishing-hiking-shirts/",
    permanent: true,
  },
  {
    source:
      "/crazy-dog-t-shirts-mens-a-reel-expert-can-tackle-anything-tshirt-funny-fishing-tee",
    destination:
      "/product/crazy-dog-t-shirts-mens-a-reel-expert-can-tackle-anything-tshirt-funny-fishing-tee/",
    permanent: true,
  },
  {
    source: "/pelagic-ultratek-hoodie-fishing-shirt",
    destination: "/product/pelagic-ultratek-hoodie-fishing-shirt/",
    permanent: true,
  },
  {
    source:
      "/kryptek-hyperion-long-sleeve-camo-shirt-lightweight-birds-eye-mesh-for-hunting-fishing-shirt-k-ore-collection",
    destination:
      "/product/kryptek-hyperion-long-sleeve-camo-shirt-lightweight-birds-eye-mesh-for-hunting-fishing-shirt-k-ore-collection/",
    permanent: true,
  },
  {
    source:
      "/mens-grandpa-is-my-name-fishing-is-my-game-tshirt-funny-fathers-day-tee",
    destination:
      "/product/mens-grandpa-is-my-name-fishing-is-my-game-tshirt-funny-fathers-day-tee/",
    permanent: true,
  },
  {
    source: "/simms-womens-solarflex-printed-fishing-hoody-with-upf-50",
    destination:
      "/product/simms-womens-solarflex-printed-fishing-hoody-with-upf-50/",
    permanent: true,
  },
  {
    source:
      "/fishing-clothes-outdoor-long-sleeve-fishing-shirts-breathable-jersey-men-pants",
    destination:
      "/product/fishing-clothes-outdoor-long-sleeve-fishing-shirts-breathable-jersey-men-pants/",
    permanent: true,
  },
  {
    source:
      "/bamboo-cay-mens-chest-bird-of-paradise-tropical-style-embroidered-hawaiian-button-down-shir",
    destination:
      "/product/bamboo-cay-mens-chest-bird-of-paradise-tropical-style-embroidered-hawaiian-button-down-shir/",
    permanent: true,
  },
  {
    source: "/habit-mens-fourche-river-guide-shirt",
    destination: "/product/habit-mens-fourche-river-guide-shirt/",
    permanent: true,
  },
  {
    source: "/habit-hooded-1-4-zip-performance-layer",
    destination: "/product/habit-hooded-1-4-zip-performance-layer/",
    permanent: true,
  },
  {
    source:
      "/piscifun-performance-upf50-long-sleeve-fishing-t-shirt-with-hoodie",
    destination:
      "/product/piscifun-performance-upf50-long-sleeve-fishing-t-shirt-with-hoodie/",
    permanent: true,
  },
  {
    source:
      "/crazy-dog-t-shirts-mens-part-time-hooker-tshirt-funny-outdoor-fishing-tee-for-guys",
    destination:
      "/product/crazy-dog-t-shirts-mens-part-time-hooker-tshirt-funny-outdoor-fishing-tee-for-guys/",
    permanent: true,
  },
  {
    source: "/columbia-mens-super-bonehead-classic-long-sleeve-fishing-shirt",
    destination:
      "/product/columbia-mens-super-bonehead-classic-long-sleeve-fishing-shirt/",
    permanent: true,
  },
  {
    source: "/jason-mathias-high-performance-fishing-shirt-sea-spirit-sailfish",
    destination:
      "/product/jason-mathias-high-performance-fishing-shirt-sea-spirit-sailfish/",
    permanent: true,
  },
  {
    source: "/ann-arbor-funny-fishing-tee",
    destination: "/product/ann-arbor-funny-fishing-tee/",
    permanent: true,
  },
  {
    source: "/huk-cold-weather-icon-x-long-sleeve-t-shirt",
    destination: "/product/huk-cold-weather-icon-x-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/naviskin-mens-sun-protection-upf-50-uv-outdoor-long-sleeve-t-shirt",
    destination:
      "/product/naviskin-mens-sun-protection-upf-50-uv-outdoor-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source: "/columbia-mens-bahama-ii-l-s-shirt",
    destination: "/product/columbia-mens-bahama-ii-l-s-shirt/",
    permanent: true,
  },
  {
    source: "/columbia-womens-bonehead-ii-w-long-sleeve-shirt",
    destination: "/product/columbia-womens-bonehead-ii-w-long-sleeve-shirt/",
    permanent: true,
  },
  {
    source: "/pelagic-deluxe-long-sleeve-fishing-t-shirt-size",
    destination: "/product/pelagic-deluxe-long-sleeve-fishing-t-shirt-size/",
    permanent: true,
  },
  {
    source:
      "/crazy-bros-tees-id-rather-be-fishing-funny-sarcastic-fish-gift-for-dad-fisherman-mens-t-shirt",
    destination:
      "/product/crazy-bros-tees-id-rather-be-fishing-funny-sarcastic-fish-gift-for-dad-fisherman-mens-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/bassdash-fishing-t-shirts-for-men-uv-sun-protection-upf-50-long-sleeve-tee-t-shirt",
    destination:
      "/product/bassdash-fishing-t-shirts-for-men-uv-sun-protection-upf-50-long-sleeve-tee-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/tortuga-moon-fishing-shirt-men-womens-upf-50-performance-long-sleeve",
    destination:
      "/product/tortuga-moon-fishing-shirt-men-womens-upf-50-performance-long-sleeve/",
    permanent: true,
  },
  {
    source: "/pelagic-game-fish-premium-t-shirt",
    destination: "/product/pelagic-game-fish-premium-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/simms-solarflex-upf-50-crewneck-shirt-long-sleeve-sun-protection-fishing-shirt-for-men-lightweight-breathable-moisture-wicking-anti-odor",
    destination:
      "/product/simms-solarflex-upf-50-crewneck-shirt-long-sleeve-sun-protection-fishing-shirt-for-men-lightweight-breathable-moisture-wicking-anti-odor/",
    permanent: true,
  },
  {
    source:
      "/wp-content/uploads/2020/08/A13usaonutL._AC_CLa_21402000_81TdGHFI0rL.png_00214020000.00.02140.02000.0_SX679._SX._UX._SY._UY_-300x300.jpeg.webp",
    destination:
      "/product/wp-content/uploads/2020/08/A13usaonutL._AC_CLa_21402000_81TdGHFI0rL.png_00214020000.00.02140.02000.0_SX679._SX._UX._SY._UY_-300x300.jpeg.webp/",
    permanent: true,
  },
  {
    source:
      "/upf-50-long-sleeve-performance-fishing-shirt-eat-drink-fish-repeat-bass",
    destination:
      "/product/upf-50-long-sleeve-performance-fishing-shirt-eat-drink-fish-repeat-bass/",
    permanent: true,
  },
  {
    source:
      "/columbia-womens-pfg-bahama-ii-long-sleeve-shirt-breathable-with-uv-protection",
    destination:
      "/product/columbia-womens-pfg-bahama-ii-long-sleeve-shirt-breathable-with-uv-protection/",
    permanent: true,
  },
  {
    source:
      "/little-donkey-andy-mens-upf-50-uv-protection-shirt-long-sleeve-fishing-shirt-breathable-and-fast-dry",
    destination:
      "/product/little-donkey-andy-mens-upf-50-uv-protection-shirt-long-sleeve-fishing-shirt-breathable-and-fast-dry/",
    permanent: true,
  },
  {
    source:
      "/simms-solarflex-upf-50-shirt-long-sleeve-sun-protection-breathable",
    destination:
      "/product/simms-solarflex-upf-50-shirt-long-sleeve-sun-protection-breathable/",
    permanent: true,
  },
  {
    source:
      "/performance-fishing-hoodie-long-sleeve-dry-fit-sun-protection-shirt-lightweight-outdoor",
    destination:
      "/product/performance-fishing-hoodie-long-sleeve-dry-fit-sun-protection-shirt-lightweight-outdoor/",
    permanent: true,
  },
  {
    source: "/huk-mens-icon-camo-hoodie-long-sleeve-fishing-shirts",
    destination:
      "/product/huk-mens-icon-camo-hoodie-long-sleeve-fishing-shirts/",
    permanent: true,
  },
  {
    source:
      "/salty-scales-redfish-snook-trout-long-sleeve-fishing-shirt-for-men-dri-fit-performance-clothing",
    destination:
      "/product/salty-scales-redfish-snook-trout-long-sleeve-fishing-shirt-for-men-dri-fit-performance-clothing/",
    permanent: true,
  },
  {
    source:
      "/biylaclesen-mens-jersey-golf-polo-shirts-outdoor-pique-performance-tactical-military-long-sleeve-shirts",
    destination:
      "/product/biylaclesen-mens-jersey-golf-polo-shirts-outdoor-pique-performance-tactical-military-long-sleeve-shirts/",
    permanent: true,
  },
  {
    source: "/fishing-shirts-performance",
    destination: "/product/fishing-shirts-performance/",
    permanent: true,
  },
  {
    source:
      "/huk-womens-southern-feed-pursuit-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection",
    destination:
      "/product/huk-womens-southern-feed-pursuit-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection/",
    permanent: true,
  },
  {
    source: "/fishing-shirts-embroidery",
    destination: "/product/fishing-shirts-embroidery/",
    permanent: true,
  },
  {
    source: "/oneill-wetsuits",
    destination: "/product/oneill-wetsuits/",
    permanent: true,
  },
  {
    source:
      "/performance-fishing-hoodie-with-face-mask-hooded-sunblock-shirt-sun-shield-long-sleeve-upf50-dry-fit-quick-dry",
    destination:
      "/product/performance-fishing-hoodie-with-face-mask-hooded-sunblock-shirt-sun-shield-long-sleeve-upf50-dry-fit-quick-dry/",
    permanent: true,
  },
  {
    source:
      "/huk-mens-icon-x-hoodie-long-sleeve-performance-shirt-with-upf-30-sun-protection",
    destination:
      "/product/huk-mens-icon-x-hoodie-long-sleeve-performance-shirt-with-upf-30-sun-protection/",
    permanent: true,
  },
  {
    source:
      "/baleaf-womens-upf-50-sun-protection-t-shirt-long-short-sleeve-outdoor-performance",
    destination:
      "/product/baleaf-womens-upf-50-sun-protection-t-shirt-long-short-sleeve-outdoor-performance/",
    permanent: true,
  },
  {
    source: "/koofin-gear-womens-long-sleeve-performance-fishing-hoodie",
    destination:
      "/product/koofin-gear-womens-long-sleeve-performance-fishing-hoodie/",
    permanent: true,
  },
  {
    source: "/koofin-fishing-hooded-shirt",
    destination: "/product/koofin-fishing-hooded-shirt/",
    permanent: true,
  },
  {
    source:
      "/gamefish-usa-upf-50-microfiber-moisture-wicking-long-sleeve-performance-bass-fishing-shirt-2",
    destination:
      "/product/gamefish-usa-upf-50-microfiber-moisture-wicking-long-sleeve-performance-bass-fishing-shirt-2/",
    permanent: true,
  },
  {
    source: "/columbia-kids-baby-pfg-printed-logo-graphic-tee",
    destination: "/product/columbia-kids-baby-pfg-printed-logo-graphic-tee/",
    permanent: true,
  },
  {
    source: "/columbia-mens-pfg-tamiami-ii-long-sleeve-shirt",
    destination: "/product/columbia-mens-pfg-tamiami-ii-long-sleeve-shirt/",
    permanent: true,
  },
  {
    source: "/southern-attitude-salty-anchor",
    destination: "/product/southern-attitude-salty-anchor/",
    permanent: true,
  },
  {
    source:
      "/sand-salt-surf-sun-vintage-crab-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt",
    destination:
      "/product/sand-salt-surf-sun-vintage-crab-mens-upf-50-uv-sun-protection-performance-long-sleeve-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/womens-hooking-aint-easy-funny-fishing-girl-women-flower-saying-t-shirt",
    destination:
      "/product/womens-hooking-aint-easy-funny-fishing-girl-women-flower-saying-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/telaleo-mens-long-sleeve-sun-protection-t-shirt-upf-50-athletic-workout-hoodie-spf-for-outdoor-fishing-running-hiking",
    destination:
      "/product/telaleo-mens-long-sleeve-sun-protection-t-shirt-upf-50-athletic-workout-hoodie-spf-for-outdoor-fishing-running-hiking/",
    permanent: true,
  },
  {
    source:
      "/trailcrest-fishing-mossy-oak-elements-womens-pullover-long-sleeve-fishing-t-shirt-4-way-stretch-50-upf-sun-protection",
    destination:
      "/product/trailcrest-fishing-mossy-oak-elements-womens-pullover-long-sleeve-fishing-t-shirt-4-way-stretch-50-upf-sun-protection/",
    permanent: true,
  },
  {
    source: "/willit-mens-hooded-ls-long-sleeve-fishing-shirt",
    destination: "/product/willit-mens-hooded-ls-long-sleeve-fishing-shirt/",
    permanent: true,
  },
  {
    source:
      "/baleaf-womens-hoodie-shirts-with-face-cover-long-sleeve-upf-50-lightweight-quick-dry-spf-neck-gaiter-hiking-fishing-outdoor",
    destination:
      "/product/baleaf-womens-hoodie-shirts-with-face-cover-long-sleeve-upf-50-lightweight-quick-dry-spf-neck-gaiter-hiking-fishing-outdoor/",
    permanent: true,
  },
  {
    source:
      "/aw-fashions-hooker-on-the-weekend-funny-fisherman-gifts-fathers-day-mens-fishing-t-shirt",
    destination:
      "/product/aw-fashions-hooker-on-the-weekend-funny-fisherman-gifts-fathers-day-mens-fishing-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/pretchic-mens-upf-50-uv-sun-protection-performance-long-sleeve-outdoor-t-shirt",
    destination:
      "/product/pretchic-mens-upf-50-uv-sun-protection-performance-long-sleeve-outdoor-t-shirt/",
    permanent: true,
  },
  {
    source: "/coolibar-upf-50-mens-andros-fishing-hoodie-sun-protective",
    destination:
      "/product/coolibar-upf-50-mens-andros-fishing-hoodie-sun-protective/",
    permanent: true,
  },
  {
    source: "/fishing-shirts-face-mask",
    destination: "/product-category/fishing-shirts-face-mask/",
    permanent: true,
  },
  {
    source: "/fishing-shirts-for-kids",
    destination: "/product-category/fishing-shirts-for-kids/",
    permanent: true,
  },
  {
    source: "/fishing-shirts-simms",
    destination: "/product-category/fishing-shirts-simms/",
    permanent: true,
  },
  {
    source: "/fishing-shirts-funny",
    destination: "/product-category/fishing-shirts-funny/",
    permanent: true,
  },
  {
    source: "/store/page/16/",
    destination: "/store/",
    permanent: true,
  },
  {
    source: "/fishing-shirts-tournament",
    destination: "/product-category/fishing-shirts-tournament/",
    permanent: true,
  },
  {
    source: "/fishing-shirts-fish",
    destination: "/product-category/fishing-shirts-fish/",
    permanent: true,
  },
  {
    source:
      "/wp-content/uploads/2020/07/A13usaonutL._AC_CLa_21402000_71NK5T36XL.png_00214020000.00.02140.02000.0_SX679._SX._UX._SY._UY_-300x300.jpeg.webp",
    destination: "/",
    permanent: true,
  },
  {
    source: "/fishing-shirts-hanes",
    destination: "/product-category/fishing-shirts-hanes/",
    permanent: true,
  },
  {
    source: "/best-fishing-shirts/",
    destination: "/backend",
    permanent: true,
  },
  {
    source: "/color/light-green/",
    destination: "/",
    permanent: true,
  },
  {
    source:
      "/wp-content/uploads/2020/07/A13usaonutL._AC_CLa_21402000_71QUCchPeiL.png_00214020000.00.02140.02000.0_SX679._SX._UX._SY._UY_-300x300.jpeg.webp",
    destination: "/",
    permanent: true,
  },
  {
    source:
      "/bamboo-cay-mens-chest-bird-of-paradise-tropical-style-embroidered-hawaiian-button-down-shir",
    destination:
      "/product/bamboo-cay-mens-chest-bird-of-paradise-tropical-style-embroidered-hawaiian-button-down-shirt/",
    permanent: true,
  },
  {
    source:
      "/product/i-love-when-my-wife-lets-me-go-fishing-dark-heather-gray-l-graphic-tee-t-shirt-for-men",
    destination:
      "/product/funny-i-love-it-when-my-wife-lets-me-go-fishing-t-shirt/",
    permanent: true,
  },
  {
    source:
      "/product/carhartt-mens-k87-workwear-pocket-short-sleeve-t-shirt-regular-and-big-tall-sizes",
    destination: "/store/",
    permanent: true,
  },
  {
    source:
      "/product/gamefish-usa-mens-upf-50-long-sleeve-microfiber-moisture-wicking-performance-fishing-shirt",
    destination:
      "/product/gamefish-usa-mens-upf-50-long-sleeve-microfiber-moisture-wicking-performance-fishing-shirt-sport-fishing/",
    permanent: true,
  },
  {
    source:
      "/product/lp-adult-sorry-cant-talk-im-on-another-line-fishing-triblend-go-all-out-inc-funny-tee",
    destination:
      "/product/go-all-out-adult-sorry-cant-talk-im-on-another-line-fisherman-gift-t-shirt/",
    permanent: true,
  },
  {
    source: "/product/salty-crew-mens-wahoo-mount-short-sleeve-tee",
    destination: "/store/",
    permanent: true,
  },
  {
    source: "/product-category/funny-fishing-shirts/page/2/",
    destination: "/store/",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-long-sleeve/page/3/",
    destination: "/store/",
    permanent: true,
  },
  {
    source: "/product/[slug]",
    destination: "/store/",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-funny/page/2",
    destination: "/store/",
    permanent: true,
  },
  {
    source:
      "/product/performance-fishing-shirt-upf50-sun-protection-long-sleeve-shirt-outdoor-dry-fit-moisture-wicking-loose-fit",
    destination:
      "/product/mens-koofin-gear-performance-long-sleeve-bass-fishing-shirt/",
    permanent: true,
  },
  {
    source:
      "/product/silik-mens-upf-50-sun-protection-hooded-long-sleeve-shirt-lightweight-sweatshirt-sportswear-athletic-pullover-hoodie",
    destination: "/",
    permanent: true,
  },
  {
    source: "/product-tag/camo/",
    destination: "/store/",
    permanent: true,
  },
  {
    source: "/product/carhartt-mens-signature-sleeve-logo-long-sleeve-t-shirt",
    destination: "/store/",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-pfg-blood-and-guts-iii-long-sleeve-shirt-stain-water-resistant",
    destination:
      "/product/columbia-mens-pfg-blood-guts-iii-long-sleeve-woven-shirt/",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-mens-sleeveless-shirts-muscle-performance-workout-gym-running-tech-tank-top",
    destination: "/store/",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-unisex-adult-long-sleeve-performance-fishing-shirt",
    destination: "/",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-short-sleeve/page/2/",
    destination: "/product-category/fishing-shirts-short-sleeve/",
    permanent: true,
  },
  {
    source: "/product/columbia-womens-bahama-ls",
    destination:
      "/product/columbia-womens-pfg-bahama-ii-long-sleeve-shirt-breathable-with-uv-protection/",
    permanent: true,
  },
  {
    source:
      "/product/tidewe-rain-suit-breathable-waterproof-durable-sport-rainwear",
    destination: "/",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-camo-infant-short-sleeve-tee-in-break-up-country",
    destination: "/",
    permanent: true,
  },
  {
    source:
      "/product/columbia-womens-womens-pfg-bahama-ii-long-sleeve-shirt-breathable-with-uv-protection",
    destination:
      "/product/columbia-womens-pfg-bahama-ii-long-sleeve-shirt-breathable-with-uv-protection/",
    permanent: true,
  },
  {
    source:
      "/product/hanes-cool-dri-performance-mens-long-sleeve-t-shirt_wow-pink_m",
    destination: "/",
    permanent: true,
  },
  {
    source: "/product/hanes-mens-pullover-ecosmart-fleece-hooded-sweatshirt",
    destination: "/",
    permanent: true,
  },
  {
    source:
      "/product/bigfish-skelefish-offshore-upf50-long-sleeve-performance-fishing-shirt",
    destination: "/",
    permanent: true,
  },
  {
    source:
      "/product/la-leela-mens-big-and-tall-beach-short-sleeve-casual-hawaiian-shirt-a",
    destination: "/",
    permanent: true,
  },
  {
    source: "/product/simms-solarflex-long-sleeve-crew-neck-solid-shirts",
    destination:
      "/product/simms-bass-logo-tech-tee-long-sleeve-fishing-shirt-sun-protection-angler-shirt-lightweight-breathable-moisture-wicking-anti-odor/",
    permanent: true,
  },
  {
    source: "/product/crazy-dog-funny-fishing-tee",
    destination:
      "/product/mens-cant-work-today-my-arm-is-in-a-cast-t-shirt-funny-fishing-graphic-top-guys/",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-mossy-oak/feed/",
    destination: "/product-category/fishing-shirts-mossy-oak/",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-columbia/page/3/",
    destination: "/product-category/fishing-shirts-columbia/",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-for-her/feed/",
    destination: "/product-category/fishing-shirts-for-her/",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-funny/page/1/",
    destination: "/product-category/fishing-shirts-funny/",
    permanent: true,
  },
  {
    source: "/product/pelagic-premium-uv-gyotaku-t-shirt",
    destination: "/",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-hoodie/page/1/",
    destination: "/product-category/fishing-shirts-hoodie/",
    permanent: true,
  },
  {
    source: "/product/pelagic-stick-figure-sound-of-the-sea-t-shirt",
    destination: "/",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-for-him/page/2",
    destination: "/product-category/fishing-shirts-for-him/",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-womens-v-neck-short-sleeve-athletic-running-shirts-dry-fit-workout-performance-top",
    destination: "/",
    permanent: true,
  },
  {
    source: "/page.com",
    destination: "/",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-womens-v-neck-short-sleeve-athletic-running-shirts-dry-fit-workout-performance-tops",
    destination: "/",
    permanent: true,
  },
  {
    source:
      "/product/hanes-mens-cool-dri-performance-long-sleeve-t-shirt482l-deep-royal-white-xl",
    destination: "/",
    permanent: true,
  },
  {
    source: "/size",
    destination: "/",
    permanent: true,
  },
  {
    source: "/size/large/page/6",
    destination: "/",
    permanent: true,
  },
  {
    source: "/store/page/2",
    destination: "/",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-long-sleeve/page/2",
    destination: "/product-category/fishing-shirts-long-sleeve/",
    permanent: true,
  },
];
export default redirects;
