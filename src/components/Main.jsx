
import LanguageButton from "./LanguageButton";
import LanguageCard from "./LanguageCard";

function Main({ languages, selectedLanguage, setSelectedLanguage }) {
  return (
    <main>
      <div className="buttons">
        {languages.map(lang => (
          <LanguageButton key={lang.id} lang={lang} setSelectedLanguage={setSelectedLanguage} selectedLanguage={selectedLanguage} />
        ))}
      </div>
      <LanguageCard selectedLanguage={selectedLanguage} />
    </main>
  );
}

export default Main;