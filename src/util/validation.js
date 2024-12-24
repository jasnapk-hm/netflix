export const checkValidation =(name,email,password)=>{
const isEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

const isPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,}$/.test(password);

const isName=/^[a-zA-Z][a-zA-Z0-9_]{3,19}$/.test(name)


if(!isEmail) return "Email is Invalid"
if(!isPassword) return "Password is Invalid"
if(!isName) return "Name is Invalid"

return null
}