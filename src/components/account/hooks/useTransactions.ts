import { useInfiniteQuery } from 'react-query'

import { getTransactions } from '@remote/transaction'
import useUser from '@hooks/useUser'
import { TransactionFilterType } from '@models/transaction'

export default function useTransactions({
  suspense,
  filter,
}: { suspense?: boolean; filter?: TransactionFilterType } = {}) {
  const user = useUser()

  return useInfiniteQuery(
    ['transactions', user?.id, filter],
    ({ pageParam }) =>
      getTransactions({ userId: user?.id as string, pageParam, filter }),
    {
      getNextPageParam: snapshot => snapshot.lastVisible,
      suspense,
    },
  )
}
