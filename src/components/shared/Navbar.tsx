import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image'
import { useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import Flex from '@shared/Flex'
import Button from '@shared/Button'
import { colors } from '@styles/colorPalette'

export default function Navbar() {
  const { data: session } = useSession()
  const router = useRouter()
  const showSignButton = ['/auth/signin'].includes(router.pathname) === false

  const renderButton = useCallback(() => {
    if (session != null) {
      return (
        <Link href="/my">
          <Image
            src={session.user?.image ?? ''}
            alt="유저이미지"
            width={40}
            height={40}
            style={{ borderRadius: '50%' }}
          />
        </Link>
      )
    }

    if (showSignButton) {
      return (
        <Link href="/auth/signin">
          <Button>로그인/회원가입</Button>
        </Link>
      )
    }

    return null
  }, [session, showSignButton])

  return (
    <Flex justify="space-between" align="center" css={navbarStyles}>
      <Link href="/">
        <LogoBox>
          <Image
            src="https://cdn0.iconfinder.com/data/icons/business-and-management-flat-8/24/PROFILE_profile_picture_profile_icon_user_profile-512.png"
            alt=""
            width={35}
            height={35}
          />
        </LogoBox>
      </Link>
      {renderButton()}
    </Flex>
  )
}

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const navbarStyles = css`
  padding: 10px 24px;
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: 10;
  border-bottom: 1px solid ${colors.gray100};
`
