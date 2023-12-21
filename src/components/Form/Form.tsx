import { useEffect, useState, useRef, FormEvent, ChangeEvent } from "react";
import {
  FetchPropsInterface,
  CategoryInterface,
  FormContentInterface,
  ErrorsInterface,
} from "../../utilities/interfaces";
import useFetch from "../../utilities/useFetch";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

const Form = () => {
  // Categories needed for the form
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
  const [errors, setErrors] = useState<ErrorsInterface>({
    title: "",
    category_id: "",
    image: "",
    content: "",
  });
  const [formContent, setFormContent] = useState<FormContentInterface>({
    title: "",
    category_id: "",
    image: null,
    content: "",
  });

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;

    // Set the input's content
    setFormContent({
      ...formContent,
      [name]: value.trim(),
    });

    // File upload input has no useful value, so we check for files
    if ("files" in event.target && event.target.files !== null) {
      let fileList = event.target.files as FileList;
      setFormContent({
        ...formContent,
        [name]: fileList[0],
      });
    }

    console.log(formContent);

    // Clear errors when the input is being edited
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const blogpostData = new FormData();

    // Form validation
    // Create array of with the IDs of the current empty inputs, by checking if the formContent (that contains all inputs' content) is an empty string
    const emptyInputs = Object.keys(formContent).filter(
      (input) => !formContent[input as keyof typeof formContent],
    );

    // If there is any empty input at all
    if (emptyInputs.length > 0) {
      const errorMessages: ErrorsInterface = {
        title: "Een titel invoeren.",
        category_id: "Selecteer een categorie.",
        image: "Selecteer een afbeelding.",
        content: "Scrijf een bericht.",
      };

      // Create an object where each empty input is associated with an error message
      setErrors({
        ...emptyInputs.reduce(
          (acc, input) => ({
            ...acc,
            [input]:
              errorMessages[input as keyof ErrorsInterface] ||
              "Dit veld is verplicht.",
          }),
          {},
        ),
      } as ErrorsInterface);
      return;
    }

    // Add the form's content into the FormData which is the format that the API accepts
    for (const [key, value] of Object.entries(formContent)) {
      blogpostData.append(key, value);
    }

    // Make the fetch
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
              className="mb-2 inline-block text-sm font-bold text-sb-grey-800"
            >
              Berichtnaam
            </label>
            {errors.title && (
              <span className="text-sb-red mb-2 ml-4 inline-block text-xs font-bold tracking-wider">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f20d0d"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 inline-block align-text-bottom"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                {errors.title}
              </span>
            )}
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Geen titel"
              minLength={1}
              maxLength={255}
              className={`h-10 w-full border-[1px] bg-sb-grey-100 pl-4 text-sm italic text-sb-grey-300 transition-all ${
                errors.title
                  ? "border-sb-red border-solid"
                  : "border-transparent"
              }`}
              onChange={handleChange}
            ></input>
          </fieldset>

          <fieldset className="mb-8">
            <label
              htmlFor="category_id"
              className="mb-2 inline-block text-sm font-bold text-sb-grey-800"
            >
              Categorie
            </label>
            {errors.category_id && (
              <span className="text-sb-red mb-2 ml-4 text-xs font-bold tracking-wider">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f20d0d"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 inline-block align-text-bottom"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                {errors.category_id}
              </span>
            )}
            <select
              id="category_id"
              name="category_id"
              className={`h-10 w-full appearance-none border-[1px] bg-sb-grey-100 bg-[url('/assets/images/chevron-down.svg')] bg-[size:14px] bg-[position:98%_center] bg-no-repeat pl-4 text-sm italic text-sb-grey-400 transition-all ${
                errors.category_id
                  ? "border-sb-red border-solid"
                  : "border-transparent"
              }`}
              onChange={handleChange}
            >
              <option value="">Geen categorie</option>
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
              htmlFor="image"
              className="mb-2 inline-block text-sm font-bold text-sb-grey-800"
            >
              Header afbeelding
            </label>
            {errors.image && (
              <span className="text-sb-red mb-2 ml-4 text-xs font-bold tracking-wider">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f20d0d"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 inline-block align-text-bottom"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                {errors.image}
              </span>
            )}
            <div className="relative flex items-center">
              <button
                className="absolute left-[48px] top-[8px] z-[1] cursor-pointer rounded-[20px] border-0 bg-sb-grey-500 px-4 py-1 text-[0.8rem] font-light text-sb-white transition-all hover:bg-sb-grey-700 focus:bg-sb-grey-700 active:bg-sb-grey-900"
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
                id="image"
                name="image"
                className={`no-repeat cursor-pointe relative h-10 w-40 border-[1px] bg-sb-grey-100 bg-[url('/assets/images/camera.svg')] bg-[size:1rem] bg-[position:8%_center] bg-no-repeat text-sm italic text-sb-grey-300 text-transparent transition-all file:hidden ${
                  errors.image
                    ? "border-sb-red border-solid"
                    : "border-transparent"
                }`}
                accept="image/*"
                ref={browseFileButton}
                onChange={handleChange}
              ></input>
              {formContent.image && (
                <span className="ml-2 inline-block text-xs text-sb-black">
                  {formContent.image.name}
                </span>
              )}
            </div>
          </fieldset>

          <fieldset className="mb-8">
            <label
              htmlFor="content"
              className="mb-2  inline-block text-sm font-bold text-sb-grey-800"
            >
              Bericht
            </label>
            {errors.content && (
              <span className="text-sb-red mb-2 ml-4 text-xs font-bold tracking-wider">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f20d0d"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 inline-block align-text-bottom"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                {errors.content}
              </span>
            )}
            <textarea
              id="content"
              name="content"
              minLength={1}
              maxLength={255}
              className={`min-h-[200px] w-full border-[1px] bg-sb-grey-100 p-4 text-sm text-sb-grey-300 transition-all ${
                errors.content
                  ? "border-sb-red border-solid"
                  : "border-transparent"
              }`}
              onChange={handleChange}
            ></textarea>
          </fieldset>

          <Button text="Bericht aanmaken" />
        </form>
      )}
    </>
  );
};

export default Form;
