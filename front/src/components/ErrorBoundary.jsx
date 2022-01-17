import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      errorInfo
    })
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2 style={{color: 'red'}}>Something went wrong.</h2>
        </div>
      );
    }
    return this.props.children;
  }  
}

export default ErrorBoundary;