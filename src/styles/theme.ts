export interface DefaultTheme {
  color: {
    primary: string
    secondary: string
    danger: string
    warning: string
    info: string
  }
}

export const themePrincipal: DefaultTheme = {
  color: {
    primary: '#007f56',
    secondary: '#868686',
    danger: '#fe9481',
    warning: '#fcda92',
    info: '#9c8cb9'
  }
}

export const themeBlackFriday: DefaultTheme = {
  color: {
    primary: '#005500',
    secondary: '#868686',
    danger: '#bb0000',
    warning: '#dddd00',
    info: '#0000dd'
  }
}
