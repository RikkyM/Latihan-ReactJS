import Button from "../components/Elements/Button";

const NoteAppPage = (props) => {
  const tekan = (e) => {
    e.preventDefault();

    e.target.judul.value && console.log(e.target.judul.value);

    const checkLocal = JSON.parse(localStorage.getItem('note-app')) || [];

    localStorage.setItem(
      "note-app",
      JSON.stringify([...checkLocal, {
        id: Date.now(),
        judul: "test" + Date.now(),
      }])
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xs w-full">
        <form onSubmit={tekan}>
          <div className="mb-3">
            <label htmlFor="judul" className="block mb-2 font-bold text-lg">
              Judul
            </label>
            <input
              className="px-3 py-2 text-sm border rounded-md w-full"
              type="text"
              name="judul"
              id="judul"
              placeholder="Masukkan Judul..."
            />
          </div>
          <Button type="submit">Tekan</Button>
        </form>
      </div>
    </div>
  );
};

export default NoteAppPage;
