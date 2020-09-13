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
    primary: '#007F56',
    secondary: '#868686',
    danger: '#FE9481',
    warning: '#FCDA92',
    info: '#9C8CB9'
  }
}

export const themeBlackFriday: DefaultTheme = {
  color: {
    primary: '#005500',
    secondary: '#868686',
    danger: '#BB0000',
    warning: '#DDDD00',
    info: '#0000DD'
  }
}
