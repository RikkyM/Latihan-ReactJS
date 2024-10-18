import Button from "../Elements/Button";
import InputLatihanUseState from "../Elements/Input";

const LatihanUSForm = (props) => {
  const { formSubmit } = props;
  return (
    <form onSubmit={formSubmit}>
      <InputLatihanUseState
        name="nama"
        label="Nama"
        placeholder="Masukkan Nama..."
        type="text"
      />
      <InputLatihanUseState
        name="email"
        label="Email"
        placeholder="example@mail.com"
        type="email"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default LatihanUSForm;
