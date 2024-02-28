import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pdfOne from '../utils/CV-Silvia-Torres-Spanish.pdf';
import pdfTwo from '../utils/CV-Silvia-Torres-English.pdf';
import images from '../utils/images';
import { IoIosMail, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { LiaFileDownloadSolid } from 'react-icons/lia';
import { TbClick } from 'react-icons/tb';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithubSquare } from 'react-icons/fa';
import '../styles/layout/Home.scss';

const personalMail = 'silviatc1993@gmail.com';

const tabs = [
  {
    tagName: 'Solo projects',
    projects: [
      {
        image: images.nation,
        name: 'Nation Navigator',
        description:
          'Website that calls REST Countries API. Includes favorites section and map rendering for each country. Also allows you to filter by language and region.',
        demo: 'https://storrecu.github.io/NationNavigator/',
        code: 'https://github.com/Storrecu/NationNavigator',
      },
      {
        image: images.todo,
        name: 'To do List',
        description:
          "Simple task list exercise. Allows you to add, delete and mark tasks as completed. The list is stored in the browser's cache.",
        demo: 'https://storrecu.github.io/To-Do-List/',
        code: 'https://github.com/Storrecu/To-Do-List',
      },
    ],
  },
  {
    tagName: 'Adalab collabs',
    projects: [
      {
        image: images.rebirth,
        name: 'Rebirth in web',
        description:
          'First collaborative website created in the Adalab. Allows us to meet the team and introduce ourselves to the rest of our colleagues.',
        demo: 'https://storrecu.github.io/Rebirth-In-Web/',
        code: 'https://github.com/Storrecu/Rebirth-In-Web',
      },
      {
        image: images.awesome,
        name: 'Awesome Profile Cards',
        description:
          'Website to create a customizable and digital business card. Allows you to share the created card on Twitter.',
        demo: 'https://storrecu.github.io/Awesome-Profile-Cards/',
        code: 'https://github.com/Storrecu/Awesome-Profile-Cards',
      },
    ],
  },
  {
    tagName: 'Adalab evaluations',
    projects: [
      {
        image: images.wow,
        name: 'Owen Wilson Wow',
        description:
          'Website that calls the Owen Wilson\'s API. Displays all the movies where the actor has said "wow". Allows filtering by year and name.',
        demo: 'https://storrecu.github.io/Owen-Wilson-Wow/',
        code: 'https://github.com/Storrecu/Owen-Wilson-Wow',
      },
      {
        image: images.showseeker,
        name: 'Show Seeker',
        description:
          'Website that calls the TVMaze API. Displays a list with API response, allow filter by name, and includes a favorites section.',
        demo: 'https://storrecu.github.io/Show-seeker/',
        code: 'https://github.com/Storrecu/Show-seeker',
      },
    ],
  },
];

const Home = () => {
  const [selected, setSelected] = useState(0);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const renderTabs = () => {
    return tabs.map((tab, i) => (
      <div
        className="element_four-tabs"
        key={i}
        style={{
          padding: 25,
          display: 'inline-block',
          background:
            i === selected ? 'rgba(173, 224, 219, 0.3)' : 'transparent',
        }}
        onClick={() => handleTabClick(i)}
      >
        {tab.tagName}
      </div>
    ));
  };

  const renderContent = () => {
    return tabs[selected].projects.map((project, i) => (
      <div className="element_four-container-item" key={i}>
        <h4 className="element_four-container-item-title">{project.name}</h4>
        <img
          className="element_four-container-item-img"
          src={project.image}
          alt="preview of project"
        />
        <p className="element_four-container-item-text">
          {project.description}
        </p>
        <a
          className="element_four-container-item-link"
          href={project.demo}
          target="_blank"
          rel="noreferrer"
        >
          <FiExternalLink className="element_four-container-item-icon" />
        </a>
        <a
          className="element_four-container-item-link"
          href={project.code}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare className="element_four-container-item-icon" />
        </a>
      </div>
    ));
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      setActiveImgIndex(!activeImgIndex ? 1 : 0);
    }, 3000);
    return () => clearTimeout(interval);
  }, [activeImgIndex]);

  const handleTabClick = (index) => {
    setSelected(index);
  };

  return (
    <section className="main-elements">
      <section className="element_zero">
        <h1 className="element_zero-title">Silvia Torres Portfolio.</h1>
        <h3 className="element_zero-subtitle">
          "Codifying dreams, deploying realities"
        </h3>
      </section>

      <section className="element_one">
        <h2 className="element_one-title">About me</h2>
        <Link
          to="/about"
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <TbClick className="element_one-link-img" />
        </Link>
      </section>

      <section className="element_two">
        <h2 className="element_two-title">Tech Stack</h2>
        <div className="element_two-container">
          <img
            src={images.techOne}
            alt={`Imagen ${0}`}
            className={`image ${activeImgIndex === 0 ? 'visible' : ''}`}
          />
          <img
            src={images.techTwo}
            alt={`Imagen ${1}`}
            className={`image ${activeImgIndex === 1 ? 'visible' : ''}`}
          />
        </div>
      </section>

      <section className="element_three">
        <h2 className="element_three-title">Contact</h2>
        <a className="element_three-link" href={`mailto: ${personalMail}`}>
          <IoIosMail className="element_three-link-img" />
        </a>
      </section>

      <section className="element_four">
        <h2 className="element_four-title">Projects</h2>
        {renderTabs()}
        <div
          className="element_four-container"
          style={{
            background: 'rgba(173, 224, 219, 0.3)',
          }}
        >
          {renderContent()}
        </div>
      </section>

      <section className="element_five">
        <h2 className="element_five-title">LinkedIn</h2>
        <a
          className="element_five-link"
          href="https://www.linkedin.com/in/silviatorrecu/"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoLinkedin className="element_five-link-img" />
        </a>
      </section>

      <section className="element_six">
        <h2 className="element_six-title">GitHub</h2>
        <a
          className="element_six-link"
          href="https://github.com/Storrecu"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoGithub className="element_six-link-img" />
        </a>
      </section>

      <section className="element_seven">
        <h2 className="element_seven-title">Resume</h2>
        <div className="element_seven-btn">
          <a
            className="element_seven-btn-img"
            href={pdfOne}
            target="_blank"
            rel="noopener noreferrer"
            download="CV-Silvia-Torres-Spanish.pdf"
          >
            <p className="element_seven-btn-img-text">Spanish</p>
            <LiaFileDownloadSolid className="element_seven-btn-img-flag-es" />
          </a>

          <a
            className="element_seven-btn-img"
            href={pdfTwo}
            target="_blank"
            rel="noopener noreferrer"
            download="CV-Silvia-Torres-English.pdf"
          >
            <p className="element_seven-btn-img-text">English</p>
            <LiaFileDownloadSolid className="element_seven-btn-img-flag-en" />
          </a>
        </div>
      </section>
    </section>
  );
};

export default Home;
