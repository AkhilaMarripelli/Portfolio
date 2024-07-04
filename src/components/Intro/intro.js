import React from 'react'
import './intro.css';
import bg from '../../assets/image3.png';
import {Link} from 'react-scroll';
import btn from '../../assets/hireme.png'
const Intro=()=> {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText"><span className="introName">Yenkamolla Ankitha</span>
            <br />Web Developer </span>
            <p className="introPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odio itaque asperiores</p>
            <Link><button className="btn"><img src={btn} alt="" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="photo" className="bg" />
    </section>
  )
}
export default Intro;