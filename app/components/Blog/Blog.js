import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Blog = ({ data }) => (
  <article className='blog-post-container'>
    <header>
      <p className='daterange'>{data.date}</p>
      <h2>{data.title}</h2>
    </header>
    <ReactMarkdown
      source={data.markdown_route}
      renderers={{
        Link: LinkRenderer,
      }}
      excapeHtml={false}
    />
    <hr></hr>
  </article>
);

Blog.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    link: PropTypes.string,
    markdown_route: PropTypes.string,
  }))
};

export default Blog