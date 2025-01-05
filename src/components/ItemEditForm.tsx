import React from "react";

interface setEditItemIsOpenProps {
  setEditItemIsOpen: (value: boolean) => void;
}

const ItemEditForm = ({ setEditItemIsOpen }: setEditItemIsOpenProps) => {
  return (
    <div className="py-10 z-10">
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nome do Produto
          </label>
          <input
            type="text"
            id="email"
            className="block w-full p-4 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-primary focus:ring-emerald-500 focus:border-emerald-500 ring-1 focus:outline-none transition-colors"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Descrição
          </label>
          <input
            type="text"
            id="text"
            className="block w-full p-4 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-primary focus:ring-emerald-500 focus:border-emerald-500 ring-1 focus:outline-none transition-colors"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="valor"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Valor
          </label>
          <input
            type="text"
            id="valor"
            className="block w-full p-4 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-primary focus:ring-emerald-500 focus:border-emerald-500 ring-1 focus:outline-none transition-colors"
            required
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              const numericValue = parseFloat(value);
              if (!isNaN(numericValue)) {
                const formattedValue = new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(numericValue / 100);
                e.target.value = formattedValue;
              } else {
                e.target.value = "";
              }
            }}
          />
        </div>

        <div>
          <label className="inline-flex items-center mb-5 cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Disponível para venda
            </span>
          </label>
        </div>

        <div className="w-full flex justify-between">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Salvar
          </button>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setEditItemIsOpen(false)}
          >
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemEditForm;
