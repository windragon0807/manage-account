import { ComponentType, ReactNode } from 'react'
import ErrorBoundary from '@shared/ErrorBoundary'

export default function withErrorBoundary<Props = Record<string, never>>(
  WrappedComponent: ComponentType<Props>,
  options: { fallback: ReactNode },
) {
  return function WrapErrorBoundary(props: Props) {
    return (
      <ErrorBoundary fallbackComponent={options.fallback}>
        <WrappedComponent {...(props as any)} />
      </ErrorBoundary>
    )
  }
}
