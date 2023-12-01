import Button from "../Button/Button";

function chichi() {
  console.log("hey");
}

const Form = () => {
  return (
    <form className="flex flex-col font-sans">
      <h2 className="mb-10 font-sans text-2xl font-bold text-sb-black">
        Post a blog post
      </h2>

      <fieldset className="mb-8">
        <label
          htmlFor="title"
          className="mb-2 block text-sm font-bold text-sb-grey-800"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="No name"
          className="h-10 w-full bg-sb-grey-100 pl-4 text-sm italic text-sb-grey-300"
          required
        ></input>
      </fieldset>

      <fieldset className="mb-8">
        <label
          htmlFor="category"
          className="mb-2 block text-sm font-bold text-sb-grey-800"
        >
          Category
        </label>
        <select
          id="category"
          className="h-10 w-full appearance-none bg-sb-grey-100 bg-[url('/assets/images/chevron-down.svg')] bg-[size:14px] bg-[position:98%_center] bg-no-repeat pl-4 text-sm italic text-sb-grey-400"
          required
        >
          <option value="geen">Category</option>
        </select>
      </fieldset>

      <fieldset className="mb-8">
        <label
          htmlFor="image"
          className="mb-2 block text-sm font-bold text-sb-grey-800"
        >
          Header image
        </label>
        <div className="relative">
          <button className="absolute left-[42px] top-[7px] z-[1] cursor-pointer rounded-[20px] border-0 bg-sb-grey-500 px-4 py-1.5 text-[0.8rem] font-light text-sb-white hover:bg-sb-grey-700 focus:bg-sb-grey-700 active:bg-sb-grey-900">
            Choose file
          </button>
          <input
            tabIndex={-1}
            type="file"
            id="image"
            name="image"
            className="no-repeat cursor-pointe relative h-10 w-36 bg-sb-grey-100 bg-[url('/assets/images/camera.svg')] bg-[size:16px] bg-[position:5%_center] bg-no-repeat text-sm italic text-sb-grey-300 text-transparent file:hidden"
            accept="image/*"
          ></input>
          {}
        </div>
      </fieldset>

      <fieldset className="mb-8">
        <label
          htmlFor="text"
          className="mb-2 block w-full text-sm font-bold text-sb-grey-800"
        >
          Text
        </label>
        <textarea
          id="text"
          name="text"
          className="min-[heigth:175px] w-full bg-sb-grey-100 p-4 text-sm italic text-sb-grey-300"
          required
        ></textarea>
      </fieldset>

      <Button text="Create blogpost" onClick={chichi}></Button>
    </form>
  );
};

export default Form;
