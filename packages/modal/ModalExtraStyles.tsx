import styled from '../utils/styled-components-wrapper.js'

export const ModalExtraStyle = styled.div`
  margin-top: ${({ theme }) => -theme.borderRadiusesMap.xl}px;
  color: var(--lido-color-accentContrast);
  background: var(--lido-color-accent);
  padding: ${({ theme }) => theme.spaceMap.xxl}px;
  padding-top: ${({ theme }) =>
    theme.borderRadiusesMap.xl + theme.spaceMap.xxl}px;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ theme }) => theme.spaceMap.lg}px;
    padding-top: ${({ theme }) =>
      theme.borderRadiusesMap.xl + theme.spaceMap.lg}px;
  }
`
