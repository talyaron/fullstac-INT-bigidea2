import './Card.css';

function Card(props) {
    const {message} = props;
    return (<div className='card'>{message}</div>)
}

export default Card; 