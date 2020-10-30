import React from 'react';

import Grid from '../components/Grid';
import '../styles/pages/root.css';
import Draggable from '../components/Draggable';
import Droppable from '../components/Droppable';

export default function Root(){
    return (
        <div id="page-root">
            <h1 style={{userSelect: 'none'}} unselectable="on"> Bem vindo ao root </h1>
            
            <Grid>
                <Droppable />
                <Droppable />
                <Droppable />
                <Droppable />
                <Droppable>
                    <Draggable />
                </Droppable>
                <Droppable>
                    <Draggable />
                </Droppable>
                <Droppable>
                    <Draggable />
                </Droppable>
                <Droppable />
                <Droppable />
            </Grid>

        </div>
    )
}