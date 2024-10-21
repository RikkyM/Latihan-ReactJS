import { useEffect, useState } from "react";

const items = [
  {
    id: 1,
    nama: "PS5",
    harga: 3544000,
  },
  {
    id: 2,
    nama: "PS5 Pro",
    harga: 10800000,
  },
  {
    id: 3,
    nama: "Xbox Series X",
    harga: 6899000,
  },
];

const LatihanUseEffect = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(JSON.parse(localStorage.getItem("data")) || []);
    console.log('test');
  }, []);

  useEffect(() => {
    if (datas.length) {
      
      localStorage.setItem("data", JSON.stringify(datas));
    }
  }, [datas])

  const handleAddData = (id) => {
    if (datas.find((data) => data.id === id)) {
      setDatas(
        datas.map((data) =>
          data.id === id ? { ...data, qty: data.qty + 1 } : data
        )
      );
    } else {
      setDatas([...datas, { id, qty: 1 }]);
    }
  };

  return (
    <>
      <div className="h-screen flex">
        <div className="flex-1 flex gap-10 justify-center">
          {items.map((item) => (
            <button
              onClick={() => handleAddData(item.id)}
              className="bg-blue-500 font-bold text-white rounded-md h-max p-5"
              key={item.id}
            >
              {item.nama}
            </button>
          ))}
        </div>
        <div className="flex-1">
          <table className="w-full">
            <thead>
              <tr>
                <th>No.</th>
                <th>Nama</th>
                <th>Qty</th>
                <th>Harga</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => {
                const getItems = items.find((item) => item.id === data.id);
                return (
                  <tr key={data.id} className="*:text-center">
                    <td>{index + 1}</td>
                    <td>{getItems.nama}</td>
                    <td>{data.qty}</td>
                    <td>{data.qty * getItems.harga}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LatihanUseEffect;
