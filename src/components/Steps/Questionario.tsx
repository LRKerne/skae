import React, { useEffect, useState } from "react";
import LogoNoBg from "../../resources/OnlyLogo-removebg-preview.png";
import api from "../../api";

export interface Question {
  id: string;
  name: string;
  description?: any;
  createdAt: Date;
  updatedAt: Date;
  categoryId: string;
}

export interface QuestionObject {
  id: string | undefined;
  categoryId: string | undefined;
  name: string;
  questions: Question[];
  resposta: number;
}

export const Questionario = ({
  formData,
  setFormData,
  page,
  setPage,
  totalPages,
}: any) => {
  const [quizPage, setQuizPage] = useState(0);
  const [questionsCat1, setQuestionsCat1] = useState<QuestionObject[]>();
  const [questionsCat2, setQuestionsCat2] = useState<QuestionObject[]>();
  const [questionsCat3, setQuestionsCat3] = useState<QuestionObject[]>();
  const [questionsCat4, setQuestionsCat4] = useState<QuestionObject[]>();
  const [questionsCat5, setQuestionsCat5] = useState<QuestionObject[]>();
  const [questionsCat6, setQuestionsCat6] = useState<QuestionObject[]>();

  useEffect(() => {
    async function getQuestionsCat1() {
      const { data } = await api.get<QuestionObject[]>(
        `question?category.name=Category 1`
      );
      setQuestionsCat1(data);
    }
    async function getQuestionsCat2() {
      const { data } = await api.get<QuestionObject[]>(
        `question?category.name=Category 2`
      );
      setQuestionsCat2(data);
    }
    async function getQuestionsCat3() {
      const { data } = await api.get<QuestionObject[]>(
        `question?category.name=Category 2`
      );
      setQuestionsCat3(data);
    }
    async function getQuestionsCat4() {
      const { data } = await api.get<QuestionObject[]>(
        `question?category.name=Category 2`
      );
      setQuestionsCat4(data);
    }
    async function getQuestionsCat5() {
      const { data } = await api.get<QuestionObject[]>(
        `question?category.name=Category 2`
      );
      setQuestionsCat5(data);
    }
    async function getQuestionsCat6() {
      const { data } = await api.get<QuestionObject[]>(
        `question?category.name=Category 2`
      );
      setQuestionsCat6(data);
    }
    getQuestionsCat1();
    getQuestionsCat2();
    getQuestionsCat3();
    getQuestionsCat4();
    getQuestionsCat5();
    getQuestionsCat6();
    return;
  }, []);
  const FormTitles = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
  ];
  const pageDisplay = () => {
    switch (quizPage) {
      case 0: {
        return (
          <div className="">
            {/* <div></div> */}
            {questionsCat1?.map((question, index) => {
              return (
                <div key={Math.random() + index * 2}>
                  <div id={question.categoryId}>
                    <label htmlFor="QuestionName">{question.name}</label>
                    <br />
                    <input type="radio" value="1" name={question.id}></input><span>1</span>
                    <input type="radio" value="2" name={question.id}></input><span>2</span>
                    <input type="radio" value="3" name={question.id}></input><span>3</span>
                    <input type="radio" value="4" name={question.id}></input><span>4</span>
                    <input type="radio" value="5" name={question.id}></input><span>5</span>
                  </div>
                </div>
              );
            })}
          </div>
        );
      }
      case 1: {
        return (
          <div>
            {/* <div>Category 2</div> */}
            {questionsCat2?.map((question, index) => {
              return (
                <div key={Math.random() + index * 2}>
                  <div id={question.categoryId}>
                    <label htmlFor="QuestionName">{question.name}</label>
                    <br />
                    <input type="radio" value="1" name={question.id}></input><span>1</span>
                    <input type="radio" value="2" name={question.id}></input><span>2</span>
                    <input type="radio" value="3" name={question.id}></input><span>3</span>
                    <input type="radio" value="4" name={question.id}></input><span>4</span>
                    <input type="radio" value="5" name={question.id}></input><span>5</span>
                  </div>
                </div>
              );
            })}
          </div>
        );
      }
      case 2: {
        return (
          <div>
            {/* <div>Category 3</div> */}
            {questionsCat3?.map((question, index) => {
              return (
                <div key={Math.random() + index * 2}>
                  <div id={question.categoryId}>
                    <label htmlFor="QuestionName">{question.name}</label>
                    <br />
                    <input type="radio" value="1" name={question.id}></input><span>1</span>
                    <input type="radio" value="2" name={question.id}></input><span>2</span>
                    <input type="radio" value="3" name={question.id}></input><span>3</span>
                    <input type="radio" value="4" name={question.id}></input><span>4</span>
                    <input type="radio" value="5" name={question.id}></input><span>5</span>
                  </div>
                </div>
              );
            })}
          </div>
        );
      }
      case 3: {
        return (
          <div>
            {/* <div>Category 4</div> */}
            {questionsCat4?.map((question, index) => {
              return (
                <div key={Math.random() + index * 2}>
                  <div id={question.categoryId}>
                    <label htmlFor="QuestionName">{question.name}</label>
                    <br />
                    <input type="radio" value="1" name={question.id}></input><span>1</span>
                    <input type="radio" value="2" name={question.id}></input><span>2</span>
                    <input type="radio" value="3" name={question.id}></input><span>3</span>
                    <input type="radio" value="4" name={question.id}></input><span>4</span>
                    <input type="radio" value="5" name={question.id}></input><span>5</span>
                  </div>
                </div>
              );
            })}
          </div>
        );
      }
      case 4: {
        return (
          <div>
            {/* <div>Category 5</div> */}
            {questionsCat5?.map((question, index) => {
              return (
                <div key={Math.random() + index * 2}>
                  <div id={question.categoryId}>
                    <label htmlFor="QuestionName">{question.name}</label>
                    <br />
                    <input type="radio" value="1" name={question.id}></input><span>1</span>
                    <input type="radio" value="2" name={question.id}></input><span>2</span>
                    <input type="radio" value="3" name={question.id}></input><span>3</span>
                    <input type="radio" value="4" name={question.id}></input><span>4</span>
                    <input type="radio" value="5" name={question.id}></input><span>5</span>
                  </div>
                </div>
              );
            })}
          </div>
        );
      }
      case 5: {
        return (
          <div>
            {/* <div>Category 6</div> */}
            {questionsCat6?.map((question, index) => {
              return (
                <div key={Math.random() + index * 2}>
                  <div id={question.categoryId}>
                    <label htmlFor="QuestionName">{question.name}</label>
                    <br />
                    <input type="radio" value="1" name={question.id}></input><span>1</span>
                    <input type="radio" value="2" name={question.id}></input><span>2</span>
                    <input type="radio" value="3" name={question.id}></input><span>3</span>
                    <input type="radio" value="4" name={question.id}></input><span>4</span>
                    <input type="radio" value="5" name={question.id}></input><span>5</span>
                  </div>
                </div>
              );
            })}
          </div>
        );
      }
    }
    return;
  };

  return (
    <div className="quiz-container">
      <div className="quiz-side-bar">
        <figure className="quiz-logo">
          <img src={LogoNoBg} alt="SKAE LOGO" />
          <span>SKAE</span>
        </figure>
        <div className="quiz-side-icons">
          <div className="quiz-side-icons-item">
            <button
              className="quiz-form-step-btn"
              onClick={() => {
                if (page !== 0) {
                  setPage(0);
                }
              }}
            ></button>
            <span>Login</span>
          </div>
          <div className="quiz-side-icons-item">
            <button
              className="quiz-form-step-btn-active"
              onClick={() => {
                if (page !== 1) {
                  setPage(1);
                }
              }}
            ></button>
            <span>Questionario</span>
          </div>
          <div className="quiz-side-icons-item">
            <button
              className="quiz-form-step-btn"
              onClick={() => {
                if (page !== 2) {
                  setPage(2);
                }
              }}
            ></button>
            <span>Contato</span>
          </div>
        </div>
      </div>
      <div className="quiz-body">
        <div className="quiz-card">
          <div className="header">
            <div className="quiz-form-steps">
              <button className="quiz-form-step" style={{background: quizPage === 0 ? "linear-gradient(180deg, rgba(255, 187, 200, 0) 0%, #FFBBC8 100%)":"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #cecfec 100%)"}}>1</button>
              <div className="arrow right"></div>
              <button className="quiz-form-step"style={{background: quizPage === 1 ? "linear-gradient(180deg, rgba(255, 187, 200, 0) 0%, #FFBBC8 100%)":"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #cecfec 100%)"}}>2</button>
              <div className="arrow right" ></div>
              <button className="quiz-form-step" style={{background: quizPage === 2 ? "linear-gradient(180deg, rgba(255, 187, 200, 0) 0%, #FFBBC8 100%)":"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #cecfec 100%)"}}>3</button>
              <div className="arrow right"></div>
              <button className="quiz-form-step" style={{background: quizPage === 3 ? "linear-gradient(180deg, rgba(255, 187, 200, 0) 0%, #FFBBC8 100%)":"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #cecfec 100%)"}}>4</button>
              <div className="arrow right"></div>
              <button className="quiz-form-step" style={{background: quizPage === 4 ? "linear-gradient(180deg, rgba(255, 187, 200, 0) 0%, #FFBBC8 100%)":"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #cecfec 100%)"}}>5</button>
              <div className="arrow right"></div>
              <button className="quiz-form-step" style={{background: quizPage === 5 ? "linear-gradient(180deg, rgba(255, 187, 200, 0) 0%, #FFBBC8 100%)":"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #cecfec 100%)"}}>6</button>
            </div>
            <div className="quiz-form-title"> De 1 a 5, escolha a opcao que melhor condiz com sua situacao atual</div>
            <hr/>
          </div>
          <div className="quiz-questions">{pageDisplay()}</div>
        </div>
        <div className="quiz-button-group">
          <button
            hidden={quizPage === 0}
            onClick={() => {
              setQuizPage(quizPage - 1);
            }}
          >
            Voltar
          </button>
          <button
            hidden={quizPage === FormTitles.length - 1}
            onClick={() => {
              setQuizPage(quizPage + 1);
            }}
          >
            Proximo
          </button>
          <button
            hidden={quizPage !== FormTitles.length - 1}
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Proximo
          </button>
        </div>
      </div>
    </div>
  );
};

//   return (
//       <C.Container>
//         <MapQuestions categoryName='Category 1'></MapQuestions>
//         {/* <MapQuestions categoryName="Category 2"></MapQuestions>
//         <MapQuestions categoryName="Category 3"></MapQuestions>
//         <MapQuestions categoryName="Category 4"></MapQuestions>
//         <MapQuestions categoryName="Category 5"></MapQuestions>
//         <MapQuestions categoryName="Category 6"></MapQuestions> */}
//       </C.Container>
//   );
// }
