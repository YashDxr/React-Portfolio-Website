import React from "react";
import "./portfolio.css";
import IMG1 from "../../Resources/portfolio1.jpg";
import IMG2 from "../../Resources/portfolio2.jpg";
import IMG3 from "../../Resources/portfolio3.png";
import IMG4 from "../../Resources/Discuss.png";
import IMG5 from "../../Resources/portfolio5.png";
import IMG6 from "../../Resources/IMG6.png";

const data = [
  {
    id: 1,
    image: IMG5,
    title: "Safe-Doc",
    github: "https://github.com/YashDxr/safe-doc",
    website: "",
  },
  {
    id: 2,
    image: IMG3,
    title: "RealtorWeb",
    github: "https://github.com/YashDxr/RealtorWeb-App",
    website: "https://realtor-web.onrender.com/",
  },
  {
    id: 3,
    image: IMG1,
    title: "Chat Application",
    github: "https://github.com/YashDxr/Chat-Application.git",
    website: "https://yash-chatapp.online",
  },
  {
    id: 4,
    image: IMG2,
    title: "College Management System",
    github: "https://github.com/YashDxr/College_Management_System.git",
    website: "",
  },

  {
    id: 5,
    image: IMG4,
    title: "Discussion Forum",
    github: "https://github.com/YashDxr/Discussion-Forum",
    website: "http://yashmadeit.tech",
  },

  {
    id: 6,
    image: IMG6,
    title: "Pizza-Website",
    github: "https://github.com/YashDxr/Pizza-Shop",
    website: "https://yashdxr.github.io/Pizza-Shop/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, website }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  rel="noreferrer"
                  className="btn"
                  target="_blank"
                >
                  Github
                </a>
                {website === "" ? (
                  <>Not deployed yet!</>
                ) : (
                  <a
                    href={website}
                    rel="noreferrer"
                    className="btn"
                    target="_blank"
                  >
                    Website
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
