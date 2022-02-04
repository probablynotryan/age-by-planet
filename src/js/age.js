export default class Age {
  constructor(age) {
    this.earthAge = age;
    this.venusAge = Math.floor(age * 0.62);
    this.mercuryAge = Math.floor(age * 0.24);
    this.marsAge = Math.floor(age * 1.88);
    this.jupiterAge = Math.floor(age * 11.86);
  }
}