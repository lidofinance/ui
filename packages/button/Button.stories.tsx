import { StoryFn, Meta } from '@storybook/react'
import { Button, ButtonProps } from './Button'
import { Image, Icon } from '../icons'

export default {
  component: Button,
  title: 'Buttons/Button',
  args: {
    children: 'Text',
    color: 'primary',
    size: 'l',
    shape: 'oval',
    disabled: false,
    icon: false,
    loading: false,
    withArrow: false,
    imitateActive: false,
    noBorder: false,
  },
  argTypes: {
    onClick: { action: 'clicked' },
    color: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['s', 'm', 'l'],
      control: { type: 'radio' },
    },
    shape: {
      options: ['oval', 'circle'],
      control: { type: 'radio' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    icon: {
      control: { type: 'boolean' },
    },
    withArrow: {
      control: { type: 'boolean' },
    },
    imitateActive: {
      control: { type: 'boolean' },
    },
    noBorder: {
      control: { type: 'boolean' },
    },
  },
  decorators: [
    (Story, context) => {
      const icon = context.args.icon ? <Image /> : null
      return <Story {...context} args={{ ...context.args, icon }} />
    },
  ],
  tags: ['autodocs'],
} satisfies Meta

export const Basic: StoryFn<ButtonProps> = (props) => <Button {...props} />

export const AllStates: StoryFn<ButtonProps> = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    padding: '24px',
    borderRadius: '12px',
  }

  const sectionStyle: React.CSSProperties = {
    padding: '32px',
    border: '1px solid var(--lido-ui-color-borders-default)',
    borderRadius: '12px',
    backgroundColor: 'var(--lido-ui-color-backgrounds-cards)',
    boxShadow: '0 2px 8px var(--lido-ui-color-borders-default)',
  }

  const titleStyle: React.CSSProperties = {
    margin: '0 0 24px 0',
    fontSize: '20px',
    fontWeight: '600',
    color: 'var(--lido-ui-color-text-primary)',
  }

  const colorGroupStyle: React.CSSProperties = {
    marginBottom: '32px',
  }

  const colorTitleStyle: React.CSSProperties = {
    margin: '0 0 16px 0',
    fontSize: '16px',
    fontWeight: '500',
    color: 'var(--lido-ui-color-text-secondary)',
  }

  const buttonGroupStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    alignItems: 'center',
  }

  return (
    <div style={containerStyle}>
      {/* Size: L */}
      <div style={sectionStyle}>
        <h3 style={titleStyle}>Size: L</h3>

        {/* Color: primary */}
        <div style={colorGroupStyle}>
          <h5 style={colorTitleStyle}>Color: Primary</h5>
          <div style={buttonGroupStyle}>
            <Button
              color='primary'
              size='l'
              shape='oval'
              disabled={false}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='primary'
              size='l'
              shape='oval'
              disabled={false}
              withArrow={true}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='primary'
              size='l'
              shape='oval'
              disabled={false}
              icon={{ icon: <Image />, isColored: true }}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='primary'
              size='l'
              shape='oval'
              disabled={false}
              icon={<Icon />}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='primary'
              size='l'
              shape='oval'
              disabled={true}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='primary'
              size='l'
              shape='oval'
              disabled={true}
              withArrow={true}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='primary'
              size='l'
              shape='oval'
              disabled={true}
              icon={{ icon: <Image />, isColored: true }}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='primary'
              size='l'
              shape='oval'
              disabled={true}
              icon={<Icon />}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
          </div>
        </div>

        {/* Color: secondary */}
        <div style={colorGroupStyle}>
          <h5 style={colorTitleStyle}>Color: Secondary</h5>
          <div style={buttonGroupStyle}>
            <Button
              color='secondary'
              size='l'
              shape='oval'
              disabled={false}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='secondary'
              size='l'
              shape='oval'
              disabled={false}
              withArrow={true}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='secondary'
              size='l'
              shape='oval'
              disabled={false}
              icon={{ icon: <Image />, isColored: true }}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='secondary'
              size='l'
              shape='oval'
              disabled={false}
              icon={<Icon />}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='secondary'
              size='l'
              shape='oval'
              disabled={true}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='secondary'
              size='l'
              shape='oval'
              disabled={true}
              withArrow={true}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='secondary'
              size='l'
              shape='oval'
              disabled={true}
              icon={{ icon: <Image />, isColored: true }}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='secondary'
              size='l'
              shape='oval'
              disabled={true}
              icon={<Icon />}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
          </div>
        </div>

        {/* Color: tertiary */}
        <div style={{ marginBottom: '0' }}>
          <h5 style={colorTitleStyle}>Color: Tertiary</h5>
          <div style={buttonGroupStyle}>
            <Button
              color='tertiary'
              size='l'
              shape='oval'
              disabled={false}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='tertiary'
              size='l'
              shape='oval'
              disabled={false}
              withArrow={true}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='tertiary'
              size='l'
              shape='oval'
              disabled={false}
              icon={{ icon: <Image />, isColored: true }}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='tertiary'
              size='l'
              shape='oval'
              disabled={false}
              icon={<Icon />}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='tertiary'
              size='l'
              shape='oval'
              disabled={true}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='tertiary'
              size='l'
              shape='oval'
              disabled={true}
              withArrow={true}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='tertiary'
              size='l'
              shape='oval'
              disabled={true}
              icon={{ icon: <Image />, isColored: true }}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='tertiary'
              size='l'
              shape='oval'
              disabled={true}
              icon={<Icon />}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
          </div>
        </div>
      </div>

      {/* Size: M */}
      <div style={sectionStyle}>
        <h3 style={titleStyle}>Size: M</h3>

        {/* Color: primary */}
        <div style={colorGroupStyle}>
          <h5 style={colorTitleStyle}>Color: Primary</h5>
          <div style={buttonGroupStyle}>
            <Button
              color='primary'
              size='m'
              shape='oval'
              disabled={false}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='primary'
              size='m'
              shape='oval'
              disabled={false}
              withArrow={true}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='primary'
              size='m'
              shape='oval'
              disabled={false}
              icon={{ icon: <Image />, isColored: true }}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='primary'
              size='m'
              shape='oval'
              disabled={false}
              icon={<Icon />}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='primary'
              size='m'
              shape='oval'
              disabled={true}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='primary'
              size='m'
              shape='oval'
              disabled={true}
              withArrow={true}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='primary'
              size='m'
              shape='oval'
              disabled={true}
              icon={{ icon: <Image />, isColored: true }}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='primary'
              size='m'
              shape='oval'
              disabled={true}
              icon={<Icon />}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
          </div>
        </div>

        {/* Color: secondary */}
        <div style={colorGroupStyle}>
          <h5 style={colorTitleStyle}>Color: Secondary</h5>
          <div style={buttonGroupStyle}>
            <Button
              color='secondary'
              size='m'
              shape='oval'
              disabled={false}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='secondary'
              size='m'
              shape='oval'
              disabled={false}
              withArrow={true}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='secondary'
              size='m'
              shape='oval'
              disabled={false}
              icon={{ icon: <Image />, isColored: true }}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='secondary'
              size='m'
              shape='oval'
              disabled={false}
              icon={<Icon />}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='secondary'
              size='m'
              shape='oval'
              disabled={true}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='secondary'
              size='m'
              shape='oval'
              disabled={true}
              withArrow={true}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='secondary'
              size='m'
              shape='oval'
              disabled={true}
              icon={{ icon: <Image />, isColored: true }}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='secondary'
              size='m'
              shape='oval'
              disabled={true}
              icon={<Icon />}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
          </div>
        </div>

        {/* Color: tertiary */}
        <div style={{ marginBottom: '0' }}>
          <h5 style={colorTitleStyle}>Color: Tertiary</h5>
          <div style={buttonGroupStyle}>
            <Button
              color='tertiary'
              size='m'
              shape='oval'
              disabled={false}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='tertiary'
              size='m'
              shape='oval'
              disabled={false}
              withArrow={true}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='tertiary'
              size='m'
              shape='oval'
              disabled={false}
              icon={{ icon: <Image />, isColored: true }}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='tertiary'
              size='m'
              shape='oval'
              disabled={false}
              icon={<Icon />}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='tertiary'
              size='m'
              shape='oval'
              disabled={true}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='tertiary'
              size='m'
              shape='oval'
              disabled={true}
              withArrow={true}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='tertiary'
              size='m'
              shape='oval'
              disabled={true}
              icon={{ icon: <Image />, isColored: true }}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='tertiary'
              size='m'
              shape='oval'
              disabled={true}
              icon={<Icon />}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
          </div>
        </div>
      </div>

      {/* Size: s */}
      <div style={sectionStyle}>
        <h3 style={titleStyle}>Size: S</h3>

        {/* Color: primary */}
        <div style={colorGroupStyle}>
          <h5 style={colorTitleStyle}>Color: Primary</h5>
          <div style={buttonGroupStyle}>
            <Button
              color='primary'
              size='s'
              shape='oval'
              disabled={false}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='primary'
              size='s'
              shape='oval'
              disabled={false}
              withArrow={true}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='primary'
              size='s'
              shape='oval'
              disabled={false}
              icon={{ icon: <Image />, isColored: true }}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='primary'
              size='s'
              shape='oval'
              disabled={false}
              icon={<Icon />}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='primary'
              size='s'
              shape='oval'
              disabled={true}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='primary'
              size='s'
              shape='oval'
              disabled={true}
              withArrow={true}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='primary'
              size='s'
              shape='oval'
              disabled={true}
              icon={{ icon: <Image />, isColored: true }}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='primary'
              size='s'
              shape='oval'
              disabled={true}
              icon={<Icon />}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
          </div>
        </div>

        {/* Color: secondary */}
        <div style={colorGroupStyle}>
          <h5 style={colorTitleStyle}>Color: Secondary</h5>
          <div style={buttonGroupStyle}>
            <Button
              color='secondary'
              size='s'
              shape='oval'
              disabled={false}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='secondary'
              size='s'
              shape='oval'
              disabled={false}
              withArrow={true}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='secondary'
              size='s'
              shape='oval'
              disabled={false}
              icon={{ icon: <Image />, isColored: true }}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='secondary'
              size='s'
              shape='oval'
              disabled={false}
              icon={<Icon />}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='secondary'
              size='s'
              shape='oval'
              disabled={true}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='secondary'
              size='s'
              shape='oval'
              disabled={true}
              withArrow={true}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='secondary'
              size='s'
              shape='oval'
              disabled={true}
              icon={{ icon: <Image />, isColored: true }}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='secondary'
              size='s'
              shape='oval'
              disabled={true}
              icon={<Icon />}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
          </div>
        </div>

        {/* Color: tertiary */}
        <div style={{ marginBottom: '0' }}>
          <h5 style={colorTitleStyle}>Color: Tertiary</h5>
          <div style={buttonGroupStyle}>
            <Button
              color='tertiary'
              size='s'
              shape='oval'
              disabled={false}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='tertiary'
              size='s'
              shape='oval'
              disabled={false}
              withArrow={true}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='tertiary'
              size='s'
              shape='oval'
              disabled={false}
              icon={{ icon: <Image />, isColored: true }}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='tertiary'
              size='s'
              shape='oval'
              disabled={false}
              icon={<Icon />}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='tertiary'
              size='s'
              shape='oval'
              disabled={true}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='tertiary'
              size='s'
              shape='oval'
              disabled={true}
              withArrow={true}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='tertiary'
              size='s'
              shape='oval'
              disabled={true}
              icon={{ icon: <Image />, isColored: true }}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
            <Button
              color='tertiary'
              size='s'
              shape='oval'
              disabled={true}
              icon={<Icon />}
              withArrow={false}
              loading={false}
            >
              Button text
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

AllStates.parameters = {
  controls: { disable: true },
  docs: {
    description: {
      story: 'Displays all possible Button states for easy review.',
    },
  },
}
