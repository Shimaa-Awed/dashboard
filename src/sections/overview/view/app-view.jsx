import { useEffect, useState } from 'react';
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
  const [card, setCard] = useState({
    totalUsers: 0,
    totalAdvertient: 0,
    addsnotaprovi: 0,
    bookingNumbe: 0,
  });

  const [chart, setChart] = useState({
    labels: [],
    series: [],
  });

  const [currentVisitsSeries, setCurrentVisitsSeries] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://backend.sakanijo.com/admin/counts`);
        const data = await response.json();
        setCard(data);

        const response2 = await fetch(`https://backend.sakanijo.com/places/category-counts`);
        const data2 = await response2.json();

        // تحديث الرسم البياني بناءً على البيانات المستخرجة
        setChart({
          labels: data2.labels || [],
          series: data2.series || [],
        });
        
      

        const formattedData = Object.entries(data2).map(([label, value]) => ({ label, value }));
        setCurrentVisitsSeries(formattedData);

      } catch (error) {
        console.error('Error fetching card:', error);
      }
    };
    fetchProduct();
  }, []);

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
            total={card.totalAdvertient}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/advertising.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title={t('اجمالي المستخدمين')}
            total={card.totalUsers}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/group.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title={t('تحتاج الي الموافقه ')}
            total={card.addsnotaprovi}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/search.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title={t('رقم الحجز')}
            total={card.bookingNumbe}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/reservation.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title={t('انشطه الموقع ')}
            subheader={`(+43%) ${t('مقارنه -بالعام -الماضي')}`}
            chart={{
              labels: chart.labels.length > 0 ? chart.labels : [
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
              series: chart.series.length > 0 ? chart.series : [
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
              ]
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title={t('مجموع الاعلانات')}
            chart={{
              series: currentVisitsSeries.length > 0 ? currentVisitsSeries : [
                { label: 'المزارع', value: 2750 },
                { label: 'الأراضي', value: 5375 },
                { label: 'الشقق', value: 4107 },
                { label: 'المنازل', value: 1004 },
                { label: 'المسابح', value: 150 },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}