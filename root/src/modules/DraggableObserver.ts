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
        this.observers.forEach(observer => observer(data))
    }
}

interface NotifyData {
    draggable: Element,
    selectedSlot: Element
}

export default new DraggableObservable()
