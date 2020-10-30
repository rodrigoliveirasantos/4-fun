import React, { useState, useEffect } from 'react';
import DraggableObserver from '../modules/DraggableObserver';

interface DroppableProps{
    children?: JSX.Element,
    id?: string,
}

interface NotifyData {
    draggableRef: React.RefObject<HTMLDivElement>,
    coords: {
        x: number,
        y: number
    }
}

export default function Droppable(props: DroppableProps){
    const [droppableRef, setDroppableRef] = useState(React.createRef() as React.RefObject<HTMLDivElement>)
    

    function handleDrop(data: NotifyData){
        const draggableNode = data.draggableRef.current!;
        const droppableNode = droppableRef.current!;

        const draggableCenter = data.coords;
        const {x, y, width, height} = droppableNode.getBoundingClientRect()

        if (
            draggableCenter.x >= x  &&
            draggableCenter.x <= x + width &&
            draggableCenter.y >= y &&
            draggableCenter.y <= y + height
        ) {
            droppableNode.appendChild( draggableNode )
            draggableNode.classList.remove('binded');
            
            return true
        }
        
        return false
    }

    useEffect(() => {
        DraggableObserver.subscribe(handleDrop)
    })

    return(
        <div ref={droppableRef} className='grid-item'>
            {props.children}
        </div>
    )
}
