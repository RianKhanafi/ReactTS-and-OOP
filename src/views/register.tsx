import React from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import RegisterForm from "../parts/RegisterForm";
const Register: React.FC = () => {
  return (
    <>
      <section className="container mx-auto pt-10">
        <Header onLight />
      </section>
      <section className="container mx-auto pt-10">
        <RegisterForm />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Register;
