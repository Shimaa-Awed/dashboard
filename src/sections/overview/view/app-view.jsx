import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import AppNewsUpdate from '../app-news-update';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';

// ----------------------------------------------------------------------

export default function AppView() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
<<<<<<< HEAD
        {t('welcome')} 👋
=======
        {t('مرحبا بك ')} 👋
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
<<<<<<< HEAD
            title={t('total_dvertisements_t')}
=======
            title={t('اجمالي الاعلانات')}
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/advertising.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
<<<<<<< HEAD
            title={t('total_users_t')}
=======
            title={t('اجمالي المستخدمين')}
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
            total={1352831}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/group.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
<<<<<<< HEAD
            title={t('need_tobe_approven_t')}
=======
            title={t('تحتاج الي الموافقه ')}
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/search.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
<<<<<<< HEAD
            title={t('reservation_number_t')}
=======
            title={t('رقم الحجز')}
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/reservation.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
<<<<<<< HEAD
            title={t('site_activities_t')}
            subheader={`(+43%) ${t('than_last_year')}`}
=======
            title={t('انشطه الموقع ')}
            subheader={`(+43%) ${t('مقارنه -بالعام -الماضي')}`}
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
<<<<<<< HEAD
                  name: t('reservations_t'),
=======
                  name: t('الحجوزات'),
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
<<<<<<< HEAD
                  name: t('users_t'),
=======
                  name: t('مستخدمون'),
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
<<<<<<< HEAD
                  name: t('advertisements_t'),
=======
                  name: t('اعلانات'),
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
<<<<<<< HEAD
            title={t('total_dvertisements_t')}
            chart={{
              series: [
                { label: 'Farms', value: 2750 },
                { label: 'Lands', value: 5375 },
                { label: 'Apartments', value: 4107 },
                { label: 'Houses', value: 1004 },
                { label: 'Swimming pools', value: 150 },
=======
            title={t('مجموع الاعلانات')}
            chart={{
              series: [
                { label: 'المزارع', value: 2750 },
                { label: 'الأراضي', value: 5375 },
                { label: 'الشقق', value: 4107 },
                { label: 'المنازل', value: 1004 },
                { label: 'المسابح', value: 150 },
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
              ],
            }}
          />
        </Grid>

        {/* <Grid xs={12}>
          <AppConversionRates
<<<<<<< HEAD
            title="Conversion Rates"
            subheader={`(+43%) ${t('than_last_year')}`}
            chart={{
              series: [
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
=======
            title="معدلات التحويل"
            subheader={`(+43%) ${t('compared_to_last_year')}`}
            chart={{
              series: [
                { label: 'إيطاليا', value: 400 },
                { label: 'اليابان', value: 430 },
                { label: 'الصين', value: 448 },
                { label: 'كندا', value: 470 },
                { label: 'فرنسا', value: 540 },
                { label: 'ألمانيا', value: 580 },
                { label: 'كوريا الجنوبية', value: 690 },
                { label: 'هولندا', value: 1100 },
                { label: 'الولايات المتحدة', value: 1200 },
                { label: 'المملكة المتحدة', value: 1380 },
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
              ],
            }}
          />
        </Grid> */}

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
<<<<<<< HEAD
            title={t('new_updates_t')}
=======
            title={t('تحديثات جديده')}
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
            list={[]}
            /*
             * Each List item should have these.
             * id: string | number // uuid or just a numeric one
             * title: string
             * description: string
             * image: string
             * postedAt: string
             */
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={8}>
<<<<<<< HEAD
          <AppTasks title="Tasks" list={[{ id: '1', name: 'Add The Logo' }]} />
=======
          <AppTasks title="المهام" list={[{ id: '1', name: 'أضف الشعار' }]} />
>>>>>>> abff067b1d41068b6a0906e5a5c50f95061caf65
        </Grid> */}
      </Grid>
    </Container>
  );
}
