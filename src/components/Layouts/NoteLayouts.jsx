import ButtonAdd from "../Elements/ButtonAdd";
import Card from "../Elements/Card";

const NoteLayouts = (props) => {
  const { data, handleAddNote, handleNoteChange, handleNoteDelete } = props;
  return (
    <>
      <div className="h-screen flex">
        <div className="w-1/12 flex justify-center px-5 pt-20">
          <ButtonAdd handleAddNote={handleAddNote} />
        </div>

      <div className="w-full h-full overflow-auto">
        <h1 className="text-3xl font-bold px-5 py-7 sticky top-0 bg-white">
          Notes
        </h1>
        <div className="flex gap-8 flex-wrap px-5">
          <Card data={data} handleNoteChange={handleNoteChange} handleNoteDelete={handleNoteDelete}/>
        </div>
      </div>
      </div>

    </>
  );
};

export default NoteLayouts;
