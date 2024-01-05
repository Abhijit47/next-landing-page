'use client';

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

import FeatureDescription from './FeatureDescription';

export default function DirectionStack() {
  return (
    <Stack
      direction={'column'}
      spacing={2}
      justifyContent={'center'}
      alignItems={'center'}
      // padding={'3rem'}
    >
      <FeatureDescription>
        In the realm of digital solutions, we offer expertise in
      </FeatureDescription>
      
      <Stack
        direction='row'
        alignItems={'center'}
        justifyContent={'center'}
        rowGap={2}
        columnGap={3}
        flexWrap={'wrap'} p={2}>
        <Chip label='Website Developement' variant='outlined' color='primary' />
        <Chip label='App Developement' variant='outlined' color='primary' />
        <Chip label='UI/UX Design' variant='outlined' color='primary' />
        <Chip label='Digital Marketing' variant='outlined' color='primary' />
        <Chip label='SEO Optimization' variant='outlined' color='primary' />
      </Stack>
        <FeatureDescription>
          showcasing our proficiency across various facets of the digital
          platform
        </FeatureDescription>
    </Stack>
  );
}

