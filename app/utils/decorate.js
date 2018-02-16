const isClass = source => 
    typeof source === 'function' 
        && /^\s*class\s+/.test(source.toString());

const decorateInstance = (target, decorators, property) => {

    decorators.forEach(decorator => {
        const method = target[property].bind(target);
        target[property] = (...args) => 
        decorator(method, property, args);    
    });
};

const decorateClass = (target, decorators, property) => {

    decorators.forEach(decorator => {
        const method = target.prototype[property];
        target.prototype[property] = function (...args) {
            return decorator(method.bind(this), property, args);
        };  
    });
};

export const decorate = (target, handler) => {

    const isClazz = isClass(target);

    Object.keys(handler).forEach(property => {
        const decorators = handler[property].reverse();
        isClazz 
            ? decorateClass(target, decorators, property)
            : decorateInstance(target, decorators, property)
    });    
};