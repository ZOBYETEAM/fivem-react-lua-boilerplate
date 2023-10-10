import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <>
            <Link to="/"> Home </Link>
            <Link to="/Bank"> Bank </Link>
            <Link to="/Safe"> Safe </Link>
            <Link to="/Fight"> Fight </Link>
        </>
    )
}