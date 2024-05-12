import Image from 'next/image'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

import withAuth from '@shared/hocs/withAuth'
import Flex from '@shared/Flex'
import Spacing from '@shared/Spacing'
import Button from '@shared/Button'
import ListRow from '@shared/ListRow'

function MyPage() {
  const navigate = useRouter()

  return (
    <div>
      <Spacing size={60} />
      <Flex direction="column" justify="center" align="center">
        <Image
          src="https://cdn0.iconfinder.com/data/icons/business-and-management-flat-8/24/PROFILE_profile_picture_profile_icon_user_profile-512.png"
          alt=""
          width={100}
          height={100}
        />
        <Spacing size={40} />
        <Button onClick={() => signOut({ callbackUrl: '/' })}>로그아웃</Button>
      </Flex>

      <Spacing
        size={8}
        backgroundColor="gray100"
        style={{ margin: '20px 0' }}
      />
      <ul>
        <ListRow
          contents={<ListRow.Texts title="약관" subTitle="약관목록 및 철회" />}
          withArrow
          onClick={() => {
            navigate.push('/settings/terms')
          }}
        />
      </ul>
    </div>
  )
}

export default withAuth(MyPage)
