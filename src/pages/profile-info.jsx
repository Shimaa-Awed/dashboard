import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

 import { ProfileInfoView } from 'src/sections/profile-info/view';

// ----------------------------------------------------------------------

export default function ProfileInfoPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title> {t('products_title_t')} </title>
      </Helmet>
       <ProfileInfoView/>
    </>
  );
}

