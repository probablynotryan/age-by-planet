export default class Age {
  constructor(age) {
    this.age = age;
    this.earthAge = age;
    this.venusAge = Math.floor(age * 0.6152);
  }
}