import _ from 'lodash';
// import { NAME, Square } from './utilities';
// import * as utilities from './utilities';
import { NAME as NAME_OF_MARCY } from './utilities';
import Lion from './utilities';

// console.log(Square(3));
// console.log(NAME);
// console.log(utilities.NAME);
console.log(NAME_OF_MARCY);
console.log(Lion.say());

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!'];
  element.innerHTML = _.join(array, ' ');
  return element;
}

document.body.appendChild(component());
