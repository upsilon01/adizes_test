import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useTranslation } from 'react-i18next';
import Question from './components/question/question';
import Questionnaire from './components/questionnaire/questionnaire';


function App() {
  const [count, setCount] = useState(0)
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
  
      <header className="App-header">
        <div>
          <button onClick={() => { i18n.changeLanguage('en') }}>English</button>
          <button onClick={() => { i18n.changeLanguage('he') }}>עברית</button>
        </div>
        <p>{t('welcome')} </p>
      
       <Questionnaire></Questionnaire>
      </header>
    </div>
  )
}

export default App
