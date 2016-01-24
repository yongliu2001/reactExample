/*
Component Life Cycle: Mounting
  -getDefaultProps
  -getInitialState
  -componentWillMount
  -render
  -componentDidMount
Component Life Cycle: Updating
  -componentWillReceiveProps
  -shouldComponentUpdate
  -compenentWillUpdate
  -render
  -componentDidUpdate
Component Life Cycle: Unmounting
  -componentWillUnmount
*/

React.render(
  <Board count={50}/>,
  document.getElementById('react-container')
);
