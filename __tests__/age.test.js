/* eslint-disable no-undef */
import Age from './../src/js/age.js';


describe ('Age', () => {
  
  let age;

it('should create an object with the inputted number as the property of earthAge', () => {
  age = new Age(10);
  expect(age.earthAge).toEqual(10);
  expect(age.yourAge(10, 1)).toEqual(10);
})
it('should create an object with the the as a property of venusAge', () => {
  age = new Age(10);
  expect(age.venusAge).toEqual(16);
  expect(age.yourAge(10, 0.62)).toEqual(16);
})
it('should create an object with the 2 as the property of mercuryAge', () => {
  age = new Age(10);
  expect(age.mercuryAge).toEqual(41);
  expect(age.yourAge(10, 0.24)).toEqual(41);
})
it('should create an object with the 18 as the property of marsAge', () => {
  age = new Age(10);
  expect(age.marsAge).toEqual(5);
  expect(age.yourAge(10, 1.88)).toEqual(5);
})
it('should create an object with the 118 as the property of jupiterAge', () => {
  age = new Age(10);
  expect(age.jupiterAge).toEqual(0);
  expect(age.yourAge(10, 11.86)).toEqual(0);
})
// (temporarily disabled while classes are corrected to meet objective standard)
// it('should return a object with 1 as a property of earthAge', () => {
//   age = new Age(79);
//   expect(age.earthAge).toEqual(1);
// })
})