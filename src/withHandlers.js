import React from 'react';

export default handlers => Component => props => {
    const actualizedHandlers = typeof handlers === 'function'
        ? handlers(props)
        : handlers;

    const handlersProps = Object.keys(actualizedHandlers).reduce((acc, key) => {
        acc[key] = actualizedHandlers[key](props);
        return acc;
    }, {});

    return (
        <Component
            {...props}
            {...handlersProps}
        />
    );
};
