const mainColors = {
  Sunglo: '#E06379',
  BlueZodiac: '#112340',
  RegentGray: '#7D8797',
  Black: '#000000',
  White: '#ffffff',
  Mercury: '#E9E9E9',
};

export const colors = {
  primary: mainColors.Sunglo,
  secondary: mainColors.BlueZodiac,
  white: mainColors.White,
  black: mainColors.Black,
  text: {
    primary: mainColors.BlueZodiac,
    secondary: mainColors.RegentGray,
  },
  button: {
    primary: {
      background: mainColors.Sunglo,
      text: mainColors.White,
    },
    secondary: {
      background: mainColors.White,
      text: mainColors.BlueZodiac,
    },
  },
  border: mainColors.Mercury,
};
