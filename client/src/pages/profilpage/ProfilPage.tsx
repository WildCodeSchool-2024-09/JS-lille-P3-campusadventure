import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import sprite from "../../assets/images/sprite-admin-page (1).png";
import EditInformations from "../../components/forms/EditInformations";
import EditTeacher from "../../components/forms/EditTeachers";
import "./ProfilPage.css";

type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  firstTeacher: string;
  secondTeacher: string;
};

function ProfilPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("Chargement...");
  const [email, setEmail] = useState("Chargement...");
  const [password, setPassword] = useState("********");
  const [firstTeacher, setfirstTeacher] = useState("Chargement...");
  const [secondTeacher, setsecondTeacher] = useState("Chargement...");
  const [showTeacherPopup, setShowTeacherPopup] = useState(false);
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const userId = 1;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/accounts/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données.");
        }
        return response.json();
      })
      .then((data: User) => {
        setUsername(data.username);
        setEmail(data.email);
        setPassword(data.password);
        setfirstTeacher(data.firstTeacher);
        setsecondTeacher(data.secondTeacher);
      })
      .catch((error) => {
        console.error("Erreur :", error);
        alert("Impossible de charger les informations utilisateur.");
      });
  }, []);

  const updateUserInfo = (
    newUsername: string,
    newEmail: string,
    newPassword: string,
  ) => {
    setUsername(newUsername);
    setEmail(newEmail);
    setPassword(newPassword);
    setShowInfoPopup(false);
  };

  const updateTeachers = (newTeacher1: string, newTeacher2: string) => {
    setfirstTeacher(newTeacher1);
    setsecondTeacher(newTeacher2);
    setShowTeacherPopup(false);
  };

  const handleClosePopup = () => {
    setShowTeacherPopup(false);
    setShowInfoPopup(false);
  };

  return (
    <div className="profil-page">
      <div className="profile-header">
        <img src={logo} alt="Logo" className="logo" />
        <img
          src={sprite}
          alt="Sprite Admin Page"
          className="sprite-admin-page"
        />
      </div>

      <div className="left-and-right-side">
        <div className="left-side">
          <h2 className="level-quest">Level 2 Quête 3</h2>
          <button
            type="button"
            className="information-button"
            onClick={() => navigate("/profile/information")}
          >
            Mes informations
          </button>
          <h2 className="first-pseudo">
            PSEUDO FORMATEUR 1 : <h3>{firstTeacher}</h3>
          </h2>
          <h2 className="second-pseudo">
            PSEUDO FORMATEUR 2 : <h3>{secondTeacher}</h3>
          </h2>
          <button
            type="button"
            className="left-modification-button"
            onClick={() => setShowTeacherPopup(true)}
          >
            Modifier mes formateurs
          </button>
        </div>

        <div className="right-side">
          <button
            type="button"
            className="button-modification-photo"
            onClick={() => navigate("/profile/modification-photo")}
          >
            MODIFIER MA PHOTO DE PROFIL
          </button>
          <h2 className="pseudo">
            PSEUDO:
            <h3>{username}</h3>
          </h2>
          <h2 className="email">
            EMAIL: <h3> {email}</h3>
          </h2>
          <h2 className="password">{password}</h2>
          <button
            type="button"
            className="right-modification-button"
            onClick={() => setShowInfoPopup(true)}
          >
            Modifier mes informations
          </button>
          <button
            type="button"
            className="game-button"
            onClick={() => navigate("/game")}
          >
            Jouer
          </button>
        </div>
      </div>

      {showTeacherPopup && (
        <div
          className="popup-overlay"
          onClick={handleClosePopup}
          onKeyUp={(e) => e.key === "Escape" && handleClosePopup()}
        >
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
            onKeyUp={(e) => e.key === "Escape" && handleClosePopup()}
          >
            <button
              type="button"
              className="close-button"
              onClick={handleClosePopup}
            >
              ×
            </button>
            <EditTeacher updateTeacherInformation={updateTeachers} />
          </div>
        </div>
      )}

      {showInfoPopup && (
        <div
          className="popup-overlay"
          onClick={handleClosePopup}
          onKeyUp={(e) => e.key === "Escape" && handleClosePopup()}
        >
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
            onKeyUp={(e) => e.key === "Escape" && handleClosePopup()}
          >
            <button
              type="button"
              className="close-button"
              onClick={handleClosePopup}
            >
              ×
            </button>
            <EditInformations updateUserInformation={updateUserInfo} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilPage;
