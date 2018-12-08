import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const picStyle = {
  width: '180px',
  height: '180px',
  borderRadius: '50%',
};

const picBoxStyle = {
  paddingBottom: '30px',
};

const breedCardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '200px',
  height: '300px',
  border: '1px solid rgb(217, 255, 102)',
  padding: '0px 20px 0px 20px',
  margin: '15px 15px 15px 15px',
  borderRadius: '10%',
  backgroundColor: 'rgb(242, 255, 204)',
  boxShadow: '0 0 25px rgba(0, 102, 0, 1)',
};

const headerStyle = {
  margin: 0,
  paddingTop: '20px',
  color: 'black',
  textAlign: 'center',
};


const BreedCard = ({ id, name, picUrl }) => (
  <Link to={`/breed-page/${id}`}>
    <div style={breedCardStyle} className="BreedCard">
      <h3 style={headerStyle}>{name}</h3>
      <div style={picBoxStyle}>
        <img style={picStyle} src={picUrl} alt="Dog" />
      </div>
    </div>
  </Link>
);

export default BreedCard;


BreedCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  picUrl: PropTypes.string,
};

BreedCard.defaultProps = {
  id: 'ADDID',
  name: 'ADDNAME',
  picUrl: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
};
