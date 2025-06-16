import { ChevronRightIcon, TrashIcon, CheckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  const navigate = useNavigate();
  function onTaskDetails(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.length < 1 && (
          <p className="text-center">Nenhuma tarefa pendente :)</p>
        )}
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 p-2 rounded-md text-white hover:cursor-pointer flex w-full text-left items-center gap-2 ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.isCompleted && <CheckIcon />}
              {task.title}
            </button>
            <Button onClick={() => onTaskDetails(task)}>
              <ChevronRightIcon />
            </Button>
            <Button onClick={() => onTaskDelete(task.id)}>
              <TrashIcon />
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}
