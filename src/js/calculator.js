export default class Age {
  constructor(age, gender) {
    this.years = age;
    this.expect = (gender === 'male') ? (76 - age) : (80 - age);
  }

  mercuryAge() {

  }
}