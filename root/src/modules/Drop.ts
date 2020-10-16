export default {

    getSquareCenterCoords(target: Element) {
        const square = target!;
        const {x: squareX, y: squareY, width: squareWidth, height: squareHeight} = square.getBoundingClientRect();
        return {
            x: squareWidth / 2 + squareX,
            y: squareHeight / 2 + squareY,
        } 
    },
    
    getSelectedSlot(target: Element):Element | undefined {
        const gridItems = Array.from(document.getElementsByClassName('grid-item'));
        const squareCenter = this.getSquareCenterCoords(target);

        let selectedSlot;
        gridItems.forEach(gridItem => {
            const {x, y, width, height} = gridItem.getBoundingClientRect()
            
            if (x <= squareCenter.x && 
                squareCenter.x <= x + width && 
                y <= squareCenter.y && 
                squareCenter.y <= y + height
                ){
                    selectedSlot = gridItem
                }
            
        })

        return selectedSlot
    }
}