import Button from '@mui/material/Button';

function CustomButton({ children, ButtonIcon }) {
  return (
    <Button
      variant='contained'
      sx={{
        borderRadius: '50px',
        backgroundColor: '#E68F50',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        ':hover': {
          backgroundColor: '#E68F50',
        },
      }}>
      <ButtonIcon
        sx={{
          backgroundColor: '#fff',
          borderRadius: '50px',
          color: '#E68F50',
          padding: '0.2rem',
        }}
      />
      <span>{children}</span>
    </Button>
  );
}

export default CustomButton;
