export const validateInputText = (text) => {
  if (text.trim() === "") {
    return true;
  }

  return false;
};
