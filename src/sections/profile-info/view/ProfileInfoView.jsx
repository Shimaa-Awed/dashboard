import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import profile from "../profile.jpg"
// استخدام styled داخل الـ JSX
const ProfileInfoPage = () => {
  const ProfileImage = styled('img')({
    width: '150px', // حجم الصورة
    height: '150px', // حجم الصورة
    borderRadius: '50%', // حواف دائرية
    objectFit: 'cover', // لضبط الصورة
  });

  const ProfileContainer = styled(Paper)({
    padding: '20px',
    width: '100%', // عرض الصفحة بالكامل
    maxWidth: '600px', // الحد الأقصى للعرض
    margin: '20px auto', // توسيط الصفحة
    textAlign: 'center', // محاذاة النص في المنتصف
  });

  return (
    <ProfileContainer elevation={3}>
      <ProfileImage src={profile }alt="User Profile" />
      <Typography variant="h5" sx={{ mt: 2 }}>
        الاسم: محمد علي
      </Typography>
      <Typography variant="body1">
        رقم الهاتف: 01939838383
      </Typography>
      <Typography variant="body1">
        حالة المستخدم: نشط
      </Typography>
      <Typography variant="body1">
        عدد الحجوزات: 3
      </Typography>
      <Typography variant="body1">
        تاريخ إنشاء الحساب: 12/9/2024
      </Typography>
    </ProfileContainer>
  );
};

export default ProfileInfoPage;