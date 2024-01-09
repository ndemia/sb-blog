interface ButtonPropsInterface {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonPropsInterface) => {
  return (
    <button
      aria-description="Load more posts"
      onClick={onClick}
      className="mt-8 w-fit cursor-pointer self-center whitespace-nowrap rounded-md bg-sb-primary-100 px-12 py-2 text-sm font-bold tracking-[.5px] text-sb-white transition-all hover:bg-sb-primary-200 focus:bg-sb-primary-200 active:bg-sb-primary-300 active:text-sb-grey-300"
    >
      {text}
    </button>
  );
};

export default Button;
