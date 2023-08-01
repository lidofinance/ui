declare module 'react-jazzicon' {
  import { CSSProperties, PureComponent } from 'react'

  export function jsNumberForAddress(address: string): number
  export default class Jazzicon extends PureComponent {
    props: {
      seed: number
      diameter: number
      paperStyles?: CSSProperties
      svgStyles?: CSSProperties
    }
  }
}
