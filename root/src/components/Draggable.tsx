import React, { useState, useEffect } from 'react';
import DraggableObserver from '../modules/DraggableObserver';

export default function Draggable(){
    const [cursorDiffX, setCursorDiffX] = useState(0);
    const [cursorDiffY, setCursorDiffY] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [styles, setStyles] = useState({});
    const [draggableRef] = useState(React.createRef() as React.RefObject<HTMLDivElement>)

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

    function getSquareCenterCoords(target: Element) {
        const square = target!;
        const {x: squareX, y: squareY, width: squareWidth, height: squareHeight} = square.getBoundingClientRect();
        return {
            x: squareWidth / 2 + squareX,
            y: squareHeight / 2 + squareY,
        } 
    }

    function dragEnd(){

        if(dragging){
            setDragging(false);

            const validDrop = DraggableObserver.notify({
                draggableRef,
                coords: getSquareCenterCoords(draggableRef.current!)
            })

            resetSquarePosition();
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
        <div id='draggableSquare' ref={draggableRef} className='square' style={styles} onMouseDown={dragStart} data-type="password-square"></div>
    )
}