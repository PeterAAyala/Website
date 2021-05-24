import React, { Fragment, Component }  from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Main from '../layouts/Main';

import markdown from '../data/about.md';

const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;
  console.log(count);

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

class About extends Component {
  state = {
    post: null,
  }

  async componentDidMount() {
    fetch(markdown)
      .then(res => res.text())
      .then(post => this.setState((state) => ({ ...state, post })))
      .catch((err) => console.error(err));
  }

  render() {
    const { post } = this.state;
    
    const count = 100;
    
    return (
      <Main>
        <Helmet title="About" />
        <article className="post">
        <header>
          <div className="title">
            <h2><Link to="/about">About Me</Link></h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        
        <ReactMarkdown source={post} />
        </article>
        
      </Main>
    )
  }

}

{/*
const About = () => (
  <Main>
    <Helmet title="About" />
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2><Link to="/about">About Me</Link></h2>
          <p>(in about {count} words)</p>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);
      */}
export default About;
