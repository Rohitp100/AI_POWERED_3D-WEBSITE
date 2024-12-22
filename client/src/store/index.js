// store.js
import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#F3F8FF',
  color1: '#45474B',
  color2: '#000000',
  isColor: true,
  isColor1: false,
  isColor2: false,
  defaultButtonStyle: "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800",
  selectedButtonStyle: "text-black bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
  plate: '',
  stand: '',
  mid: '',
  text:'',
  image:'',
});

export default state;