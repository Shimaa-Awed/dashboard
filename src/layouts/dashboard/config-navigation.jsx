import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
<<<<<<< HEAD
    title: 'nav_dashboard_t',
=======
    title: 'لوحه التحكم',
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
<<<<<<< HEAD
    title: 'nav_users_t',
=======
    title: 'المستخدمون',
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
    path: '/user',
    icon: icon('ic_user'),
  },
  {
<<<<<<< HEAD
    title: 'nav_product_t',
=======
    title: 'المنتجات',
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
<<<<<<< HEAD
    title: 'Admin',
=======
    title: 'مسؤل',
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
    path: '/admin',
    icon: icon('ic_user'),
  },
  {
<<<<<<< HEAD
    title: 'nav_product_info_t',
=======
    title: 'حول المنتج',
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
    path: '/product_info',
    icon: icon('ic_cart'),
  },
  {
<<<<<<< HEAD
    title: "nav_booking_t",
=======
    title: "الحجز",
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
    path: "/booking",
    icon: icon('')
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
<<<<<<< HEAD
    title: 'Not found',
=======
    title: 'لا يوجد',
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

<<<<<<< HEAD
export default navConfig;
=======
export default navConfig;
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
