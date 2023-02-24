import React, { ErrorInfo, ReactElement } from 'react';
import { isEmpty } from 'lodash';

interface MyProps {
  children: ReactElement;
}

interface MyState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error,
      errorInfo
    });
  }

  render(): ReactElement {
    if (isEmpty(this.state.errorInfo)) return this.props.children;

    return (
      <div>
        <h2>An Error Has Occurred</h2>
        <details>
          {!isEmpty(this.state.error) && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details>
      </div>
    );
  }
}

export default ErrorBoundary;
