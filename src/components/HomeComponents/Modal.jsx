import { useEffect, useRef } from 'react';
import { createDashboard } from '../../api/fetchDashboard';
import './Modal.scss';
import gsap from 'gsap';
import { useState } from 'react';
import { XCircleIcon } from '@phosphor-icons/react';

function Modal({ setNewDashboard, createDash, setCreateDash, newDashboard }) {
  const formModalRef = useRef();

  function handleCreateDashboard(e) {
    e.preventDefault();
    createDashboard(newDashboard);
  }
  console.log(createDash);

  function handleClickBtnClose(e) {
    const target = e.currentTarget;

    gsap.to(target, {
      backgroundColor: 'red',
    });

    if (createDash !== false) {
      gsap.fromTo(
        formModalRef.current,
        {
          y: 0,
          opacity: 1,
        },
        {
          y: -10,
          opacity: 0,
        }
      );

      setTimeout(() => setCreateDash(null), 300);
    }
  }

  const handleInputsModal = (e) => {
    const { name, value } = e.target;
    let newValue = value.includes(' ') ? value.split(' ') : value;

    const convert = (v) => {
      return !isNaN(v) && v.trim() !== '' ? Number(v) : v;
    };

    if (Array.isArray(newValue)) {
      newValue = newValue.map(convert);
    } else {
      newValue = convert(value);
    }

    setNewDashboard((prev) => {
      if (['data', 'label', 'backgroundColor'].includes(name)) {
        return {
          ...prev,
          datasets: [
            {
              ...prev.datasets[0],
              [name]: newValue,
            },
          ],
        };
      }

      return {
        ...prev,
        [name]: newValue,
      };
    });
  };

  useEffect(() => {
    if (createDash !== false) {
      gsap.fromTo(
        formModalRef.current,
        {
          y: -10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        }
      );
    }
  }, [createDash]);
  return (
    <div className="w-[100%] h-[100%] fixed modal__container">
      <div
        ref={formModalRef}
        className="form__modal absolute justify-self-center mt-10 bg-slate-300 w-[400px] h-[300px] rounded-md flex justify-center flex-col gap-2 p-4"
      >
        <form className="gap-4">
          <input
            onChange={handleInputsModal}
            className="input__modal"
            type="text"
            name="desc"
            placeholder="Description"
          />
          <input
            onChange={handleInputsModal}
            className="input__modal"
            type="text"
            name="id"
            placeholder="id"
          />
          <input
            onChange={handleInputsModal}
            className="input__modal"
            type="text"
            name="labels"
            placeholder="labels ( colunas )"
          />
          <input
            onChange={handleInputsModal}
            className="input__modal"
            type="text"
            name="label"
            placeholder="Name of theme"
          />
          <input
            onChange={handleInputsModal}
            className="input__modal"
            type="text"
            name="data"
            placeholder="dados ( separados por space )"
          />
          <input
            onChange={handleInputsModal}
            className="input__modal"
            type="text"
            name="backgroundColor"
            placeholder="color to bars"
          />
          <button
            className="btn-createDashboard"
            onClick={handleCreateDashboard}
          >
            create
          </button>
        </form>
        <button
          onClick={handleClickBtnClose}
          className=" rounded-full bg-red-400 w-[30px] h-[30px] justify-center items-center flex"
        >
          <XCircleIcon size={22} className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default Modal;
