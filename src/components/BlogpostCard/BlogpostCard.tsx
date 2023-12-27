import { BlogpostCardPropsInterface } from "./../../utilities/interfaces";

const BlogpostCard = ({ blogpostData }: BlogpostCardPropsInterface) => {
  const storageURL = import.meta.env.VITE_API_STORAGE_URL;
  let blogpostDate = new Date(blogpostData.created_at);

  const generateReadableDate = () => {
    let readableDate = blogpostDate
      .toISOString()
      .slice(0, 10)
      .split("-")
      .reverse()
      .join("-");
    return readableDate;
  };

  return (
    <article className="min-h-[260px] overflow-hidden rounded border-[1px] border-solid border-sb-grey-200 shadow">
      <header className="relative">
        <img
          className="max-h-16 w-full"
          src={storageURL + blogpostData.img_url}
          alt=""
        ></img>
        <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-between px-4 pb-2">
          <span className="text-[0.5rem] italic text-sb-white">
            {generateReadableDate()}
          </span>
          <span className="text-[0.5rem] italic text-sb-white">
            {blogpostData.category.name}
          </span>
        </div>
      </header>
      <div className="px-4 py-5">
        <h3 className="mb-2 w-[175px] overflow-hidden text-ellipsis whitespace-nowrap break-normal text-2xl font-bold text-sb-black">
          {blogpostData.title}
        </h3>
        <p className="break-normal text-xs leading-5 text-sb-grey-400">
          {blogpostData.content}
        </p>
      </div>
    </article>
  );
};

export default BlogpostCard;
