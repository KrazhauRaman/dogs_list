import React from 'react';
import PropTypes from 'prop-types';


const picStyle = {
  width: '230px',
  height: '230px',
  float: 'left',
  margin: '7px 7px 7px 0',
};

const headerStyle = {
  textAlign: 'center',
};


const BreedPageBody = ({ name, picUrl }) => (
  <section>
    <h1 style={headerStyle}>
      {name.toUpperCase()}
    </h1>
    <div>
      <p>
        <img style={picStyle} src={picUrl} alt="Dog" />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum
        <br />
        <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to
                make a type specimen book.
                It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum
      </p>
    </div>
  </section>
);

export default BreedPageBody;


BreedPageBody.propTypes = {
  name: PropTypes.string,
  picUrl: PropTypes.string,
};

BreedPageBody.defaultProps = {
  name: 'ADDNAME',
  picUrl: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
};
