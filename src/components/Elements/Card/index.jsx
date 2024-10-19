const Card = (props) => {
  const { data, handleNoteChange, handleNoteDelete } = props;

  return (
    <>
      {data.map((item) => (
        <div
          className={`w-72 h-72 ${item.warna} rounded-lg flex flex-col group`}
          key={item.id}
        >
          <textarea
            value={item.note}
            id={`note_${item.id}`}
            onChange={(e) => handleNoteChange(item.id, e.target.value)}
            className="resize-none flex-1 w-full bg-transparent p-3 overflow-auto focus:outline-none"
            maxLength="290"
          ></textarea>
          <div className="py-3 px-5 flex items-center justify-between">
            <span>{item.created_at}</span>
            <button
              onClick={() => handleNoteDelete(item.id)}
              className="text-red-500 font-semibold hidden group-hover:block"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
