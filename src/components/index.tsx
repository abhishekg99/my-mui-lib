import Button, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export interface MyButtonProps extends MuiButtonProps {
  label: string;
}

const MyButton = ({
  label,
  color = 'primary', 
  variant = 'contained', 
  ...props }: MyButtonProps) => {
  return (
    <Button
      color={color}
      variant={variant}
      {...props}>
      {label}
    </Button>
  );
};

export default MyButton;