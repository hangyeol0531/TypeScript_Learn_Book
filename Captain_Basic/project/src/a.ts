interface Hero {
  name: string;
  skill: string;
}

// const capt: Hero = {
//   name: 'capt',
//   skill: 'shield',
// };

// assertion은 주의하면서 사용해야함
const capt = {} as Hero;
capt.name = 'capt';
capt.skill = 'shield';
