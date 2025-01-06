interface ToggleComponentProps {
  text: string;
}

const ToggleComponent = ({ text }: ToggleComponentProps) => {
  return (
    <label className="inline-flex items-center mb-5 cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="relative w-11 h-6 peer-focus:outline-none rounded-full peer bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:bg-emerald-600"></div>
      <span className="ms-3 text-sm font-medium text-white">{text}</span>
    </label>
  );
};

export default ToggleComponent;
