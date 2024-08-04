import { BlogpostCardPropsInterface } from "./../../utilities/interfaces";

const BlogpostCard = ({ blogpostData }: BlogpostCardPropsInterface) => {
  const storageURL = import.meta.env.VITE_API_STORAGE_URL;
  const blogpostDate = new Date(blogpostData.created_at);

  const generateReadableDate = () => {
    const readableDate = blogpostDate
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
      </header>
      <div className="px-4 py-2">
        <h3 className="mb-1 w-[175px] overflow-hidden text-ellipsis whitespace-nowrap break-normal text-2xl font-bold text-sb-black">
          {blogpostData.title}
        </h3>
        <p className="break-all text-xs leading-5 text-sb-grey-800">
          {blogpostData.content}
        </p>
      </div>
      <div className="flex flex-row justify-between p-4">
        <span
          className="text-xs italic text-sb-grey-600"
          aria-description="Post date"
        >
          {generateReadableDate()}
        </span>
        <span
          className="text-xs italic text-sb-grey-600"
          aria-description="Post category"
        >
          {blogpostData.category.name}
        </span>
      </div>
    </article>
  );
};

export default BlogpostCard;
