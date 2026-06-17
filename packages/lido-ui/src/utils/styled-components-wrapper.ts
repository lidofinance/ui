// Styled Components v5 has issues with ESM modules:
// https://github.com/styled-components/styled-components/issues/115
// https://github.com/rollup/rollup/issues/4438
// It can be solved by using Styled Components v6,
// but there was a decision to use this wrapper instead during this update:
// https://github.com/lidofinance/ui/pull/460

import _styled, { StyledInterface } from 'styled-components'

// @ts-expect-error Property 'default' does not exist on type 'StyledInterface'.
const styled: StyledInterface = _styled.default || _styled

export * from 'styled-components'
export default styled
