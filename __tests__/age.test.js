/* eslint-disable no-undef */
import Age from './../src/js/age.js';


describe ('Age', () => {
  
  let age;

it('should create an object with the inputted number as the property of earthAge', () => {
  age = new Age(10);
  expect(age.earthAge).toEqual(10);
  })
it('should create an object with the the as a property of venusAge', () => {
  age = new Age(10);
  expect(age.venusAge).toEqual(16);
  })
it('should create an object with the 2 as the property of mercuryAge', () => {
  age = new Age(10);
  expect(age.mercuryAge).toEqual(41);
  })
it('should create an object with the 18 as the property of marsAge', () => {
  age = new Age(10);
  expect(age.marsAge).toEqual(5);
  })
it('should create an object with the 118 as the property of jupiterAge', () => {
  age = new Age(10);
  expect(age.jupiterAge).toEqual(0);
  })
})

describe('yourAge', () => {

  it("should return a value of 2", ()  => {
    let age = new Age();
    expect(age.yourAge(10, 5)).toEqual(2);
  })

})

describe('lifeTimer', () => {

  it("should return a returned value of US life expectancy by smoker vs nonsmoker", () => {
    let age = new Age();
    expect(age.lifeTimer("smoker")).toEqual(62);
    expect(age.lifeTimer("nonsmoker")).toEqual(72);
  })
})

describe('overOrUnder', () => {

  it("should return a value of 1 if over or under (smoker lifetime expectancy (62)), return 0 if equal to 62", () => {
    let age = new Age();
    expect(age.overOrUnder(63, age.lifeTimer("smoker"))).toEqual(1);
    expect(age.overOrUnder(61, age.lifeTimer("smoker"))).toEqual(1);
    expect(age.overOrUnder(62, age.lifeTimer("smoker"))).toEqual(0);
  })
})
// (temporarily disabled while classes are corrected to meet objective standard)
// it('should return a object with 1 as a property of earthAge', () => {
//   age = new Age(79);
//   expect(age.earthAge).toEqual(1)
// })