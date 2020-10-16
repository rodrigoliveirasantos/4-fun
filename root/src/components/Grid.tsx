import React from 'react';
import Draggable from './Draggable';

export default function Grid(){

    return (
        <div className="grid-container">
            <div id="a1" className="grid-item" data-value='1'>  </div>
            <div id='a2' className="grid-item" data-value='2'>  </div>
            <div id='a3' className="grid-item" data-value='4'>  </div>
            <div id='b1' className="grid-item" data-value='8'>  </div>
            <div id='b2' className="grid-item" data-value='16'> 
               <Draggable />
            </div>
            <div id='b3' className="grid-item" data-value='32'>  
                <Draggable />
            </div>
            <div id='c1' className="grid-item" data-value='64'> 
                <Draggable />
            </div>
            <div id='c2' className="grid-item" data-value='128'>  </div>
            <div id='c3' className="grid-item" data-value='256'>  </div>
        </div>
    )
}