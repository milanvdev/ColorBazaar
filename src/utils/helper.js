import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export const generateInitialId = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const initialCounter = '000000000'; // 🔹 Now counter starts from 000000000
  return `${year}${month}${day}${initialCounter}`;
};

export const incrementLastPart = oldId => {
  const fixedPart = oldId.slice(0, 8); // First 8 digits = YYYYMMDD
  let numericPart = parseInt(oldId.slice(8), 10) + 1; // Last 9 digits +1 karvo
  const newNumericPart = numericPart.toString().padStart(9, '0'); // 9-digit format maintain
  return fixedPart + newNumericPart;
};

export const getColorDot = color => {
  const colorMap = {
    red: '🔴',
    green: '🟢',
    violet: '🟣',
  };

  return color
    .split(' / ')
    .map(clr => colorMap[clr] || '')
    .join(' ');
};

export const dynamicFontSize = px => (px / 375) * width;
