// here will be header of breed page
import React from 'react';

import { Link } from "react-router-dom";


const BreedPageHeader = ({name}) =>

        <nav className="BreedPageHeader">
              <Link to="/"><button>back</button></Link>
              <Link to={`/breed-page/${+name-1}`}><button>prev</button></Link>
              <Link to={`/breed-page/${+name+1}`}><button>next</button></Link>              
        </nav>


export default BreedPageHeader;