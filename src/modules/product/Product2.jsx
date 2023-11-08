import React from 'react'
import style from '../../assets/css/home.module.css'
import img2 from "../../assets/img/img2.png"
import facebook from "../../assets/img/facebook.png"
import instagram from "../../assets/img/instagram.png"
import twitter from "../../assets/img/twitter.png"
import StarBucks from '../home/components/StarBucks'


export default function Product2() {

    const data = [
        {
            "name": "blonde black and white mocha",
            "price": 6.97,
            "size": "Grande",
            "description": "Bold flavors that awaken your taste buds."
        }
    ]

return (
    <div>
    <div className='row'>
            <div className='col-7'>
                {data.map((product) => (
                    <div key={product.name} className={style.info}>
                        <h1 style={{fontSize:"3rem", color:"#bd676f"}}>{product.name}</h1>
                        <br />
                        <div>
                            <h2 style={{color:"#cab073"}}><span style={{color:"#bd676f"}}>Descripción: </span>{product.description}</h2>
                        </div>
                        <div>
                            <h2 style={{color:"#cab073"}}><span style={{color:"#bd676f"}}>Tamaño:</span> {product.size}</h2>
                        </div>
                        <div>
                            <h2 style={{color:"#cab073"}}><span style={{color:"#bd676f"}}>Precio: </span> {product.price}</h2>
                        </div>
                    </div>
                    ))}
                </div>
        <div className="col-5">
            <div className={style.image} style={{backgroundColor:"#db8a81"}}>
                <img src={img2} alt="" width={500}/>
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
