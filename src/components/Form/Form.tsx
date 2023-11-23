const Form = () => {
  return (
    <form className="flex flex-col font-sans">
      <h2 className="mb-10 font-sans text-2xl font-bold text-sb-black">
        Post a blog post
      </h2>

      <fieldset className="mb-8">
        <label
          htmlFor="title"
          className="text-sb-grey-800 mb-2 block text-sm font-bold"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="No name"
          className="text-sb-grey-300 bg-sb-grey-100 text-sm italic"
          required
        ></input>
      </fieldset>

      <fieldset className="mb-8">
        <label
          htmlFor="category"
          className="text-sb-grey-800 mb-2 block text-sm font-bold"
        >
          Category
        </label>
        <select id="category" required>
          <option value="geen">Category</option>
        </select>
      </fieldset>

      <fieldset className="mb-8">
        <label
          htmlFor="image"
          className="text-sb-grey-800 mb-2 block text-sm font-bold"
        >
          Header image
        </label>
        <div>
          <button>Choose file</button>
          <input
            tabIndex={-1}
            type="file"
            id="image"
            name="image"
            accept="image/*"
          ></input>
          {}
        </div>
      </fieldset>

      <fieldset className="mb-8">
        <label
          htmlFor="text"
          className="text-sb-grey-800 mb-2 block text-sm font-bold"
        >
          Text
        </label>
        <textarea id="text" name="text" required></textarea>
      </fieldset>

      <button>Submit</button>
    </form>
  );
};

export default Form;
