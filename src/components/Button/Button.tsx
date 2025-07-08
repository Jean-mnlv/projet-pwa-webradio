import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

const Button: React.FC<ButtonProps> = ({ label, ...props }) => (
  <button
    {...props}
    style={{
      padding: "8px 16px",
      borderRadius: 4,
      background: "var(--primary-color)",
      color: "#fff",
      border: "none",
    }}
  >
    {label}
  </button>
);

export default Button;
