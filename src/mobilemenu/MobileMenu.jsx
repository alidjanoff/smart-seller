import React from 'react'

// context
import { useMainContext } from '../utils/MainContext'

//fakedata
import data from './../db/fakeData';
import { Link } from 'react-router-dom';


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
                    {data.map(item => (
                        item.menu.map(x => (
                            <a key={x.id} href={x.href} >{x.item}</a>
                        ))
                    ))}
                </div>
            </div>
        </div>
    )
}
