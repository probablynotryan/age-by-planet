/* eslint-disable no-undef */
import Age from './../src/js/age.js';


describe ('Age', () => {
  
  let age;

  beforeEach(() => {
    age = new Age(100);
  });

it('should create an object with the inputted number as a property of earthAge', () => {
  expect(age.earthAge).toEqual(100);
})
it('should create an object with the 62 as a property of venusAge', () => {
  expect(age.venusAge).toEqual(62);
})
it('should create an object with the 24 as a property of mercuryAge', () => {
  expect(age.mercuryAge).toEqual(24);
})
it('should create an object with the 188 as a property of marsAge', () => {
  expect(age.marsAge).toEqual(188);
})
it('should create an object with the 1186 as a property of jupiterAge', () => {
  expect(age.jupiterAge).toEqual(1186);
})
})