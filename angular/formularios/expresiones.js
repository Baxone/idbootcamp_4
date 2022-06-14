let exp = /^\S+\@\S+\.\S+/
let email = 'ju an@gmail.com'

if (exp.test(email)) {
  console.log("email valido")
} else {
  console.log("email no valido")
}

if (!exp.test(email)) {
  return false;
}
