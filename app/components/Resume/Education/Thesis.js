import React from 'react';
import PropTypes from 'prop-types';

const Thesis = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.title}</h4>
      <p className="school">{data.description}</p>
      {/* <p className="school">{data.school}, {data.year}</p> */}
    </header>
  </article>
);

Thesis.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Thesis;
