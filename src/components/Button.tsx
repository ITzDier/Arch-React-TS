interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "destructive";
  rounded?: boolean;
}

export const Button = ({ variant = "primary", rounded = false, children, ...props }: ButtonProps) => {
  let variantClasses =
    "bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";

  if (variant === "outline") {
    variantClasses =
      "bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-100";
  } else if (variant === "destructive") {
    variantClasses =
      "bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
  }

  const roundedClass = rounded? "rounded-full" : "rounded-md";

  return (
    <button type="button" className={`${roundedClass} ${variantClasses} px-3 py-2 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2`} {...props}>
      {children}
    </button>
  );
};