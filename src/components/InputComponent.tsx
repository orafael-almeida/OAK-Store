interface inputComponentProps {
  type: string;
  id?: string;
  maxLength?: number;
  labelText?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent = ({
  type,
  id,
  maxLength,
  labelText,
  required,
  onChange,
}: inputComponentProps) => {
  return (
    <div className="mb-5">
      <label className="block mb-2 text-sm font-medium text-white" htmlFor={id}>
        {labelText}
      </label>
      <input
        id={id}
        type={type}
        maxLength={maxLength}
        className="block w-full p-4 ps-4 text-sm text-white border border-gray-300 rounded-lg bg-primary focus:ring-emerald-500 focus:border-emerald-500 ring-1 focus:outline-none transition-colors"
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default InputComponent;
