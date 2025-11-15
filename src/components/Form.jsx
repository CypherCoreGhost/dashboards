import gsap from "gsap";
// import "./Form.scss";
import React, { useEffect, useRef, useState } from "react";

function handleEnterMouse(e) {
  const target = e.target;

  gsap.to(target, {
    y: -5,
    color: "#366597",
  });
}
function handleLeaveMouse(e) {
  const target = e.target;

  gsap.to(target, {
    y: 0,
    color: "#E5E7EB",
  });
}

const clickButton = (e) => {
  const target = e.target;

  gsap
    .timeline({ defaults: { duration: 0.8 } })
    .to(target, {
      scale: 1.2,
      background: "#366597",

      ease: "power1.out",
    })
    .to(target, { scale: 1, background: "transparent", ease: "power1.in" });
};

function Form({ onSubmit, mode, navigate }) {
  const effectRef = useRef();
  const textRef = useRef();
  const bodyRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  function handleMouseMove(e) {
    const affected = effectRef.current;

    const rect = e.target.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;

    const maxMove = rect.width - affected.offsetWidth;

    const x = Math.max(0, Math.min(mouseX, maxMove));

    gsap.to(affected, {
      x: x,
      scaleX: 1.1,
    });
  }

  function effectHandleLeave() {
    const element = effectRef.current;

    gsap.to(element, {
      x: 0,
      scale: 1,
      delay: 1,
      duration: 1,
    });
  }
  useEffect(() => {
    if (!bodyRef && !textRef) return;
    gsap.fromTo(
      textRef.current,
      {
        y: -10,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
      }
    );

    gsap.fromTo(
      bodyRef.current,
      {
        y: -10,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    );
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!user.email && !user.email) return;

    onSubmit(user);
  };

  let [user, setUser] = useState({ name: "", email: "", password: "" });
  function handleInputs(e) {
    const { name, value } = e.target;

    //prev pega o valor anterior atualizado
    //pega o name atribuido ao input, correspondendo aos nomes dados no estado inicial e alterando eles com os valores inseridos no input.
    setUser((prev) => ({ ...prev, [name]: value }));
    //operador spread [..prev], serve para copiar o conteudo do estado anterior e adicionar os novos valores, sem ele os campos seriam recriados, podendo ter chances de serem recriados com algum dos campos ausentes
  }
  return (
    <div className="containerForm" ref={bodyRef}>
      {/* {hasError && <Error />} */}
      <div className="content__text" ref={textRef}>
        <h1
          className="text-5xl font-bold text-gray-200"
          onMouseEnter={handleEnterMouse}
          onMouseLeave={handleLeaveMouse}
        >
          Hi User!
        </h1>

        <p className="text-[14px] text-gray-500">Welcome to</p>
      </div>
      <form onSubmit={() => submitHandler(event)} action="">
        {mode === "signup" && (
          <input
            name="name"
            type="text"
            placeholder="Name"
            ref={nameRef}
            onChange={handleInputs}
          />
        )}
        <input
          name="email"
          type="email"
          placeholder="email"
          ref={emailRef}
          onChange={handleInputs}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          ref={passRef}
          onChange={handleInputs}
        />

        <p className="self-center text-gray-500">or</p>

        <h2 className="self-center text-gray-500 text-[15px] border border-gray-400 w-[300px] h-[40px] text-center rounded-[5px] p-2">
          Login with Google
        </h2>
        <div
          className="container__btn w-[100%] 
        
        "
          onClick={clickButton}
        >
          <div
            className=" absolute self-center affected h-[30px] rounded-[10%]  w-[70px] cursor-pointer"
            ref={effectRef}
          ></div>
          <button
            className="btn relative z-10 bg-white/10 backdrop-blur-sm border border-white text-white"
            style={{
              width: "300px",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={effectHandleLeave}
          >
            Enviar
          </button>
        </div>
        {mode === "signup" && (
          <p
            className="text-[#366597] text-[12px] self-end cursor-pointer"
            onClick={navigate}
          >
            Do you have account?
          </p>
        )}
      </form>
    </div>
  );
}

export default Form;
