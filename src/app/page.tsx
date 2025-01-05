import { FaPlus } from "react-icons/fa";
import dots from "../../public/assets/images/dot-back.png";
import SearchInput from "@/components/SearchInput";
import FilterSelect from "@/components/FilterSelect";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <section className="px-5 lg2:px-10 ">
      <main className="relative bg-primary rounded-2xl h-max text-white py-10 px-4 min-h-[540px]">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none z-1"
          style={{
            backgroundImage: `url(${dots.src})`,
            backgroundSize: "contain",
            zIndex: 1,
          }}
        />
        <h1 className="text-2xl uppercase text-center">Cadastro de Produtos</h1>
        <h3 className="text-slate-400 text-center text-xs">
          Cadastre, atualize ou remova produtos
        </h3>
        <div className="py-2 mt-4 flex justify-end items-center z-10">
          <button
            type="button"
            className="flex justify-center items-center gap-2 text-white font-semibold bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br shadow-lg shadow-green-500/50 rounded-lg text-xs px-1.5 py-2.5 text-center"
          >
            <FaPlus />
            NOVO
          </button>
        </div>
        <div className="flex items-center justify-between gap-1 max-h-14 z-10">
          <SearchInput />
          <FilterSelect />
        </div>

        <div className="mt-8  h-max z-10 relative">
          <ProductList />
        </div>
      </main>
    </section>
  );
}
