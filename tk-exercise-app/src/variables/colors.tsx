const color = {
  white: '#fff',
  black: '#000',
  transparent: 'rgba(255, 255, 255, 0)',
  slate: '#545C6C',
  madrugada: '#1D2C3C',
}

export type ColorName = keyof typeof color

export type Color = typeof color[ColorName]

export default color