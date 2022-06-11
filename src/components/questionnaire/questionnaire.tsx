import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";
import { QuestionResult } from "../../_models/question.model";
import Question from "../question/question";



function isValid(result: QuestionResult){
    return [
        result.answer0,
        result.answer1,
        result.answer2,
        result.answer3,
    ].reduce((a,b) => a+b) == 15;
}

function getLocalStorageData(): QuestionResult[]{
    const value: string = localStorage.getItem('data') || JSON.stringify([]);
    return JSON.parse(value);
}

function addResult(result: QuestionResult){
    const data: QuestionResult[] = getLocalStorageData();
    data.push(result);
    localStorage.setItem('data', JSON.stringify(data));
}

function clearResult() {
    localStorage.setItem('data', JSON.stringify([]));
}

function calculateResult() {
    const result = getLocalStorageData();
    let P = 0, A = 0, E = 0, I = 0;
    result.forEach(q => {
        P += q.answer0;
        A += q.answer1;
        E += q.answer2;
        I += q.answer3;
    })
    console.log('P: ', P)
    console.log('A: ', A)
    console.log('E: ', E)
    console.log('I: ', I)
}

function getCurrentQuestion(): number{
    const currentValue = getLocalStorageData().length;
    return currentValue;
}

function handleResult(result: QuestionResult, setQuestionNumber: Dispatch<SetStateAction<number>>){
    if(!isValid(result)){
        alert('answer is not valid!')
        return;
    }
    console.log(result);
    addResult(result);
    const questionNum = getCurrentQuestion()
    if(questionNum > 4 ) {
        calculateResult();
        return;
    }
    setQuestionNumber(questionNum)
    
}

function Questionnaire(){
    const { t, i18n } = useTranslation();
    const [questionNumber, setquestionNumber] = useState(0)
    
    return (
        <div>   
            <Question 
                questionId={`question${questionNumber}`} 
                sendResult={(q: QuestionResult) => handleResult(q, setquestionNumber) }>
            </Question>

             <button onClick={_ => {clearResult(); setquestionNumber(0);} }> { t('clear_test') } </button>
        </div>
    )
}

export default Questionnaire;