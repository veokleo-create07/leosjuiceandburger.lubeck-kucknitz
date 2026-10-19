import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "olive";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "button-primary",
  secondary: "button-secondary",
  olive: "button-olive",
};

export function Button({
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`button-base ${variantClasses[variant]} ${className}`.trim()}
      {...props}
    />
  );
}
