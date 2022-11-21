import React from 'react';

interface ButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      className="button"
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
