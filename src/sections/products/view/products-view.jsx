<<<<<<< HEAD

=======
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

<<<<<<< HEAD

import { useEffect, useState} from 'react';

import Iconify from 'src/components/iconify';

=======
import { useEffect, useState} from 'react';

import Iconify from 'src/components/iconify';
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
import ProductCard from '../product-card';
import ProductAddPopover from '../product-add';
import ProductSort from '../product-sort';
import ProductFilters from '../product-filters';
import ProductCartWidget from '../product-cart-widget';

<<<<<<< HEAD
// ----------------------------------------------------------------------



=======
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
export default  function ProductsView() {
  const [products, setproducts] = useState([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://backend.sakanijo.com/api/places');
        const data = await response.json();
        setproducts(data.places); 
<<<<<<< HEAD
        console.log(data.places);
=======
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);
<<<<<<< HEAD
=======
  
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
  const { t } = useTranslation();
  const [openAddProduct, setOpenAddProduct] = useState(false);

  const handleClosePopover = () => {
    setOpenAddProduct(false);
  };
  const handleOpenPopover = () => {
    setOpenAddProduct(true);
  };
<<<<<<< HEAD
=======
  
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
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
<<<<<<< HEAD
        <Typography variant="h4">{t('products_title_t')}</Typography>

        <Button
          variant="contained"
          onClick={handleOpenPopover}
          color="inherit"
          dir="ltr"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          {t('new_product_t')}
        </Button>
=======
        <Typography variant="h4">{t('عنوان المنتجات')}</Typography>

    
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
<<<<<<< HEAD
     
=======
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />
<<<<<<< HEAD
         
=======
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
          <ProductSort />
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {products?.map((product) => (
          <Grid key={product?.id} xs={12} sm={6} md={3}>
<<<<<<< HEAD
         
            <ProductCard product={product} />
            
          </Grid>
         
        ))}
      </Grid>
      <div
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
      
      <ProductAddPopover open={openAddProduct} onClose={handleClosePopover} />
      </div>
      {/* <ProductCartWidget /> */}
    </Container>
  );
}
=======
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
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
