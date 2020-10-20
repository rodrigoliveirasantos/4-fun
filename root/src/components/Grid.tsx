import React, { useEffect, useState } from 'react';

import DraggableObserver from '../modules/DraggableObserver';
import Draggable from './Draggable';

interface NotifyData {
    draggable: Element,
    selectedSlot: Element
}

interface CombinationResult { 
    action: Function,
    squareColor: String
}


interface Combination {
    [key: number]: CombinationResult
}


export default function Grid(){
    var draggableList: NodeListOf<Element>;
    var password: number[] = [];

    const combinations: Combination = {
        0: {
            action: () => {
                document.body.style.backgroundColor = '#FFFBF2'
            },
            squareColor: '#C65D5D'
        },
        
        7: {
            action: () => {
                document.body.style.backgroundColor = '#FFF999'
            },
            squareColor: '#FFFFFF'
        }
    }

    function init(){
        draggableList = document.querySelectorAll('[data-type=password-square')
        draggableList.forEach(draggable => {
            password.push(Number(draggable.parentElement?.getAttribute('data-value')))
        })
        console.log('Array de password: ' + password)
    }

    function handleDraggableDrop(data: NotifyData){
        const draggableArray = Array.from(draggableList)
        const indexInPassword = draggableArray.indexOf(data.draggable);

        password[indexInPassword] = Number(data.draggable.parentElement?.getAttribute('data-value'))
        console.log('Array de password: ' + password)

        const combinationKey = password.reduce((accumulator, current) => accumulator + current );
        
        var result = combinations[combinationKey];
        
        if (!result){
            result = combinations[0];
        }

        passwordMatch(result)        
    }

   function passwordMatch(combinationResult: CombinationResult){
        const { action, squareColor } = combinationResult;
        
        draggableList.forEach(draggable => {
            draggable.setAttribute('style', `background: ${squareColor}`)
        })

        action();
        
    } 

    useEffect(() => {
        DraggableObserver.subscribe(handleDraggableDrop);
        init();
    }, [])

    

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