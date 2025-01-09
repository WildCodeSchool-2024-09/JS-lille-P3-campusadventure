// import { useEffect, useState } from "react";
import "./ProfilPage.css";
import { useNavigate } from "react-router-dom";
// import type { User } from "../../types/type";

function ProfilPage() {
  const navigate = useNavigate();
  // const [user, setUser] = useState<User[]>([]);

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}/api/users`)
  //     .then((r) => r.json())
  //     .then((data: User[]) => setUser(data));
  // }, []);

  return (
    <div className="profil-page">
      <div className="profile-header">
        <img src="./public/logo.svg" alt="Logo" className="logo" />
        <img
          src=".\src\assets\images\sprite-admin-page (1).png"
          alt="sprite-admin-page"
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
          <h1 className="first-pseudo">PSEUDO FORMATEUR 1 : XXXXXX</h1>
          <h1 className="second-pseudo">PSEUDO FORMATEUR 2 : XXXXXX</h1>
          <button
            type="button"
            className="left-modification-button"
            onClick={() => navigate("/profile/modification-trainers")}
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
          <h1 className="pseudo">PSEUDO: XXXXXX</h1>
          <h1 className="password">MOT DE PASSE: XXXXX</h1>
          <h1 className="email">EMAIL: XXXXXX</h1>
          <button
            type="button"
            className="right-modification-button"
            onClick={() => navigate("/profile/modification-information")}
          >
            Modifier mes informations
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProfilPage;
