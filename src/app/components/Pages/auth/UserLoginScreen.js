import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startLogin } from "../../../redux/actions/auth";
import { useForm } from "../../../../core/hooks/useForm";
import { removeError, setError } from "../../../redux/actions/ui";
import validator from "validator";
import Recurso1 from "../../../../assets/img/logos/Recurso1.png";
import { useValidateUser } from "../../../../core/hooks/useValidateUser";

export const UserLoginScreen = () => {
  const dispatch = useDispatch();

  const navigate= useNavigate();

  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "dasd@gmail.com",
    password: "",
  });

  const { email, password } = formValues;

  const {checkUser}=useValidateUser();

  const handleLogin = async(e) => {
    e.preventDefault();
    if (isFormValid(true)) {
      const user= await checkUser(email, password);
      user &&
      dispatch(startLogin(user));
      console.log(user);
      if(user.isAdmin === true){
        navigate("/admin/*", { replace: true });
      }else{
        navigate("/*", { replace: true });
      }
    }
  };  

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError("El email no es valido"));
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
              onSubmit={handleLogin}
            >
              <p className="mb-5 text-center h5 text-indigo-600">
                Inicia sesión para continuar
              </p>
              {msgError && <div className="auth__alert-error">{msgError}</div>}
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <p className="mt-2 text-sm text-indigo-600">Email</p>
                  <input
                    id="email-address"
                    type="email"
                    required
                    className="inputfocus appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
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
                    className="inputfocus appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    name="password"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white button-style focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleLogin}
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
                Ingresar
              </button>              

              <div className="flex items-center justify-between">
                <div className="text-sm items-center">
                <Link
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  to="/underdevelopment"
                >
                  ¿Olvidaste tu contraseña?
                </Link>                 
                </div>
              </div>

              <div className="text-sm">
                <Link
                  to="/auth/register"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Crearse una nueva cuenta
                </Link>
              </div>
              <div></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
