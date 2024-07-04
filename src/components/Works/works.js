import React from 'react'
import './works.css'
import portfolio1 from '../../assets/portfolio-1.png';
import portfolio2 from '../../assets/portfolio-2.png';
import portfolio3 from '../../assets/portfolio-3.png';
import portfolio4 from '../../assets/portfolio-4.png';
import portfolio5 from '../../assets/portfolio-5.png';
import portfolio6 from '../../assets/portfolio-6.png';
const works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae adipisci id saepe deleniti sequi fugiat ducimus. Recusandae adipisci dicta doloribus eveniet praesentium impedit sequi!</span>
        <div className="worksImgs">
            <img src={portfolio1} alt="portfolio1" className="worksImg" />
            <img src={portfolio2} alt="portfolio2" className="worksImg" />
            <img src={portfolio3} alt="portfolio3" className="worksImg" />
            <img src={portfolio4} alt="portfolio4" className="worksImg" />
            <img src={portfolio5} alt="portfolio5" className="worksImg" />
            <img src={portfolio6} alt="portfolio6" className="worksImg" />
        </div>
        <button className="workBtn">
            See More
        </button>
    </section>
  )
}

export default works
