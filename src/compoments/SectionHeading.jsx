import { Typography } from '@mui/material';

function SectionHeading({ children }) {
  return (
    <Typography
      variant='h3'
      sx={{
        // typography: { xs: 'h6', md: 'h4', lg: 'h3' },
        color: '#E68F50',
        fontSize: {
          lg: 35,
          md: 24,
          sm: 20,
          xs: 16,
        },
        // fontSize: { sm: 16, lg: 35 },
        // fontFamily: 'Inter',
        fontWeight: '600',
        wordWrap: 'break-word',
        textAlign: 'center',
      }}>
      {children}
    </Typography>
  );
}

export default SectionHeading;
