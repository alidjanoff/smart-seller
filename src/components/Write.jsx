import React, { useRef } from 'react';

//icons
import { TbMessageCircle } from "react-icons/tb";

//img
import img from '../assets/img/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.avif';
import img2 from '../assets/img/young-bearded-man-with-striped-shirt_273609-5677.avif'

export const Write = () => {
    const message = useRef(null);

    const blockMessage =()=>{
        message.current.classList.toggle('block-message');
    };

    return (
        <>
            <div className="write">
                <div onClick={blockMessage} className="write-inner">
                    <TbMessageCircle className='icn-write' />  Bizə yazın

                    <div ref={message} className="message-sent">
                        <div className="header-message">
                            <div className="man-images">
                                <div className="man-1">
                                    <img src={img} alt="" />
                                </div>
                                <div className="man-1 man-2">
                                    <img src={img2} alt="" />
                                </div>
                            </div>
                            <h3>Necə kömək edək?</h3>
                            <p>Sizi bir saat ərzində cavablandırırıq</p>
                        </div>

                        <form action="">
                            <input placeholder='Ad' type="text" />

                            <input placeholder='Email' type="email" name="" id="" />

                            <textarea placeholder='Mesaj yaz' name="" id="" rows="5"></textarea>

                            <button>Mesaj göndər</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
