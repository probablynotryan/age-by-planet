export default class Age {
  constructor(age, smokerCheck) {
    this.isTheEnd = this.overOrUnder(age, this.lifeTimer(smokerCheck));
    this.earthAge = this.yourAge(age, 1);
    this.venusAge = this.yourAge(age, 0.62);
    this.mercuryAge = this.yourAge(age, 0.24);
    this.marsAge = this.yourAge(age, 1.88);
    this.jupiterAge = this.yourAge(age, 11.86);

  }

    yourAge(age, ageAdjustment){      
      return Math.floor(age / ageAdjustment);
    }

    lifeTimer(smokerCheck) {
      if (smokerCheck === "smoker"){
        return 62; // based on reports of smokers living an average of 10 years younger than nonsmokers
      } else if (smokerCheck === "nonsmoker"){
        return 72; // based on world average life expectancy 2021
      } else {
        return;
      }
    }


    overOrUnder(age, smokerCheck) {
      if (age > (smokerCheck)) {
        return age - (smokerCheck);
      } else if (age < (smokerCheck)) {
        return (smokerCheck) - age;
      } else {
        return 0;
      }
    }
}