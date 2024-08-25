import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Rating from '@mui/material/Rating';

import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'priceDesc', label: 'Price: High-Low' },
  { value: 'priceAsc', label: 'Price: Low-High' },
];

const GENDER_OPTIONS = ['بيع', 'حجز', 'ايجار'];
const CATEGORY_OPTIONS = ['الكل', 'شقق', 'مزارع', 'اراضي', 'مسابح', 'صالات رياضيه', 'مكاتب وعيادات', 'فيلا', 'منازل'];
const RATING_OPTIONS = ['up4Heart', 'up3Heart', 'up2Heart', 'up1Heart'];

const PRICE_OPTIONS = [
  { value: 'اقل_25', label: 'اقل $25' },
  { value: 'اقل_75', label: 'اقل $25 - $75' },
  { value: 'اكثر_75', label: 'اكثر $75' },
];

// ----------------------------------------------------------------------

export default function ProductFilters({ openFilter, onOpenFilter, onCloseFilter }) {
  const [address, setAddress] = useState('');
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedRating, setSelectedRating] = useState('');

  const handleGenderChange = (event) => {
    const value = event.target.value;
    setSelectedGenders((prev) => 
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const fliterData = async () => {
    const filterData = {
      address,
      byorRent: selectedGenders,
      category: selectedCategory,
      price: selectedPrice,
      rating: selectedRating,
    };
    console.log(filterData); // Send this data to the backend 
    const response = await fetch('https://backend.sakanijo.com/admin/filter-places',{
      method:"POST",
      body:JSON.stringify(filterData),
      headers: {
     'Content-Type': 'application/json'
    }
    });
    const data = await response.json();
    console.log(data)
  };

  const renderAddressInput = (
    <TextField
      variant="outlined"
      placeholder="إدخال العنوان"
      fullWidth
      sx={{ mb: 2 }}
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      inputProps={{ style: { color: 'gray' }}}
    />
  );

  const renderGender = (
    <Stack spacing={1}>
      <Typography variant="subtitle2" sx={{ fontSize: '1.2rem' }}>نوع الاعلان</Typography>
      <FormGroup>
        {GENDER_OPTIONS.map((item) => (
          <FormControlLabel
            key={item}
            control={<Checkbox value={item} checked={selectedGenders.includes(item)} onChange={handleGenderChange} />}
            label={item}
          />
        ))}
      </FormGroup>
    </Stack>
  );

  const renderCategory = (
    <Stack spacing={1}>
      <Typography variant="subtitle2" sx={{ fontSize: '1.2rem' }}>نوع العقار</Typography>
      <RadioGroup value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        {CATEGORY_OPTIONS.map((item) => (
          <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
        ))}
      </RadioGroup>
    </Stack>
  );

  const renderPrice = (
    <Stack spacing={1}>
      <Typography variant="subtitle2" sx={{ fontSize: '1.2rem' }}>السعر</Typography>
      <RadioGroup value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
        {PRICE_OPTIONS.map((item) => (
          <FormControlLabel
            key={item.value}
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </Stack>
  );

  const renderRating = (
    <Stack spacing={1}>
      <Typography variant="subtitle2" sx={{ fontSize: '1.2rem' }}>الاعجاب</Typography>
      <RadioGroup value={selectedRating} onChange={(e) => setSelectedRating(e.target.value)}>
        {RATING_OPTIONS.map((item, index) => (
          <FormControlLabel
            key={item}
            value={item}
            control={
              <Radio
                disableRipple
                color="default"
                icon={<CiHeart readOnly value={4 - index} />}
                checkedIcon={<FaHeart  readOnly value={4 - index} />}
                sx={{
                  '&:hover': { bgcolor: 'transparent' },
                }}
              />
            }
            label="& Up"
            sx={{
              my: 0.5,
              borderRadius: 1,
              '&:hover': { opacity: 0.48 },
            }}
          />
        ))}
      </RadioGroup>
    </Stack>
  );

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={<Iconify icon="ic:round-filter-list" />}
        onClick={onOpenFilter}
      >
        Filters&nbsp;
      </Button>

      <Drawer
        anchor="right"
        open={openFilter}
        onClose={onCloseFilter}
        PaperProps={{
          sx: { width: 280, border: 'none', overflow: 'hidden' },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 1, py: 2 }}
        >
          <Typography variant="h6" sx={{ fontSize: '1.3rem' }}>
            فلتر
          </Typography>
          <IconButton onClick={onCloseFilter}>
            <Iconify icon="eva:close-fill" />
          </IconButton>
        </Stack>

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ p: 3 }}>
            {renderAddressInput}
            {renderGender}
            {renderCategory}
            {renderPrice}
            {renderRating}
          </Stack>
        </Scrollbar>

        <Box sx={{ p: 3 }}>
          <Button
            fullWidth
            size="large"
            type="submit"
            color="inherit"
            variant="outlined"
            onClick={fliterData}
            sx={{ fontSize: '1.3rem', backgroundColor: "black", color: "white"}}
          >
            تطبيق الفلتر
          </Button>
          <Button
            fullWidth
            size="large"
            type="submit"
            color="inherit"
            variant="outlined"
            sx={{ fontSize: '1.3rem' }}
            startIcon={<Iconify icon="ic:round-clear-all" />}
          >
            حذف الكل
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

ProductFilters.propTypes = {
  openFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};