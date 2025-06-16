import { useState } from "react";
import Input from "./Input";

export default function AddTask({ onTaskAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="Digite o título da tarefa"
      ></Input>
      <Input
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      ></Input>
      <button
        onClick={() => {
          if (!title.trim() || !description.trim())
            return alert("Preencha o título e a descrição da tarefa");
          onTaskAdd(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium hover:cursor-pointer"
      >
        Adicionar
      </button>
    </div>
  );
}
