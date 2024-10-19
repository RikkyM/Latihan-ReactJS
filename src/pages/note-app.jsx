import { useState } from "react";
import NoteLayouts from "../components/Layouts/NoteLayouts";

const NoteAppPage = () => {
  const initialData = JSON.parse(localStorage.getItem("note")) || [];
  const [note, setNote] = useState(initialData);

  const colors = ["bg-orange-400", "bg-yellow-300", "bg-purple-500", "bg-sky-400"];

  const tanggal = new Date();

  const formatTanggal = tanggal.toLocaleString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const handleAddNote = (e) => {
    e.preventDefault();

    const data = [
      ...note,
      {
        id: initialData.length + 1,
        note: "",
        warna: colors[Math.floor(Math.random() * colors.length)],
        created_at: formatTanggal,
      },
    ];

    setNote(data);
    localStorage.setItem("note", JSON.stringify(data));
  };

  const handleNoteChange = (id, value) => {
    const updateNote = note.map(item =>
      item.id === id ? { ...item, note: value } : item
    );
    setNote(updateNote);
    localStorage.setItem("note", JSON.stringify(updateNote));
  };

  const handleNoteDelete = (id) => {
    const deleteNote = note.filter(item => item.id !== id);

    setNote(deleteNote)
    localStorage.setItem('note', JSON.stringify(deleteNote));
  }

  return (
    <>
      <NoteLayouts data={note} handleAddNote={handleAddNote} handleNoteChange={handleNoteChange} handleNoteDelete={handleNoteDelete}/>
    </>
  );
};

export default NoteAppPage;
