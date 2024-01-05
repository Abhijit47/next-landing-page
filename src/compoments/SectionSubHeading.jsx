import { Typography } from "@mui/material";

function SectionSubHeading({ children }) {
  return (
    <Typography
      style={{
        color: '#36454F',
        fontSize: {
          lg: 35,
          md: 24,
          sm: 20,
          xs: 16,
        },
        // fontFamily: 'Inter',
        fontWeight: '500',
        lineHeight: 1.3,
        letterSpacing: 0.66,
        wordWrap: 'break-word',
        textAlign: 'center',
      }}>
      {children}
    </Typography>
  );
}

export default SectionSubHeading;
