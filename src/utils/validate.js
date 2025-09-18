export const validateFormData = (email, password) => {
  const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const checkPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!checkEmail) return "Enter a Valid Email";
  if (!checkPassword) return "Enter a strong Password";

  return null;
};
