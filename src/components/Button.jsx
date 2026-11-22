
function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
}) {
  const styles = {
    primary: "bg-teal-600 text-white hover:bg-teal-700",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
