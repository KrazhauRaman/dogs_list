import React from 'react';
import PropTypes from 'prop-types';


const picStyle = {
  width: '180px',
  height: '180px',
  borderRadius: '15px',
  marginBottom: '5px',
};

const picsDivStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
};


const generatePics = (picUrls) => {
  const imgArray = [];
  // start from 2 picture, because 1st was used for main pic
  for (let i = 1; i < picUrls.length; i += 1) {
    imgArray.push(<img key={i} style={picStyle} src={picUrls[i]} alt="Dog" />);
  }
  return imgArray;
};


const BreedPageFooter = ({ name, picUrls }) => (
  <section className="BreedPageFooter">
    <h3>
      {`Other pictures of ${name}:`}
    </h3>
    <div style={picsDivStyle}>
      {generatePics(picUrls)}
    </div>
  </section>
);
export default BreedPageFooter;


BreedPageFooter.propTypes = {
  name: PropTypes.string,
  picUrls: PropTypes.arrayOf(PropTypes.string),
};

BreedPageFooter.defaultProps = {
  name: 'ADDNAME',
  picUrls: ['https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg', 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg'],
};
