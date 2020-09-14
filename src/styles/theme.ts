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
    primary: '#0540F2',
    secondary: '#3D6AF2',
    danger: '#F24130',
    warning: '#F2E205',
    info: '#02732A'
  }
}
