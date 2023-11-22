const Form = () => {
  return (
    <form>
      <h2>Plaats een blog bericht</h2>

      <fieldset>
        <label htmlFor="berichtnaam">Berichtnaam</label>
        <input
          type="text"
          id="berichtnaam"
          name="berichtnaam"
          placeholder="Geen naam"
          className="form__input"
          required
        ></input>
      </fieldset>

      <fieldset>
        <label htmlFor="categorie">Categorie</label>
        <select id="categorie" required>
          <option value="geen">Geen categorie</option>
        </select>
      </fieldset>

      <fieldset>
        <label htmlFor="afbeelding">Header afbeelding</label>
        <div className="form__input__wrapper">
          <button className="form__button--file">Kies bestand</button>
          <input
            tabIndex={-1}
            type="file"
            id="afbeelding"
            name="afbeelding"
            accept="image/*"
            className="form__input form__input--file"
          ></input>
          {}
        </div>
      </fieldset>

      <fieldset className="form__group">
        <label htmlFor="bericht" className="form__label">
          Bericht
        </label>
        <textarea
          id="bericht"
          name="bericht"
          className="form__textarea"
          required
        ></textarea>
      </fieldset>

      <button>Submit</button>
    </form>
  );
};

export default Form;
