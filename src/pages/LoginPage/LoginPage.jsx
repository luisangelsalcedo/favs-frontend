import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Btn,
  LoadingMain,
  Logo,
  TitleField,
  ToggleMode,
} from "../../components";
import { LoginForm } from "./LoginForm";
import { useFetchAndLoad } from "../../hooks";

import "./loginPage.scss";

export const LoginPage = () => {
  const [isForm, setIsForm] = useState(true);
  const { loading, callEndpoint } = useFetchAndLoad();

  const handleLoadForm = () => {
    setIsForm((s) => !s);
  };

  return (
    <div className="login">
      {loading ? (
        <LoadingMain />
      ) : (
        <>
          <ToggleMode />
          <div className="container">
            <Logo />
            <TitleField text="Inicia sessión para continuar" center />

            {!isForm ? (
              <>
                <Btn
                  label="Iniciar sesión"
                  btn="outline"
                  fa="envelope"
                  onClick={handleLoadForm}
                  className="btn-block"
                />
              </>
            ) : (
              <LoginForm />
            )}

            <div>
              ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
