// here will be header of breed page
import React from 'react';

import { Link } from "react-router-dom";


const BreedPageHeader = ({prevId, nextId}) =>

        <nav className="BreedPageHeader">
              <Link to="/"><button>Home</button></Link>
              <Link to={`/breed-page/${prevId}`}><button disabled={!prevId}>prev</button></Link>
              <Link to={`/breed-page/${nextId}`}><button disabled={!nextId}>next</button></Link>              
        </nav>


export default BreedPageHeader;