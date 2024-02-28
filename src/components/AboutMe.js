import images from '../utils/images';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaArrowUp } from 'react-icons/fa6';
import '../styles/layout/AboutMe.scss';

const AboutMe = () => {
  return (
    <section className="about">
      <h2 className="about-title" id="title">
        <Link to="/">
          <AiFillHome className="about-title-home-icon" />
        </Link>
        This is me!
      </h2>

      <article className="about-info">
        <div className="about-info-brand">
          <img
            src={images.myself}
            alt="myself"
            className="about-info-brand-photo"
          />
          <div className="about-info-brand-pos">
            <h3 className="about-info-title">
              I'm a junior full stack web developer.
            </h3>
            <p className="about-info-text">
              Cheerful, loyal, hardworking, and motivated to further my
              knowledge.
            </p>
          </div>
        </div>
      </article>

      <article className="about-desc">
        <h3 className="about-desc-title">A little info about me:</h3>
        <p>
          At 19, I embarked on the McDonald's adventure, pondering life's
          mysteries post-graduation. After café conquests and Mercadona madness,
          I found myself orchestrating HR dramas and paperwork symphonies. But
          craving a new tune, I traded contracts for code and dove into the
          world of web development.
        </p>
      </article>

      <article className="about-experience">
        <h3 className="about-experience-title">My work experience summary:</h3>
        <span>Who knew life's menu had so many unexpected specials?</span>
        <div className="about-experience-container">
          <ul>
            <li>
              <p>McDonal's</p>
            </li>
            <li>
              <p>Santa Gloria Bakery</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Mercadona</p>
            </li>
            <li>
              <p>Soon... web developer!</p>
            </li>
          </ul>
        </div>
      </article>

      <article className="about-location">
        <h4 className="about-location-title">Greetings from Bracelona!</h4>
        <div className="about-location-map">
          <iframe
            title="myFrame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95780.66762240471!2d2.0577882167199486!3d41.39263855800529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona!5e0!3m2!1ses!2ses!4v1708622696479!5m2!1ses!2ses"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </article>

      <article className="about-hobbies">
        <h3>Hobbies:</h3>
        <div className="about-hobbies-container">
          <ul>
            <li className="anime">
              Watch anime series:
              <div>
                <img className="anime-img-1" src={images.sakura} alt="sakura" />
                <img className="anime-img-2" src={images.goku} alt="goku" />
                <img
                  className="anime-img-3"
                  src={images.sailor}
                  alt="sailor moon"
                />
                <img
                  className="anime-img-4"
                  src={images.doraemon}
                  alt="doraemon"
                />
              </div>
            </li>
            <li className="game">
              Play videogames:
              <div>
                <img
                  className="game-img-1"
                  src={images.alucard}
                  alt="alucard"
                />
                <img className="game-img-2" src={images.kirby} alt="kirby" />
                <img
                  className="game-img-3"
                  src={images.link}
                  alt="link not zelda"
                />
                <img className="game-img-4" src={images.mario} alt="mario" />
              </div>
            </li>
          </ul>
          <ul>
            <li className="music">
              Listen music:
              <div>
                <img
                  className="music-img-1"
                  src={images.withinTemptation}
                  alt="Within Temptation"
                />
                <img
                  className="music-img-2"
                  src={images.rammstein}
                  alt="Rammstein"
                />
              </div>
            </li>
            <li className="nails">
              Make my nails done:
              <div>
                <img
                  className="nails-img"
                  src={images.nails}
                  alt="painting nails"
                />
              </div>
            </li>
          </ul>
        </div>
        <a className="about-hobbies-arrow" href="#title">
          <FaArrowUp className="about-hobbies-arrow-up" />
        </a>
      </article>
    </section>
  );
};

export default AboutMe;
