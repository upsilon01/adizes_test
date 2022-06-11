import { useTranslation } from "react-i18next";


function Question(props: any){
    const { t, i18n } = useTranslation();
    const {questionId, sendResult} = props;
    return (
        <div className="question">

            <div className="answers">
                <div>{ t(`${questionId}.title`) }</div>
                <div className="answer">
                    { t(`${questionId}.answer1`) }
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>4</option>
                        <option>8</option>
                    </select>
                </div>
                <button onClick={() => sendResult({
                    id: questionId,
                    answer0: 1,
                    answer1: 4,
                    answer2: 8,
                    answer3: 2
                })}>{ t('ok') }</button>
            </div>
        </div>
    )
}

export default Question;

