import React from 'react';
import style from '../components/foot.module.css'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import facebook from '../assets/facebook.svg'

const Foot = () => {
    return (
        <div className={style.main}>
            
            <section className={style.left}>
                <h4>Let's Talk...</h4>
                <form className={style.form} action="">
                    <div>
                        <h5>Name</h5>
                        <input type="text" placeholder='name'/>
                    </div>
                    <div>
                        <h5>Email</h5>
                        <input type="email" placeholder='email'/>
                    </div>
                    <div className={style.btn}>
                    <button>Submit</button>
                        {/* <input type="text" /> */}
                    </div>
                    
                </form>
            </section>
            <section className={style.right}>
                <a href="https://www.google.com/"><img src={facebook} height={25} alt="" srcset="" /></a>
                <a href="https://twitter.com/u_d_ooo"><img src={twitter} alt="" srcset="" /></a>
                <a href="https://www.linkedin.com/in/okeke-prince-785323265/"><img src={linkedin} alt="" srcset="" height={25}/></a>
            </section>
        </div>
    );
}

export default Foot;
