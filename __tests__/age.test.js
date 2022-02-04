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

  it("should return a returned value of US life expectancy by inputted gender at birth", () => {
    let age = new Age();
    expect(age.lifeTimer("male")).toEqual(75);
    expect(age.lifeTimer("female")).toEqual(78);
  })
})

// (temporarily disabled while classes are corrected to meet objective standard)
// it('should return a object with 1 as a property of earthAge', () => {
//   age = new Age(79);
//   expect(age.earthAge).toEqual(1)
// })