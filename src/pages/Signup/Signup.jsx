import { Link, useNavigate } from "react-router-dom";
import "./Signup.scss";
import { useRef } from "react";
import Form from "../../components/Form";
import { useHover } from "../../hooks/useHover";
import { useMouseMove } from "../../hooks/useMouseMove";
import Error from "../../components/Error";
import { signUp } from "../../api/signUp";

// function handleEnterMouse(e) {
//   const target = e.target;

//   gsap.to(target, {
//     y: -5,
//     color: "#c53535",
//   });
// }
// function handleLeaveMouse(e) {
//   const target = e.target;

//   gsap.to(target, {
//     y: 0,
//     color: "#E5E7EB",
//   });
// }

function Signup() {
  const navigate = useNavigate();
  function handleNavigateLogin() {
    navigate("/login");
  }

  const hoverRef = useRef();
  const bodyRef = useRef();

  async function createUser(userInfos) {
    try {
      const data = await signUp(userInfos);
      console.log("entra");
      console.log("Criado com sucesso", data);
      navigate("/home");

      // setHasError(false);
    } catch (err) {
      console.log(err);
    }
  }
  useHover(hoverRef);
  useMouseMove(bodyRef);

  // useEffect(() => {
  //   gsap.fromTo(
  //     textRef.current,
  //     {
  //       y: -10,
  //       opacity: 0,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 2,
  //     }
  //   );

  //   gsap.fromTo(
  //     bodyRef.current,
  //     {
  //       y: -10,
  //       opacity: 0,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //     }
  //   );
  // }, []);
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center container__all">
      <div className="container " ref={bodyRef}>
        <div
          className="containerImage flex justify-end items-start pr-[60px]"
          ref={hoverRef}
        >
          <button className="text-white mt-[20px] rounded-[20px] border-[1.8px] border-gray-100 h-30 p-1 w-[90px] font-light text-center join-us">
            Join us
          </button>
        </div>

        <Form
          onSubmit={createUser}
          navigate={handleNavigateLogin}
          mode="signup"
        />
      </div>
    </div>
  );
}

export default Signup;
