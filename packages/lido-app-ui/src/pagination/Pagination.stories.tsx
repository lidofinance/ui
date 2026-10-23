import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer, StorySection } from '../../.storybook/components'
import { Pagination } from '.'

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    page: 1,
    pageCount: 879,
    pageSize: 10,
  },
  argTypes: {
    page: {
      description: 'Current page, 1-based — the component is controlled',
    },
    pageCount: { description: 'Total number of pages' },
    pageSize: {
      description: 'Current page size; omit to hide the "Show N Records" block',
    },
    pageSizeOptions: { description: 'Choices in the page-size selector' },
    labels: { description: 'Visible texts and `aria-label`s, for i18n' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Page-size selector on the left, page number input with previous/next controls on the right. Type a page and press Enter (or blur) to jump; out-of-range values are clamped.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: function Render(args) {
    const [page, setPage] = useState(args.page)
    const [pageSize, setPageSize] = useState(args.pageSize)
    return (
      <div style={{ width: 400 }}>
        <Pagination
          {...args}
          page={page}
          pageCount={args.pageCount ?? 879}
          pageSize={pageSize}
          onPageChange={setPage}
          onPageSizeChange={(size) => {
            setPageSize(size)
            setPage(1)
          }}
        />
      </div>
    )
  },
}

export const Variants: Story = {
  render: function Render() {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    return (
      <StoryContainer style={{ width: 400 }}>
        <StorySection title='With page size'>
          <Pagination
            page={page}
            pageCount={879}
            pageSize={pageSize}
            onPageChange={setPage}
            onPageSizeChange={setPageSize}
            style={{ width: '100%' }}
          />
        </StorySection>
        <StorySection title='Pages only'>
          <Pagination
            page={page}
            pageCount={879}
            onPageChange={setPage}
            style={{ width: '100%' }}
          />
        </StorySection>
        <StorySection title='Single page'>
          <Pagination page={1} pageCount={1} onPageChange={() => undefined} />
        </StorySection>
        <StorySection title='Custom labels'>
          <Pagination
            page={page}
            pageCount={879}
            pageSize={pageSize}
            pageSizeOptions={[5, 10, 20]}
            onPageChange={setPage}
            onPageSizeChange={setPageSize}
            labels={{ show: 'Per page', records: 'keys', of: '/' }}
            style={{ width: '100%' }}
          />
        </StorySection>
      </StoryContainer>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Without `pageSize` only the page controls render. Previous/next are disabled on the first/last page.',
      },
    },
  },
}
