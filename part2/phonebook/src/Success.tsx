import './success.css';

const Success = ({message = null}) =>
    message ? <p className={'success'}>{message}</p> : '';

export default Success;