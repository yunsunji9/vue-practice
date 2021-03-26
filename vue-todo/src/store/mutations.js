const addOneItem = (state, todoItem) => {
    const obj = {completed: false, item: todoItem};
    localStorage.setItem(todoItem, JSON.stringify(obj)); 
    state.todoItems.push(obj);
};
const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
};
const toggleOneItem = (state, payload) => {
    const { todoItem, index } = payload;
    
    state.todoItems[index].completed = !state.todoItems[index].completed;
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
};
const removeAllItem = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, removeAllItem };