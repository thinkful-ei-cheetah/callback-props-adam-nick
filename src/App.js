import React, { Component } from 'react';
import List from './List'
import './App.css';
import STORE from './STORE'

class App extends Component {
  state ={
    store: STORE.lists
  }
  handleClickAdd =() => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  } 
  
  handleClickDelete = (listId, cardId) =>{
    const listToDeleteFrom = STORE.lists[listId -1];
    const newItems = listToDeleteFrom.filter(id => id !== cardId)
    this.setState({
      store: newItems
    })
  }

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {STORE.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => STORE.allCards[id])}
              addToList={this.handleClickAdd}
              deleteFromList={this.handleclickDelete}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
