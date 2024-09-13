import React from 'react';
import Label from 'src/components/label';
import Button from '@mui/material/Button';

export default function SettingPage() {
  return (
    <div style={{
      padding: '20px',
      width: '100%', // اجعل العرض 100% ليتناسب مع عرض الصفحة
      maxWidth: '800px', // الحفاظ على الحد الأقصى للعروض
      margin: 'auto',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      position: 'relative', // اجعل الموضع نسبي
      right: '0', // لا تحتاج إلى تحريك العنصر
      top: '20px', // يمكن تعديلها حسب الحاجة
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '20px',
      }}>الاعدادات</h2>
      <div style={{ marginBottom: '15px' }}>
        <Label style={{ display: 'block', marginBottom: '5px' }}>رابط الواتساب:</Label>
        <input type="text" placeholder="أدخل رابط الواتساب" style={{
          width: '100%',
          padding: '15px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxSizing: 'border-box',
        }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <Label style={{ display: 'block', marginBottom: '5px' }}>رقم الهاتف:</Label>
        <input type="text" placeholder="أدخل رقم الهاتف" style={{
          width: '100%',
          padding: '15px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxSizing: 'border-box',
        }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <Label style={{ display: 'block', marginBottom: '5px' }}>قيمة العمولة:</Label>
        <input type="text" placeholder="أدخل قيمة العمولة" style={{
          width: '100%',
          padding: '15px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxSizing: 'border-box',
        }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <Label style={{ display: 'block', marginBottom: '5px' }}>كلمة المرور القديمة:</Label>
        <input type="password" placeholder="أدخل كلمة المرور القديمة" style={{
          width: '100%',
          padding: '15px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxSizing: 'border-box',
        }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <Label style={{ display: 'block', marginBottom: '5px' }}>تأكيد كلمة المرور الجديدة:</Label>
        <input type="password" placeholder="أعد إدخال كلمة المرور الجديدة" style={{
          width: '100%',
          padding: '15px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxSizing: 'border-box',
        }} />
      </div>
      <Button style={{
        width: '100%',
        padding: '15px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}>حفظ البيانات</Button>
    </div>
  );
}