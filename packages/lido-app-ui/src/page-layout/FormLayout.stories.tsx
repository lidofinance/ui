import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Header } from '../header'
import { Input } from '../input'
import { Logo } from '../logo'
import { SectionTitle } from '../section-title'
import { Stack } from '../stack'
import { Typography } from '../typography'
import { FormLayout, Layout, Main, PageContent } from '.'

const meta: Meta<typeof FormLayout> = {
  title: 'Layout/FormLayout',
  component: FormLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    docs: {
      story: { inline: false, height: '520px' },
      description: {
        component:
          'Form on the left, 328px `aside` with the summary and CTA on the right. The aside sticks 24px below a sticky `Header` (offset via `--lido-app-ui-sticky-top`, overridable on `html`), or 24px from the top without one. Adaptivity follows the width of the layout itself (container query), not the viewport: below 720px the aside stacks under the form, so it also works next to a `Sidebar`.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Layout>
      <Main>
        <PageContent>
          <FormLayout
            asideProps={{ 'aria-label': 'Summary' }}
            aside={
              <>
                <Stack gap={8}>
                  <Typography variant='description'>Bond to add</Typography>
                  <Typography variant='amount'>2.40 ETH</Typography>
                </Stack>
                <Button fullWidth>Add bond</Button>
              </>
            }
          >
            <Stack gap={24}>
              <SectionTitle title='Add bond' />
              <Input
                label='Operator ID'
                placeholder='e.g. 142'
                description='The node operator receiving the bond.'
              />
              <Input label='Amount, ETH' placeholder='0.00' />
            </Stack>
          </FormLayout>
        </PageContent>
      </Main>
    </Layout>
  ),
}

export const LongForm: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Scroll: the summary stays pinned below the sticky `Header` instead of sliding under it.',
      },
    },
  },
  render: () => (
    <Layout>
      <Header sticky>
        <Logo href='#' variant='auto' product='Operators' />
      </Header>
      <Main>
        <PageContent>
          <FormLayout
            asideProps={{ 'aria-label': 'Summary' }}
            aside={
              <>
                <Stack gap={8}>
                  <Typography variant='description'>
                    Total bond required
                  </Typography>
                  <Typography variant='amount'>12.80 ETH</Typography>
                </Stack>
                <Stack gap={8}>
                  <Typography variant='description'>Keys to upload</Typography>
                  <Typography variant='amount'>8</Typography>
                </Stack>
                <Button fullWidth>Add keys and bond</Button>
              </>
            }
          >
            <Stack gap={24}>
              <SectionTitle
                title='Add validator keys'
                subtitle='Paste the deposit data generated for your keys.'
              />
              {Array.from({ length: 8 }, (_, i) => (
                <Input
                  key={i}
                  label={`Validator key ${i + 1}`}
                  placeholder='0x...'
                  description='96-byte BLS public key'
                />
              ))}
              <Input label='Bond, ETH' placeholder='1.60' />
            </Stack>
          </FormLayout>
        </PageContent>
      </Main>
    </Layout>
  ),
}

export const NarrowContainer: Story = {
  parameters: {
    storyBackground: 'page',
    docs: {
      description: {
        story:
          'The wide viewport does not matter: the 560px parent is narrower than 720px, so the aside stacks.',
      },
    },
  },
  render: () => (
    <div style={{ width: 560, padding: 20 }}>
      <FormLayout
        asideProps={{ 'aria-label': 'Summary' }}
        aside={<Button fullWidth>Add bond</Button>}
      >
        <Stack gap={24}>
          <SectionTitle title='Add bond' />
          <Input label='Amount, ETH' placeholder='0.00' />
        </Stack>
      </FormLayout>
    </div>
  ),
}

export const Mobile: Story = {
  globals: { viewport: { value: 'px375' } },
  render: Basic.render,
}
