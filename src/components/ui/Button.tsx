interface Iprops extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({ children, className, width = "w-full", ...rest }: Iprops) => {
  return (
    <button
      className={`rounded-lg text-white px-3 py-3 duration-200 font-medium cursor-pointer ${width} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
