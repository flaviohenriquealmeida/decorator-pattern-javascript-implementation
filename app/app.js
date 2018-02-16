import { Person } from './models/person.js';
import { getFullNameWithHyphen, perfLogger, inspect } from './models/decorators.js';
import { decorate } from './utils/decorate.js';

decorate(Person, {
    getFullName: [perfLogger, getFullNameWithHyphen, ],
    speak: [inspect, perfLogger]
});

const person1 = new Person('Flávio', 'Almeida');
const person2 = new Person('Almeida', 'Flávio');

console.log(person1.getFullName());
person1.speak('Cangaceiro!');
console.log(person2.getFullName());
person2.speak('JavaScript!');