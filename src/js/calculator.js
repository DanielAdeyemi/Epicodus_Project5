export default class Age {
  constructor(age, gender) {
    this.years = age;
    this.expect = (gender === 'male') ? (76 - age) : (80 - age);
  }

  mercuryAge() {
    const mercAge = Math.floor(this.years * .24);
    return mercAge;
  }

  venusAge() {
    const venAge = Math.floor(this.years * .62);
    return venAge;
  }

  marsAge() {
    const marAge = Math.floor(this.years * 1.88);
    return marAge;
  }

  juniperAge() {}
}