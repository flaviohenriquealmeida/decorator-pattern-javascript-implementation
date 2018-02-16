const isClass = source => 
    typeof source === 'function' 
        && /^\s*class\s+/.test(source.toString());


const decorateInstance = (target, handler, propertyName) => {

    const original = target[propertyName].bind(target);
    target[propertyName] = (...args) => 
        handler[propertyName](original, propertyName, args);    
    
};

const decorateClass = (target, handler, propertyName) => {

    const original = target.prototype[propertyName];
    target.prototype[propertyName] = function (...args) {
        return handler[propertyName](original.bind(this), propertyName, args);
    };  
};

export const decorate = (target, handler) => {

    const isClazz = isClass(target);

    Object.keys(handler).forEach(
        propertyName => isClazz 
            ? decorateClass(target, handler, propertyName)
            : decorateInstance(target, handler, propertyName)
    );
};