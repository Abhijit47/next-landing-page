import Typography from '@mui/material/Typography';

function FeatureDescription({ children }) {
  return (
    <Typography
      align='center'
      gutterBottom={false}
      paragraph
      sx={{
        color: '#36454F',
        fontSize: 18,
        // fontFamily: 'Inter',
        fontWeight: '600',
        letterSpacing: 0.66,
        wordWrap: 'break-word',
      }}>
      {children}
    </Typography>
  );
}

export default FeatureDescription;
