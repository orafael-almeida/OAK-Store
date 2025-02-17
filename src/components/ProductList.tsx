"use client";

import { useEffect, useState, useRef } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export interface Items {
  id: number;
  title: string;
  description?: string;
  price: string;
  available: boolean;
}

interface ProductListProps {
  searchValue: string;
  onSort: string;
  handleEditForm: () => void;
  selectItem: (item: Items) => void;
  newItem: Items | null;
}

const ITENS_MOCK = [
  {
    id: 1,
    title: "Iphone 15",
    description: "Iphone 15 novo na caixa",
    price: "5.200,00",
    available: true,
  },
  {
    id: 2,
    title: "Iphone 16",
    description: "Iphone 16 novo",
    price: "7.500,00",
    available: true,
  },
  {
    id: 3,
    title: "Iphone 14",
    description: "Iphone 17 novo",
    price: "4.600,00",
    available: false,
  },
  {
    id: 4,
    title: "Iphone XR",
    description: "Iphone XR usado",
    price: "1.800,00",
    available: true,
  },
];

const ProductList = ({
  searchValue,
  onSort,
  handleEditForm,
  selectItem,
  newItem,
}: ProductListProps) => {
  const [itemsList, setItemsList] = useState<Items[]>(ITENS_MOCK);
  const [filteredItems, setFilteredItems] = useState<Items[]>(ITENS_MOCK);
  const prevNewItemRef = useRef<Items | null>(null);

  useEffect(() => {
    if (newItem && newItem !== prevNewItemRef.current) {
      prevNewItemRef.current = newItem;
      const itemExists = itemsList.find((item) => item.id === newItem.id);
      if (itemExists) {
        const newItems = itemsList.map((item) => {
          return item.id === newItem.id ? newItem : item;
        });
        setItemsList(newItems);
      } else {
        setItemsList([...itemsList, newItem]);
      }
    }

    let filteredList = itemsList.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (onSort === "name-asc") {
      filteredList = filteredList.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    } else if (onSort === "name-desc") {
      filteredList = filteredList.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    } else if (onSort === "price-asc") {
      filteredList = filteredList.sort(
        (a, b) =>
          parseFloat(a.price.replace(/\./g, "").replace(",", ".")) -
          parseFloat(b.price.replace(/\./g, "").replace(",", "."))
      );
    } else if (onSort === "price-desc") {
      filteredList = filteredList.sort(
        (a, b) =>
          parseFloat(b.price.replace(/\./g, "").replace(",", ".")) -
          parseFloat(a.price.replace(/\./g, "").replace(",", "."))
      );
    }

    setFilteredItems(filteredList);
  }, [searchValue, onSort, itemsList, newItem]);

  function handleRemoveItem(id: number) {
    const newItemsList = itemsList.filter((item) => item.id !== id);
    setItemsList(newItemsList);
  }

  return (
    <div className="flex flex-col justify-center gap-2 drop-shadow-sm">
      {filteredItems.map((item) => (
        <div
          className="flex justify-between items-center px-3 py-3 rounded-md bg-teal-900 hover:bg-teal-500/50 border border-slate-300 drop-shadow-md"
          key={item.id}
        >
          <div className="flex flex-col w-1/3">
            <span className="font-semibold text-sm sm:text-base lg:text-xl">
              {item.title}
            </span>
            <span className="text-xs sm:text-sm lg:text-base text-zinc-400">
              {item.description}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 ">
            <span className="font-semibold text-sm sm:text-base">
              <span className="text-xs lg:text-sm text-slate-200 px-1">R$</span>
              {item.price}
            </span>
            <span
              className={`h-max px-1.5 text-xs sm:text-sm md:text-sm ${
                item.available ? "bg-emerald-400" : "bg-red-500"
              } text-sm rounded-lg`}
            >
              {item.available ? "disponível" : "indisponível"}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              className="flex h-4.5 w-4.5 sm:h-6 sm:w-6 items-center justify-center hover:text-blue-500"
              onClick={handleEditForm}
            >
              <FiEdit
                className="h-full w-full"
                onClick={() => selectItem(item)}
              />
            </button>
            <button
              className="flex h-4.5 w-4.5 sm:h-6 sm:w-6 items-center justify-center hover:text-red-500"
              onClick={() => handleRemoveItem(item.id)}
            >
              <FiTrash2 className="h-full w-full" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
