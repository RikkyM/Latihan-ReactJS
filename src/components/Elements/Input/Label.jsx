const Label = (props) => {
    const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="block font-semibold mb-2">
      {children}
    </label>
  );
};

export default Label;
