export default function Button(props) {
  return (
    <button
      {...props}
      className="bg-slate-400 p-2 rounded-md text-white hover:cursor-pointer"
    >
      {props.children}
    </button>
  );
}
