const ButtonAdd = (props) => {
    const { handleAddNote } = props
  return (
    <button
      onClick={handleAddNote}
      className="bg-black size-12 rounded-full text-white font-bold p-3"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-full"
        viewBox="0 0 16 16"
      >
        <path
          fill="currentColor"
          d="M8.25 3a.5.5 0 0 1 .5.5v3.75h3.75a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8.75v3.75a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5V8.75H3.5a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5h3.75V3.5a.5.5 0 0 1 .5-.5z"
        />
      </svg>
    </button>
  );
};

export default ButtonAdd;
