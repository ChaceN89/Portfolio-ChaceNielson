/**
 * @file ErrorBoundary.jsx
 * @module ErrorBoundary
 * @desc A React error boundary component that catches JavaScript errors anywhere in its child component tree.
 * - Displays a fallback `SplashScreen` with an error message instead of crashing the whole app.
 * - Logs errors and component file information for debugging.
 * - In production, it hides technical details from users.
 * 
 * @see {@link https://reactjs.org/docs/error-boundaries.html | React Error Boundaries}
 * 
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 16, 2025 by Chace Nielson
 */
import React, { Component } from 'react';
import SplashScreen from '../uiElements/splashScreen/SplashScreen';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorLocation: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by Error Boundary:", error, info);

    const stackLines = info.componentStack.split("\n");
    const fileLine = stackLines.find(line => line.includes("at "));
    const errorLocation = fileLine ? fileLine.trim().replace(/^at\s/, '') : "Unknown location";

    this.setState({ errorLocation });
  }

  getErrorInfo() {
    const isDevelopment = import.meta.env.VITE_ENVIRONMENT === 'development';
    const errorText = isDevelopment
      ? this.state.error?.toString()
      : "Something went wrong. Please try again later.";

    return {
      errorText,
      errorLocation: isDevelopment ? this.state.errorLocation : null
    };
  }

  render() {
    if (this.state.hasError) {
      return <SplashScreen errorInfo={this.getErrorInfo()}/>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
