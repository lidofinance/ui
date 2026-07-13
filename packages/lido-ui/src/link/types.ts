import { LidoComponentProps } from '../utils/index.js'
export type { Theme } from '../theme/index.js'

export type LinkProps = LidoComponentProps<'a'> & { fadeVisited?: boolean }
