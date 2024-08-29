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
        {t('مرحبا بك ')} 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title={t('اجمالي الاعلانات')}
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/advertising.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title={t('اجمالي المستخدمين')}
            total={1352831}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/group.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title={t('تحتاج الي الموافقه ')}
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/search.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title={t('رقم الحجز')}
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/reservation.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title={t('انشطه الموقع ')}
            subheader={`(+43%) ${t('مقارنه -بالعام -الماضي')}`}
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
                  name: t('الحجوزات'),
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: t('مستخدمون'),
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: t('اعلانات'),
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
            title={t('مجموع الاعلانات')}
            chart={{
              series: [
                { label: 'المزارع', value: 2750 },
                { label: 'الأراضي', value: 5375 },
                { label: 'الشقق', value: 4107 },
                { label: 'المنازل', value: 1004 },
                { label: 'المسابح', value: 150 },
              ],
            }}
          />
        </Grid>

        {/* <Grid xs={12}>
          <AppConversionRates
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
              ],
            }}
          />
        </Grid> */}

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title={t('تحديثات جديده')}
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
          <AppTasks title="المهام" list={[{ id: '1', name: 'أضف الشعار' }]} />
        </Grid> */}
      </Grid>
    </Container>
  );
}
