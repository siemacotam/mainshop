import { useContext, useEffect, useState } from "react";
import { Prompt } from "react-router";
import { StoreContext } from "../../../store/StoreProvider";
import { validateEmail } from "../../../utils/validateEmail";
import MailForm from "./MailForm";

const Mail = ({ inAccount }) => {
  const { activeUser } = useContext(StoreContext);
  const [note, setNote] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [isSent, setIsSent] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);

  useEffect(() => {
    inAccount && setEmail(activeUser.email);
  }, []);

  const handleNameChange = (e) => {
    const userName = e.target.value;
    setName(userName);
  };

  const handleMailChange = (e) => {
    const userMail = e.target.value;
    setEmail(userMail);
  };

  const handleNoteChange = (e) => {
    const newNote = e.target.value;
    setNote(newNote);
    if (e.target.value) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (note && email && name) {
      if (validateEmail(email)) {
        const message = { name, email, note };
        // usersMessages.push(message)
        setName("");
        setEmail("");
        setNote("");
        setIsSent(true);
        setWrongEmail(false);
        setTimeout(() => {
          setIsSent(false);
        }, 4000);
        inAccount && setEmail(activeUser.email);
      } else {
        setWrongEmail(true);
        setTimeout(() => {
          setWrongEmail(false);
        }, 4000);
      }
    } else {
      alert("wypelnij wszystkie pola");
    }
  };

  const sentMessage = (
    <div className="text-center">
      <small className="text-success">Wiadomość wysłana!</small>{" "}
    </div>
  );

  const wrongMessage = (
    <div className="text-center">
      <small className="text-danger">Niepoprawny adress email</small>{" "}
    </div>
  );

  return (
    <div className="container ">
      <p className="text-center">Napisz do nas !</p>
      {MailForm(
        handleSubmit,
        name,
        handleNameChange,
        email,
        inAccount,
        handleMailChange,
        note,
        handleNoteChange
      )}
      <Prompt
        when={!isEmpty}
        message="Masz wpisaną wiadomość w formularzu? czy na pewno chcesz opuścic stronę ?"
      />
      {isSent && sentMessage}
      {wrongEmail && wrongMessage}
    </div>
  );
};

export default Mail;
