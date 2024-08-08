import { Colors } from '@kreattix/colors'

export class Theme {
  static get Sizes() {
    return {
      large: 'large',
      medium: 'medium',
      small: 'small'
    } as const
  }

  static get FontWeights() {
    return {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 800
    } as const
  }

  static get BorderRadius() {
    return {
      circle: 'circle',
      rounded: 'rounded',
      square: 'square'
    } as const
  }

  static get Colors() {
    return {
      primary: Colors.blue[500],
      secondary: Colors.blueGray[500],
      success: Colors.green[500],
      error: Colors.red[500],
      info: Colors.blue[500],
      warning: Colors.yellow[500],
      dark: Colors.blueGray[900],
      light: Colors.blueGray[100]
    } as const
  }
}
