import 'punycode';
import React from 'react';
import renderer from 'react-test-renderer';
import GHCard from './GitHubCard';



test('renders a snapshot', () => {
  const tree = renderer.create(<GHCard />).toJSON();
  expect(tree).toMatchSnapshot();
});

