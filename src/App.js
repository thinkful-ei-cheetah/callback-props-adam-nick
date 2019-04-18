import React, { Component } from 'react';
import List from './List'
import './App.css';
import STORE from './STORE'

class App extends Component {
  state ={
    lists: [...STORE.lists],
    allCards: {...STORE.allCards}
  }

  handleClickAdd =(listId) => {
    const newRandomCard = () =>{
      console.log('handleClickAdd');
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }
    const newCard = newRandomCard();
    const newAllCards = {
      ...this.state.allCards,
      [newCard.id]: newCard
    }
    const newLists = this.state.lists.map(list => 
      list.id !== listId ? list : {...list, cardIds: [...list.cardIds, newCard.id]}
    );
    console.log(newAllCards)
    this.setState({
      lists: newLists,
      allCards: newAllCards
    })

  }
  
  handleClickDelete = (cardId) =>{
    console.log('handleClickDelete ' + cardId);
    const newLists = this.state.lists.map( list =>
      // list.id !== listId ? 
      //   list 
      // : 
      // { ...list, cardIds: list.cardIds.filter(id => id !== cardId)}
      Object.assign(list, {cardIds: list.cardIds.filter(id => id !== cardId)})
    );

    const newAllCards = this.omit(this.state.allCards, cardId);
    console.log(newAllCards);
    this.setState({
      lists: newLists,
      allCards: newAllCards
    })
  }

  // Provided by Curriculum
  // Used to omit key:value pairs from an Object
  omit (obj, keyToOmit) {
    return Object.entries(obj).reduce(
      (newObj, [key, value]) =>
        key === keyToOmit ? newObj : { ...newObj, [key]: value },
      {}
    );
  }

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              addToList={(listId) => this.handleClickAdd(list.id)}
              deleteFromList={(cardId) => this.handleClickDelete(cardId)}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
