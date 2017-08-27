const React = require('react');
const renderer = require('react-test-renderer');
const Thing = require('../Thing');

test('Thing renders', () => {
  const component = renderer.create(
    <Thing />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
