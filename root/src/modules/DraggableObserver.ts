// Isso aqui é apenas um protótipo.

class DraggableObservable {
    observers:Function[] = []

    subscribe(observer: Function) {
        this.observers.push(observer)
    }

    unsubscribe(observer: Function) {
        this.observers = this.observers.filter(obs => obs !== observer)
    }

    notify(data: NotifyData){
        const dropSuccess = this.observers.some(observer => observer(data))
        return dropSuccess
    }
}

interface NotifyData {
    draggableRef: React.RefObject<HTMLDivElement>,
    coords: {
        x: number,
        y: number
    }
}

export default  new DraggableObservable()

