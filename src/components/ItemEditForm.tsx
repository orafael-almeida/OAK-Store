import InputComponent from "./InputComponent";
import ToggleComponent from "./ToggleComponent";
import ButtonComponent from "./ButtonComponent";
import { Items } from "./ProductList";

interface setEditItemIsOpenProps {
  item: Items;
  setEditItemIsOpen: (value: boolean) => void;
  editItem: (item: Partial<Items>) => void;
  createItem: () => void;
  cancel: () => void;
}

const ItemEditForm = ({
  item,
  setEditItemIsOpen,
  editItem,
  createItem,
  cancel,
}: setEditItemIsOpenProps) => {
  function handleCreateItem(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createItem();
  }

  function currencyFormatter(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.replace(/\D/g, "");
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      const formattedValue = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(numericValue / 100);
      e.target.value = formattedValue;
      return e.target.value;
    } else {
      e.target.value = "";
    }
  }

  return (
    <div className="py-10 z-10">
      <form className="max-w-sm mx-auto" onSubmit={handleCreateItem}>
        <InputComponent
          type="text"
          id="name"
          labelText="Nome do produto"
          maxLength={20}
          required
          value={item.title ?? ""}
          onChange={(e) => editItem({ ...item, title: e.target.value })}
        />
        <InputComponent
          id="description"
          type="text"
          labelText="Descrição breve"
          maxLength={40}
          value={item.description ?? ""}
          onChange={(e) => editItem({ ...item, description: e.target.value })}
        />
        <InputComponent
          id="price"
          type="text"
          labelText="Valor"
          maxLength={13}
          required
          value={item.price ?? ""}
          onChange={(e) => {
            currencyFormatter(e);
            const formattedPrice = e.target.value.replace(/[^0-9.,]/g, "");
            editItem({ ...item, price: formattedPrice });
          }}
        />

        <div>
          <ToggleComponent
            text="Disponível para venda"
            checked={item.available ?? false}
            onChange={(checked) => editItem({ ...item, available: checked })}
          />
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
            onClick={() => (setEditItemIsOpen(false), cancel())}
          />
        </div>
      </form>
    </div>
  );
};

export default ItemEditForm;
