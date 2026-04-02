import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary";
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300";

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-transparent hover:text-primary border border-primary",
    secondary: "bg-transparent text-on-surface border border-outline/20 hover:border-primary hover:text-primary",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed grayscale pointer-events-none";

  const classes = `${baseClasses} ${variantClasses[variant]} ${disabled ? disabledClasses : ""} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={classes}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
}
