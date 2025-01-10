import "./HomePage.css";
import "./SignInButton.css";
import "./SubscribeButton.css";

import { useState } from "react";
import SubscribeButton from "../../components/buttons/SubscribeButton";
import LoginForm from "../../components/forms/LoginForm";

function HomePage() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const toggleLoginForm = () => {
    setShowLoginForm((isFormVisible) => !isFormVisible);
  };
  const handleLogin = () =>
    // email: string,
    // password: string
    {
      // console.log("Tentative de connexion avec :", email, password);
      //
    };
  return (
    <div className="home-page">
      <div className="logo-container">
        <img
          className="logo"
          src="./src/assets/images/logo.svg"
          alt="Code Quest Academy"
        />
      </div>
      <div className="home-page-text">
        <p>
          Code Quest Academy est un jeu où vous progressez en résolvant des
          énigmes de programmation, avec des requêtes SQL, pour débloquer des
          compétences et affronter des défis de plus en plus complexes.
          Transformez l’apprentissage du code en une aventure épique et devenez
          un maître du développement !
        </p>
      </div>
      <div className="home-page-buttons-container">
        <button
          type="button"
          onClick={toggleLoginForm}
          className="sign-in-button"
        >
          {showLoginForm ? "Fermer" : "Se connecter"}
        </button>
        {/* <SignInButton onClick={toggleLoginForm} /> */}
        <SubscribeButton />
      </div>

      {/* Affiche le formulaire si l'état et visible */}
      {showLoginForm && <LoginForm onSubmit={handleLogin} />}

      <div className="home-page-footer">
        Développé par les dev's de la {/**/}
        <a
          href="https://www.wildcodeschool.com/"
          className="wcs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wild Code School
        </a>
      </div>
    </div>
  );
}

export default HomePage;
