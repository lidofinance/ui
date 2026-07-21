import styled from '../utils/styled-components-wrapper.js'
import { IdenticonBadge } from '../identicon/index.js'

export const AddressBadgeStyle = styled(IdenticonBadge)`
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  & > * {
    flex-shrink: 0;
  }

  & > :first-child {
    flex-shrink: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
