export const checkValidData = (email, password, isSignInForm) => {
  const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  let obj = {};
  let success = true;
  if (!isEmailValid) {
    obj.emailErrorMessage = "Invalid email address";
    success = false;
  }

  if (!isPasswordValid) {
    obj.passwordErrorMessage =
      "Password must contain at least 8 characters, including at least one digit, one lowercase letter, and one uppercase letter.";
    success = false;
  }

  return { success, obj };
};
