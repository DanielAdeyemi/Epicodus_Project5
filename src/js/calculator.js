export default class Age {
  constructor(age, gender) {
    this.years = age;
    this.expect = 76 - age;
    // (gender === 'male') ? (76 - age) : (80 - age);
  }

}
//   mercuryAge() {
//     const age = this.years * .24
//   }