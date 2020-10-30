import React from 'react';

interface GridProps {
    children?: JSX.Element[]
}


export default function Grid(props: GridProps){

    return (
        <div className="grid-container">
            {props.children}
        </div>
    )
}