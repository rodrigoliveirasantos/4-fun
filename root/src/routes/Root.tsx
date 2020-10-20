import React from 'react';

import Grid from '../components/Grid';
import '../styles/pages/root.css';

export default function Root(){
    return (
        <div id="page-root">
            <h1 style={{userSelect: 'none'}} unselectable="on"> Bem vindo ao root </h1>
            <Grid />

            <div className='password-preview'>
                <span></span>
            </div>
        </div>
    )
}