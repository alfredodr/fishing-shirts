const redirects = [
  {
    source: "/wp/wp-content/plugins/rwwipru/ss/citii/ON/com/Login.html",
    destination: "/store/",
    permanent: true,
  },
  {
    source: "/wp/wp-content/plugins/rwwipru/ss/2020citii.zip",
    destination: "/store/",
    permanent: true,
  },
  {
    source: "/wp/wp-content/plugins/rwwipru/ss/citii/ON/com",
    destination: "/store/",
    permanent: true,
  },
  {
    source: "/ads.txt",
    destination: "/store/",
    permanent: true,
  },
  { source: "/my-account/", destination: "/", permanent: true },
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
      "/product/gotta-love-a-good-pole-dance-funny-fishing-pole-humor-fisherman-unisex-t-shirt",
    permanent: true,
  },
  {
    source:
      "/product/mens-cant-work-today-my-arm-is-in-a-cast-t-shirt-funny-fishing-graphic-top-guys/",
    destination: "/product/crazy-dog-funny-fishing-tee/",
    permanent: true,
  },
  {
    source: "/download/S/a/l/SaltyCrew.PNG",
    destination: "/?s=salty+crew&post_type=product",
    permanent: true,
  },
  {
    source: "/product-category/for-her/",
    destination: "/product-category/fishing-shirts-for-her/",
    permanent: true,
  },
  { source: "/cart/", destination: "/", permanent: true },
  { source: "/checkout/", destination: "/", permanent: true },
  {
    source:
      "/product/classic-teaze-lord-is-my-light-religious-jesus-christian-t-shirt/",
    destination: "/store/",
    permanent: true,
  },
  { source: "/home/", destination: "/", permanent: true },
  {
    source:
      "/product/mens-upf-50-uv-outdoor-sun-protection-hoodie-t-shirt-long-sleeve-performance-spf-rashguard-shirt-for-fishing-hiking-running/",
    destination: "/store/",
    permanent: true,
  },
  {
    source: "/product/mossy-oak-mens-all-outdoor-flex-short/",
    destination: "/store/",
    permanent: true,
  },
  {
    source: "/sitemap/",
    destination: "/fishingshirtsnow-com-sitemap/",
    permanent: true,
  },
  {
    source:
      "/product/hook-tackle-mens-tarpon-run-short-sleeve-embroidered-uv-sun-protection-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hook-tackle-mens-marlinesque-short-sleeve-embroidered-uv-sun-protection-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hook-tackle-mens-crossing-rods-short-sleeve-embroidered-uv-sun-protection-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/la-leela-mens-big-and-tall-casual-short-sleeve-aloha-hawaiian-shirt-a",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/la-leela-mens-trendy-button-up-short-sleeve-hawaiian-shirt-a",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/simms-bass-logo-tech-tee-long-sleeve-fishing-shirt-sun-protection-angler-shirt-lightweight-breathable-moisture-wicking-anti-odor",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/la-leela-mens-loose-front-pocket-short-sleeve-hawaiian-shirt-a",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mofiz-mens-short-sleeve-polo-sport-shirts-cotton-stretch-golf-shirt-athletic-casual-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/la-leela-mens-big-and-tall-beach-short-sleeve-casual-hawaiian-shirt-a",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/coastal-classics-puerto-rico-nautical-chart-mens-upf-50-sun-protection-long-sleeve-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/sand-salt-surf-sun-hawaii-polynesian-hammerhead-tribal-mens-upf-50-sun-protection-long-sleeve-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/jason-mathias-high-performance-fishing-shirt-white-marlin",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/jason-mathias-inshore-slam-ls-high-performance-long-sleeve-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/pelagic-aquatek-long-sleeve-shirt-youth",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/huk-mens-pursuit-vented-long-sleeve-shirt-long-sleeve-performance-fishing-shirt-with-30-upf-sun-protection",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/pelagic-solar-performance-long-sleeve-upf-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/pelagic-deluxe-logo-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/shimano-long-sleeve-tech-tee-fishing-gear",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/jason-mathias-strike-zone-bass-ls-high-performance-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/magcomsen-mens-long-sleeve-shirts-quick-dry-1-2-zip-up-running-fishing-tactical-shirts-with-pocket",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mens-upf-40-long-sleeve-hooded-shirt-performance-hd-print-quick-dry-fishing-hoodie",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hotlion-cycling-down-hill-jersey-mens-mountain-bike-motocross-jersey-long-sleeve-mtb-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/under-armour-womens-base-3-0-crew-long-sleeve",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/under-armour-womens-locker-long-sleeve-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/luckupper-mens-1-4-zip-pullover-athletic-long-sleeve-shirt-workout-top-with-magic-mask-quick-dry-fit",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/inbike-winter-mens-windproof-thermal-cycling-running-jacket",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/refire-gear-mens-army-special-ops-military-tactical-jacket-softshell-fleece-hooded-outdoor-coat",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/amazon-brand-daily-ritual-womens-jersey-long-sleeve-scoop-neck-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/womens-upf-50-uv-sun-protection-shirt-rash-guard-dry-fit-spf-long-sleeve-swim-fishing-hiking-shirts-outdoor",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/skull-mask-hooded-short-sleeve-shirt-men-solid-color-casual-fashion-top",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/tidewe-rain-suit-breathable-waterproof-durable-sport-rainwear",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/habit-womens-kachemak-hooded-performance-layer",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/habit-mens-short-sleeve-river-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/under-armour-mens-armour-fleece-1-2-zip",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/under-armour-ua-locker-2-0",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/performance-fishing-shirt-vented-long-sleeve-shirt-sun-protection-upf50-moisture-wicking-rash-guard-with-mesh-sides-loose-fit",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/performance-fishing-shirt-sun-protection-shirt-upf50-lightweight-outdoor-long-sleeve-dry-fit-athletic-shirts",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/i-just-want-to-drink-beer-and-jerk-my-rod-funny-fishing-gift-tank-top",
    destination: "/store",
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
      "/product/denali-performance-mens-upf-50-protectuv-mega-solar-long-sleeve-t-shirt-with-denali-marlin-logo",
    destination: "/store",
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
    source:
      "/product/huk-womens-icon-x-long-sleeve-shirt-long-sleeve-performance-shirt-with-upf-30-sun-protection",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hde-womens-long-sleeve-rash-guard-sun-protection-t-shirt-upf-50-beach-swim-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/salinity-gear-ladies-v-neck-performance-fishing-shirt-upf-50-dri-fit-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/womens-upf-50-lightweight-microfiber-moisture-wicking-performance-fishing-shirt-sharks",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/gamefish-usa-womens-upf-50-lightweight-microfiber-moisture-wicking-performance-fishing-shirt-snook",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/gamefish-usa-womens-upf-50-lightweight-microfiber-moisture-wicking-performance-fishing-shirt-redfish",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/jason-mathias-sea-spirit-mahi-womens-ls-high-performance-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/womens-upf-50-lightweight-microfiber-moisture-wicking-performance-fishing-shirt-turtles",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/joes-usa-ladies-long-sleeve-moisture-wicking-athletic-shirts-sizes-xs-4xl",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mocoly-womens-upf-50-sun-protection-hoodie-long-sleeve-spf-outdoor-running-workout-t-shirt-with-thumbholes",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/huk-womens-subphantis-icon-x-camo-hoodie-long-sleeve-performance-shirt-with-upf-30-sun-protection-moisture-transport",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/dayoung-boys-upf-50-sun-protection-rashguard-youth-tops-long-sleeve-outdoor-performance-workout-active-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/goldfox-performance-fishing-hoodie-upf-50-long-sleeve-fishing-shirt-quick-dry-cooling-breathable3-colors",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-kids-baby-terminal-tackle-hoodie",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/sportides-mens-upf-50-uv-sun-protection-outdoor-sport-t-shirt-tee-la245",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/womens-upf-50-sun-protection-long-sleeve-t-shirt-outdoor-rashguard-hiking-hoodies-athletic-top-spf-shirt-all-season",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/womens-sun-protection-athletic-t-shirtlightweight-dry-fit-long-sleeve-performance-t-shirt-for-womens",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/cressi-hooded-rash-guard-green-hunter-small",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/drskin-mask-shirts-turtleneck-compression-top-cool-dry-sports-shirt-baselayer-running-long-sleeve-men",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/aftco-reaper-technical-fleece-hoodie",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/vintage-fishing-st-patricks-day-irish-american-flag-gift-tank-top",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/bass-fishing-irish-american-flag-st-patricks-day-fisherman-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/bass-fishing-irish-american-flag-st-patricks-day-fisherman-long-sleeve-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-silver-ridge-2-0-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-womens-pfg-bahama-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-silver-ridge-2-0-multi-plaid-short-sleeve-vented-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-silver-ridge-lite-short-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-pfg-terminal-tackle-americana-long-sleeve-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-womens-tidal-tee-ii-long-sleeve",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-super-bahama-short-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-womens-pfg-bonehead-stretch-long-sleeve-fishing-shirt-cotton-blend",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-pfg-bonehead-ii-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-pfg-bonehead-short-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-bahama-ii-short-sleeve-shirt-2",
    destination: "/product/columbia-mens-bahama-ii-short-sleeve-shirt",
    permanent: true,
  },
  {
    source: "/product/columbia-girls-tamiami-long-sleeve-shirt-2",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-silver-ridge-lite-plaid-long-sleeve-shirt-uv-sun-protection-moisture-wicking-fabric",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-womens-lo-drag-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-skiff-cast-polo",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-silver-ridge-lite-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-super-tamiami-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-pfg-terminal-tackle-heather-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-womens-pfg-lo-drag-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-womens-super-bahama-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-grander-marlin-woven-ss",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-terminal-tackle-heather-ss-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-pfg-bonehead-short-sleeve-shirt-tall",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-womens-pfg-tidal-tee-ii-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-pfg-super-bahama-short-sleeve-shirt-breathable-uv-protection",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-super-bonehead-classic-short-sleeve-fishing-shirt-black-box-check-small",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-pfg-mens-trollers-best-short-sleeve-shirt-breathable-button-up",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-blood-and-guts-iii-short-sleeve-woven",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-womens-plus-size-bahama-long-sleeve",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-pfg-bonehead-long-sleeve-shirt-cotton-relaxed-fit",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-half-moon-short-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-pfg-super-tamiami-short-sleeve-shirt-upf-40-sun-protection-wicking-fabric",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-terminal-tackle-pfg-tribal-fish-ss",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-tamiami-ii-long-sleeve-shirt-2",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-womens-tidal-deflector-long-sleeve",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-sun-drifter-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-terminal-tackle-pfg-tribal-fish-long-sleeve-shirt-sun-protection",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-unisex-child-pfg-offshore-short-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-terminal-tackle-pfg-state-triangle-long-sleeve-moisture-wicking-uv-sun-protection",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-womens-pfg-bahama-ii-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-terminal-tackle-pfg-triangle-ls-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-glennaker-lake-front-zip-jacket",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-standard-slack-tide-camp-shirts-beet-x-large",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-pfg-low-drag-1-4-zip-pullover-moisture-wicking-sun-protection",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-fishing-shirts-for-men-long-sleeve-moisture-wicking-sun-protection",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-fishing-shirts-for-men-quick-dry-with-upf-sun-protection",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-short-sleeve-fishing-shirts-for-men-sun-protection-clothing-men",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-mens-elements-ls-performance-moisture-wicking-1-4-zip",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/mossy-oak-womens-long-sleeve-performance-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-unisex-adult-long-sleeve-performance-tech-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-long-sleeve-work-shirts-for-men-construction-shirts-for-men",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/mossy-oak-mens-long-sleeve-performance-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-mens-ss-performance-moisture-wicking-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/mossy-oak-triblend-burnout-logo-t-shirt-for-men",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-upf30-logo-screen-print-fishing-tee-with-wicking",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-mens-ls-performance-moisture-wicking-1-4-zip-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-upf30-all-over-camo-with-chest-graphic-fishing-tee-with-wicking",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/mossy-oak-mens-short-sleeve-camp-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/mossy-oak-long-sleeve-henley-camo-shirt-men",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-unisex-adult-long-sleeve-performance-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-mens-performance-moisture-wicking-short-sleeve-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/mossy-oak-mens-mens-short-sleeve-camp-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/mossy-oak-triblend-fishing-logo-burnout-t-shirt-for-men",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/mossy-oak-mens-front-logo-short-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/mossy-oak-mens-printed-short-sleeve-crew-neck-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-camo-infant-short-sleeve-tee-in-break-up-country",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/mossy-oak-mens-americana-printed-short-sleeve-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/mossy-oak-mens-chamois-camouflage-hunting-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-fishing-hoodie-hooded-fishing-shirts-for-men-cooling-hoodie",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-mens-camo-short-sleeve-performance-tech-tee-hunting-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/mossy-oak-mens-breathable-tri-blend-short-sleeve-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/mossy-oak-youth-black-front-logo-hunting-kids-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-camo-toddler-long-sleeve-tee-in-break-up-country",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-upf30-graphic-fishing-tee-with-moisture-wicking-2-pack",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-long-sleeve-traditional-logo-cotton-blend-unisex-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-fishing-shirts-for-men-swim-shirts-beach-shirt-short-sleeve",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/mossy-oak-elements-fishing-brand-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/bigfish-skelefish-muskie-upf50-long-sleeve-performance-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/bigfish-skelefish-offshore-upf50-long-sleeve-performance-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/bigfish-redfish-white-upf50-long-sleeve-performance-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/habit-mens-bohannon-creek-performance-fishing-long-sleeve-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/habit-mens-high-water-long-sleeve-river-guide-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/habit-mens-hooded-1-4-zip-performance-layer",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/pretchic-mens-stretchy-workout-moisture-wicking-gym-tank-top-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/american-flag-fishing-poles-fisherman-reel-rod-and-hook-t-shirt",
    destination: "/product/fishing-shirt-funny-american-flag-fishing-shirt",
    permanent: true,
  },
  {
    source:
      "/product/mens-reel-cool-grumpa-fishing-fathers-day-gift-american-flag-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/fishing-american-flag-fish-vintage-gift-tank-top",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/funny-fishing-tshirt-fishing-rod-hunting-rifle-american-flag-t-shirt-for-men-women",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/usa-freedom-fishing-pole-american-flag-shirt-gift-men-kids",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/vintage-usa-fish-american-flag-shirt-fishing-gifts-abs001",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/vintage-american-flag-crab-hunter-lover-fishing-crabbing-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/thiswear-patriotic-fishing-pole-american-flag-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/catfishing-channel-cat-american-flag-fishing-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/bow-fishing-american-flag-t-shirt-fishing-t-shirts",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-mens-upf-50-hiking-shirt-outdoor-lightweight-fishing-shirt-quick-dry",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-womens-long-sleeve-uv-shirts-quick-dry-running-workout-shirts",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-womens-lightweight-quick-dry-upf-50-sun-protection-long-sleeve-shirt-breathale-fishing-shirts",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-mens-long-sleeve-running-shirts-athletic-workout-t-shirts",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-mens-athletic-long-sleeve-running-shirts-thumbholes-lightweight-workout-t-shirt-quick-dry-tops",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-mens-long-sleeve-hiking-shirts-lightweight-quick-dry-upf-50-shirt-fishing-camping-traveling",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-womens-v-neck-short-sleeve-athletic-running-shirts-dry-fit-workout-performance-tops",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-mens-basic-long-sleeve-rashguard-uv-sun-protection-athletic-swim-shirt-upf-50",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-womens-upf50-long-sleeves-swim-shirt-with-back-pocket-athletic-workout-sun-shirt-rash-guard",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-women-lightweight-capri-jogger-hiking-shorts-running-capri-pants-quick-dry-upf-50-zipper-pockets",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-mens-upf-50-sun-protection-golf-polo-shirt-long-sleeve-tennis-quick-dry-shirt-performance-active-workout-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-evo-mens-upf-50-sun-protection-cool-golf-polo-shirt-quick-dry-long-sleeve-workout-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-mens-evo-cooling-workout-running-athletic-shirts-quick-dry-soft-upf-50-short-sleeve-lightweight-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-womens-lightweight-quick-dry-upf-50-sun-protectionlong-sleeve-shirt-breathale-fishing-shirts-khaki-xl",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-mens-cycling-bike-jersey-long-sleeve-shirt-with-4-rear-pockets-reflective-quick-dry-upf-50",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-mens-short-sleeve-rashguard-swim-shirt-upf-50-sun-protection-rash-guard",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-evo-mens-quick-dry-running-workout-t-shirt-short-sleeve-uv-shirts-cool-athletic-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-mens-heavyweight-thermal-shirt-fleece-baselayer-long-sleeve-crewneck-top",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-womens-athletic-short-sleeved-running-t-shirts-lightweight-quick-dry-workout-training-yoga-crewneck-tops",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-mens-thermal-fleece-long-sleeve-indoor-fitted-mock-shirt-baselayer-underlayer",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-womens-hiking-roll-up-convertable-pants-upf-50-stretch-outdoor-pants-water-resistant-for-everyday-wear",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-big-boys-short-sleeve-rashguard-quick-dry-swim-shirt-upf-50",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-womens-athletic-shirt-long-sleeve-upf-50-sun-shirts-running-hiking-moisture-wicking",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-mens-sleeveless-shirts-muscle-performance-workout-gym-running-tech-tank-top",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-mens-workout-sleeveless-tank-top-hooded-muscle-shirts-upf50-lightweight-running-gym-quick-dry",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-mens-quick-dry-workout-running-athletic-short-sleeve-t-shirt-outdoor-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/baleaf-womens-fleece-thermal-long-sleeve-running-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-womens-upf-50-sun-shirt-long-sleeve-hiking-shirt-v-neck-qucik-dry",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-womens-fleece-jacket-vest-full-zip-hoodie-with-detachable-hood",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/roadbox-mens-sun-shirts-upf-50-uv-protection-quick-dry-hoodies-long-sleeve-for-swimming-fishing-hiking",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/safort-mens-upf-50-sun-protection-hoodie-long-sleeve-half-zip-t-shirt-for-running-fishing-hiking",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mens-upf-50-sun-protection-hoodie-outdoor-long-sleeve-t-shirt-for-running-fishing-hiking",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-pfg-terminal-tackle-hoodie",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mens-upf-50-uv-sun-protection-athletic-hoodie-shirts-long-sleeve-performance-spf-rash-guard-hiking-fishing-swim-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/kyopp-womens-upf-50-uv-sun-protection-hoodie-spf-long-sleeve-t-shirt-outdoor-performance-fishing-hiking-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/carhartt-mens-midweight-hooded-zip-front-sweatshirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/huk-mens-icon-x-camo-hoodie-long-sleeve-performance-shirt-with-upf-30-sun-protection",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/here-fishy-fishy-fishy-t-shirt-fisherman-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/comical-shirt-ladies-shut-up-fish-funny-country-song-t-shirt-fishing-racerback",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/funcle-gift-for-uncle-graphic-novelty-sarcastic-funny-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mens-she-swallows-funny-fishing-gift-for-men-adult-humor-fishing-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/the-rodfather-funny-fishing-parody-t-shirt-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/funny-fishing-saying-shirt-docking-a-boat-tshirt-marriage-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/fresh-fish-funny-fishing-shirt-graphic-fish-t-shirt-for-men-packed-like-a-fish-wrap-ready-fathers-day-grandpa-gifts",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/i-love-it-when-she-bends-over-funny-mens-bass-fishing-gift-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/funny-jerk-it-till-she-swallows-trout-bass-fishing-gear-men-tank-top",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mens-im-one-fly-dad-tshirt-funny-fishing-fathers-day-tee-for-guys",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mens-hunting-and-fishing-what-else-is-there-t-shirt-funny-gift-for-hunter-fish",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/i-love-it-when-she-bends-over-funny-fishing-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/happiness-is-a-big-fish-and-a-witness-t-shirt-fishing-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/ugp-campus-apparel-weekend-forecast-camping-with-a-chance-of-drinking-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/i-was-thinking-about-fishing-funny-fishing-gift-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/i-love-when-my-wife-lets-me-go-fishing-dark-heather-gray-l-graphic-tee-t-shirt-for-men",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/fishing-fish-island-art-surreal-funny-carp-fisherman-gift-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/fishing-is-like-boobs-cute-fishing-shirts-funny-quote-gifts",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/comical-shirt-ladies-shut-up-fish-funny-country-song-t-shirt-fishing-v-neck-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/crazy-dog-t-shirts-mens-lake-mode-tshirt-funny-summer-vacation-fishing-tee-for-guys",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/funny-fishing-shirt-here-fishy-fishy-fathers-day-gift",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/fishing-shirts-for-girls-move-over-boys",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/plan-for-the-day-coffee-fish-beer-funny-adult-mens-fishing-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/koloa-surf-graphic-logo-hoodies-hooded-sweatshirts-in-sizes-s-5xl",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/ogeenier-womens-1-4-zip-pullover-upf-50-uv-sun-protection-long-sleeve-shirts-outdoor-running-athletic-shirts",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/biylaclesen-mens-sun-protection-long-sleeve-t-shirt-upf-50-performance-running-shirts-with-hood",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hoodies-for-boys-outdoor-recreation-shirts-youth-athletic-tops-sun-protection-upf-50",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/devoropa-womens-spf-shirts-upf-50-uv-sun-protection-long-sleeve-outdoor-performance-sun-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/fitst4-mens-upf-50-sun-protection-hoodie-outdoor-long-sleeve-performance-quick-drying-fishing-shirts-with-thumb-hole",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-womens-switchback-iii-adjustable-waterproof-rain-jacket",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-womens-tidal-tee-hoodie",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/amazon-essentials-mens-performance-hooded-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/silik-mens-upf-50-sun-protection-hooded-long-sleeve-shirt-lightweight-sweatshirt-sportswear-athletic-pullover-hoodie",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/pelagic-ultratek-hooded-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/under-armour-iso-chill-shore-break-camo-fish-hoodie",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/amazon-essentials-upf-50-mens-rashguard",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/aftco-youth-samurai-2-hooded-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mens-reel-great-dad-t-shirt-funny-fathers-day-fishing-tee-gift-for-fisherman",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mens-reel-cool-dad-t-shirt-funny-fathers-day-fishing-gift-for-husband-fisherman",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/crazy-dog-t-shirts-mens-fish-ruler-tshirt-funny-fishing-measurement-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mens-i-jerk-it-every-chance-i-get-tshirt-funny-fishing-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mens-sorry-i-missed-your-call-i-was-on-the-other-line-tshirt-funny-fishing-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/performance-fishing-shirt-upf50-sun-protection-long-sleeve-shirt-outdoor-dry-fit-moisture-wicking-loose-fit",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/performance-long-sleeve-bass-fishing-shirt-upf50-sun-protection-dry-fit-moisture-wicking-loose-fit",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/performance-fishing-shirt-long-sleeve-sun-protection-upf50-lightweight-outdoor-quick-dry",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/premium-pullover-hoodie-men-women-sweatshirt-sportswear-cotton-slim-fit",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mens-flex-short-sleeve-button-up-wrinkle-resistance-fishing-shirt-upf50-sun-protection-with-quick-dry-technology",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-mens-s-s-cooldri-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-sport-mens-heathered-performance-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-mens-6-1-oz-tagless-comfortsoft-long-sleeve-t-shirt-5586",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-mens-long-sleeve-cool-dri-t-shirt-upf-50-medium-2-pack-1-navy-1-white",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-mens-2-pack-long-sleeve-cool-dri-t-shirt-upf-50-1-safety-green-1-white",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-sport-mens-x-temp-performance-long-sleeve-training-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-mens-2-pack-long-sleeve-cool-dri-t-shirt-upf-50-1-safety-green-1-white-xx-large",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-comfort-ecosmart-pullover-hooded-sweatshirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-mens-2-pack-long-sleeve-cool-dri-t-shirt-upf-50-1-navy-1-safety-green",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-cool-dri-performance-mens-long-sleeve-t-shirt_deep-royal_l",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-mens-long-sleeve-beefy-t-shirt-pack-of-2",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-tagless-long-sleeve-t-shirtdeep-royalxx-large",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-5586-6-1-oz-tagless-comfortsoft-long-sleeve-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-mens-2-pack-long-sleeve-cool-dri-t-shirt-upf-50-1-graphite-1-safety-green",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-mens-cool-dri-performance-long-sleeve-t-shirt-482l-deep-royal-graphite",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-7-8-oz-50-50-pullover-hood-p170-deep-royal-blue-4xl",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/by-hanes-adult-61-oz-tagless-long-sleeve-t-shirt-smoke-gray-xl-style-5586-original-label",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-mens-long-sleeve-cool-dri-t-shirt-upf-50-x-small-2-pack-safety-green",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-482l-100-polyester-adult-cool-dri-long-sleeve-performance-t-shirt-1-graphite-1-light-blue-large",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-adult-cool-dri-long-sleeve-performance-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-cool-dri-tagless-mens-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-5-2-oz-comfortsoft-cotton-long-sleeve-t-shirt-5286",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-mens-long-sleeve-cool-dri-t-shirt-upf-50-medium-2-pack-1-graphite-1-navy",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-mens-long-sleeve-cool-dri-t-shirt-upf-50-x-large-2-pack-1-graphite-1-navy",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-mens-short-sleeve-cool-dri-t-shirt-upf-50-pack-of-2",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-sport-boys-graphic-short-sleeve-tech-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-mens-graphic-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-482l-100-polyester-adult-cool-dri-long-sleeve-performance-t-shirt-1-navy-1-safety-orange-large",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-mens-cool-dri-performance-long-sleeve-t-shirt482l-graphite-navy-xl",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-mens-comfortsoft-t-shirt-2-maroon-2-navy-m-pack-of-4",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-cool-dri-performance-mens-long-sleeve-t-shirt_wow-pink_m",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-tagless-nano-t-mens-long-sleeve-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-mens-cool-dri-performance-long-sleeve-t-shirt482l-deep-royal-safety-green-l",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-boys-cotton-blend-jersey-polo",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-cool-dri-performance-mens-long-sleeve-t-shirt_deep-red_s",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-mens-tagless-comfortsoft-crewneck-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-cool-dri-performance-mens-long-sleeve-t-shirt_deep-red_2xl",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-boys-x-temp-performance-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-tagless-t-shirt_deep-red_l",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-mens-tagless-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-comfortblend-mens-ecosmart-crewneck-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-5586-mens-tagless-long-sleeve-tee-2-pack",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-cool-dri-tagless-mens-t-2pk_deep-royal_3xl",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-mens-beefy-t-long-sleeve-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-cool-dri-performance-mens-long-sleeve-t-shirt_deep-red_3xl",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-mens-2-pack-long-sleeve-cool-dri-t-shirt-upf-50-1-navy-1-safety-green-xx-large",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-comfortblend-ecosmart-crewneck-mens-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-mens-comfortsoft-t-shirt-pack-of-4",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-sport-x-temp-mens-performance-long-sleeve-training-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-tagless-long-sleeve-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/under-armour-mens-fish-hook-logo-t",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/carhartt-mens-workwear-jersey-pocket-long-sleeve-shirt-k126-regular-and-big-tall-sizes-2",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/kanu-surf-mens-short-sleeve-upf-50-swim-shirt-regular-extended-sizes",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/tsla-womens-upf-50-rash-guard-long-sleeve-uv-sun-protection-swim-shirts-water-beach-surf-swimsuit-top",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/womens-upf50-long-sleeve-uv-sun-protection-shirts-quick-dry-rash-guard-swim-outdoor-t-shirt-for-fishing-running-workout",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-bonehead-short-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-super-terminal-tackle-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-terminal-tackle-hoodie-3",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-slack-tide-camp-shirts",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-bonehead-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-super-bonehead-classic-short-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-pfg-blood-and-guts-iii-long-sleeve-shirt-stain-water-resistant",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-terminal-tackle-heather-long-sleeve-shirt-2",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-terminal-tackle-1-4-zip-2",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-womens-silver-ridge-lite-sleeveless",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-low-drag-offshore-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-womens-times-two-novelty-knit-long-sleeve",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-terminal-tackle-1-4-zip",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-super-slack-tide-camp-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-super-bahama-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-terminal-tackle-hoodie-2",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-youth-boys-terminal-tackle-long-sleeve-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-pfg-terminal-tackle-fish-flag-long-sleeve-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-womens-womens-pfg-bahama-ii-long-sleeve-shirt-breathable-with-uv-protection",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-pfg-zero-rules-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-pfg-tamiami-ii-short-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-kids-baby-super-terminal-tackle-long-sleeve",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-rapid-rivers-ii-short-sleeve-plaid-shirt-comfort-stretch",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-terminal-tackle-hoodie",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-trollers-best-ss-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hde-performance-fishing-shirts-for-men-long-sleeve-upf-50-sun-protection-quick-dry-outdoor-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-mens-comfortsoft-short-sleeve-t-shirt-4-pack",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-mens-long-sleeve-beefy-henley-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-mens-long-sleeve-cool-dri-t-shirt-upf-50-small-2-pack-1-graphite-1-navy",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-sport-womens-cool-dri-performance-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-mens-two-pack-of-long-sleeve-cool-dri-t-shirts",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/multi-pack-hanes-mens-cool-dri-long-sleeve-performance-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-mens-nano-premium-cotton-t-shirt-pack-of-2",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-mens-long-sleeve-cool-dri-t-shirt-upf-50-large-2-pack-1-black-1-white",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-mens-2-pack-x-temp-performance-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-womens-cozy-seamless-wire-free-bra",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-mens-pullover-ecosmart-fleece-hooded-sweatshirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-womens-nano-t-v-neck-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/yizzam-luckyrod-american-flag-mens-long-sleeve-upf-50-performance-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/chasing-fin-american-fish-flag-performance-long-sleeve-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/haase-unlimited-fishing-pole-american-flag-fisherman-usa-mens-tank-top",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/threadrock-womens-fishing-american-flag-racerback-tank-top",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/buck-wear-mens-chevy-more-american-cotton-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/filthy-anglers-fishing-american-flag-t-shirt-for-men-women-short-sleeve-multiple-designs-colors",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/tuonroad-mens-3d-graphic-printed-tank-top-cool-muscle-sleeveless-tees-gym-workout-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/baleaf-womens-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/lp-baleaf-mens-upf-50-running-outdoor-sun-protection-long-sleeve-performance-athletic-workout-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/lp-masterbaiter-funny-fishing-fisherman-fish-master-baiter-dad-grandpa-joke-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/lp-gotta-love-a-good-pole-dance-funny-fishing-pole-humor-fisherman-unisex-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/lp-mens-cant-work-today-my-arm-is-in-a-cast-t-shirt-funny-fishing-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/lp-performance-fishing-hoodie-with-face-mask-upf-50-sunblock-shirt-long-sleeve-with-drawstrings-pocket",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/lp-oneill-wetsuits-mens-basic-skins-50-long-sleeve-sun-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/lp-columbia-mens-pfg-bahama-ii-short-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/salty-crew-mens-tippet-triad-short-sleeve-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/salty-crew-islanders-angry-bull-short-sleeve-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/salty-crew-mens-paddle-tail-short-sleeve-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/salty-crew-mens-alpha-refuge-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/salty-crew-mens-blue-water-short-sleeve-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/salty-crew-mens-wahoo-mount-short-sleeve-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/salty-crew-kids-boys-tippet-triad-short-sleeve-tee-little-kids-big-kids",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/salty-crew-mens-twin-fin-l-s-tech-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/salty-crew-mens-mens-admiral-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/salty-crew-mens-mariner-short-sleeve-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-perfect-cast-polo-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-utilizer-polo-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-blood-and-guts-iii-short-sleeve-sun-shirt-waterproof",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/milwaukee-workskin-light-weight-performance-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/milwaukee-workskin-light-weight-performance-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/habit-ts1161-short-sleeve-mens-river-guide-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/habit-mens-short-sleeve-river-guide-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-pfg-triangle",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-pfg-tamiami-ii-long-sleeve-shirt-big",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/g-h-bass-co-mens-big-and-tall-explorer-short-sleeve-fishing-shirt-plaid-button-pocket",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mens-reel-cool-grandpa-tshirt-funyy-outdoor-fishing-tee-for-fathers-day",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/jaws-movie-quints-shark-fishing-t-shirt-stickers-2",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/simms-bass-pine-camo-t-shirt-100-cotton-tee-with-breathable-fabric-quality-fishing-apparel-for-men",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/simms-mens-big-sky-t-shirt-100-cotton-tee-with-breathable-fabric-quality-fishing-apparel-for-men",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/simms-logo-t-shirt-for-men-short-sleeve-crewneck-shirt-preshrunk-cotton-athletic-tee-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/simms-big-sky-plaid-vented-fishing-shirt-mens-long-sleeve-50-upf-shirt-lightweight-breathable-moisture-wicking",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/simms-solarflex-upf-50-printed-hoody-shirt-mens-long-sleeve-sun-protection-fishing-shirt-lightweight-breathable-moisture-wicking-anti-odor",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/simms-solarflex-long-sleeve-crew-neck-solid-shirts",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/simms-stone-cold-short-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/simms-mens-morada-fishing-shirt-upf-30-long-sleeve-shirt-water-resistant-angler-shirt-wrinkle-resistant-button-down-fishing-shirt-for-men",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/pack-my-diapers-im-going-fishing-with-grandpa-baby-one-piece-or-toddler-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/kryptek-zephyr-long-sleeve-1-2-zip-camo-shirt-quick-dry-fabric-for-fishing-swimming-upf-30-uv-sun-protection-k-ore-collection",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/simms-mens-challenger-solar-tech-jersey-shirt-upf-50-long-sleeve-fishing-shirt-with-camo-breathable-lightweight-sun-protection-shirt-for-men",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/g-h-bass-co-mens-big-and-tall-madawaska-short-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/g-h-bass-co-mens-salt-cove-soft-short-sleeve-button-down-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-youth-boys-pfg-tamiami-short-sleeve-shirt-upf-protection-moisture-wicking",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/under-armour-boys-outdoor-long-sleeve-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/nautica-boys-long-sleeve-graphic-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/salty-crew-kids-boys-bruce-long-sleeve-tee-little-kids-big-kids",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/oneill-youth-basic-skins-upf-50-short-sleeve-sun-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/life-is-good-boys-crusher-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/huk-kids-double-header-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/kids-upf-50-long-sleeve-microfiber-moisture-wicking-performance-fishing-shirt-bass",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/salty-crew-tippet-cover-up-boys-short-sleeve-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/huk-youth-performance-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/huk-youth-icon-x-camo-long-sleeve-shirt-subphantis",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/tsla-womens-upf-50-full-half-zip-front-long-sleeve-top-rashguard-swimsuit",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-sport-womens-cool-dri-performance-long-sleeve-v-neck-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-womens-pfg-tamiami-ii-long-sleeve-shirt-uv-sun-protection-moisture-wicking-fabric",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-sport-womens-cool-dri-performance-long-sleeve-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/animal-den-ladies-long-sleeve-moisture-wicking-athletic-shirts-sizes-xs-4xl",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/naviskin-womens-sun-protection-upf-50-uv-outdoor-long-sleeve-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/costa-womens-technical-crew-ls-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/dayoung-womens-upf-50-uv-sun-protection-running-hiking-outdoors-performance-long-sleeve-hoody-spf-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/huk-womens-camo-icon-hoodie",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-womens-pfg-bonehead-w-ii-long-sleeve-shirt-cotton-relaxed-fit",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/simms-solarflex-upf-50-hoody-shirt-ladies-long-sleeve-sun-protection-fishing-shirt-lightweight-breathable-moisture-wicking-anti-odor",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/mossy-oak-womens-long-sleeve",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-womens-hiking-long-sleeve-fishing-shirt-upf-50-for-safari-camping-travelling-quick-dry",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/charmleaks-womens-long-sleeve-rashguard-upf-50-sun-protection-swimsuit-top-striped-swim-shirts",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-womens-bahama-ls",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/womens-upf-50-uv-long-sleeve-sun-protection-crew-neck-long-sleeve-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/carhartt-mens-signature-sleeve-logo-long-sleeve-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/carhartt-mens-k87-workwear-pocket-short-sleeve-t-shirt-regular-and-big-tall-sizes",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-pfg-tamiami-ii-long-sleeve-shirt-2",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/salty-crew-mens-angry-bull-short-sleeve-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-pfg-graphic-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/fishing-shirts-for-men-long-sleeve-sun-protection-spf-50-uv-tshirt-hoodies",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-pfg-tamiami-ii-short-sleeve-shirt-upf-40-sun-protection-wicking-fabric",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/wrangler-mens-short-sleeve-classic-twill-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-sportswear-bahama-ii-short-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/wrangler-authentics-mens-short-sleeve-plaid-woven-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/izod-mens-surfcaster-short-sleeve-button-down-patterned-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/g-h-bass-co-mens-explorer-short-sleeve-fishing-shirt-plaid-button-pocket",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-tamiami-ii-short-sleeve-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-pfg-bahama-ii-short-sleeve-shirt-cool-grey-x-large",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-pfg-bahama-ii-short-sleeve-shirt-sage-xx-large",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/oneill-mens-basic-skins-upf-50-short-sleeve-sun-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-pfg-bahama-ii-short-sleeve-shirt-sail-large",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/costa-del-mar-mens-top-water-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/g-h-bass-co-mens-explorer-short-sleeve-fishing-shirt-solid-button-pocket",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/columbia-mens-pfg-bahama-ii-short-sleeve-shirt-sail-xx-large",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/g-h-bass-co-mens-big-and-tall-explorer-short-sleeve-button-down-fishing-shirt-solid-flap-pocket",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-regular-white-large",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-pfg-bahama-ii-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/performance-fishing-shirt-vented-long-sleeve-sunblock-sun-protection-upf50-moisture-wicking-rash-guard-mesh-sides-loose-fit",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-pfg-terminal-tackle-long-sleeve-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-pfg-blood-guts-iii-long-sleeve-woven-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/gamefish-usa-mens-upf-50-long-sleeve-microfiber-moisture-wicking-performance-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/carhartt-mens-workwear-jersey-pocket-long-sleeve-shirt-k126-regular-and-big-tall-sizes",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-terminal-tackle-heather-long-sleeve-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-thistletown-park-long-sleeve-crew",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/salty-crew-mens-tailed-long-sleeve-tee",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/ann-arbor-t-shirt-co-funny-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mens-fishing-saved-me-from-being-a-pornstar-now-im-just-a-hooker-tshirt",
    destination:
      "/product/crazy-dog-t-shirts-womens-fishing-saved-me-from-becoming-a-pornstar-tshirt-funny-outdoor-tee",
    permanent: true,
  },
  {
    source:
      "/product/well-thats-not-a-good-sign-adult-humor-graphic-novelty-sarcastic-funny-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/jaws-movie-quints-shark-fishing-t-shirt-stickers",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/crazy-dog-t-shirts-mens-my-retirement-plan-fishing",
    destination:
      "/product/my-fishing-retirement-plan-funny-fish-pole-humor-fisherman-men-joke-t-shirt",
    permanent: true,
  },
  {
    source:
      "/product/crazy-dog-t-shirts-mens-my-retirement-plan-fishing-tshirt-funny-old-age-tee",
    destination:
      "/product/my-fishing-retirement-plan-funny-fish-pole-humor-fisherman-men-joke-t-shirt",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-columbia/page/3/",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/store/page/9/",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/store/page/9/",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/store/page/15/",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product-tag/100-polyester/",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/store/page/2/",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/upf-50-uv-hoodie-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/hanes-mens-cool-dri-performance-long-sleeve-t-shirt482l-deep-royal-white-xl",
    destination: "/product-category/fishing-shirts-hanes",
    permanent: true,
  },
  {
    source:
      "/product/hook-tackle-mens-anglers-delight-short-sleeve-embroidered-uv-sun-protection-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/salty-scales-largemouth-bass-long-sleeve-fishing-shirt-for-men-dri-fit-performance-clothing",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/priessei-mens-long-sleeve-upf-50-uv-sun-protection-hoodie-for-fishing-running-hiking",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/simms-solarflex-upf-50-shirt-long-sleeve-sun-protection-fishing-hoodie-lightweight-breathable-moisture-wicking-anti-odor",
    destination: "/product-category/fishing-shirts-simms",
    permanent: true,
  },
  {
    source:
      "/product/piscifun-performance-upf-long-sleeve-fishing-t-shirt-sun-protection-clothing-fishing-jersey-m-l-xl-2xl-3xl",
    destination: "/product-category/fishing-shirts-performance",
    permanent: true,
  },
  {
    source: "/product/habit-womens-long-sleeve-fishing-guide-shirt",
    destination: "/product-category/fishing-shirts-habit",
    permanent: true,
  },
  {
    source:
      "/product/habit-mens-belcoast-long-sleeve-river-guide-fishing-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/habit-men39s-belcoast-river-guide-s-s-shirt-black",
    destination: "/product/habit-men39s-belcoast-river-guide-s-s-shirt",
    permanent: true,
  },
  {
    source:
      "/product/royal-avalon-womens-upf-50-sun-protection-long-sleeve-outdoor-performance-bamboo-cotton-hoodie-with-thumbhole",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-womens-long-sleeve-half-zip-sun-protection-rashguard-side-adjustable-swim-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/baleaf-womens-upf-50-sun-protection-hoodies-long-sleeve-yoga-athletic-workout-running-shirt",
    destination: "/product-category/fishing-shirts-baleaf",
    permanent: true,
  },
  {
    source:
      "/product/quiksilver-mens-angler-hooded-ls-long-sleeve-rashguard-surf-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product-category/fishing-shirts-long-sleeve/page/2",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/kore-offshore-mens-long-sleeve-upf50-dri-all-day-sunblock-fishing-shirt-fisherman",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/category/articles/",
    destination: "/blog",
    permanent: true,
  },
  {
    source: "/fishing-shirts/",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/pelagic-premium-uv-gyotaku-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-fishing-shirts-vs-bass-fishing-shirts",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/articles/funny-fishing-shirts-that-put-a-smile-on-your-face/",
    destination: "/blog/funny-fishing-shirts-that-put-a-smile-on-your-face",
    permanent: true,
  },
  {
    source:
      "/articles/learn-all-about-fishing-shirts-to-pick-the-right-one-for-you",
    destination:
      "/blog/learn-all-about-fishing-shirts-to-pick-the-right-one-for-you",
    permanent: true,
  },
  {
    source: "/articles/fishing-shirts-men",
    destination: "/blog/fishing-shirts-men",
    permanent: true,
  },
  {
    source: "/category/fishing-shirts/",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/sougayilang-professional-fishing-jersey-long-sleeve-for-men-women-upf-50-sun-protection-with-moisture-wicking",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/amazon-brand-peak-velocity-mens-vxe-long-sleeve-quick-dry-loose-fit-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/aw-fashions-hooker-on-the-weekend-funny-fisherman-gifts-fathers-day-mens-fishing-t-shirt",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/o2tee-mens-american-flag-soft-slim-long-sleeve-compression-gym-trainning-casual-top",
    destination: "/store",
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
    source: "/product-tag/camo/",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/fishing-shirts-for-women",
    destination: "/product-category/fishing-shirts-for-her",
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
    source: "/product-tag/camo/",
    destination: "/store",
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
    source:
      "/product/fitst4-mens-sun-protection-upf-40-uv-outdoor-long-sleeve-quick-drying-mesh-fishing-shirts-with-hood-thumb-hole/",
    destination: "/store",
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
    source: "/store/page/6/",
    destination: "/store?page=6",
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
    source: "/fishing-shirts/",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/category/articles/",
    destination: "blog",
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
    source: "/columbia-fishing-shirts-vs-bass-fishing-shirts/",
    destination: "/store",
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
    source: "/product/under-armour-womens-heatgear-armour-long-sleeve-t-shirt/",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/disclosure/",
    destination: "/",
    permanent: true,
  },
  {
    source:
      "/wp-content/uploads/2020/07/A13usaonutL._AC_CLa_21402000_71NK5T36XL.png_00214020000.00.02140.02000.0_SX679._SX._UX._SY._UY_-300x300.jpeg.webp",
    destination: "/",
    permanent: true,
  },
  {
    source: "/product/under-armour-womens-heatgear-long-sleeve-t-shirt/",
    destination: "/store",
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
      "/product/baleaf-womens-short-sleeve-hiking-shirt-upf-50-for-safari-fishing-camping-travelling-quick-dry/",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/pelagic-stick-figure-sound-of-the-sea-t-shirt/",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/hanes-stretch-cotton-womens-raglan-sleeve-tee/",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/salinity-gear-performance-fishing-hoodie-upf-50-dri-fit-shirt/",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/inktastic-lucky-fishing-shirt-fish-youth-t-shirt/",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/product/columbia-mens-pfg-tamiami-ii-long-sleeve-shirt-tall/",
    destination: "/store",
    permanent: true,
  },
  {
    source: "//size/xx-large/page/9/",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/lp-adult-sorry-cant-talk-im-on-another-line-fishing-triblend-go-all-out-inc-funny-tee/",
    destination: "/store",
    permanent: true,
  },
  {
    source:
      "/product/mossy-oak-mens-the-series-keep-calm-hunt-on-tee-short-sleeve-t-shirt-size-xl/",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/store/page/18/",
    destination: "/store?page=18",
    permanent: true,
  },
  {
    source: "/product/pelagic-aquatek-marlin-dot-hoodie-fishing-shirt/",
    destination: "/store",
    permanent: true,
  },
  {
    source: "/coolibar-upf-50-mens-andros-fishing-hoodie-sun-protective",
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
      "/product/hooked-soul-fishing-mens-upf-50-uv-sun-protection-outdoor-long-sleeve-performance-dri-fit-shirts",
    destination: "/store",
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
    source:
      "/product/bamboo-cay-mens-bamboos-on-the-loose-casual-embroidered-short-sleeve-woven-shirt",
    destination: "/store",
    permanent: true,
  },
];
export default redirects;
