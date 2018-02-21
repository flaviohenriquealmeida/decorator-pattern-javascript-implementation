import { Person } from './models/person.js';
import { decorate } from './utils/decorate.js';
import { logExecutionTime, inspectMethod } from './models/decorators.js';

decorate(Person, {
    speak: [inspectMethod({ excludeReturn: true }), logExecutionTime],
    getFullName: [logExecutionTime]
});

const person = new Person('Flávio', 'Almeida');
person.speak('Canganceiro JavaScript');
person.getFullName();
