import type { CSSProperties } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { ContainerWidths, StorySection } from '../../.storybook/components'
import { IconInfo } from '../icons'
import { Tag } from '.'

const meta: Meta<typeof Tag> = {
  title: 'Tags & Badges/Tag',
  component: Tag,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1SFw8VIyvedXmg9s4vCinh/Interface-Design-System?node-id=4008-11565&m=dev',
    },
  },
  args: {
    variant: 'default',
    children: 'Tag',
  },
  argTypes: {
    variant: {
      options: [
        'default',
        'neutral',
        'success',
        'warning',
        'error',
        'info',
        'active',
        'action',
        'custom',
      ],
      control: { type: 'select' },
    },
    children: { control: { type: 'text' } },
    active: {
      control: { type: 'boolean' },
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'inline-radio' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

const VARIANTS = [
  'default',
  'neutral',
  'success',
  'warning',
  'error',
  'info',
  'active',
  'action',
] as const

export const Variants: Story = {
  render: () => (
    <>
      <StorySection style={{ marginBottom: '1rem' }} title={'Regular'}>
        {VARIANTS.map((variant) => (
          <Tag key={variant} variant={variant}>
            Tag
          </Tag>
        ))}
      </StorySection>
      <StorySection title={'Active '}>
        {VARIANTS.map((variant) => (
          <Tag key={`${variant}-active`} variant={variant} active>
            Tag
          </Tag>
        ))}
      </StorySection>
    </>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Every variant, then the same variants with `active` — it adds a variant-coloured border for a selected/pressed tag, independent of `variant`.',
      },
    },
  },
}

export const WithIcon: Story = {
  render: () => (
    <StorySection>
      <Tag icon={<IconInfo />}>Tag</Tag>
      <Tag icon={<IconInfo />} iconPosition='right'>
        Tag
      </Tag>
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The icon inherits the variant colour through `currentColor`. `iconPosition` picks which side it renders on.',
      },
    },
  },
}

export const Removable: Story = {
  render: () => (
    <StorySection>
      {VARIANTS.map((variant) => (
        <StorySection
          key={variant}
          style={{ flexDirection: 'column', alignItems: 'flex-start' }}
          title={variant}
        >
          <Tag variant={variant} onClose={() => undefined}>
            Tag
          </Tag>
          <Tag variant={variant} icon={<IconInfo />} onClose={() => undefined}>
            Tag
          </Tag>
          <Tag
            variant={variant}
            icon={<IconInfo />}
            iconPosition='right'
            onClose={() => undefined}
          >
            Tag
          </Tag>
        </StorySection>
      ))}
    </StorySection>
  ),

  parameters: {
    docs: {
      description: {
        story: '`onClose` renders a close button and makes the tag removable.',
      },
    },
  },
}

const LONG_LABEL = 'Distributed validator technology cluster'

export const NarrowWidths: Story = {
  render: () => (
    <ContainerWidths widths={[160, 240, 320]}>
      <StorySection
        style={{ flexDirection: 'column', alignItems: 'flex-start' }}
      >
        <Tag>{LONG_LABEL}</Tag>
        <Tag icon={<IconInfo />}>{LONG_LABEL}</Tag>
        <Tag icon={<IconInfo />} onClose={() => undefined}>
          {LONG_LABEL}
        </Tag>
        <Tag icon={<IconInfo />} iconPosition='right' onClose={() => undefined}>
          {LONG_LABEL}
        </Tag>
      </StorySection>
    </ContainerWidths>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Long labels truncate with an ellipsis; the icon and close button keep their size.',
      },
    },
  },
}

export const Interactive: Story = {
  args: {
    onClick: () => undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          '`onClick` makes the span a keyboard-operable `role="button"`; `as="button"` renders a native `<button>`, `href` a link.',
      },
    },
  },
}

const icsDemoStyle = {
  '--lido-app-ui-tag-background':
    'linear-gradient(60.6deg, #08d1ff 7.1%, #88f493 127.77%)',
  '--lido-app-ui-tag-glow': 'var(--lido-app-ui-tag-background)',
} as CSSProperties

const idvtcDemoStyle = {
  '--lido-app-ui-tag-background':
    'linear-gradient(10.4deg, #b98bff 0%, #ff7fc3 100%)',
  '--lido-app-ui-tag-glow':
    'linear-gradient(10.4deg, #c4a8ff 0%, #f7a3cc 100%)',
} as CSSProperties

const solidDemoStyle = {
  '--lido-app-ui-tag-background': '#6c5ce7',
} as CSSProperties

export const CustomColors: Story = {
  render: () => (
    <>
      <StorySection style={{ marginBottom: '1rem' }} title='Static'>
        <Tag variant='custom' style={icsDemoStyle}>
          ICS
        </Tag>
        <Tag variant='custom' style={idvtcDemoStyle}>
          IDVTC
        </Tag>
        <Tag variant='custom' style={solidDemoStyle}>
          Solid
        </Tag>
      </StorySection>
      <StorySection style={{ marginBottom: '1rem' }} title='Clickable'>
        <Tag variant='custom' style={icsDemoStyle} onClick={() => undefined}>
          ICS
        </Tag>
        <Tag variant='custom' style={idvtcDemoStyle} onClick={() => undefined}>
          IDVTC
        </Tag>
        <Tag variant='custom' style={solidDemoStyle} onClick={() => undefined}>
          Solid
        </Tag>
      </StorySection>
      <StorySection title='Active, icon, removable'>
        <Tag
          variant='custom'
          style={icsDemoStyle}
          active
          onClick={() => undefined}
        >
          ICS
        </Tag>
        <Tag variant='custom' style={idvtcDemoStyle} icon={<IconInfo />}>
          IDVTC
        </Tag>
        <Tag variant='custom' style={icsDemoStyle} onClose={() => undefined}>
          ICS
        </Tag>
      </StorySection>
    </>
  ),
  parameters: {
    controls: { disable: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/9q8Bp7XHM2XGipfpLI63s1/Operators?node-id=2078-174945&m=dev',
    },
    docs: {
      description: {
        story: `\`variant="custom"\` reads these CSS vars; they apply to nothing else. Real apps set them in their own CSS class on a wrapper component. The glow needs room: a parent with \`overflow: hidden\` clips it.

| Var | Default |
| --- | --- |
| \`--lido-app-ui-tag-background\` | \`var(--lido-app-ui-color-background-action)\`; any \`background\` value, gradients included |
| \`--lido-app-ui-tag-background-hover\` | background with 10% of the text color mixed over it |
| \`--lido-app-ui-tag-color\` | \`var(--lido-app-ui-color-text-inverse)\`; text, icon and close cross |
| \`--lido-app-ui-tag-border-color\` | \`currentcolor\`; border when \`active\` |
| \`--lido-app-ui-tag-glow\` | unset, no glow; any \`background\` value adds a blurred glow behind the tag |`,
      },
    },
  },
}
