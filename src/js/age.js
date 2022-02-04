export default class Age {
  constructor(age) {
    this.earthAge = this.yourAge(age, 1);
    this.venusAge = this.yourAge(age, 0.62);
    this.mercuryAge = this.yourAge(age, 0.24);
    this.marsAge = this.yourAge(age, 1.88);
    this.jupiterAge = this.yourAge(age, 11.86);
  }

  // average US life expectancy = 78

    yourAge(age, ageAdjustment){
      return Math.floor(age / ageAdjustment);
    }
}