function CodelandUsernameValidation(str) {
  const username = str;
  const letterRegex = /^[a-zA-Z]\w*[^_]$/;
  if (username.length >= 4 && username.length <= 25) {
    if (letterRegex.test(username) === true) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// keep this function call here
console.log(CodelandUsernameValidation(readline()));
