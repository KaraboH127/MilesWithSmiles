import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "default" | "sm";
type ButtonLayout = "inline" | "responsive";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-black text-white border border-black hover:bg-black/90",
  secondary: "bg-white text-black border border-black hover:bg-black/5",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "px-6 py-3 text-sm",
  sm: "px-4 py-2 text-sm",
};

const baseClasses =
  "inline-flex max-w-full items-center justify-center gap-2 font-semibold rounded-md transition-colors duration-200";

const layoutClasses: Record<ButtonLayout, string> = {
  inline: "",
  responsive: "w-full sm:w-auto",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  layout?: ButtonLayout;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never; to?: never };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: never };

type ButtonAsRouterLink = CommonProps & {
  to: string;
  href?: never;
} & Omit<React.ComponentProps<typeof Link>, "to" | "className" | "children">;

export type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsRouterLink;

export default function Button({
  variant = "primary",
  size = "default",
  layout = "inline",
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    layoutClasses[layout],
    className
  );

  if ("to" in props && props.to) {
    const { to, ...linkProps } = props as ButtonAsRouterLink;
    return (
      <Link to={to} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
