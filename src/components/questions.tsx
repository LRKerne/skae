import React, { useEffect, useState } from "react";
import api from "../api"

type Props = {
  categoryName: string;
};
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

export const MapQuestions =(categoryName: Props) => {
  const [questionsCat1, setQuestionsCat1] = useState<QuestionObject[]>();
  const [questionsCat2, setQuestionsCat2] = useState<QuestionObject[]>();


  // const handleRadioClick=(e:React.ChangeEvent<HTMLInputElement>):void=>{
  //   set answers
  // }

  useEffect(() => {
    let ignore = false; 
    async function getQuestionsCat1() {
      const { data } = await api.get<QuestionObject[]>(
        `question?category.name=Category 1`
      );
      if (!ignore) setQuestionsCat1(data);
    }
    async function getQuestionsCat2() {
      const { data } = await api.get<QuestionObject[]>(
        `question?category.name=Category 2`
      );
      if (!ignore) setQuestionsCat2(data);
    }
    getQuestionsCat1();
    getQuestionsCat2();
    return () => { ignore = true };
  }, []);

return (
    <form onSubmit={(e: React.SyntheticEvent)=>{
      e.preventDefault();
      console.log(e)
    }}>
      <div>Category 1</div>
      {questionsCat1?.map((question, index) => {
        return (
        <div key={Math.random() + index * 2}>
              <div id={question.categoryId}> 
                <label htmlFor="QuestionName">{question.name}</label><br />
                <input type="radio" value="1" name={question.id}></input>
                <input type="radio" value="2" name={question.id}></input>
                <input type="radio" value="3" name={question.id}></input>
                <input type="radio" value="4" name={question.id}></input>
                <input type="radio" value="5" name={question.id}></input>
              </div>
          </div>
        );
      })}
      <div>Category 2</div>
      {questionsCat2?.map((question, index) => {
        return (
        <div key={Math.random() + index * 2}>
              <div id={question.categoryId}>
                <label htmlFor="QuestionName">{question.name}</label><br />
                <input type="radio" value="1" name={question.id}></input>
                <input type="radio" value="2" name={question.id}></input>
                <input type="radio" value="3" name={question.id}></input>
                <input type="radio" value="4" name={question.id}></input>
                <input type="radio" value="5" name={question.id}></input>
              </div>
          </div>
        );
      })}
      <input type="submit" name="submitCat1" value="Get Selected Values"></input>
      <button>Anterior</button>
      <button>Proximo</button>
    </form>
  );

  
}