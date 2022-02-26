const belowTen = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

const tens = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];
const tenToNineteen = [
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];

let feedback = '';
const convertMillions = num => {
  if (num >= 1000000) {
    return (
      convertMillions(Math.floor(num / 1000000)) +
      ' million ' +
      convertThousands(num % 1000000)
    );
  } else {
    return convertThousands(num);
  }
};

const convertThousands = num => {
  if (num >= 1000) {
    if (num % 1000 === 0) {
      return convertHundreds(Math.floor(num / 1000)) + ' thousand';
    } else if (
      (num.toString().length === 5 &&
        parseInt(num.toString().slice(0, 4)) % 10 === 0) ||
      (num.toString().length === 4 &&
        parseInt(num.toString().slice(0, 2)) % 10 === 0)
    ) {
      return (
        convertHundreds(Math.floor(num / 1000)) +
        ' thousand and ' +
        convertHundreds(num % 1000)
      );
    } else {
      return (
        convertHundreds(Math.floor(num / 1000)) +
        ' thousand ' +
        convertHundreds(num % 1000)
      );
    }
  } else {
    return convertHundreds(num);
  }
};

const convertHundreds = num => {
  if (num > 99) {
    return (
      belowTen[Math.floor(num / 100)] +
      ' hundred' +
      (num % 100 === 0 ? '' : ' and ' + convertTens(num % 100))
    );
  } else {
    return convertTens(num);
  }
};

const convertTens = num => {
  if (num < 10) return belowTen[num];
  else if (num >= 10 && num < 20) return tenToNineteen[num - 10];
  else {
    return (
      tens[Math.floor(num / 10)] +
      (num % 10 !== 0 ? '-' + belowTen[num % 10] : '')
    );
  }
};

export const convert = num => {
  if (isNaN(num)) {
    feedback = 'I need a number to work with :)';
    return { feedback };
  }
  if (num === 0) return { text: 'zero' };

  if (num % 1 !== 0) {
    feedback = `I don't work well with floats but I've rounded it down for you :)`;
    num = Math.floor(num);
    return {
      text: convertMillions(num),
      feedback,
    };
  } else {
    return { text: convertMillions(num) };
  }
};
