import Typography from '@mui/material/Typography';

function StoryDescription({ children }) {
  return (
    <Typography
      paragraph
      variant='body1'
      sx={{
        color: '#36454F',
        fontSize: 18,
        // fontFamily: 'Inter',
        fontWeight: '500',
        lineHeight: 1.2,
        letterSpacing: 0.66,
        wordWrap: 'break-word',
      }}>
      {children}
    </Typography>
  );
}

export default StoryDescription;