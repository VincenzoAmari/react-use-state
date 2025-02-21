function LanguageCard({ selectedLanguage }) {
    return (
      <div className="language-card">
        {selectedLanguage ? (
          <>
            <h2>{selectedLanguage.title}</h2>
            <p>{selectedLanguage.description}</p>
          </>
        ) : (
          <p>Nessun linguaggio selezionato</p>
        )}
      </div>
    );
  }
  
  export default LanguageCard;