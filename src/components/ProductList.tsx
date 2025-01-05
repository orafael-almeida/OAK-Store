import { FiEdit, FiTrash2 } from "react-icons/fi";

const ITENS_MOCK = [
  {
    id: 1,
    title: "Iphone 15",
    description: "Iphone 15 novo",
  },
  {
    id: 2,
    title: "Iphone 16",
    description: "Iphone 16 novo",
  },
  {
    id: 3,
    title: "Iphone 17",
    description: "Iphone 17 novo",
  },
];

const ProductList = () => {
  return (
    <div className="flex flex-col justify-center gap-2 drop-shadow-sm">
      {ITENS_MOCK.map((item) => (
        <div
          className="flex items-center px-3 py-3 rounded-md bg-teal-900 border border-slate-300 drop-shadow-md"
          key={item.id}
        >
          <div className="flex-1 flex flex-col">
            <span className="font-semibold">{item.title}</span>
            <span className="text-sm text-zinc-400">{item.description}</span>
          </div>

          <div className="flex gap-2">
            <button className="flex h-6 w-6 items-center justify-center hover:text-blue-500">
              <FiEdit className="h-full w-full" />
            </button>
            <button className="flex h-6 w-6 items-center justify-center hover:text-red-500">
              <FiTrash2 className="h-full w-full" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
