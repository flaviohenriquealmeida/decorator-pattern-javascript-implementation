const isClass = source => 
    typeof source === 'function' 
        && /^\s*class\s+/.test(source.toString());

const decorateInstance = (target, decorator, property) => {

    const method = target[property].bind(target);
    target[property] = (...args) => 
        decorator(method, property, args);
};

const decorateClass = (target, decorator, property) => {

    const method = target.prototype[property];
    target.prototype[property] = function (...args) {
        return decorator(method.bind(this), property, args);
    };   
};

export const decorate = (target, handler) => {

    const isClazz = isClass(target);

    Object.keys(handler).forEach(property => {

        const decorators = handler[property].reverse();
        
        decorators.forEach(decorator => isClazz 
            ? decorateClass(target, decorator, property)
            : decorateInstance(target, decorator, property)
        ); 
    });    
};