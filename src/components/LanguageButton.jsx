function LanguageButton({ lang, setSelectedLanguage, selectedLanguage }) {
    return (
      <button
        className={selectedLanguage?.id === lang.id ? "active" : ""}
        onClick={() => setSelectedLanguage(lang)}
      >
        {lang.title}
      </button>
    );
  }
  
  export default LanguageButton;