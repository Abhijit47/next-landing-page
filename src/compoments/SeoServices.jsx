'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import SectionHeading from './SectionHeading';
import { seoServicesData } from '@/constants';

export default function SeoServices() {
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
      <Stack marginTop={5} marginBottom={5}>
        <SectionHeading>SEO Services</SectionHeading>
      </Stack>

      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          padding: '2rem',
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)',
          borderRadius: 5,
        }}>
        {seoServicesData.map((card) => (
          <Grid item xs={12} sm={12} md={6} key={card.id}>
            <Card
              variant='outlined'
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                minWidth: 380,
                heigth: '9rem',
                border: 'none',
                backgroundColor: 'transparent',
              }}>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}>
                <Stack direction={'row'} alignItems={'center'} gap={'1rem'}>
                  <Box>{card.icon}</Box>
                  <Typography
                    gutterBottom={false}
                    variant='h5'
                    component='div'
                    sx={{
                      color: '#0A56F1',
                      fontSize: '1.5rem',
                      fontFamily: 'Inter',
                      fontWeight: '600',
                      wordWrap: 'break-word',
                    }}>
                    {card.heading}
                  </Typography>
                </Stack>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{
                    color: '#36454F',
                    fontSize: 16,
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    wordWrap: 'break-word',
                    paddingLeft: '2.5rem',
                  }}>
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
