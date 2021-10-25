const MailForm = (
  handleSubmit,
  name,
  handleNameChange,
  email,
  inAccount,
  handleMailChange,
  note,
  handleNoteChange
) => {
  return (
    <form
      className="d-flex justify-content-center flex-column"
      onSubmit={handleSubmit}
    >
      <div className="form-group mx-5">
        <label>Imię</label>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          className="form-control"
          placeholder="Wpisz swoje imię"
        />
      </div>
      <div className="form-group mx-5">
        <label>Email</label>
        <input
          value={email}
          disabled={inAccount}
          onChange={handleMailChange}
          type="email"
          className="form-control"
          placeholder="wpisz swój adres email"
        />
      </div>
      <div className="form-group mx-5">
        <textarea
          value={note}
          onChange={handleNoteChange}
          rows="5"
          cols="33"
          type="text"
          className="form-control"
          placeholder="Wpisz treść wiadomości"
        />
      </div>
      <button className="mx-5 btn btn-primary" type="submit">
        Wyślij
      </button>
    </form>
  );
};

export default MailForm;
