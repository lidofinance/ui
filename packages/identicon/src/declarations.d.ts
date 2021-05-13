declare module 'react-jazzicon' {
  export function jsNumberForAddress(address: string): number
  export default class Jazzicon extends React.PureComponent {
    props: {
      seed: number
      diameter: number
      paperStyles?: React.CSSProperties
      svgStyles?: React.CSSProperties
    }
  }
}
