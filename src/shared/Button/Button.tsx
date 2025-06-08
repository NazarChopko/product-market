import { FC, ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  children: string;
  disabled?: boolean;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, type = 'button', disabled, onClick = () => {}, style }) => {
  return (
    <button
      className="bg-primary text-white py-2 px-4 rounded cursor-pointer hover:bg-white hover:text-primary border-1 border-primary transition-all duration-300 disabled:opacity-75 dissabled:pointer-events-none disabled:hover:bg-primary disabled:hover:text-white disabled:cursor-default"
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
