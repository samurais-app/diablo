import { Theme } from '@ui/interfaces';


const light: Theme = {
  mode: 'light',
  color: {
    primary: '#4f46e5',
    transparent: 'transparent',
    error: '#fb1f6a',
    background: '#FFFFFF',
    border: '#BEBEBE',
    text: '#292929'
  }
};

const dark: Theme = {
  mode: 'dark',
  color: {
    primary: '#4f46e5',
    transparent: 'transparent',
    error: '#fb1f6a',
    background: '#121212',
    border: '#828282',
    text: '#FFFFFF'
  }
};

export default { dark, light };