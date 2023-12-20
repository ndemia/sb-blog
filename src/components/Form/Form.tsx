import { useEffect, useState, useRef, FormEvent } from "react";
import {
  FetchPropsInterface,
  CategoryInterface,
  FormContentInterface,
} from "../../utilities/interfaces";
import useFetch from "../../utilities/useFetch";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

const Form = () => {
  const fetchOptions: FetchPropsInterface = {
    endPoint: "/categories",
    requestConfig: {
      method: "GET",
    },
  };
  const { data, isLoading, error, updateFetchOptions, wasPostSuccessful } =
    useFetch(fetchOptions);
  const [categories, setCategories] = useState<CategoryInterface[]>([]);
  const formRef = useRef<HTMLFormElement | null>(null);
  const browseFileButton = useRef<HTMLInputElement | null>(null);
  const errorMessage = `A form should appear here but instead you see this error. ${error} to accomplish this. Reload the page to fix it.`;
  const [formContent, setFormContent] = useState<FormContentInterface>({
    title: "",
    category_id: "",
    image: null,
    content: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const blogpostData = new FormData();

    for (const [key, value] of Object.entries(formContent)) {
      blogpostData.append(key, value);
    }

    updateFetchOptions({
      endPoint: "/posts",
      requestConfig: {
        method: "POST",
        body: blogpostData,
      },
    });
  };

  useEffect(() => {
    if (data) {
      setCategories(data as CategoryInterface[]);
    }
  }, [data]);

  return (
    <>
      {error ? (
        <p>{errorMessage}</p>
      ) : wasPostSuccessful ? (
        <p>Post successful!</p>
      ) : isLoading ? (
        <Loader />
      ) : (
        <form
          className="flex flex-col font-sans"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <h2 className="mb-10 font-sans text-2xl font-bold text-sb-black">
            Plaats een blog bericht
          </h2>

          <fieldset className="mb-8">
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-bold text-sb-grey-800"
            >
              Berichtnaam
            </label>
            <input
              type="text"
              id="berichtnaam"
              name="berichtnaam"
              placeholder="Geen titel"
              className="h-10 w-full bg-sb-grey-100 pl-4 text-sm italic text-sb-grey-300 transition-all"
              onChange={(event) => {
                setFormContent({
                  ...formContent,
                  title: event.target.value.trim(),
                });
              }}
              required
            ></input>
          </fieldset>

          <fieldset className="mb-8">
            <label
              htmlFor="categorie"
              className="mb-2 block text-sm font-bold text-sb-grey-800"
            >
              Categorie
            </label>
            <select
              id="categorie"
              className="h-10 w-full appearance-none bg-sb-grey-100 bg-[url('/assets/images/chevron-down.svg')] bg-[size:14px] bg-[position:98%_center] bg-no-repeat pl-4 text-sm italic text-sb-grey-400 transition-all"
              onChange={(event) =>
                setFormContent({
                  ...formContent,
                  category_id: event.target.value,
                })
              }
              required
            >
              <option value="geen">Geen categorie</option>
              {categories.map((category, index) => (
                <option
                  key={index}
                  id={category.id.toString()}
                  value={category.id.toString()}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset className="mb-8">
            <label
              htmlFor="afbeelding"
              className="mb-2 block text-sm font-bold text-sb-grey-800"
            >
              Header afbeelding
            </label>
            <div className="relative">
              <button
                className="absolute left-[48px] top-[10px] z-[1] cursor-pointer rounded-[20px] border-0 bg-sb-grey-500 px-4 py-1 text-[0.8rem] font-light text-sb-white transition-all hover:bg-sb-grey-700 focus:bg-sb-grey-700 active:bg-sb-grey-900"
                onClick={(event) => {
                  event.preventDefault();
                  browseFileButton.current?.click();
                }}
              >
                Kies bestand
              </button>
              <input
                tabIndex={-1}
                type="file"
                id="afbeelding"
                name="afbeelding"
                className="no-repeat cursor-pointe relative h-10 w-40 bg-sb-grey-100 bg-[url('/assets/images/camera.svg')] bg-[size:1rem] bg-[position:8%_center] bg-no-repeat text-sm italic text-sb-grey-300 text-transparent transition-all file:hidden"
                accept="image/*"
                ref={browseFileButton}
                onChange={(event) =>
                  !event.target.files
                    ? setFormContent({ ...formContent, image: null })
                    : setFormContent({
                        ...formContent,
                        image: event.target.files[0],
                      })
                }
              ></input>
              {formContent.image && (
                <span className="ml-2 mt-2 block text-xs text-sb-grey-500">
                  {formContent.image.name}
                </span>
              )}
            </div>
          </fieldset>

          <fieldset className="mb-8">
            <label
              htmlFor="bericht"
              className="mb-2 block w-full text-sm font-bold text-sb-grey-800"
            >
              Bericht
            </label>
            <textarea
              id="bericht"
              name="bericht"
              className="min-h-[200px] w-full bg-sb-grey-100 p-4 text-sm text-sb-grey-300 transition-all"
              onChange={(event) =>
                setFormContent({
                  ...formContent,
                  content: event.target.value.trim(),
                })
              }
              required
            ></textarea>
          </fieldset>

          <Button text="Bericht aanmaken" />
        </form>
      )}
    </>
  );
};

export default Form;
