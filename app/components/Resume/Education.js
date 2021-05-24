import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Education/Degree';
import Thesis from './Education/Thesis';


const Education = ({ data, thes }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Education</h3>
    </div>
    {data.map((degree) => (
      <Degree
        data={degree}
        key={degree.school}
      />
    ))}
    {thes.map((thesis) => (
      <Thesis
        data={thesis}
        key={thesis.title}
      />
    ))}
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Education.defaultProps = {
  data: [],
};


export default Education;
