import './nav.styles.scss';
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Nav = () => {
    const { currentUser } = useContext(UserContext);

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
                    {
                        currentUser ? (
                            <Link className="nav-link" onClick={signOutUser}><span>SIGN-OUT</span></Link>
                        ) : (
                            <Link className='nav-link' to="/auth">
                                SIGN-IN
                            </Link>
                        )
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
     );
}
 
export default Nav;