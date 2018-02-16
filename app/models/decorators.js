export const getFullNameWithHyphen = (method, property, args) => 
    method(...args).replace(/ /, '-');

export const inspect = (method, property, args) => {
    console.log(`Método decorado: ${property}`);
    console.log(`Argumentos do método: ${args}`);
    const result = method(...args);
    console.log(`resultado modificado: ${result}`);
    return result;
};

export const perfLogger = (method, property, args) => {
    console.time(property);
    const result = method(...args);
    console.timeEnd(property);
    return result;
};