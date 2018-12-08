import React from 'react';


const picStyle = {
    width: '180px',
    height: '180px',
    borderRadius: '15px',
    marginBottom: '5px'
};

const picsDivStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
};


const generatePics = (picUrls) => {
    let imgArray = [];
    for (let i = 1; i < picUrls.length; i++) {  //start from 2 picture, because 1st was used for main pic
        imgArray.push(<img key={i} style={picStyle} src={picUrls[i]} alt="Dog" />);
    }
    return imgArray;
}


const BreedPageFooter = ({ name, picUrls }) =>

    <section className="BreedPageFooter">
        <h3>
            Other pictures of {name}:
        </h3>
        <div style={picsDivStyle}>
            {generatePics(picUrls)}
        </div>
    </section>


export default BreedPageFooter;