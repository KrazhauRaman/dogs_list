import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const headerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const buttonStyle = {
  width: '100px',
  height: '40px',
  cursor: 'pointer',
  border: '1px solid black',
  backgroundColor: 'rgb(42, 255, 104)',
  fontWeight: '1000',
};


const BreedPageHeader = ({ prevId, nextId }) => (
  <nav style={headerStyle}>
    <Link to="/"><button type="button" style={buttonStyle}>HOME</button></Link>
    <div>
      <Link to={`/breed-page/${prevId}`}><button type="button" style={buttonStyle} disabled={!prevId}>PREVIOUS</button></Link>
      <Link to={`/breed-page/${nextId}`}><button type="button" style={buttonStyle} disabled={!nextId}>NEXT</button></Link>
    </div>
  </nav>
);
export default BreedPageHeader;


BreedPageHeader.propTypes = {
  prevId: PropTypes.string,
  nextId: PropTypes.string,
};

BreedPageHeader.defaultProps = {
  prevId: 'ADDID',
  nextId: 'ADDID',
};
