import { useState } from 'react'
import Field from "./components/field";
import Translate from "./components/translate";
import Languages from "./components/language";

function App() {
  const [language, setLanguage] = useState('es')
  const [text, setText] = useState('');

  return (
    <>
      <Field onChange={setText}/>
      <Languages language={language} onLanguageChange={setLanguage}/>
      <hr />
      <Translate text={text} language={language}/>

    </>
  )
}

export default App
