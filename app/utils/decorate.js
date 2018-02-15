export const decorate = (target, handler) => 
    Object.keys(handler).forEach(propertyName => {
        
        const original = target[propertyName].bind(target);

        target[propertyName] = (...args) => 
            handler[propertyName](original, propertyName, args);
    });