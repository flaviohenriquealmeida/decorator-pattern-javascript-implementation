export const logarTempoDeExecucao = (method, property, args) => {
    
    console.time(property);
    const result = method(...args);
    console.timeEnd(property);
    return result;
};

export const logarMetodo = ({ retorno }) => (method, property, args) => {
    console.log(`Método decorado: ${property}`);
    console.log(`Argumentos do método ${args}`);
    const result = method(...args);
    if(retorno) console.log(`resultado do método: ${result}`)
    return result;
};