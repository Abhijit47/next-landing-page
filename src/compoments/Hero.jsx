'use client';

import * as React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CallIcon from '@mui/icons-material/Call';
import CustomButton from './CustomButton';
import { Typography } from '@mui/material';

const HeroImage = () => {
  return (
    <Image
      src='/images/hero-image.png'
      width={400}
      height={400}
      priority={true}
      placeholder='blur'
      blurDataURL='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
      alt={'hero-image'}
    />
  );
};

export default function Hero() {
  return (
    <Box
      sx={{
        // width: '100%',
        // height: '100%',
        padding: { lg: '6rem', md: '2rem' },
        // background:
        //   'linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)',
      }}>
      <Grid
        container
        margin={0}
        sx={{
          flexDirection: { xs: 'column-reverse', md: 'row' },
          padding: '2rem',
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)',
          borderRadius: 5,
        }}>
        <Grid item xs={12} sm={12} md={7} padding={'2rem'}>
          <Stack gap={'2rem'} alignItems={{ xs: 'center', lg: 'flex-start' }}>
            <Typography
              variant='h1'
              sx={{
                color: '#0A56F1',
                fontSize: {
                  lg: 40,
                  md: 28,
                  sm: 24,
                  xs: 18,
                },
                // fontFamily: 'Inter',
                fontWeight: '600',
                wordWrap: 'break-word',
              }}>
              Diversifying the Designs of Digital World
            </Typography>
            <p
              style={{
                color: '#36454F',
                fontSize: 16,
                // fontFamily: 'Inter',
                fontWeight: '500',
                lineHeight: 1.5,
                letterSpacing: 0.66,
                wordWrap: 'break-word',
              }}>
              Explorogent International Services Private Limited (EISPL) is one
              of the most famous companies in the sector of Web and Mobile
              Development. In the market, EISPL has a strong presence in
              providing quality services to its clients. EISPL is convinced that
              one should diversify the offering, given the changing needs of the
              clients. That is why we engage in multiple projects and
              activities. We also possess knowledge in web development, app
              development, UI/UX design, as well as digital marketing.
            </p>

            <CustomButton ButtonIcon={CallIcon}>Book a call</CustomButton>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Stack alignItems={'center'}>
            <HeroImage />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
