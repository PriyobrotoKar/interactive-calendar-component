export interface CalendarMonthTheme {
  month: number;
  accentBg: string;
  accentText: string;
  imgSrc: string;
}

export const defaultMonthThemes: CalendarMonthTheme[] = [
  {
    month: 0,
    accentBg: '#355E62',
    accentText: '#E4F3F5',
    imgSrc: '/calendar/0.jpg',
  },
  {
    month: 1,
    accentBg: '#5089CA',
    accentText: '#DAE4F0',
    imgSrc: '/calendar/1.jpg',
  },
  {
    month: 2,
    accentBg: '#F5A459',
    accentText: '#F5EBE1',
    imgSrc: '/calendar/2.jpg',
  },
  {
    month: 3,
    accentBg: '#AF752F',
    accentText: '#F5EBE1',
    imgSrc: '/calendar/3.jpg',
  },
  {
    month: 4,
    accentBg: '#99795F',
    accentText: '#F5EBE1',
    imgSrc: '/calendar/4.jpg',
  },
  {
    month: 5,
    accentBg: '#8CAFB3',
    accentText: '#E4F3F5',
    imgSrc: '/calendar/5.jpg',
  },
  {
    month: 6,
    accentBg: '#516364',
    accentText: '#E4F3F5',
    imgSrc: '/calendar/6.jpg',
  },
  {
    month: 7,
    accentBg: '#33535E',
    imgSrc: '/calendar/7.jpg',
    accentText: '#E4F3F5',
  },
  {
    month: 8,
    accentBg: '#396A8C',
    imgSrc: '/calendar/8.jpg',
    accentText: '#DAE4F0',
  },
  {
    month: 9,
    accentBg: '#E28C96',
    imgSrc: '/calendar/9.jpg',
    accentText: '#FFF2F4',
  },
  {
    month: 10,
    accentBg: '#C99779',
    imgSrc: '/calendar/10.jpg',
    accentText: '#F5EBE1',
  },
  {
    month: 11,
    accentBg: '#7E6491',
    imgSrc: '/calendar/11.jpg',
    accentText: '#FFF2F4',
  },
];
