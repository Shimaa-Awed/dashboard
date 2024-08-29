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
    title: 'حول المنتج',
    path: '/product_info',
    icon: icon('ic_cart'),
  },
  {
    title: "الحجز",
    path: "/booking",
    icon: icon('')
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'لا يوجد',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;