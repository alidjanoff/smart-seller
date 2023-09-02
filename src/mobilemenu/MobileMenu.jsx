import { Link } from 'react-router-dom';

// context
import { useMainContext } from '../utils/MainContext'

//fakedata
import { fakeHeader } from './../db/fakeHeader';

//icons
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export const MobileMenu = () => {
    const values = useMainContext();

    const closeMobile = () => {
        values.setIsOpen('-100%')
    }

    return (
        <div className="mobile-menu-main">
            <div onClick={closeMobile} style={{ "left": values.isOpen }} className="bg-mobile"></div>
            <div style={{ "left": values.isOpen }} className='mobile-menu'>
                <div className="header-mobile">
                    SMARTSALE
                </div>

                <div className="menu-mobile">
                    {
                        fakeHeader.map(x => (
                            <Link key={x.id} to={x.to} >{x.item}</Link>
                        ))
                    }
                </div>

                <div className="social">
                    <a href="">
                        <FaFacebookF />
                    </a>
                    <a href="">
                        <FaTwitter />
                    </a>
                    <a href="">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    )
}
