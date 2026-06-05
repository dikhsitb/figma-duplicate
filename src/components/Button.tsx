type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function Button({ children, className = "" }: ButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-[18px] bg-brand px-20 py-5 text-lg font-semibold text-white transition-opacity hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  );
}
