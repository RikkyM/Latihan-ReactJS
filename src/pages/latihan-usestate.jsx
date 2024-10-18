import { useState } from "react";
import LatihanUS from "../components/Layouts/LatihanUs";

const LatihanUseState = () => {
  const initialData = JSON.parse(localStorage.getItem("data")) || [];
  console.log(initialData);

  const [data, setData] = useState(initialData);
  const submit = (e) => {
    e.preventDefault();

    if (e.target.nama.value && e.target.email.value) {
      const newData = [
        ...data,
        {
          id: data.length + 1,
          nama: e.target.nama.value,
          email: e.target.email.value,
        },
      ];

      setData(newData);

      localStorage.setItem("data", JSON.stringify(newData));

      e.target.nama.value = "";
      e.target.email.value = "";
    }
  };

  return (
    <div className="min-h-screen h-screen flex">
      <LatihanUS formSubmit={submit} data={data} />
    </div>
  );
};

export default LatihanUseState;
