import './error.css';

const Error = ({message = null}) =>
    message ? <p className={'error'}>{message}</p> : '';

export default Error;