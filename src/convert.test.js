import { convert } from './helper';

test('convert', () => {
  const number7 = convert(7);
  const number42 = convert(42);
  const number1999 = convert(1999);
  const number2001 = convert(2001);
  const number17999 = convert(17999);
  const number342251 = convert(342251);
  const number1300420 = convert(1300420);

  expect(number7).toBe('seven');
  expect(number42).toBe('forty-two');
  expect(number1999).toBe('one thousand nine hundred and ninety-nine');
  expect(number2001).toBe('two thousand and one');
  expect(number17999).toBe('seventeen thousand nine hundred and ninety-nine');
  expect(number342251).toBe(
    'three hundred and forty-two thousand two hundred and fifty-one'
  );
  expect(number1300420).toBe(
    'one million three hundred thousand four hundred and twenty'
  );
});
