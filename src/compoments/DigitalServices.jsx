'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

import SectionHeading from './SectionHeading';
import SectionSubHeading from './SectionSubHeading';
import { digitalServicesData } from '@/constants';

export default function DigitalServices() {
  return (
    <Box
      sx={{
        // width: '100%',
        // height: '100%',
        padding: { lg: '6rem', md: '2rem' },
        paddingTop: { xs: '6rem', lg: '4rem' },
        // background:
        //   'linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)',
      }}>
      <Stack marginBottom={6}>
        <SectionHeading>Stackkaroo’s Digital Services</SectionHeading>
        <SectionSubHeading>
          We excel with reliability, innovation and customer-centric approach
          for our quality products. Our dedicated team ensures that the
          solutions provided are dependable and long-term
        </SectionSubHeading>
      </Stack>

      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ padding: '2rem' }}>
        {digitalServicesData.map((card) => (
          <Grid item xs={12} sm={10} md={4} key={card.id}>
            <Card
              sx={{
                width: '100%',
                height: '100%',
                background:
                  'linear-gradient(135deg, white 0%, rgba(255, 255, 255, 0) 100%)',
                borderRadius: 3,
                border: '1px #0A56F1 solid',
                padding: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
              key={card.id}>
              <Stack
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={'1rem'}>
                <CardMedia
                  sx={{ height: 50, width: 50 }}
                  image={card.image.props.src}
                  title='green iguana'
                />
                <Typography
                  variant='h5'
                  component='div'
                  color={'#0A56F1'}
                  fontSize={'1rem'}
                  sx={{
                    color: '#0A56F1',
                    fontSize: 20,
                    fontFamily: 'sans-serif',
                    fontWeight: '600',
                    letterSpacing: 0.75,
                    wordWrap: 'break-word',
                  }}>
                  {card.heading}
                </Typography>
              </Stack>
              <CardContent>
                <Typography
                  sx={{ mb: 1.5 }}
                  color='text.secondary'
                  textAlign={'center'}>
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ alignSelf: 'flex-start' }}>
                {card.icon}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
