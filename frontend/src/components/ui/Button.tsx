import type { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function Button({
  children,
  loading = false,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        w-full
        rounded-xl
        bg-indigo-600
        px-5
        py-3
        font-semibold
        text-white
        transition-all
        duration-200
        hover:bg-indigo-500
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
      disabled={loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}