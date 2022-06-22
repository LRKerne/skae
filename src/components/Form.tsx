import React, { useState } from "react";
import { Questionario } from "./Steps/Questionario";
import OtherInfo from "./Steps/OtherInfo";
import PersonalInfo from "./Steps/PersonalInfo";
import Login from "./Steps/Login";
import { Admin } from "./Steps/Admin";

interface Props {
  email: String;
  password: String;
  nome: String;
  sobreNome: String;
  numeroTelefone: String;
  other: String;
  cat1Rate: Number;
  cat2Rate: Number;
  cat3Rate: Number;
  cat4Rate: Number;
  cat5Rate: Number;
  cat6Rate: Number;
}

const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState<Props>({
    email: "",
    password: "",
    nome: "",
    sobreNome: "",
    numeroTelefone: "",
    other: "",
    cat1Rate: 0,
    cat2Rate: 0,
    cat3Rate: 0,
    cat4Rate: 0,
    cat5Rate: 0,
    cat6Rate: 0,
  });

  const FormTitles = ["Login", "Quiz", "Admin"];
  const pageDisplay = () => {
    switch (page) {
      case 0: {
        return (
          <Login
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
            totalPages={FormTitles.length}
          />
        );
      }
      case 1: {
        return (
          <Questionario
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
            totalPages={FormTitles.length}
          />
        );
        // <PersonalInfo formData={formData} setFormData={setFormData} />;
      }
      case 2: {
        return (
          <Admin
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
            totalPages={FormTitles.length}
          />
        );
      }
    }
    return;
  };
  return (
    <div className="form">
      <div className="form-container">
        <div className="header">
        </div>
        <div className="body">{pageDisplay()}</div>
        <div className="footer">
          {/* <button className="quiz-contato" hidden={page === 0}>
            Contato
          </button> */}
          <button
            hidden={page < 3}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Prev
          </button>
          <button
            hidden={page < 3}
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("State:" + JSON.stringify(formData));
              } else {
                setPage(page + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
