import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { Icon, Image } from '../icons'
import { StorybookContainer } from '../../.storybook/components/StorybookContainer'
import { StorybookSection } from '../../.storybook/components/StorybookSection'
import { StorybookGroup } from '../../.storybook/components/StorybookGroup'

const meta: Meta<typeof Input> = {
  title: 'Controls/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Placeholder text',
    size: 'l',
    type: 'text',
    error: '',
    disabled: false,
    rightDecorator: undefined,
    rightDecoratorType: 'element',
  },
  argTypes: {
    onChange: { action: 'changed' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
    size: {
      options: ['l', 'm', 's'],
      control: { type: 'radio' },
    },
    rightDecoratorType: {
      options: ['element', 'text', 'button'] as const,
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Base: Story = {
  args: {
    placeholder: 'Enter text',
  },
}

export const AllStates = () => {
  const sizeStyle: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    gap: '50px',
    marginTop: '30px',
  }

  const variantStyle: React.CSSProperties = {
    display: 'flex',
    gap: '50px',
  }

  const columnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    minWidth: '330px',
  }

  return (
    <div>
      <StorybookContainer>
        <StorybookSection title='Size: L'>
          <h1>Label</h1>
          <div style={sizeStyle}>
            <StorybookGroup title='Label'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input size='l' placeholder='Label' />
                  <Input size='l' placeholder='Label' disabled />
                  <Input size='l' placeholder='Label' error='' />
                  <Input size='l' placeholder='Label' error='Error message' />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Label+ Colored Icon'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='l'
                    placeholder='Label'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    icon={{ icon: <Image />, isColored: true }}
                    disabled
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    icon={{ icon: <Image />, isColored: true }}
                    error=''
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    icon={{ icon: <Image />, isColored: true }}
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Label+Mono Icon'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input size='l' placeholder='Label' icon={<Icon />} />
                  <Input
                    size='l'
                    placeholder='Label'
                    icon={<Icon />}
                    disabled
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    icon={<Icon />}
                    error=''
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    icon={<Icon />}
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Label+Button'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    disabled
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error=''
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Label+Button+Colored Icon'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    disabled
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error=''
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error='Error message'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Label+Button+Mono Icon'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    icon={<Icon />}
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    disabled
                    icon={<Icon />}
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error=''
                    icon={<Icon />}
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error='Error message'
                    icon={<Icon />}
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Label+Colored Icon+Description'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    disabled
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error=''
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error='Error message'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Label+Mono Icon+Description'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    icon={<Icon />}
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    disabled
                    icon={<Icon />}
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error=''
                    icon={<Icon />}
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error='Error message'
                    icon={<Icon />}
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Label+Description'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    disabled
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error=''
                  />
                  <Input
                    size='l'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
          </div>
        </StorybookSection>
        <StorybookSection title='Size: L'>
          <h1>Placeholder</h1>
          <div style={sizeStyle}>
            <StorybookGroup title='Placeholder'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    disabled
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    error=''
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Placeholder+ Colored Icon'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    icon={{ icon: <Image />, isColored: true }}
                    disabled
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    icon={{ icon: <Image />, isColored: true }}
                    error=''
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    icon={{ icon: <Image />, isColored: true }}
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Placeholder+Mono Icon'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    icon={<Icon />}
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    icon={<Icon />}
                    disabled
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    icon={<Icon />}
                    error=''
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    icon={<Icon />}
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Placeholder+Button'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    disabled
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error=''
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Placeholder+Button+Colored Icon'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    disabled
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error=''
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error='Error message'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Placeholder+Button+Mono Icon'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    icon={<Icon />}
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    disabled
                    icon={<Icon />}
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error=''
                    icon={<Icon />}
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error='Error message'
                    icon={<Icon />}
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Placeholder+Colored Icon+Description'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    disabled
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error=''
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error='Error message'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Placeholder+Mono Icon+Description'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    icon={<Icon />}
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    disabled
                    icon={<Icon />}
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error=''
                    icon={<Icon />}
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error='Error message'
                    icon={<Icon />}
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Placeholder+Description'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    disabled
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error=''
                  />
                  <Input
                    size='l'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
          </div>
        </StorybookSection>
        <StorybookSection title='Size: M'>
          <h1>Label</h1>
          <div style={sizeStyle}>
            <StorybookGroup title='Label'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input size='m' placeholder='Label' />
                  <Input size='m' placeholder='Label' disabled />
                  <Input size='m' placeholder='Label' error='' />
                  <Input size='m' placeholder='Label' error='Error message' />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Label+ Colored Icon'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='m'
                    placeholder='Label'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    icon={{ icon: <Image />, isColored: true }}
                    disabled
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    icon={{ icon: <Image />, isColored: true }}
                    error=''
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    icon={{ icon: <Image />, isColored: true }}
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Label+Mono Icon'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input size='m' placeholder='Label' icon={<Icon />} />
                  <Input
                    size='m'
                    placeholder='Label'
                    icon={<Icon />}
                    disabled
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    icon={<Icon />}
                    error=''
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    icon={<Icon />}
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Label+Button'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    disabled
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error=''
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Label+Button+Colored Icon'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    disabled
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error=''
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error='Error message'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Label+Button+Mono Icon'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    icon={<Icon />}
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    disabled
                    icon={<Icon />}
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error=''
                    icon={<Icon />}
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error='Error message'
                    icon={<Icon />}
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Label+Colored Icon+Description'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    disabled
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error=''
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error='Error message'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Label+Mono Icon+Description'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    icon={<Icon />}
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    disabled
                    icon={<Icon />}
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error=''
                    icon={<Icon />}
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error='Error message'
                    icon={<Icon />}
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Label+Description'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    disabled
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error=''
                  />
                  <Input
                    size='m'
                    placeholder='Label'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
          </div>
        </StorybookSection>
        <StorybookSection title='Size: M'>
          <h1>Placeholder</h1>
          <div style={sizeStyle}>
            <StorybookGroup title='Placeholder'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    disabled
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    error=''
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Placeholder+ Colored Icon'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    icon={{ icon: <Image />, isColored: true }}
                    disabled
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    icon={{ icon: <Image />, isColored: true }}
                    error=''
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    icon={{ icon: <Image />, isColored: true }}
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Placeholder+Mono Icon'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    icon={<Icon />}
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    icon={<Icon />}
                    disabled
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    icon={<Icon />}
                    error=''
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    icon={<Icon />}
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Placeholder+Button'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    disabled
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error=''
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Placeholder+Button+Colored Icon'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    disabled
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error=''
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error='Error message'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Placeholder+Button+Mono Icon'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    icon={<Icon />}
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    disabled
                    icon={<Icon />}
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error=''
                    icon={<Icon />}
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error='Error message'
                    icon={<Icon />}
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Placeholder+Colored Icon+Description'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    disabled
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error=''
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error='Error message'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Placeholder+Mono Icon+Description'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    icon={<Icon />}
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    disabled
                    icon={<Icon />}
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error=''
                    icon={<Icon />}
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error='Error message'
                    icon={<Icon />}
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Placeholder+Description'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    disabled
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error=''
                  />
                  <Input
                    size='m'
                    placeholder='Placeholder'
                    variant='placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
          </div>
        </StorybookSection>
        <StorybookSection title='Size: S'>
          <h1>Placeholder</h1>
          <div style={sizeStyle}>
            <StorybookGroup title='Placeholder'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input size='s' placeholder='Placeholder' />
                  <Input size='s' placeholder='Placeholder' disabled />
                  <Input size='s' placeholder='Placeholder' error='' />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Placeholder+ Colored Icon'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    icon={{ icon: <Image />, isColored: true }}
                    disabled
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    icon={{ icon: <Image />, isColored: true }}
                    error=''
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    icon={{ icon: <Image />, isColored: true }}
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Placeholder+Mono Icon'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input size='s' placeholder='Placeholder' icon={<Icon />} />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    icon={<Icon />}
                    disabled
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    icon={<Icon />}
                    error=''
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    icon={<Icon />}
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Placeholder+Button'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    disabled
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error=''
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Label+Button+Colored Icon'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    disabled
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error=''
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error='Error message'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Label+Button+Mono Icon'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    icon={<Icon />}
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    disabled
                    icon={<Icon />}
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error=''
                    icon={<Icon />}
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={{
                      children: 'Button',
                      onClick: () => console.log('Button clicked'),
                    }}
                    rightDecoratorType='button'
                    error='Error message'
                    icon={<Icon />}
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Label+Colored Icon+Description'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    disabled
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error=''
                    icon={{ icon: <Image />, isColored: true }}
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error='Error message'
                    icon={{ icon: <Image />, isColored: true }}
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Placeholder+Mono Icon+Description'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    icon={<Icon />}
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    disabled
                    icon={<Icon />}
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error=''
                    icon={<Icon />}
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error='Error message'
                    icon={<Icon />}
                  />
                </div>
              </div>
            </StorybookGroup>
            <StorybookGroup title='Placeholder+Description'>
              <div style={variantStyle}>
                <div style={columnStyle}>
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    disabled
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error=''
                  />
                  <Input
                    size='s'
                    placeholder='Placeholder'
                    rightDecorator={<span>Description</span>}
                    rightDecoratorType='element'
                    error='Error message'
                  />
                </div>
              </div>
            </StorybookGroup>
          </div>
        </StorybookSection>
      </StorybookContainer>
    </div>
  )
}

AllStates.parameters = {
  controls: { disable: true },
  docs: {
    description: {
      story: 'Displays all possible Input states for easy review.',
    },
  },
}
