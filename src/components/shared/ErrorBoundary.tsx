import { Component, ErrorInfo, ReactNode } from 'react'

type Props = {
  children: ReactNode
  fallbackComponent?: ReactNode
}

type State = {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI

    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can use your own error logging service here
    console.log({ error, errorInfo })
  }

  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      if (this.props.fallbackComponent != null) {
        return <>{this.props.fallbackComponent}</>
      }

      // You can render any custom fallback UI
      return (
        <div>
          <h2>알 수 없는 문제가 발생했어요</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}>
            재시도
          </button>
        </div>
      )
    }

    // Return children components in case of no error

    return this.props.children
  }
}
