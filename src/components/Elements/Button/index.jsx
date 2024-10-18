const Button = (props) => {
  const { type, children } = props;
  return (
    <button
      type={type}
      className="bg-green-600 w-full h-10 rounded-md font-semibold text-white"
    >
      {children}
    </button>
  );
};

export default Button;
