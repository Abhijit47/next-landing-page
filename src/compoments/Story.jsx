'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import SectionHeading from './SectionHeading';
import CustomButton from './CustomButton';
import StoryDescription from './StoryDescription';

function Story() {
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
        <SectionHeading>
          Stay Ahead!
          <br />
          Launch Your Next Project with Stackkaroo
        </SectionHeading>
      </Stack>

      <Grid
        container
        margin={0}
        sx={{
          flexDirection: { xs: 'column-reverse', md: 'row' },
          background:
            'linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)',
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
              Our Story
            </Typography>

            <StoryDescription>
              Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan
              Mishra bring their extensive experience to the forefront as
              industry veterans. Our team is fueled by innovation, continually
              striving to exceed customer expectations.
            </StoryDescription>

            <StoryDescription>
              Operating from our registered office in Agartala Sadar, Tripura
              (W), our company is officially registered with the Corporate
              Identification Number (CIN). Our active status and an authorized
              share capital of Rs 10.00 lac are a source of pride.
            </StoryDescription>

            <CustomButton ButtonIcon={CurrencyRupeeIcon}>
              Get Estimated Project Cost
            </CustomButton>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Stack alignItems={'center'}>
            <Image
              src={'/images/story-image.png'}
              width={400}
              height={400}
              priority={false}
              placeholder='blur'
              blurDataURL='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
              alt={'story-image'}
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Story;
