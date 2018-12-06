// here will be footer of breed page
import React from 'react';

const picStyle = {
    width: '150px',
    height: '150px',
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
        Other pictures of {name}
        <div>
            {generatePics(picUrls)}
        </div>
    </section>


export default BreedPageFooter;