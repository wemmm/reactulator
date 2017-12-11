import React from 'react';
import ReactDOM from 'react-dom';
import Frame from './Frame';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Frame />, div);
});

it('contains specific text', () => {
  const component = renderer.create(
    <Frame />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
