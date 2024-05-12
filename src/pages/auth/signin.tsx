import Image from 'next/image'
import {
  getProviders,
  LiteralUnion,
  ClientSafeProvider,
  signIn,
} from 'next-auth/react'
import { BuiltInProviderType } from 'next-auth/providers'
import { css } from '@emotion/react'

import Flex from '@shared/Flex'
import Button from '@shared/Button'
import Spacing from '@shared/Spacing'

export default function SigninPage({
  providers,
}: {
  providers: Record<LiteralUnion<BuiltInProviderType>, ClientSafeProvider>
}) {
  return (
    <div>
      <Spacing size={100} />
      <Flex direction="column" align="center">
        <Image
          src="https://cdn0.iconfinder.com/data/icons/business-and-management-flat-8/24/PROFILE_profile_picture_profile_icon_user_profile-512.png"
          alt=""
          width={100}
          height={100}
        />

        <Spacing size={80} />
        <ul>
          {Object.values(providers).map(provider => (
            <li key={provider.id}>
              <Button
                weak
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                css={loginButtonStyles}>
                <Image
                  src={OAuthIcon[provider.name]}
                  alt=""
                  width={20}
                  height={20}
                />
                {provider.name} Login
              </Button>
            </li>
          ))}
        </ul>
      </Flex>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

const loginButtonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

const OAuthIcon = {
  Google:
    'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648777274/noticon/uupi5ephlcx4f82axldc.png',
} as { [key: string]: string }
