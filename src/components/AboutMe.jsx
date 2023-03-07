import React from 'react';
import About from "../components/aboutme.module.css"
import logo from "../assets/birthday.svg"
import age from "../assets/age.svg"
import location from "../assets/location.svg"
import interest from "../assets/interests.svg"
// import interest from "../assets/interests.svg"
import study from "../assets/study.svg"
import degree from "../assets/degree.svg"
import mail from "../assets/mail.svg"
import phone from "../assets/phone.svg"
import me from "../assets/IMG_E9954.jpg"




const AboutMe = () => {
    return (
        <div className={About.main}>
            <h4 className={About.head}>About Me</h4>
            <section className={About.description}>
                <div className={About.left}>
                    <div className={About.back}>
                    <div className={About.front}><img src={me} alt="" width="100%" height="100%" /></div>
                    </div>
                </div>
                <div className={About.right}>
                    <h4 className={About.innerhead}>i'm Udochukwu Okeke</h4>
                    <p className={About.p}>I am a web developer who loves programming and complex problem solving,i am a teamplayer with great communication skills and I also enjoy learning about new technologies under my field and i have great passion for writing APIs and web development in general</p>
                    <div className={About.biodata}>
                        <div className={About.info}><img src={logo} alt="" /><b>Birthday : <span>3rd May 2002</span></b> </div>
                        <div className={About.info}><img src={age} alt="" /><b>Age :<span> 22</span></b> </div>
                        <div className={About.info}><img src={location} alt="" /><b>Location :<span> Enugu, Nigeria</span></b> </div>
                        <div className={About.info}><img src={interest} alt="" /><b>Interest :<span> Swimming,reading</span></b></div>
                        <div className={About.info}><img src={study} alt="" /><b>Study :<span> Enugu State University of Science and technology</span></b> </div>
                        <div className={About.info}><img src={degree} alt="" /><b>Degree :</b> </div>
                        <div className={About.info}><img src={mail} alt="" /><b>Mail :<span> udochukwu2@gmail.com</span></b> </div>
                        <div className={About.info}><img src={phone} alt="" /><b>Phone :<span> +234 704 562 3093</span></b> </div>

                        <button><a href="#">Download CV</a></button>
                        {/* <div>a</div> */}
                        {/* <div>a</div> */}
                        {/* <div>a</div> */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;
