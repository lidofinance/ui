import { StoryFn, Meta } from '@storybook/react'
import {
  NavigaitonButtonColor,
  NavigationButton,
  NavigationButtonProps,
  NavigationButtonVariant,
} from '.'
import { ButtonColor } from 'packages/button'

export default {
  component: NavigationButton,
  title: 'Buttons/NavigationButton',
  args: {
    variant: 'left',
    href: '',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['right', 'left', 'down'],
      control: { type: 'radio' },
    },
    color: {
      options: ['default', 'transparent'],
      control: { type: 'radio' },
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta

export const Basic: StoryFn<NavigationButtonProps> = (props) => (
  <NavigationButton {...props} />
)

export const AllStates: StoryFn<NavigationButtonProps> = () => {
  const variants: NavigationButtonVariant[] = ['left', 'right', 'down']
  const colors: ButtonColor[] = ['default', 'transparent']
  const disabledStates: boolean[] = [false, true]

  const gridContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  }

  return (
    <div style={gridContainerStyle}>
      {variants.map((variant) => (
        <div
          key={variant}
          style={{
            padding: '16px',
            border: '1px solid #eaeaea',
            borderRadius: '4px',
          }}
        >
          <h3>Variant: {variant.charAt(0).toUpperCase() + variant.slice(1)}</h3>
          {colors.map((color) => (
            <div key={color} style={{ marginBottom: '16px' }}>
              <h4>Color: {color.charAt(0).toUpperCase() + color.slice(1)}</h4>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {disabledStates.map((disabled) => (
                  <NavigationButton
                    key={`${variant}-${color}-${disabled}`}
                    variant={variant}
                    href='#'
                    color={color as NavigaitonButtonColor}
                    // this error is OK
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    disabled={disabled}
                  >
                    {disabled ? 'Disabled' : 'Enabled'}
                  </NavigationButton>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

AllStates.parameters = {
  controls: { disable: true },
  docs: {
    description: {
      story:
        'Displays all possible Navigation Button states for an easy overview.',
    },
  },
}
