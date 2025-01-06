interface ButtonComponentProps {
  type: "submit" | "button";
  classNameColor: string;
  title: string;
  onClick?: (e: React.MouseEvent) => void;
}

const ButtonComponent = ({
  type,
  classNameColor,
  title,
  onClick,
}: ButtonComponentProps) => {
  return (
    <button
      type={type}
      className={`text-white ${classNameColor} focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ButtonComponent;
