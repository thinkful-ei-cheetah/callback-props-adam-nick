import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import List from './List'
import STORE from '../STORE'

describe('List Component', () => {
  const testCards = [
    { id: 'a', title: 'First card', content: 'lorem ipsum' },
    { id: 'b', title: 'Second card', content: 'lorem ipsum' },
    { id: 'c', title: 'Third card', content: 'lorem ipsum' },
  ];
  
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<List cards={testCards}/>, div);

    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI correctly', () => {
    const tree = renderer
      .create(
        <List 
          key={'test_id'}
          header={'Test Header'}
          cards={testCards} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});