import LatihanUSForm from "../Fragments/LatihanUSForm";
import TableUS from "../Fragments/TableUS";

const LatihanUS = (props) => {
  const { formSubmit, data } = props;
  return (
    <>
      <div className="h-full w-2/3 flex items-center justify-center">
        <div className="max-w-xs w-full">
          <h1 className="text-3xl font-bold">Form</h1>
          <p className="font-medium mt-1.5 mb-4 text-sm">
            Latihan input data menggunakan useState()
          </p>
          <LatihanUSForm formSubmit={formSubmit} />
        </div>
      </div>
      <TableUS data={data}/>
    </>
  );
};

export default LatihanUS;
