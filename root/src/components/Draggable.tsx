import React, { useState, useEffect } from 'react';
import Drop from '../modules/Drop'
import DraggableObserver from '../modules/DraggableObserver';

export default function Draggable(){
    const [cursorDiffX, setCursorDiffX] = useState(0);
    const [cursorDiffY, setCursorDiffY] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [styles, setStyles] = useState({});

    // Calculando diferença de distancia do cursor para a div
    function dragStart(event: React.MouseEvent){
        
        if (!event.currentTarget.parentElement){ return }

        setCursorDiffX(event.pageX - event.currentTarget.parentElement.offsetLeft)
        setCursorDiffY(event.pageY - event.currentTarget.parentElement.offsetTop)

        setDragging(true);
        event.currentTarget.classList.add('binded')
    }

    function inDragging(event: MouseEvent){
        event.preventDefault()

        if (!dragging){ return }

        const left = event.pageX - cursorDiffX;
        const top = event.pageY - cursorDiffY;

        setStyles({
            top,
            left,
        })

    }

    function dragEnd(event: MouseEvent){

        if(dragging){
            setDragging(false);

            const draggableSquare = document.getElementsByClassName('binded')[0];
            draggableSquare.classList.remove('binded');

            const selectedSlot = Drop.getSelectedSlot(draggableSquare);

            // Se soltar fora ou caso tenha um quadrado dentro, ele volta pro que tava antes
            if (!selectedSlot || selectedSlot.children[0]){
                resetSquarePosition();
                return
            }

            // Ancora ele a um item da grid e reposiciona
            selectedSlot.appendChild(draggableSquare);
            resetSquarePosition();

            DraggableObserver.notify({
                draggable: selectedSlot.children[0],
                selectedSlot: selectedSlot
            })
            
        }
    }

    function resetSquarePosition() {
        setStyles({
            transform: 'translate(0, 0)'
        })
    }

    useEffect(() => {

    }, [cursorDiffY, cursorDiffX, dragging, styles])
    
    document.onmousemove = inDragging;
    document.onmouseup = dragEnd;

    return (
        <div id='draggableSquare' className='square' style={styles} onMouseDown={dragStart} data-type="password-square"></div>
    )
}