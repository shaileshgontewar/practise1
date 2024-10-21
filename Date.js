const expireTime= 3600 * 1000
// console.log(expireTime)
let  result = new Date().getTime() + expireTime
let  result1 = new Date()
let  result2= new Date(expireTime)
// console.log( typeof result)
// console.log(result1)
// console.log( result2)
// localStorage.setItem('authToken', authToken);
localStorage.setItem('tokenExpiration', result.toString());
// console.log(typeof  localStorage.getItem("tokenExpiration"))
let ddd=localStorage.getItem("tokenExpiration")
let  result21= new Date(Number(ddd))
// console.log(result21)