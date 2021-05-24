import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.png`} alt="" />
      </Link>
      <header>
        <h2>Peter Ayala</h2>
        <p><a href="mailto:peteraayala@gmail.com">peteraayala@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hello! I'm Peter, a recent Harvard graduate and current Associate Consultant at Bain &amp; Company. I formally studied Statistics and Computer Science, and use this website as a way to post tutorials and share different topics I'm interested in.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Peter Ayala <Link to="/">peteraayala.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
