import React, { useState } from 'react';

//icons
import { AiOutlineSearch } from 'react-icons/ai';

//fakedata
import { fakequestions } from '../db/fakequestions';

export const Questions = () => {


    return (
        <>
            <div className="header-contact">
                <h1>Ən çox verilən suallar</h1>
                <p>Sizə kömək edə bilmək üçün bilik bazamızda axtarış edin.</p>

                <form className='question-form' action="">
                    <button><AiOutlineSearch /></button>
                    <input type="text" />
                </form>
            </div>

            <div className="container-fluid questions-content">
                <div className="border-content">
                    {fakequestions.map(x => (
                        <details>
                            <summary>
                                {x.question}
                                <div className="plus">
                                    +
                                </div>
                            </summary>
                            <p className='content-accordion'>{x.detail}</p>
                        </details>
                    ))}
                </div>
            </div>

            <div className="container-fluid">
                <div className="border-add">
                    <h1>Daha çox sualınız var?</h1>
                    <p>
                        Probleminizi tapa bilmirsinizsə, bizə yazın, sizi bir saat ərzində cavablandırırıq
                    </p>

                    <form action="">
                        <div className="question-1">
                            <div className="inner-question">
                                <label htmlFor="">Geri bildirim</label>
                                <input type="text" />
                            </div>

                            <div className="inner-question">
                                <label htmlFor="">E-poçt ünvanı</label>
                                <input type="email" />
                            </div>
                        </div>
                        <div className="send">
                            <button>Gonder</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}