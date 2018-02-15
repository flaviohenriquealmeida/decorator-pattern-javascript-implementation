export const getFullNameWithHyphen = (original, propertyName, args) => {
    console.log(`Propriedade decorada ${propertyName}`);
    console.log(`Argumentos do método ${args}`);
    const result = original(...args).replace(/ /, '-');
    console.log(`resultado modificado: ${result}`)
    return result;
}