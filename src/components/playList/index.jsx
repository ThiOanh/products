import React, { useCallback, useMemo, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./sign-in.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const REGISTER_STEP = {
  EMAIL_STEP: 1,
  INFO_STEP: 2,
  LOGIN_STEP: 3,
  SUCCESS_STEP: 4,
};

function Register(props) {
  const [currentStep, setCurrentStep] = useState(REGISTER_STEP.EMAIL_STEP);
  const navigate = useNavigate();

  const validationEmail = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
    }),

    onSubmit: (values) => {
      // step 1: call Api and verify email
      // step 2: nếu thành công thì  chuyển sang step tiếp theo
      // step 2: nếu thất bại => hiển thị lỗi
      // setCurrentStep(REGISTER_STEP.INFO_STEP);
      setCurrentStep((step) => step + 1);
    },
  });

  const onSubmitAsync = async (data) => {
    const url = "https://batch-293-0-nodejs.onrender.com/admin/employees/login";
    
    try {
      // Promise

      const response = await axios.post(url, data);
      localStorage.setItem("token", response.data.token);
      navigate('/');
    } catch (err) {
      console.error(err);
      console.log("Login thất bại");
    }
  };

  const validationInfo = useFormik({
    initialValues: {
      name: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(50, "Maximum 50 characters")
        .required("Name Required!"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password Required!"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Re-Password Required!"),
    }),

    onSubmit: (values) => {
      const { password, confirmPassword } = values;
      const data = {
        password,
        confirmPassword,
        email: validationEmail.values.email,
      };
      setCurrentStep(REGISTER_STEP.LOGIN_STEP);
    },
  });
  const validationLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string().required("Password Required!"),
    }),
    onSubmit: (values) => {
      const { password, confirmPassword } = values;
      const data = {
        password,
        confirmPassword,
        email: validationEmail.values.email,
      };

      onSubmitAsync({
        email: validationEmail.values.email,
        password: validationInfo.values.password,
      });

      // Xử lý logic đăng nhập ở đây
      setCurrentStep(REGISTER_STEP.SUCCESS_STEP);
    },
  });

  const buttonContent = useMemo(() => {
    switch (currentStep) {
      case REGISTER_STEP.EMAIL_STEP:
        return "Continue";

      case REGISTER_STEP.INFO_STEP:
        return "Agree and continue";

      case REGISTER_STEP.LOGIN_STEP:
        return "Login and continue";

      default:
        return "Next step";
    }
  }, [currentStep]);

  const onClickButton = useCallback(
    (e) => {
      e.preventDefault();

      if (currentStep === REGISTER_STEP.EMAIL_STEP) {
        validationEmail.handleSubmit();
      }

      if (currentStep === REGISTER_STEP.INFO_STEP) {
        validationInfo.handleSubmit();
      }

      if (currentStep === REGISTER_STEP.LOGIN_STEP) {
        validationLogin.handleSubmit();
      }
    },
    [currentStep, validationEmail, validationInfo, validationLogin]
  );

  const getTitle = useMemo(() => {
    switch (currentStep) {
      case REGISTER_STEP.EMAIL_STEP:
        return <h1 className="h3 mb-3 fw-normal">Hi! Sign UP</h1>;

      case REGISTER_STEP.INFO_STEP:
        return <h1 className="h3 mb-3 fw-normal">Sign up</h1>;

      case REGISTER_STEP.LOGIN_STEP:
        return <h1 className="h3 mb-3 fw-normal">Login</h1>;

      default:
        return;
    }
  }, [currentStep]);

  const isErrorEmail = useMemo(() => {
    if (validationEmail.errors?.email && validationEmail.touched?.email) {
      return true;
    }
    return false;
  }, [validationEmail.errors?.email, validationEmail.touched?.email]);

  const isErrorInfo = (fieldName) => {
    if (validationInfo.errors[fieldName] && validationInfo.touched[fieldName]) {
      return true;
    }
    return false;
  };

  const isErrorLogin = (fieldName) => {
    if (
      validationLogin.errors[fieldName] &&
      validationLogin.touched[fieldName]
    ) {
      return true;
    }
    return false;
  };

  return (
    <>
      <main className="form-signin w-100 m-auto">
        {getTitle}

        {currentStep === REGISTER_STEP.EMAIL_STEP && (
          <>
            <div className="input-group has-validation mb-4">
              <div className={`form-floating ${isErrorEmail && "is-invalid"}`}>
                <input
                  type="text"
                  className={`form-control ${isErrorEmail && "is-invalid"}`}
                  id="floatingEmail"
                  placeholder="name@example.com"
                  name="email"
                  value={validationEmail.values.email}
                  onChange={validationEmail.handleChange}
                  onBlur={validationEmail.handleBlur}
                />

                <label htmlFor="floatingEmail">Email</label>
              </div>
              {isErrorEmail && (
                <div className="invalid-feedback">
                  {validationEmail.errors?.email}
                </div>
              )}
            </div>
          </>
        )}

        {currentStep === REGISTER_STEP.INFO_STEP && (
          <>
            <div className="input-group has-validation mb-4">
              <div
                className={`form-floating ${
                  isErrorInfo("name") && "is-invalid"
                }`}
              >
                <input
                  type="text"
                  className={`form-control ${
                    isErrorInfo("name") && "is-invalid"
                  }`}
                  id="floatingName"
                  placeholder="Name"
                  name="name"
                  value={validationInfo.values.name}
                  onChange={validationInfo.handleChange}
                  onBlur={validationInfo.handleBlur}
                />

                <label htmlFor="floatingName">Name</label>
              </div>
              {isErrorInfo("name") && (
                <div className="invalid-feedback">
                  {validationInfo.errors?.name}
                </div>
              )}
            </div>

            <div className="input-group has-validation mb-4">
              <div
                className={`form-floating ${
                  isErrorInfo("password") && "is-invalid"
                }`}
              >
                <input
                  type="password"
                  className={`form-control ${
                    isErrorInfo("password") && "is-invalid"
                  }`}
                  id="floatingPass"
                  placeholder="***"
                  name="password"
                  value={validationInfo.values.password}
                  onChange={validationInfo.handleChange}
                  onBlur={validationInfo.handleBlur}
                />

                <label htmlFor="floatingPass">Password</label>
              </div>
              {isErrorInfo("password") && (
                <div className="invalid-feedback">
                  {validationInfo.errors?.password}
                </div>
              )}
            </div>

            <div className="input-group has-validation mb-4">
              <div
                className={`form-floating ${
                  isErrorInfo("confirmPassword") && "is-invalid"
                }`}
              >
                <input
                  type="password"
                  className={`form-control ${
                    isErrorInfo("confirmPassword") && "is-invalid"
                  }`}
                  id="floatingRePass"
                  placeholder="***"
                  name="confirmPassword"
                  value={validationInfo.values.confirmPassword}
                  onChange={validationInfo.handleChange}
                  onBlur={validationInfo.handleBlur}
                />

                <label htmlFor="floatingRePass">Re-Password</label>
              </div>
              {isErrorInfo("confirmPassword") && (
                <div className="invalid-feedback">
                  {validationInfo.errors?.confirmPassword}
                </div>
              )}
            </div>
          </>
        )}
        {currentStep === REGISTER_STEP.LOGIN_STEP && (
          <>
            <div className="input-group has-validation mb-4">
              <div
                className={`form-floating ${
                  isErrorLogin("email") && "is-invalid"
                }`}
              >
                <input
                  type="text"
                  className={`form-control ${
                    isErrorLogin("email") && "is-invalid"
                  }`}
                  id="floatingEmail"
                  placeholder="name@example.com"
                  name="email"
                  value={validationLogin.values.email}
                  onChange={validationLogin.handleChange}
                  onBlur={validationLogin.handleBlur}
                />
                <label htmlFor="floatingEmail">Email</label>
              </div>
              {isErrorLogin("email") && (
                <div className="invalid-feedback">
                  {validationLogin.errors?.email}
                </div>
              )}
            </div>

            <div className="input-group has-validation mb-4">
              <div
                className={`form-floating ${
                  isErrorLogin("password") && "is-invalid"
                }`}
              >
                <input
                  type="password"
                  className={`form-control ${
                    isErrorLogin("password") && "is-invalid"
                  }`}
                  id="floatingPass"
                  placeholder="***"
                  name="password"
                  value={validationLogin.values.password}
                  onChange={validationLogin.handleChange}
                  onBlur={validationLogin.handleBlur}
                />

                <label htmlFor="floatingPass">Password</label>
              </div>
              {isErrorLogin("password") && (
                <div className="invalid-feedback">
                  {validationLogin.errors?.password}
                </div>
              )}
            </div>
          </>
        )}

        {currentStep === REGISTER_STEP.SUCCESS_STEP && (
          <>
            <div className="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
              Completed!!Congratulations
            </div>
          </>
        )}

        {currentStep !== REGISTER_STEP.SUCCESS_STEP && (
          <button
            className="btn btn-primary w-100 py-2"
            type="submit"
            onClick={onClickButton}
          >
            {/* {
                currentStep === REGISTER_STEP.EMAIL_STEP ? 'Continue' : '| Agree and continue'
              } */}
            {buttonContent}
          </button>
        )}

        <p className="mt-5 mb-3 text-body-secondary">© Created by Oanh</p>
      </main>
    </>
  );
}

export default Register;
