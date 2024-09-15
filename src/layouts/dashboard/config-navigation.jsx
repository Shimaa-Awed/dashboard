import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {

    title: 'لوحه التحكم',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {

    title: 'المستخدمون',
    path: '/user',
    icon: icon('ic_user'),
  },
  {

    title: 'المنتجات',
    path: '/products',
    icon: icon('ic_cart'),
  },
  
  {

    title: 'مسؤل',
    path: '/admin',
    icon: icon('ic_user'),
  },
  {

    title: 'الاعدادات',
    path: '/setting',
    icon: icon('ic_cart'),
  },
 
 
  
];

export default navConfig;
