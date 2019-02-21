import React, {
    useEffect,
    useRef
} from 'react';

/* eslint "react/display-name": "off" */
export default (handlers = {}) => Component => props => {
    const actualizedHandlers = typeof handlers === 'function'
        ? handlers(props)
        : handlers;
    const {
        componentDidMount = () => {},
        componentDidUpdate = () => {},
        componentWillUnmount = () => {}
    } = actualizedHandlers;
    const prevProps = useRef(props);
    const loadCounter = useRef(0);

    useEffect(() => {
        componentDidMount(props);

        return componentWillUnmount(props);
    }, []);

    useEffect(() => {
        loadCounter.current += 1;

        if (loadCounter.current === 1) {
            return;
        }

        componentDidUpdate(props, prevProps.current);
        prevProps.current = props;
    });

    return <Component {...props} />;
};
