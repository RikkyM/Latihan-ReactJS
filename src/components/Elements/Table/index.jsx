import Tbody from "./Tbody";

const Table = (props) => {
  const { data } = props;
  return (
    <table className="w-full mt-5">
      <thead>
        <tr className="bg-black text-white *:py-3">
          <th>No.</th>
          <th className="text-left">Nama</th>
          <th className="text-left">Email</th>
        </tr>
      </thead>
      <Tbody data={data} />
    </table>
  );
};

export default Table;
