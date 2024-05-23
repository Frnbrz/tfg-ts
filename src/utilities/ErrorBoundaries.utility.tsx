import React from 'react'

interface Props {
  children: React.ReactNode
  fallbackComponent: React.ReactNode
  resetCondition?: unknown
  error?: boolean
}

interface State {
  hasError: boolean
  resetCondition?: unknown
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, resetCondition: props.resetCondition }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.resetCondition !== state.resetCondition) {
      return { hasError: false, resetCondition: props.resetCondition }
    }
    return null
  }

  componentDidCatch() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError || this.props.error) {
      return this.props.fallbackComponent
    }

    return this.props.children
  }
}

export default ErrorBoundary