import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Card from './Card';

describe('Card Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Card />, div);

    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the UI correctly', () => {
    const tree = renderer
      .create(<Card title="Test Card" content="This is a test card" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
});