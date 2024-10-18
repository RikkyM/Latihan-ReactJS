import Table from "../Elements/Table";

const TableUS = (props) => {
  const { data } = props;
  return (
    <div className="h-full w-2/6 p-10">
      <div className="w-full h-full ">
        <h3 className="text-xl font-bold">Data</h3>
        <Table data={data} />
      </div>
    </div>
  );
};

export default TableUS;
