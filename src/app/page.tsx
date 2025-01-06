"use client";

import { useState } from "react";
import dots from "../../public/assets/images/dot-back.png";
import { FaPlus } from "react-icons/fa";
import SearchInput from "@/components/SearchInput";
import FilterSelect from "@/components/FilterSelect";
import ProductList, { Items } from "@/components/ProductList";
import ItemEditForm from "@/components/ItemEditForm";

export default function Home() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [onSort, setOnSort] = useState<string>("");
  const [editFormIsOpen, setEditItemIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Partial<Items> | null>(null);

  console.log("Item no estado: ", selectedItem);

  function handleEditForm() {
    setEditItemIsOpen((prevstate) => !prevstate);
  }

  function selectItem(item: Partial<Items> = {}) {
    setSelectedItem(item);
  }

  function cancel() {
    setSelectedItem(null);
  }

  function createItem() {
    console.log("executou o createItem");
  }

  return (
    <section className="px-5 lg2:px-10 ">
      <main className="relative bg-primary rounded-2xl h-max text-white py-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-80 min-h-[700px]">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none z-1"
          style={{
            backgroundImage: `url(${dots.src})`,
            backgroundSize: "contain",
            zIndex: 1,
          }}
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-center">
          Cadastro de Produtos
        </h1>
        <h3 className="text-slate-400 text-center text-xs md:text-base">
          Cadastre, atualize ou remova produtos
        </h3>
        <div className="z-10 relative">
          {editFormIsOpen ? (
            <ItemEditForm
              item={selectedItem as Items}
              setEditItemIsOpen={setEditItemIsOpen}
              editItem={setSelectedItem}
              cancel={cancel}
              createItem={createItem}
            />
          ) : (
            <div>
              <div className="py-2 mt-4 flex justify-end items-center z-10">
                <button
                  type="button"
                  className="flex justify-center items-center gap-2 text-white font-semibold bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br shadow-lg shadow-green-500/50 rounded-lg text-xs px-1.5 py-2.5 text-center"
                  onClick={() => {
                    handleEditForm();
                    selectItem({ id: Math.random() });
                  }}
                >
                  <FaPlus />
                  NOVO
                </button>
              </div>
              <div className="flex items-center justify-between gap-1 max-h-14 z-10">
                <SearchInput
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
                <FilterSelect
                  onSort={(sortValue: string) => setOnSort(sortValue)}
                />
              </div>

              <div className="mt-8 h-max z-10 relative">
                <ProductList
                  searchValue={searchValue}
                  onSort={onSort}
                  handleEditForm={handleEditForm}
                  selectItem={selectItem}
                  selectedItem={selectedItem}
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </section>
  );
}
