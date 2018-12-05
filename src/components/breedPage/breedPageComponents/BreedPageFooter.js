// here will be footer of breed page
import React from 'react';

const picStyle = {
    width: '150px',
    height: '150px',
};

const BreedPageFooter = ({ name, picUrl }) =>

        <section className="BreedPageFooter">
              Other pictures of {name}
              <div>
              <img style={picStyle} src={picUrl} alt="Dog" />
              <img style={picStyle} src={picUrl} alt="Dog" />
              <img style={picStyle} src={picUrl} alt="Dog" />
              <img style={picStyle} src={picUrl} alt="Dog" />
              <img style={picStyle} src={picUrl} alt="Dog" />
              </div>
        </section>


export default BreedPageFooter;