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
    const venLeft = (Math.trunc(this.expect * .62) < 0) ? (-(Math.trunc(this.expect * .62))) :
      (Math.trunc(this.expect * .62));
    return [venAge, venLeft];
  }

  marsAge() {
    const marAge = Math.trunc(this.years * 1.88);
    const marLeft = (Math.trunc(this.expect * 1.88) < 0) ? (-(Math.trunc(this.expect * 1.88))) :
      (Math.trunc(this.expect * 1.88));
    return [marAge, marLeft];
  }

  juniperAge() {
    const junAge = Math.trunc(this.years * 11.86);
    const junLeft = (Math.trunc(this.expect * 11.86) < 0) ? (-(Math.trunc(this.expect * 11.86))) :
      (Math.trunc(this.expect * 11.86));
    return [junAge, junLeft];
  }
}