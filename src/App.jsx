
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import languages from "./data/LanguagesDetail";
import "./App.css";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div>
      <Header />
      <Main languages={languages} selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
    </div>
  );
}

export default App;