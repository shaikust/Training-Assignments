import React, { Component } from 'react'

export class Lifecyclemethod extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor called');
        this.state = {
          count: 0
        };
      }
    
      componentDidMount() {
        console.log('Component did mount');
      }
    
      componentDidUpdate(prevProps, prevState) {
        console.log('Component did update');
        console.log('Previous state:', prevState);
        console.log('Current state:', this.state);
      }
    
      componentWillUnmount() {
        console.log('Component will unmount');
      }
    
      shouldComponentUpdate(nextProps, nextState) {
        console.log('Should component update?');
        console.log('Next props:', nextProps);
        console.log('Next state:', nextState);
        return true;
      }
    
      static getDerivedStateFromProps(nextProps, prevState) {
        console.log('Get derived state from props');
        console.log('Next props:', nextProps);
        console.log('Previous state:', prevState);
        return null;
      }
    
      getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Get snapshot before update');
        console.log('Previous props:', prevProps);
        console.log('Previous state:', prevState);
        return null;
      }
    
      handleClick = () => {
        this.setState(prevState => ({
          count: prevState.count + 1
        }));
      };
    
      render() {
        console.log('Render called');
        return (
          <div>
            <h1>Lifecycle Component</h1>
            <p>Count: {this.state.count}</p>
            <button onClick={this.handleClick}>Increment Count</button>
          </div>
        );
      }
    
}

export default Lifecyclemethod