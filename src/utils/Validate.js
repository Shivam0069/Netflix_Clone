export const Validate = (emailOrPhone, password) => {
  const reg1 = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/; // for email
  

  const isEmailValid = new RegExp(`(${reg1.source})`).test(
    emailOrPhone
  );
  const isPassValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  if (!isEmailValid) return "Invalid Email address ";
  if (!isPassValid)
    return "Password must contain Minimum eight characters and at least one number";
  return null;
};
