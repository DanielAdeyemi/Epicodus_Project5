export default class Age {
  constructor(age, gender) {
    this.years = age;
    this.expect = (gender === 'male') ? (76 - age) : (80 - age);
  }

  mercuryAge() {
    const mercAge = Math.trunc(this.years * .24);
    const mercLeft = (Math.trunc(this.expect * .24) < 0) ? (-(Math.trunc(this.expect * .24))) :
      (Math.trunc(this.expect * .24));
    return [mercAge, mercLeft];
  }

  venusAge() {
    const venAge = Math.trunc(this.years * .62);
    return [venAge];
  }

  marsAge() {
    const marAge = Math.trunc(this.years * 1.88);
    return marAge;
  }

  juniperAge() {
    const junAge = Math.trunc(this.years * 11.86);
    return junAge;
  }
}