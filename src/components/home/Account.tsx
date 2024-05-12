import Image from 'next/image'
import Link from 'next/link'
import { useCallback } from 'react'
import { useRouter } from 'next/router'

import Flex from '@shared/Flex'
import Text from '@shared/Text'
import Button from '@shared/Button'
import Spacing from '@shared/Spacing'
import useAccount from '@hooks/useAccount'
import useUser from '@hooks/useUser'
import addDelimiter from '@utils/addDelimiter'
import { useAlertContext } from '@contexts/AlertContext'

export default function Account() {
  const { data: account } = useAccount()
  const { open } = useAlertContext()
  const navigate = useRouter()

  const user = useUser()

  const handleCheck = useCallback(() => {
    if (user == null) {
      open({
        title: '로그인이 필요한 기능이에요',
        description:
          '정확한 신용정보를 확인하기 위해 로그인을 먼저 진행해주세요',
        onButtonClick: () => {
          navigate.push('/auth/signin')
        },
      })

      return
    }

    navigate.push('/account/new')
  }, [user, navigate, open])

  // 계좌를 보유 중이지 않을 때
  if (account == null) {
    return (
      <div style={{ padding: 24 }}>
        <Flex justify="space-between">
          <Flex direction="column">
            <Text bold style={{ whiteSpace: 'pre-wrap' }}>
              {`계좌 개설이\n더 쉽고 빨라졌어요`}
            </Text>
            <Spacing size={8} />
            <Button onClick={handleCheck}>3분 만에 개설하기</Button>
          </Flex>
          <Image
            src="https://cdn4.iconfinder.com/data/icons/business-and-finance-colorful-free-hand-drawn-set/100/money_dollars-512.png"
            alt=""
            width={80}
            height={80}
          />
        </Flex>
      </div>
    )
  }

  if (account.status === 'READY') {
    return (
      <div style={{ padding: 24 }}>
        <Flex justify="space-between">
          <Flex direction="column">
            <Text bold style={{ whiteSpace: 'pre-wrap' }}>
              계좌개설 심사중입니다.
            </Text>
          </Flex>
          <Image
            src="https://cdn4.iconfinder.com/data/icons/business-and-finance-colorful-free-hand-drawn-set/100/money_dollars-512.png"
            alt=""
            width={80}
            height={80}
          />
        </Flex>
      </div>
    )
  }

  return (
    <div style={{ padding: 24 }}>
      <Flex justify="space-between" align="center">
        <Flex direction="column">
          <Text typography="t6" color="gray600">
            {user?.name} 회원님의 자산
          </Text>
          <Spacing size={2} />
          <Text typography="t3" bold>
            {addDelimiter(account.balance)}원
          </Text>
        </Flex>
        <Link href="/account">
          <Button>분석</Button>
        </Link>
      </Flex>
    </div>
  )
}
