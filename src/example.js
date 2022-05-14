const store = {
    state: {
        event: [],
    },


    listeners: [],
    notify() {
        this.listeners.forEach(listener => listener(this.state));
    },

    get event(){
        return this.state.event;
    },

    set event(newTodos){
      this.state.todos = newTodos;
      this.notify();
    }

}

const subscribe =(listener) =>{
    sotre.listeners.push(listener);
}