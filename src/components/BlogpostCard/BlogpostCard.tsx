import { BlogpostCardProps } from "./../../utilities/interfaces";

const BlogpostCard = ({ blogpostData }: BlogpostCardProps) => {
  const storageURL = import.meta.env.VITE_API_STORAGE_URL;

  return (
    <article className="overflow-hidden shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
      <header className="relative">
        <img
          className="max-h-16 w-full"
          src={storageURL + blogpostData.img_url}
          alt=""
        ></img>
        <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-between px-4 pb-2">
          <span className="text-[0.5rem] text-sb-white">
            {blogpostData.created_at}
          </span>
          <span className="text-[0.5rem] text-sb-white">
            {blogpostData.category.name}
          </span>
        </div>
      </header>
      <div className="px-4 pb-4 pt-2">
        <h3 className="mb-2 text-2xl font-bold text-sb-black">
          {blogpostData.title}
        </h3>
        <p className="text-xs text-sb-grey-400">{blogpostData.content}</p>
      </div>
    </article>
  );
};

export default BlogpostCard;
