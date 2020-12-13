import './Header.css'

function Header(props) {
    const {title, name} = props;

    return(
        <div className='header'>{title} {name}</div>
    )
}

export default Header;