import React from "react";

const Acceuil = () => {
  const openPopup = () => {
    alert("Popup ouvert!");
  };

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="logo">
          <img src="/assets/logo.svg" alt="derum logo" className="px-2 logo" />
        </div>
        <nav>
          <ul className="md:flex space-x-6">
            <li>
              <a href="/" className="yel">
                Accueil
              </a>
            </li>
            <li>
              <a href="/" className="yel">
                Documentation
              </a>
            </li>
            <li>
              <a href="/" className="yel">
                À propos
              </a>
            </li>
          </ul>
        </nav>
        <button className="night bgyellow text-black font-semibold hover:text-white">
          <img src="/assets/night.svg" alt="derum logo" className="px-2 h-9" />
        </button>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 yel items-center justify-center inline-flex text-center">
            <img src="/assets/language.svg" alt="language icon" />
            Langue
          </button>
          <button onClick={openPopup} className="px-4 py-2 bgyellow text-white rounded-lg">
            Télécharger
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex justify-between items-center py-16">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="text md:text-5xl mb-4">
            Explorer le monde du numérique avec votre portefeuille derum
          </h1>
          <div className="flex flex-column md:flex-row gap-4">
            <button
              onClick={openPopup}
              className="bouton items-center justify-center inline-flex text-center bgyellow text-black font-semibold hover:text-white"
            >
              <img src="/assets/phone_mobile.svg" alt="phone mobile icon" className="ico" />
              Télécharger<br />L'application
            </button>
            <button
              onClick={openPopup}
              className="bouton items-center justify-center inline-flex text-center bgyellow text-black font-semibold hover:text-white"
            >
              <img src="/assets/extension.svg" alt="extension icon" className="ico" />
              Télécharger<br />L'extension
            </button>
          </div>
        </div>
        <div className="animation-container text-center">
          <img
            src="/assets/cryptobro.svg"
            alt="Hero illustration"
            className="cryboy"
            id="crypto"
          />
        </div>
      </section>

      {/* Wallet Section */}
      <section id="propo" className="Wallet flex justify-between bgy text-black text-right">
        <img src="/assets/sow.svg" alt="Phone Icon" className="phoico" />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Déposez facilement de<br />l’argent depuis les opérateurs mobile money
          </h2>
          <p className="text-lg">
            Bénéficiez d’une application mobile et d’une expérience de bureau<br />
            optimales grâce à des outils puissants et faciles à utiliser qui vous<br />
            accompagnent tout au long de votre voyage.
          </p>
        </div>
      </section>

      {/* Security Section */}
      <section className="Security flex justify-between bg-black text-white text-left">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Protégez votre confidentialité et restez en sécurité
          </h2>
          <p className="text-lg">
            Nous protégeons votre portefeuille,<br /> mais ne contrôlons pas ni n'avons accès à vos clés privées ou à votre phrase secrète,<br /> vous êtes le/la seul(e) à pouvoir le faire.
          </p>
        </div>
        <img src="/assets/ibou.svg" alt="wallet Icon" className="walico" />
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 text-center bg-gray-100">
        <div className="space-x-6 text-gray-700">
          <a href="/" className="yel">Portefeuille</a>
          <a href="/" className="yel">Fonctionnalités</a>
          <a href="/" className="yel">À propos</a>
          <a href="/" className="yel">Documentation</a>
        </div>
        <p className="mt-6 text-gray-500">DERUM - 2024</p>
        <p className="text-sm text-green-500">• Operating On Stellar</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="/" className="yel">
            <img src="/assets/logo-instagram.svg" alt="Instagram" />
          </a>
          <a href="/" className="yel">
            <img src="/assets/logo-facebook.svg" alt="Facebook" />
          </a>
          <a href="/" className="yel">
            <img src="../../assets/Vector.svg" alt="Vector" />
          </a>
          <a href="/" className="yel">
            <img src="/assets/logo-twitter.svg" alt="Twitter" />
          </a>
          <a href="/" className="yel">
            <img src="/assets/linkedin-logo.svg" alt="LinkedIn" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Acceuil;
