import EventBannerAddButton from '@components/test/EventBannerAddButton'
import CardListAddButton from '@components/test/CardListAddButton'
import EventForm from '@components/test/EventForm'
import FAQAddButton from '@components/test/FAQAddButton'
import Flex from '@shared/Flex'
import Text from '@shared/Text'
import Spacing from '@shared/Spacing'
import TransactionForm from '@components/test/TransactionForm'

export default function TestPage() {
  return (
    <Flex direction="column">
      <Text bold>배너</Text>
      <EventBannerAddButton />
      <Spacing
        size={8}
        backgroundColor="gray100"
        style={{ margin: '20px 0' }}
      />

      <Text bold>카드</Text>
      <CardListAddButton />
      <Spacing
        size={8}
        backgroundColor="gray100"
        style={{ margin: '20px 0' }}
      />

      <EventForm />

      <Spacing
        size={8}
        backgroundColor="gray100"
        style={{ margin: '20px 0' }}
      />

      <Text bold>입출금 테스트</Text>
      <TransactionForm />

      <Spacing
        size={8}
        backgroundColor="gray100"
        style={{ margin: '20px 0' }}
      />

      <Text bold>FAQ 테스트</Text>
      <FAQAddButton />
    </Flex>
  )
}
