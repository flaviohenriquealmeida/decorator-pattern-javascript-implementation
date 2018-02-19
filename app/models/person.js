export class Person {

    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    speak(phrase) {
        return `${this._name} is speaking... ${phrase}`
    }

    getFullName() {
        return `${this._name} ${this._surname}`;
    }
}