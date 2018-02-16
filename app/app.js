import { Person } from './models/person.js';
import { getFullNameWithHyphen } from './models/decorators.js';
import { decorate } from './utils/decorate.js';

decorate(Person, {
    getFullName: getFullNameWithHyphen
});

const person1 = new Person('Flávio', 'Almeida');
const person2 = new Person('Almeida', 'Flávio');

console.log(person1.getFullName());
console.log(person2.getFullName());