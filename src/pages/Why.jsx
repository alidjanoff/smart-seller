import React from 'react';

//fakedata
import { fakeWhy } from '../db/fakeWhy';


export const Why = () => {
    return (
        <>
            <div className="header-contact">
                <h1>Niyə biz?</h1>
            </div>

            <div className="container-fluid">
                <div className="why-content">
                    {
                        fakeWhy.map(x => (
                            <div key={x.id} className="why-item">
                                <div className="why-img">
                                    <img src={x.img} alt="" />
                                </div>
                                <div className="why-name">
                                    {x.name}
                                </div>
                                <div className="desc-why">
                                    {x.desc}
                                </div>

                                <a href={x.href}>Get started</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>

    )
}
