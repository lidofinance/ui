import { LidoComponentProps } from '../utils'
export type { Theme } from '../theme'

export type LinkProps = LidoComponentProps<'a'> & { fadeVisited?: boolean }
