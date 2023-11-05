import React, { useRef } from 'react'

// context
import { useMainContext } from '../utils/MainContext'

// image
import img from '../assets/img/Abstraction.png'

//icons
import { AiOutlineCloseCircle } from "react-icons/ai"
import {IoIosArrowBack} from "react-icons/io"


export const Signin = () => {
    const values = useMainContext();

    const closeForm = () => {
        values.setOpenSingin('none')
        values.setOpenForm('-200%')
    }

    const forgot = useRef(null)
    const btnforgot = useRef(null)
    const backLogin = useRef(null)

    const getPassword = ()=>{
        forgot.current.style.right = '0'
    }

    const backToLog = ()=>{
        forgot.current.style.right = '-100%'
    }

    return (
        <>
            <div style={{ "display": values.openSingin }} className='signin'>
                <div onClick={closeForm} className="bg-signin"></div>
            </div>

            <div style={{ "top": values.openForm }} className="signin-form">
                <div className="img-form">
                    <img src={img} alt="" />
                </div>

                <div className="inputs-form">
                    <h1>Sign in</h1>

                    <form action="">
                        <input placeholder='Your email' type="email" name="" id="" />
                        <input placeholder='Your password' type="password" />
                        <div className="remember">
                            <div className="remember-1">
                                <input id='check' type="checkbox" />
                                <label htmlFor="check">Remember me</label>
                            </div>

                            <span onClick={getPassword} ref={btnforgot} className='forgot' href="">Forgot password?</span>
                        </div>

                        <button className='btn-sign'>Sign in</button>
                        <button className='btn-sign-g'>Sign in with Google</button>
                    </form>

                    <div ref={forgot} className="forgot-password">
                        <h2>Forgot password?</h2>
                        <p>No worries, we’ll send you reset instructions</p>

                        <form action="">
                            <input placeholder='Your email' type="email" />

                            <button>Reset password</button>
                        </form>

                        <div onClick={backToLog} ref={backLogin} className="back-log">
                          <div className="btn-back"><IoIosArrowBack/></div>   Back to login
                        </div>
                    </div>

                    <div onClick={closeForm} className="close">
                        <AiOutlineCloseCircle />
                    </div>
                </div>
            </div>
        </>
    )
}
