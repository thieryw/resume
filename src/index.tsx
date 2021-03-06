/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
//import resumePictureUrl from "./assets/img/photo-cv.jpeg";
import gitlandingPicture from "./assets/img/gitlanding.png";
import semasimPicture from "./assets/img/semasim.png";

function Resume(){
  return <div className="contentWrapper">
    <header>
      <div>
        <h1>Thiery William</h1>
        <h2>Frontend Developer</h2>
      </div>
      <div>
        <p>Email: thierywilliam99@gmail.com</p>
        <p>Phone number: +33 6 71 12 46 15</p>
      </div>
    </header>
    <section className="aboutMe">
      <h3>About Me</h3>
      <hr/>

      <div>
        {/*<img src={resumePictureUrl} alt="resume"/>*/}
        <p>
          Hi, my name is William and I am a Developer, focused on the React ecosystem.
          My main calling as a developer is to involve myself in open source projects.
          I am also passionate about Typescript and would advocate for its general adoption.
          For 7 years I have worked as a professional musician before deciding to pursue a career in software
          development with the help of a mentor. I am a regular contributor on several open source projects
          and I also work as a freelance web developer.
         
        </p>

      </div>
    </section>

    <section className="education">
      <h3>Education</h3>
      <hr />

      <div>
        <div>
          <em>2017 - 2021</em>
        </div>
        <p>
          Apprenticeship with Joseph Garonne,
          Full-stack engineer - Institut national de la statistique
          et des études économiques (INSEE).
        </p>
      </div>

      <div>
        <div>
          <h4>
            Paris Conservatoire (CRR)
          </h4>
          <em>2011 - 2013</em>
        </div>
        <p>
          Post graduate diploma in cello and chamber music
        </p>
      </div>

      <div>
        <div>
          <h4>
            Montpellier Conservatoire (CRR)
          </h4>
          <em>2011 - 2013</em>

        </div>
        <p>
          Degree in music studies with cello and chamber music as specialties.
        </p>
      </div>
      <div>
        <div>
          <h4>
            Lycée Clémenceau, Montpellier
          </h4>
          <em>2009</em>

        </div>
        <p>
          Baccalaureate with a music specialty
        </p>
      </div>

    </section>
    <section className="experience">
      <h3>Experience</h3>
      <hr />

      <div>
        <div>
          <h4>Gitlanding</h4>
          <em><a href="https://www.gitlanding.dev/">www.gitlanding.dev</a></em>
          <h4>Lead Developer</h4>
          <em>2021 - current</em>
        </div>

        <div>
          <div>
            <em>Showcase your open source project with a good-looking webpage</em>
            <img src={gitlandingPicture} alt="gitlanding" />

          </div>
          <p className="gl-paragraph">
            Gitlanding helps create beautiful landing pages for Github projects
            in a few simple steps.
            Starting from a blank React App on a branch of a repository we can import
            a few gitlanding components, fill them up with content, deploy it with Github
            Actions and host it using Github Pages.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h4>Onyxia-ui</h4>
          <em><a href="https://github.com/InseeFrLab/onyxia-ui">https://github.com/InseeFrLab/onyxia-ui</a></em>
          <h4>Contributor</h4>
          <em>2021 - current</em>
        </div>
        <div>
          <p>
            A disruptive UI toolkit optimized for typescript, Highly customizable
            and looks great out of the box. Compatible with Material-ui
          </p>


        </div>
      </div>
      <div>
        <div>
          <h4>SSPCloud</h4>
          <em><a href="https://github.com/InseeFrLab/www.sspcloud.fr">www.sspcloud.fr</a></em>
          <h4>Contributor</h4>
          <em>2021 - current</em>
        </div>
        <div>
          <p>
            A shared platform for the processing of public data and data science. 
            It enables data scientists and statisticians to easily connect to
            different services and work environments via a simple and intuitive user interface.
          </p>


        </div>
      </div>
      <div>
        <div>
          <h4>Semasim</h4>
          <em><a href="https://semasim.com">www.semasim.com</a></em>
          <h4>Web developer</h4>
          <em>2018 - current</em>
        </div>
        <div>
          <div>
            <em>One Phone, Multiple SIM Cards</em>
            <img src={semasimPicture} alt="semasim" />
          </div>
          <p>
            Semasim is a tech company centred around a GSM gateway app.
            It enables users to make use of SIM cards that are not inside their phones.
            The main benefits of this application are to enable users to use any phone
            as a dual or triple sim phone and to save on roaming
            fees when travelling abroad.
          </p>


        </div>
      </div>
    </section >
    <section className="languages">
      <h3>Languages</h3>
      <hr />
      <ul>
        <li><p>My mother tongue is English</p></li>
        <li><p>I am fluent in french as my father is of french nationality</p></li>
        <li><p>Being dyslexic I use Antidote</p></li>
      </ul>
    </section>

    <section className="skills">
      <h3>Skills</h3>
      <hr />
      <div>
        <div>
          <h4>Languages with which I am proficient</h4>
          <p>JavaScript Typescript</p>
        </div>
        <div>
          <h4>
            Languages with which I have some experience 
          </h4>
          <p>C, Ada, Java</p>
        </div>
        <div>
          <h4>JS Runtime</h4>
          <p>Node.js, Browsers</p>
        </div>
        <div>
          <h4>Front-end framework</h4>
          <p>React is my specialty</p>
        </div>
        <div>
          <h4>
            System administration
          </h4>
          <p>I have experience using UNIX systems, SSH and Amazon Web Service.</p>
        </div>
        <div>
          <h4>Databases</h4>
          <p>I can design and query relational databases using MySQL</p>
        </div>
        <div>
          <h4>Devops</h4>
          <p>
            I am able to use Github actions
          </p>
        </div>
        <div>
          <h4>Network</h4>
          <p>
            A good understanding of the TSP/IP stack and of the web in general
          </p>
        </div>
      </div>
    </section>
  </div >
}

ReactDOM.render(
  <React.StrictMode>
    <Resume />

  </React.StrictMode>,
  document.getElementById('root')
);
