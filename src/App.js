import React, { Component } from 'react'
import TodoItem from './Components/TodoItem/TodoItem'
import AddItem from './Components/AddItem/AddItem'
import './App.css'
class App extends Component {
  state = {
    items: [
      { id: 1, name: "sara", age: 22 },
      { id: 3, name: "dana", age: 19 },
      { id: 2, name: "nedal", age: 17 }
    ]
  }
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items
    items.push(item);
    this.setState(items);
  }
  deleteItem = (id) => {
    //method 1
    // let items = this.state.items;
    // let i = items.findIndex(item => item.id === id);
    // items.splice(i, 1);
    // this.setState(items);

    //method 2
    let items = this.state.items.filter(item => {
      return item.id !== id;
    })
    this.setState({ items });


  }
  render() {
    return (
      <div className="App container" >
        <h1 className="text-center">
          Todo List
        </h1>
        <TodoItem items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
