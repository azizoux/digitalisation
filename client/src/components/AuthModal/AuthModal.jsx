import React, { useState } from "react";
import "./AuthModal.css";

const AuthModal = ({ setShowAuthModal }) => {
  const [currentState, setCurrentState] = useState("register");
  return (
    <div className="auth-modal">
      <form className="auth-modal-content">
        <div className="auth-modal-title">
          <p className="title">
            {currentState === "register" ? "S'enregistrer" : "Se connecter"}
          </p>
          <p className="cross" onClick={() => setShowAuthModal(false)}>
            X
          </p>
        </div>
        <div className="auth-modal-inputs">
          {currentState === "register" ? (
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          ) : null}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button>
          {currentState === "register" ? "Creer compte" : "Se connecter"}
        </button>
        <div className="auth-modal-condition">
          <input type="checkbox" />
          <p>By continuing, i agree the terms of use & privacy policy</p>
        </div>
        {currentState === "register" ? (
          <p>
            Vous avez deja un compte?{" "}
            <span onClick={() => setCurrentState("login")}>Login</span>
          </p>
        ) : (
          <p>
            Vous n'avez pas de compte?{" "}
            <span onClick={() => setCurrentState("register")}>Sign Up</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default AuthModal;
