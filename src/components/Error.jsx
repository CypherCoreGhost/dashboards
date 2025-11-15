import React, { useEffect, useRef } from "react";
import style from "./Error.module.scss";
import gsap from "gsap";

function Error() {
  const errorRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      errorRef.current,
      {
        y: -20,
      },
      {
        y: 0,
        duration: 1,
      }
    );
  });
  return (
    <div className={`${style.error} text-gray-200`} ref={errorRef}>
      Error
    </div>
  );
}

export default Error;
