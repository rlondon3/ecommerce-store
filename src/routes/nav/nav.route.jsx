import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { Link, Outlet } from "react-router-dom";
import './nav.styles.scss';

const Nav = () => {
    return ( 
        <Fragment>
            <div className="navigation">
            <Link className="logo-container" to="/">
                <CrwnLogo className="logo" />
            </Link>
            <div className="links-container">
                <Link className='nav-link' to="/shop">
                    SHOP
                </Link>
                <Link className='nav-link' to="/sign-in">
                    SIGN-IN
                </Link>
            </div>
            </div>
            <Outlet />
        </Fragment>
     );
}
 
export default Nav;