import Image from 'next/image'

import Flex from './Flex'
import Text from './Text'
import Spacing from './Spacing'

export default function FullPageLoader({ message }: { message?: string }) {
  return (
    <Flex
      justify="center"
      align="center"
      css={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}>
      <Flex direction="column" align="center">
        <Image
          width={120}
          src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-47-323_512.gif"
          alt=""
        />

        {message != null ? (
          <>
            <Spacing size={120} />
            <Text bold typography="t4">
              {message}
            </Text>
          </>
        ) : null}
      </Flex>
    </Flex>
  )
}
