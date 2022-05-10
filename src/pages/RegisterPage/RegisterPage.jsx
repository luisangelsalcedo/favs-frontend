import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Btn,
  Logo,
  Preloading,
  TitleField,
  ToggleMode,
} from "../../components";

import { RegisterForm } from "./RegisterForm";
import { useFetchAndLoad } from "../../hooks";
import "./registerPage.scss";

export const RegisterPage = () => {
  const [isForm, setIsForm] = useState(true);
  const { loading, callEndpoint } = useFetchAndLoad();

  const handleLoadForm = () => {
    setIsForm((s) => !s);
  };

  return (
    <div className="register">
      {loading ? (
        <Preloading />
      ) : (
        <>
          <ToggleMode />
          <div className="container">
            <Logo />
            <TitleField text="Crea tu cuenta para continuar" center />

            {!isForm ? (
              <>
                <Btn
                  label="Continúa con tu correo"
                  btn="outline"
                  fa="envelope"
                  onClick={handleLoadForm}
                  className="btn-block"
                />
              </>
            ) : (
              <RegisterForm />
            )}

            <div>
              ¿Ya tienes cuenta? <Link to="/login">Inicia sessión</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
