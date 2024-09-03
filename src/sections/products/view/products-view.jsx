
import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';


import { useEffect, useState} from 'react';

import Iconify from 'src/components/iconify';
import ProductCard from '../product-card';
import ProductAddPopover from '../product-add';
import ProductSort from '../product-sort';
import ProductFilters from '../product-filters';
import ProductCartWidget from '../product-cart-widget';


export default  function ProductsView() {
  const [products, setproducts] = useState([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://backend.sakanijo.com/api/places');
        const data = await response.json();
        setproducts(data.places); 

      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);
  const { t } = useTranslation();
  const [openAddProduct, setOpenAddProduct] = useState(false);

  const handleClosePopover = () => {
    setOpenAddProduct(false);
  };
  const handleOpenPopover = () => {
    setOpenAddProduct(true);
  };

  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>

        <Typography variant="h4">{t('عنوان المنتجات')}</Typography>

    
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >

        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />

          <ProductSort />
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {products?.map((product) => (
          <Grid key={product?.id} xs={12} sm={6} md={3}>

            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <div style={{ width: '100vw', height: '100vh' }}>
        <ProductAddPopover open={openAddProduct} onClose={handleClosePopover} />
      </div>
    </Container>
  );
}
