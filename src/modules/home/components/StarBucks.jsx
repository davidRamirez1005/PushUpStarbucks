import React from 'react'
import thumb1 from '../../../assets/img/thumb1.png'
import thumb2 from '../../../assets/img/thumb2.png'
import thumb3 from '../../../assets/img/thumb3.png'
import style from '../styles/starbuscks.module.css'
import { useNavigate} from 'react-router-dom';


export default function StarBucks() {
    const navigate = useNavigate();
    const handleRegisterClick3 = () => {
        navigate('/Product3');
    };
    const handleRegisterClick = () => {
        navigate('/Product2');
    };
    const handleRegisterClick1 = () => {
        navigate('/');
    };
    return (
        <div>
            <div className={style.thumbs}>
                <div >
                    <img src={thumb1} alt="" className={style.thumb} onClick={handleRegisterClick1}/>
                </div>
                <div >
                    <img src={thumb2} alt="" className={style.thumb} onClick={handleRegisterClick}/>
                </div>
                <div >
                    <img src={thumb3} alt="" className={style.thumb}onClick={handleRegisterClick3} />
                </div>
            </div>
        </div>
    )
}
