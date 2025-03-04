import { ComponentProps, ElementType } from "react";

type ButtonBaseProps = {
  as?: ElementType;
  to?: string;
  appearance?: "primary" | "secondary" | "danger";
  children?: React.ReactNode;
};

type ButtonProps<T extends ElementType> = ButtonBaseProps &
  Omit<ComponentProps<T>, keyof ButtonBaseProps>;

const buttonClasses = {
  primary:
    "px-4 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-blue)] text-[var(--color-white)] rounded-md transition-colors flex items-center",
  secondary:
    "px-4 py-2 bg-[var(--color-secondary)] border border-[var(--color-border)] rounded-md hover:bg-[var(--color-pink)] transition-colors",
  danger:
    "px-4 py-2 bg-[var(--color-error)] hover:bg-[var(--color-red)] text-[var(--color-white)] rounded-md transition-colors flex items-center",
};

const Button = <T extends ElementType = "button">({
  as,
  appearance = "primary",
  children,
  to,
  ...props
}: ButtonProps<T>) => {
  const Component = as || "button";

  return (
    <Component
      className={
        buttonClasses[appearance] + " cursor-pointer text-[var(--color-white)]"
      }
      {...props}
      to={to}
    >
      {children}
    </Component>
  );
};

export default Button;
