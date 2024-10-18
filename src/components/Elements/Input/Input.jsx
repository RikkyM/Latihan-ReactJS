const Input = (props) => {
  const { type, name, placeholder, autoComplete = "off" } = props;
  return (
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      className="border rounded text-sm px-3 py-2 w-full"
      autoComplete={autoComplete}
    />
  );
};

export default Input;
