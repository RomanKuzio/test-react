import { useState } from "react";
import Button from "../../../components/button";
import Dropdown from "../../../components/dropdown";
import Input from "../../../components/input";
import TextArea from "../../../components/text-area";
import styles from "../index.module.scss";
const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    subject: "",
  });
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [phoneNumberValid, setPhoneNumberValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);
  const [subjectValid, setSubjectValid] = useState(true);
  const [formValid, setFormValid] = useState(false);

  const validateField = (fieldName, value) => {
    let fieldValidationErrors = formErrors;
    let emailValidD = emailValid;
    let nameValidD = nameValid;
    let phoneNumberValidD = phoneNumberValid;
    let messageValidD = messageValid;
    let subjectValidD = subjectValid;

    switch (fieldName) {
      case "Email":
        emailValidD = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "Phone number":
        phoneNumberValidD = value.length == 14;
        fieldValidationErrors.phoneNumber = phoneNumberValidD
          ? ""
          : "field is required";
        break;
      case "Message":
        messageValidD = value.length > 0;
        fieldValidationErrors.message = messageValidD
          ? ""
          : "field is required";
        break;
      case "Subject":
        subjectValidD = value.length > 0;
        fieldValidationErrors.subject = subjectValidD
          ? ""
          : "field is required";
        break;
      case "Name":
        nameValidD = value.length > 0;
        fieldValidationErrors.name = nameValidD ? "" : "field is required";
        break;
      default:
        break;
    }

    setFormErrors(fieldValidationErrors);
    setNameValid(nameValidD);
    setEmailValid(emailValidD);
    setMessageValid(messageValidD);
    setSubjectValid(subjectValidD);
    setPhoneNumberValid(phoneNumberValidD);
    setFormValid(
      nameValidD &&
        emailValidD &&
        subjectValidD &&
        messageValidD &&
        phoneNumberValidD
    );
  };

  return (
    <>
      <form
        className={styles.contactForm}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div style={{ width: "49%" }}>
          <Input
            name="name"
            title="Name"
            placeholder="E.g. John Anderson"
            onChange={(e) => {
              setName(e.target.value), validateField("Name", e.target.value);
            }}
          />
        </div>
        <div style={{ width: "49%" }}>
          <Input
            name="email"
            title="Email"
            placeholder="E.g. john.anderson@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
              validateField("Email", e.target.value);
            }}
          />
        </div>
        <div style={{ width: "49%" }}>
          <Dropdown
            title={`I'm interested in`}
            placeholder="Choose subject"
            onChange={(e) => {
              setSubject(e.target.value);
              validateField("Subject", e.target.value);
            }}
          />
        </div>
        <div style={{ width: "49%" }}>
          <Input
            name="phone_number"
            title="Phone number"
            placeholder="E.g. (212) 555-555"
            onChange={(e) => {
              var x = e.target.value
                .replace(/\D/g, "")
                .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
              e.target.value = !x[2]
                ? x[1]
                : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
              setPhoneNumber(e.target.value);
              validateField("Phone number", e.target.value);
            }}
          />
        </div>
        <div style={{ width: "100%" }}>
          <TextArea
            title="Message"
            placeholder="Enter your message"
            onChange={(e) => {
              setMessage(e.target.value);
              validateField("Message", e.target.value);
            }}
          />
        </div>
        <Button
          text="SEND"
          style={styles.button}
          action={() => console.log("send")}
          disabled={!formValid}
        />
      </form>
      <FormErrors formErrors={formErrors} />
    </>
  );
};

export default ContactUsForm;

const FormErrors = ({ formErrors }) => (
  <div className={styles.errors}>
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <span key={i}>
            {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}{" "}
            {formErrors[fieldName]}
          </span>
        );
      } else {
        return "";
      }
    })}
  </div>
);
