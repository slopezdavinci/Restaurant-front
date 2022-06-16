import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../../../core/hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { removeError, setError } from "../../../redux/actions/ui";
import Recurso1 from "../../../../assets/img/logos/Recurso1.png";
import { startRegister } from "../../../redux/actions/auth";

export const UserRegisterScreen = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, lastname, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid(true)) {
      dispatch( startRegister(name, lastname, email, password));
      navigate("/*",{ replace: true });
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("El nombre es requerido"));
      return false;
    } else if (lastname.trim().length === 0) {
      dispatch(setError("El apellido es requerido"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("El email no es valido"));
      return false;
    } else if (password !== password2) {
      dispatch(setError("La contraseñas no coinciden"));
      return false;
    } else {
      dispatch(removeError());
      return true;
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div
          className="fondo-pre-form flex mx-auto shadow"
          style={{ width: 1400, height: 800 }}
        >
          <div className="row mx-auto my-auto">
            <div className="col-sm-12 ml-5 mt-5 mb-5 mr-5 my-auto">
              <Link to="/">
                <img src={Recurso1} className="my-auto" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="row  max-w-md w-full space-y-8 bg-gray-50 mt-5 mb-5 mr-5 rounded">
            <div className="col-sm-12 my-auto mx-auto">
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                ¡Bienvenido a MiResto!
              </h2>
            </div>
            <form
              className="mt-8 space-y-6 pb-5 mx-auto mr-5 ml-5"
              action="#"
              method="POST"
              onSubmit={handleRegister}
            >
              <p className="mb-5 text-center h5 text-indigo-600">
                ¡Registrate!
              </p>
              {msgError && <div className="auth__alert-error">{msgError}</div>}
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <p className="mt-2 text-sm text-indigo-600">Nombre</p>
                  <input
                    id="name"
                    type="name"
                    required
                    className="inputfocus appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Nombre"
                    name="name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <p className="mt-2 text-sm text-indigo-600">Apellido</p>
                  <input
                    id="lastname"
                    type="name"
                    required
                    className="inputfocus appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Apellido"
                    name="lastname"
                    autoComplete="off"
                    value={lastname}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <p className="mt-2 text-sm text-indigo-600">Email</p>
                  <input
                    id="email-address"
                    type="email"
                    required
                    className="inputfocus appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <p className="mt-2 text-sm text-indigo-600">Contraseña</p>
                  <input
                    id="password"
                    type="password"
                    required
                    className="inputfocus appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Contraseña"
                    name="password"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <p className="mt-2 text-sm text-indigo-600">
                    Repita contraseña
                  </p>
                  <input
                    id="password2"
                    type="password"
                    required
                    className="inputfocus appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Repita contraseña"
                    name="password2"
                    autoComplete="off"
                    value={password2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white button-style focus:outline-none focus:ring-2  focus:ring-indigo-500"
                onClick={handleRegister}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Registrarse
              </button>

              <div className="text-sm">
                <Link
                  to="/auth/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  ¿Ya estas registrado?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
