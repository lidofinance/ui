import { StoryFn, Meta } from '@storybook/react'
import { Button, ButtonProps } from './Button'
import { Image, Icon } from '../icons'

export default {
  component: Button,
  title: 'Buttons/CircleButton',
  parameters: {
    docs: {
      description: {
        component:
          'Circle button variations and states. Displays all possible Circle Button states and sizes with different icon types.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta

export const AllStates: StoryFn<ButtonProps> = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    padding: '24px',
    backgroundColor: 'var(--lido-ui-color-backgrounds-surface)',
    borderRadius: '12px',
  }

  const sizeContainerStyle: React.CSSProperties = {
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

  const iconGroupStyle: React.CSSProperties = {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: '32px',
  }

  const iconTitleStyle: React.CSSProperties = {
    margin: '0 16px 0 0',
    fontSize: '16px',
    fontWeight: '500',
    color: 'var(--lido-ui-color-text-secondary)',
    minWidth: '200px',
  }

  const stateGroupStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
  }

  const stateColumnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  }

  const stateLabelStyle: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: '500',
    color: 'var(--lido-ui-color-text-tertiary)',
    textAlign: 'center',
    margin: '0',
  }

  return (
    <div style={containerStyle}>
      <div style={sizeContainerStyle}>
        <h3 style={titleStyle}>Size: L</h3>

        <div style={iconGroupStyle}>
          <h5 style={iconTitleStyle}>Default Icon</h5>
          <div style={stateGroupStyle}>
            <div style={stateColumnStyle}>
              <p style={stateLabelStyle}>Default</p>
              <Button
                shape='circle'
                size='l'
                disabled={false}
                icon={<Icon />}
              />
            </div>
            <div style={stateColumnStyle}>
              <p style={stateLabelStyle}>Active</p>
              <Button
                shape='circle'
                size='l'
                disabled={false}
                imitateActive={true}
                icon={<Icon />}
              />
            </div>
            <div style={stateColumnStyle}>
              <p style={stateLabelStyle}>Disabled</p>
              <Button shape='circle' size='l' disabled={true} icon={<Icon />} />
            </div>
            <div style={stateColumnStyle}>
              <p style={stateLabelStyle}>No Border</p>
              <Button
                shape='circle'
                size='l'
                disabled={false}
                noBorder={true}
                icon={<Icon />}
              />
            </div>
          </div>
        </div>

        {/* Colored Icons */}
        <div style={{ ...iconGroupStyle, marginBottom: '0' }}>
          <h5 style={iconTitleStyle}>Colored Icon</h5>
          <div style={stateGroupStyle}>
            <Button
              shape='circle'
              size='l'
              disabled={false}
              icon={{ icon: <Image />, isColored: true }}
            />
            <Button
              shape='circle'
              size='l'
              disabled={false}
              imitateActive={true}
              icon={{ icon: <Image />, isColored: true }}
            />
            <Button
              shape='circle'
              size='l'
              disabled={true}
              icon={{ icon: <Image />, isColored: true }}
            />
            <Button
              shape='circle'
              size='l'
              disabled={false}
              noBorder={true}
              icon={{ icon: <Image />, isColored: true }}
            />
          </div>
        </div>
      </div>

      <div style={sizeContainerStyle}>
        <h3 style={titleStyle}>Size: M</h3>

        <div style={iconGroupStyle}>
          <h5 style={iconTitleStyle}>Default Icon</h5>
          <div style={stateGroupStyle}>
            <div style={stateColumnStyle}>
              <p style={stateLabelStyle}>Default</p>
              <Button
                shape='circle'
                size='m'
                disabled={false}
                icon={<Icon />}
              />
            </div>
            <div style={stateColumnStyle}>
              <p style={stateLabelStyle}>Active</p>
              <Button
                shape='circle'
                size='m'
                disabled={false}
                imitateActive={true}
                icon={<Icon />}
              />
            </div>
            <div style={stateColumnStyle}>
              <p style={stateLabelStyle}>Disabled</p>
              <Button shape='circle' size='m' disabled={true} icon={<Icon />} />
            </div>
            <div style={stateColumnStyle}>
              <p style={stateLabelStyle}>No Border</p>
              <Button
                shape='circle'
                size='m'
                disabled={false}
                noBorder={true}
                icon={<Icon />}
              />
            </div>
          </div>
        </div>

        <div style={{ ...iconGroupStyle, marginBottom: '0' }}>
          <h5 style={iconTitleStyle}>Colored Icon</h5>
          <div style={stateGroupStyle}>
            <Button
              shape='circle'
              size='m'
              disabled={false}
              icon={{ icon: <Image />, isColored: true }}
            />
            <Button
              shape='circle'
              size='m'
              disabled={false}
              imitateActive={true}
              icon={{ icon: <Image />, isColored: true }}
            />
            <Button
              shape='circle'
              size='m'
              disabled={true}
              icon={{ icon: <Image />, isColored: true }}
            />
            <Button
              shape='circle'
              size='m'
              disabled={false}
              noBorder={true}
              icon={{ icon: <Image />, isColored: true }}
            />
          </div>
        </div>
      </div>

      <div style={sizeContainerStyle}>
        <h3 style={titleStyle}>Size: S</h3>
        <div style={iconGroupStyle}>
          <h5 style={iconTitleStyle}>Default Icon</h5>
          <div style={stateGroupStyle}>
            <div style={stateColumnStyle}>
              <p style={stateLabelStyle}>Default</p>
              <Button
                shape='circle'
                size='s'
                disabled={false}
                icon={<Icon />}
              />
            </div>
            <div style={stateColumnStyle}>
              <p style={stateLabelStyle}>Active</p>
              <Button
                shape='circle'
                size='s'
                disabled={false}
                imitateActive={true}
                icon={<Icon />}
              />
            </div>
            <div style={stateColumnStyle}>
              <p style={stateLabelStyle}>Disabled</p>
              <Button shape='circle' size='s' disabled={true} icon={<Icon />} />
            </div>
            <div style={stateColumnStyle}>
              <p style={stateLabelStyle}>No Border</p>
              <Button
                shape='circle'
                size='s'
                disabled={false}
                noBorder={true}
                icon={<Icon />}
              />
            </div>
          </div>
        </div>

        <div style={{ ...iconGroupStyle, marginBottom: '0' }}>
          <h5 style={iconTitleStyle}>Colored Icon</h5>
          <div style={stateGroupStyle}>
            <Button
              shape='circle'
              size='s'
              disabled={false}
              icon={{ icon: <Image />, isColored: true }}
            />
            <Button
              shape='circle'
              size='s'
              disabled={false}
              imitateActive={true}
              icon={{ icon: <Image />, isColored: true }}
            />
            <Button
              shape='circle'
              size='s'
              disabled={true}
              icon={{ icon: <Image />, isColored: true }}
            />
            <Button
              shape='circle'
              size='s'
              disabled={false}
              noBorder={true}
              icon={{ icon: <Image />, isColored: true }}
            />
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
      story:
        'Displays all possible Circle Button states and sizes with different icon types for easy review. Includes Default, Active, Disabled, and No Border states.',
    },
  },
}
