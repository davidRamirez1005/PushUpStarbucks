import React from 'react'
import style from '../../assets/css/home.module.css'
import img3 from "../../assets/img/img3.png"
import facebook from "../../assets/img/facebook.png"
import instagram from "../../assets/img/instagram.png"
import twitter from "../../assets/img/twitter.png"
import StarBucks from '../home/components/StarBucks'


export default function Product3() {

    const data = [
        {
            "name": "blonde caffe americano refresher",
            "price": 5.71,
            "size": "Venti",
            "description": "A balanced, invigorating mix of flavors."
        }
    ]

return (
    <div>
        <div className='row'>
            <div className='col-7'>
                {data.map((product) => (
                    <div key={product.name} className={style.info}>
                        <h1 style={{fontSize:"3rem", color:"#8d1a57"}}>{product.name}</h1>
                        <br />
                        <div>
                            <h2 style={{color:"#247495"}}><span style={{color:"#8d1a57"}}>Descripción: </span>{product.description}</h2>
                        </div>
                        <div>
                            <h2 style={{color:"#247495"}}><span style={{color:"#8d1a57"}}>Tamaño:</span> {product.size}</h2>
                        </div>
                        <div>
                            <h2 style={{color:"#247495"}}><span style={{color:"#8d1a57"}}>Precio: </span> {product.price}</h2>
                        </div>
                    </div>
                    ))}
                </div>
            <div className="col-5">
                <div className={style.image} style={{backgroundColor:"#d192ac"}}>
                    <img src={img3} alt="" width={500}/>
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
