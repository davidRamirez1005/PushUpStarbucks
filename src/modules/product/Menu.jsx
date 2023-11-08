import React from 'react'
import style from '../../assets/css/home.module.css'
import img2 from "../../assets/img/logo.png"
import facebook from "../../assets/img/facebook.png"
import instagram from "../../assets/img/instagram.png"
import twitter from "../../assets/img/twitter.png"
import {data} from '../../../productos'
import StarBucks from '../home/components/StarBucks';


export default function Product2() {

return (
        <div>
        <div className='row'>
                <div className='col-7'>
                    {data.map((product) => (
                        <div key={product.name} className={style.info}>
                            <h1 style={{fontSize:"3rem", color:"#250306"}}>{product.name}</h1>
                            <br />
                            <div>
                                <h2 style={{color:"#008948"}}><span style={{color:"#250306"}}>Descripción: </span>{product.description}</h2>
                            </div>
                            <div>
                                <h2 style={{color:"#008948"}}><span style={{color:"#250306"}}>Tamaño:</span> {product.size}</h2>
                            </div>
                            <div>
                                <h2 style={{color:"#008948"}}><span style={{color:"#250306"}}>Precio: </span> {product.price}</h2>
                            <hr />
                            </div>
                        </div>
                        ))}
                    </div>
            <div className="col-5">
                <div className={style.image} style={{top:"13rem"}}>
                    <img src={img2} alt="" width={300}/>
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
