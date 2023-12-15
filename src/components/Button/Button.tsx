interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-fit cursor-pointer self-center rounded-[20px] bg-sb-primary-100 px-12 py-2 text-sm font-bold tracking-[.5px] text-sb-white transition-all hover:bg-sb-primary-200 focus:bg-sb-primary-200 active:bg-sb-primary-300"
    >
      {text}
    </button>
  );
};

export default Button;
