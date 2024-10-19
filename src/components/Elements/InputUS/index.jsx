import Input from "./Input";
import Label from "./Label";

const InputLatihanUseState = (props) => {
  const { name, type, placeholder, label, autoComplete } = props;
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} autoComplete={autoComplete} />
    </div>
  );
};

export default InputLatihanUseState;
