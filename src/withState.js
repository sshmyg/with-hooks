import React, { useState } from 'react';

/* eslint "react/display-name": "off" */
export default (valueName, methodName, defaultValue) => Component => props => {
    const [a, b] = useState(defaultValue);
    const stateProps = {
        [valueName]: a,
        [methodName]: b
    };

    return (
        <Component
            {...props}
            {...stateProps}
        />
    );
};
