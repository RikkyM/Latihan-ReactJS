const Tbody = (props) => {
  const { data } = props;

  const nama = localStorage.getItem('nama');
  const email = localStorage.getItem('email');

  return (
    <tbody>
      {data.map((item) => (
        <tr className="*:py-3 font-semibold" key={item.id}>
          <td className="text-center">{item.id}</td>
          <td>{item.nama}</td>
          <td>{item.email}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
