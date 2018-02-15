import { Person } from './models/person.js';
import { getFullNameWithHyphen } from './models/decorators.js';
import { decorate } from './utils/decorate.js';

const person1 = new Person('Flávio', 'Almeida');
const person2 = new Person('Almeida', 'Flávio');

person1.speak('Cangaceiro Javascript');
console.log(person1.getFullName());

decorate(person2, {
    getFullName: getFullNameWithHyphen
});

console.log(person2.getFullName());
// Almeida-Flávio