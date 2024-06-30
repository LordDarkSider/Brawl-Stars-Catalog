let brawlers = new Map([
    ["Shelly", new Map([ ["rarity","starting"], ["img","https://static.wikia.nocookie.net/brawlstars/images/e/e5/Shelly_Portrait.png"], ])],
    ["Nita", new Map([ ["rarity","rare"], ["img","https://static.wikia.nocookie.net/brawlstars/images/9/9f/Nita_Portrait.png"], ])],
    ["Colt", new Map([ ["rarity","rare"], ["img","https://static.wikia.nocookie.net/brawlstars/images/0/08/Colt_Portrait.png"], ])],
    ["Bull", new Map([ ["rarity","rare"], ["img","https://static.wikia.nocookie.net/brawlstars/images/4/4a/Bull_Portrait.png"], ])],
    ["Brock", new Map([ ["rarity","rare"], ["img","https://static.wikia.nocookie.net/brawlstars/images/f/f9/Brock_Portrait.png"], ])],
    ["El Primo", new Map([ ["rarity","rare"], ["img","https://static.wikia.nocookie.net/brawlstars/images/c/c5/El_Primo_Portrait.png"], ])],
    ["Barley", new Map([ ["rarity","rare"], ["img","https://static.wikia.nocookie.net/brawlstars/images/a/a1/Barley_Portrait.png"], ])],
    ["Poco", new Map([ ["rarity","rare"], ["img","https://static.wikia.nocookie.net/brawlstars/images/5/59/Poco_Portrait.png"], ])],
    ["Rosa", new Map([ ["rarity","rare"], ["img","https://static.wikia.nocookie.net/brawlstars/images/9/94/Rosa_Portrait.png"], ])],
    ["Jessie", new Map([ ["rarity","super-rare"], ["img","https://static.wikia.nocookie.net/brawlstars/images/4/4e/Jessie_Portrait.png"], ])],
    ["Dynamike", new Map([ ["rarity","super-rare"], ["img","https://static.wikia.nocookie.net/brawlstars/images/6/64/Dynamike_Portrait.png"], ])],
    ["Tick", new Map([ ["rarity","super-rare"], ["img","https://static.wikia.nocookie.net/brawlstars/images/7/72/Tick_Portrait.png"], ])],
    ["8-Bit", new Map([ ["rarity","super-rare"], ["img","https://static.wikia.nocookie.net/brawlstars/images/0/0b/8-Bit_Portrait.png"], ])],
    ["Rico", new Map([ ["rarity","super-rare"], ["img","https://static.wikia.nocookie.net/brawlstars/images/e/e1/Rico_Portrait.png"], ])],
    ["Darryl", new Map([ ["rarity","super-rare"], ["img","https://static.wikia.nocookie.net/brawlstars/images/4/46/Darryl_Portrait.png"], ])],
    ["Penny", new Map([ ["rarity","super-rare"], ["img","https://static.wikia.nocookie.net/brawlstars/images/8/8d/Penny_Portrait.png"], ])],
    ["Carl", new Map([ ["rarity","super-rare"], ["img","https://static.wikia.nocookie.net/brawlstars/images/1/19/Carl_Portrait.png"], ])],
    ["Jacky", new Map([ ["rarity","super-rare"], ["img","https://static.wikia.nocookie.net/brawlstars/images/0/03/Jacky_Portrait.png"], ])],
    ["Gus", new Map([ ["rarity","super-rare"], ["img","https://static.wikia.nocookie.net/brawlstars/images/2/2c/Gus_Portrait.png"], ])],
    ["Bo", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/3/30/Bo_Portrait.png"], ])],
    ["Emz", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/a/a4/Emz_Portrait.png"], ])],
    ["Stu", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/c/c8/Stu_Portrait.png"], ])],
    ["Piper", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/f/f0/Piper_Portrait.png"], ])],
    ["Pam", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/d/dc/Pam_Portrait.png"], ])],
    ["Frank", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/6/63/Frank_Portrait.png"], ])],
    ["Bibi", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/c/c2/Bibi_Portrait.png"], ])],
    ["Bea", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/a/ae/Bea_Portrait.png"], ])],
    ["Nani", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/c/c0/Nani_Portrait.png"], ])],
    ["Edgar", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/b/b4/Edgar_Portrait.png"], ])],
    ["Griff", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/c/c9/Griff_Portrait.png"], ])],
    ["Grom", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/f/f5/Grom_Portrait.png"], ])],
    ["Bonnie", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/f/f0/Bonnie_Portrait.png"], ])],
    ["Gale", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/3/3f/Gale_Portrait.png"], ])],
    ["Colette", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/e/e8/Colette_Portrait.png"], ])],
    ["Belle", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/8/82/Belle_Portrait.png"], ])],
    ["Ash", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/9/92/Ash_Portrait.png"], ])],
    ["Lola", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/9/9f/Lola_Portrait.png"], ])],
    ["Sam", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/f/fc/Sam_Portrait.png"], ])],
    ["Mandy", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/7/75/Mandy_Portrait.png"], ])],
    ["Maisie", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/a/a1/Maisie_Portrait.png"], ])],
    ["Hank", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/2/29/Hank_Portrait.png"], ])],
    ["Pearl", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/0/05/Pearl_Portrait.png"], ])],
    ["Larry & Lawrie", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/3/3a/Larry_%26_Lawrie_Portrait.png"], ])],
    ["Angelo", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/8/8b/Angelo_Portrait.png"], ])],
    ["Berry", new Map([ ["rarity","epic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/b/b9/Berry_Portrait.png"], ])],
    ["Mortis", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/b/b4/Mortis_Portrait.png"], ])],
    ["Tara", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/4/49/Tara_Portrait.png"], ])],
    ["Gene", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/7/7c/Gene_Portrait.png"], ])],
    ["Max", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/8/83/Max_Portrait.png"], ])],
    ["Mr. P", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/0/08/Mr._P_Portrait.png"], ])],
    ["Sprout", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/4/4d/Sprout_Portrait.png"], ])],
    ["Byron", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/f/f6/Byron_Portrait.png"], ])],
    ["Squeak", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/0/04/Squeak_Portrait.png"], ])],
    ["Lou", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/0/0b/Lou_Portrait.png"], ])],
    ["Ruffs", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/6/69/Ruffs_Portrait.png"], ])],
    ["Buzz", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/2/2c/Buzz_Portrait.png"], ])],
    ["Fang", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/b/b8/Fang_Portrait.png"], ])],
    ["Eve", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/8/8c/Eve_Portrait.png"], ])],
    ["Janet", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/8/8b/Janet_Portrait.png"], ])],
    ["Otis", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/5/58/Otis_Portrait.png"], ])],
    ["Buster", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/a/ad/Buster_Portrait.png"], ])],
    ["Gray", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/c/c6/Gray_Portrait.png"], ])],
    ["R-T", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/f/f6/R-T_Portrait.png"], ])],
    ["Willow", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/f/fb/Willow_Portrait.png"], ])],
    ["Doug", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/5/5a/Doug_Portrait.png"], ])],
    ["Chuck", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/7/7f/Chuck_Portrait.png"], ])],
    ["Charlie", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/4/4c/Charlie_Portrait.png"], ])],
    ["Mico", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/c/cf/Mico_Portrait.png"], ])],
    ["Melodie", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/1/1c/Melodie_Portrait.png"], ])],
    ["Lily", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/8/8d/Lily_Portrait.png"], ])],
    ["Clancy", new Map([ ["rarity","mythic"], ["img","https://static.wikia.nocookie.net/brawlstars/images/f/f0/Clancy_Portrait.png"], ])],
    ["Spike", new Map([ ["rarity","legendary"], ["img","https://static.wikia.nocookie.net/brawlstars/images/2/22/Spike_Portrait.png"], ])],
    ["Crow", new Map([ ["rarity","legendary"], ["img","https://static.wikia.nocookie.net/brawlstars/images/6/6f/Crow_Portrait.png"], ])],
    ["Leon", new Map([ ["rarity","legendary"], ["img","https://static.wikia.nocookie.net/brawlstars/images/4/48/Leon_Portrait.png"], ])],
    ["Sandy", new Map([ ["rarity","legendary"], ["img","https://static.wikia.nocookie.net/brawlstars/images/e/e3/Sandy_Portrait.png"], ])],
    ["Amber", new Map([ ["rarity","legendary"], ["img","https://static.wikia.nocookie.net/brawlstars/images/9/96/Amber_Portrait.png"], ])],
    ["Meg", new Map([ ["rarity","legendary"], ["img","https://static.wikia.nocookie.net/brawlstars/images/5/58/Meg_Portrait.png"], ])],
    ["Surge", new Map([ ["rarity","legendary"], ["img","https://static.wikia.nocookie.net/brawlstars/images/2/27/Surge_Portrait.png"], ])],
    ["Chester", new Map([ ["rarity","legendary"], ["img","https://static.wikia.nocookie.net/brawlstars/images/3/38/Chester_Portrait.png"], ])],
    ["Cordelius", new Map([ ["rarity","legendary"], ["img","https://static.wikia.nocookie.net/brawlstars/images/a/aa/Cordelius_Portrait.png"], ])],
    ["Kit", new Map([ ["rarity","legendary"], ["img","https://static.wikia.nocookie.net/brawlstars/images/7/72/Kit_Portrait.png"], ])],
    ["Draco", new Map([ ["rarity","legendary"], ["img","https://static.wikia.nocookie.net/brawlstars/images/c/c2/Draco_Portrait.png"], ])],
]);