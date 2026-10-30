import type { ArgTypesEnhancer } from 'storybook/internal/types'

/** Runs after docgen, so only components that declare `dataTestId` get the row. */
export const testIdControl: ArgTypesEnhancer = ({ argTypes }) =>
  argTypes.dataTestId
    ? { ...argTypes, dataTestId: { ...argTypes.dataTestId, control: false } }
    : argTypes
testIdControl.secondPass = true
