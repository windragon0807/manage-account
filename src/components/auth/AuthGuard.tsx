import { ReactNode } from 'react'
import { useSession } from 'next-auth/react'

export default function AuthGuard({ children }: { children: ReactNode }) {
  const { status } = useSession()

  if (status === 'loading') {
    return null
  }

  return <>{children}</>
}
