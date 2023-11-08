import React, { useState } from 'react';
import style from '../../assets/css/home.module.css'
import img1 from "../../assets/img/img1.png"
import facebook from "../../assets/img/facebook.png"
import instagram from "../../assets/img/instagram.png"
import twitter from "../../assets/img/twitter.png"
import StarBucks from './components/StarBucks'

export default function Home() {


    const data = [
        {
            "name": "almond protein blended cold brew",
            "price": 5.47,
            "size": "Grande",
            "description": "Delicious blend perfect for any time of the day."
        }
    ]
    return (
        <div>
            <div className='row'>
                <div className='col-7'>
                {data.map((product) => (
                    <div key={product.name} className={style.info}>
                        <h1 style={{fontSize:"3rem", color:"#104310"}}>{product.name}</h1>
                        <br />
                        <div>
                            <h2><span style={{color:"#104310"}}>Descripción: </span>{product.description}</h2>
                        </div>
                        <div>
                            <h2><span style={{color:"#104310"}}>Tamaño:</span> {product.size}</h2>
                        </div>
                        <div>
                            <h2><span style={{color:"#104310"}}>Precio: </span> {product.price}</h2>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="col-5">
                    <div className={style.image}>
                        <img src={img1} alt="" width={500} />
                        <div className={style.iconos}>
                            <div  style={{cursor:"pointer"}}>
                                <img src={facebook} alt="" />
                            </div>
                            <div style={{cursor:"pointer"}}>
                                <img src={instagram} alt="" />
                            </div>
                            <div style={{cursor:"pointer"}}>
                                <img src={twitter} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={style.starburks}>
                    <StarBucks/>
                </div>
            </div>
        </div>
    )
}
