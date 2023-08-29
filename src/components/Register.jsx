import React from 'react'

// context
import { useMainContext } from '../utils/MainContext'

// image
import img from '../assets/img/Abstraction.png'

//icons
import { AiOutlineCloseCircle } from "react-icons/ai"

export const Register = () => {
    const values = useMainContext();

    const closeRegister = () =>{
      values.setOpenRegister('none');
      values.setOpenRegForm('-200%');
    }

    return (
        <>
            <div style={{"display":values.openRegister}} className='signin'>
                <div onClick={closeRegister} className="bg-signin"></div>
            </div>

            <div style={{"top":values.openRegForm}} className="signin-form">
                <div className="img-form">
                    <img src={img} alt="" />
                </div>

                <div className="inputs-form">
                    <h1>Register</h1>

                    <form action="">
                        <input placeholder='Full name' type="text" name="" id="" />
                        <input placeholder='Your email' type="email" />
                        <input type="password" placeholder='Your password' />
                        <div className="remember">
                            <div className="remember-1">
                                <input id='read' type="checkbox" />
                                <label className='priwacy' htmlFor="read">I've read and agree with Terms of Service and our <a href="">Privacy Police</a></label>
                            </div>
                        </div>

                        <button className='btn-sign'>Sign in</button>
                        <button className='btn-sign-g'>Sign in with Google</button>
                    </form>

                    <div onClick={closeRegister} className="close">
                        <AiOutlineCloseCircle />
                    </div>
                </div>
            </div>
        </>
    )
}
