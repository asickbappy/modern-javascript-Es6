const ages = [12, 34, 45 , 56, 67];
const ages2 = [87, 89, 67, 45, 34];
const ages3 = [45, 12, 34, 45, 56];
const allAges = ages.concat(ages2).concat(ages3);
console.log(allAges);


const allAges2 = [...ages,...ages2,...ages3];
console.log(allAges2);

const business = 560;
const minister = 520;
const sochib = 350;
const maximum = Math.max(business, minister, sochib);
console.log(maximum);

const takaPoisha = [560, 460, 860, 690, 950];
const maximum2 = Math.max(...takaPoisha);
console.log(maximum2);