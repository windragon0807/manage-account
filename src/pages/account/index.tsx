import dynamic from 'next/dynamic'

import withAuth from '@components/shared/hocs/withAuth'

const Transactions = dynamic(() => import('@components/account/Transactions'))

function AccountPage() {
  return (
    <div>
      <Transactions />
    </div>
  )
}

export default withAuth(AccountPage)
