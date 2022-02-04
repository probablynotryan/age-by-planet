/* eslint-disable no-undef */
import Age from './../src/js/age.js';

describe ('Age', () => {

it('should create an object with the inputted number as a property of earthAge', () => {
  let age = new Age(10);
  expect(age.earthAge).toEqual(10);
})


})