import React from "react";
import LoginForm from "../parts/LoginForm";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
const Login: React.FC = () => {
  return (
    <>
    <section className="container mx-auto pt-10">
      <Header onLight/>
    </section>
      <section className="container mx-auto pt-10">
        <LoginForm />
      </section>
      <section>
        <Footer/>
      </section>
    </>
  );
};

export default Login;
