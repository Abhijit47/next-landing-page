'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import SectionHeading from './SectionHeading';
import SectionSubHeading from './SectionSubHeading';
import { WhyChooseUsData } from '@/constants';

export default function WhyChooseUs() {
  return (
    <Box
      sx={{
        // width: '100%',
        // height: '100%',
        padding: { lg: '6rem', md: '2rem' },
        // background:
        //   'linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)',
      }}>
      <Stack paddingBottom={'2rem'}>
        <SectionHeading>Why Choose Us?</SectionHeading>
        <SectionSubHeading>
          We excel with reliability, innovation and customer-centric approach
          for our quality products.
          <br />
          Our dedicated team ensures that the solutions provided are dependable
          and long-term
        </SectionSubHeading>
      </Stack>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        // rowGap={2}
        // columnGap={3}
        alignItems={'center'}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          // flexDirection: { xs: 'column-reverse', md: 'row' },
          // background:
          //   'linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)',
          padding: '2.5rem',
          width: '100%',
          height: '100%',
          // background:
          //   'linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)',
          borderRadius: 5,
        }}>
        {WhyChooseUsData.map((card) => (
          <Grid item xs={11} sm={11} md={4} key={card.id}>
            <Card
              // sx={{ minWidth: 275 }}
              sx={{
                width: '100%',

                background:
                  'linear-gradient(270deg, rgba(255, 255, 255, 0.08) 0%, rgba(10, 86, 241, 0.08) 100%)',
                boxShadow: '0px 4px 10px rgba(10, 86, 241, 0.25)',
                borderRadius: 5,
                border: '2px white solid',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <CardContent
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                }}>
                <Box
                  sx={{
                    // width: '100%',
                    // height: '100%',
                    background: 'white',
                    borderRadius: 0.5,
                    padding: '.2rem',
                  }}>
                  {card.icon}
                </Box>
                <Typography
                  sx={{ fontSize: 18, color: '#0A56F1' }}
                  variant='h5'
                  gutterBottom={false}>
                  {card.heading}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
