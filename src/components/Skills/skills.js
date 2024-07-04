import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import webDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const skills=()=>{
    return(
        <section id="skills">
            <span className="skillTitle">
                What I do
            </span>
            <span className="skillDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quam vel sint quas error deserunt, sequi laborum, necessitatibus perspiciatis distinctio nesciunt maxime! Necessitatibus rem debitis voluptas magnam iure laudantium dolorum officia voluptate, accusantium consectetur ipsam exercitationem neque corporis veritatis incidunt voluptatum harum, quo iste architecto.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={webDesign} alt="webDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>AppDesign</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default skills;