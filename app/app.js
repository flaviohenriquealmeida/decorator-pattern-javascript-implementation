import { Person } from './models/person.js';
import { decorate } from './utils/decorate.js';
import { logarTempoDeExecucao, logarMetodo } from './models/decorators.js';

decorate(Person, {
    speak: [logarMetodo({ retorno: true }), logarTempoDeExecucao]
});

const person = new Person('Flávio', 'Almeida');
person.speak('Canganceiro JavaScript');
person.getFullName();