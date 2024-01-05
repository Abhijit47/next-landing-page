'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import SectionHeading from './SectionHeading';
import SectionSubHeading from './SectionSubHeading';
import { jobPlacementData } from '@/constants';

export default function OtherServices() {
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
      <Stack marginBottom={6} gap={2}>
        <SectionHeading>
          Stackkaroo’s Talent Hiring & Job Placement Services
        </SectionHeading>
        <SectionSubHeading>
          We are a talent searching platform that redesigns how companies hire
          talents. It is a cost-effective solution for industries. We also
          provide global job opportunities with good salaries, support, and
          professional development.
        </SectionSubHeading>
      </Stack>

      <Grid
        container
        spacing={{ xs: 4, sm: 4, md: 5 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ padding: '2rem' }}>
        {jobPlacementData.map((card) => (
          <Grid item xs={12} sm={4} md={4} key={card.id}>
            <Card
              sx={{
                width: '100%',
                height: '100%',
                background: 'white',
                boxShadow: '0px 8px 10px rgba(101, 101, 101, 0.25)',
                borderRadius: 3,
                border: '1px rgba(101, 101, 101, 0.25) solid',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1.5rem',
                padding: '0.5rem',
              }}>
              <CardMedia
                sx={{ height: 35, width: 35 }}
                image={card.image.props.src}
                title='green iguana'
              />

              <CardContent>
                <Typography
                  sx={{
                    fontSize: 16,
                    color: '#0A56F1',
                    fontFamily: 'Inter',
                    fontWeight: '600',
                    letterSpacing: 0.66,
                    wordWrap: 'break-word',
                    textAlign: 'center',
                  }}
                  gutterBottom>
                  {card.heading}
                </Typography>

                <Typography
                  variant='body2'
                  sx={{
                    color: '#36454F',
                    fontSize: 12,
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    letterSpacing: 0.6,
                    wordWrap: 'break-word',
                    textAlign: 'center',
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
