import React from "react";
import InputComponent from "./InputComponent";
import ToggleComponent from "./ToggleComponent";
import ButtonComponent from "./ButtonComponent";

interface setEditItemIsOpenProps {
  setEditItemIsOpen: (value: boolean) => void;
}

const ItemEditForm = ({ setEditItemIsOpen }: setEditItemIsOpenProps) => {
  return (
    <div className="py-10 z-10">
      <form className="max-w-sm mx-auto">
        <InputComponent
          type="text"
          id="name"
          labelText="Nome do produto"
          maxLength={20}
          required
        />
        <InputComponent
          id="description"
          type="text"
          labelText="Descrição breve"
          maxLength={40}
        />
        <InputComponent
          id="price"
          type="text"
          labelText="Valor"
          maxLength={13}
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

        <div>
          <ToggleComponent text="Disponível para venda" />
        </div>

        <div className="w-full flex justify-between">
          <ButtonComponent
            type="submit"
            title="Salvar"
            classNameColor="bg-emerald-700 hover:bg-emerald-800"
          />
          <ButtonComponent
            type="button"
            title="Voltar"
            classNameColor="bg-slate-700 hover:bg-slate-600"
            onClick={() => setEditItemIsOpen(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default ItemEditForm;
