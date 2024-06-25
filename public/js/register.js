async function postData(url = "/api/user/createuser", data) {
    // Default options are marked with *
    console.log("i am posting data")
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  console.log(response.body);
  if(!response.ok) console.log("not ok");
  let ans=await response.json();
  console.log(ans)
  return ans; // parses JSON response into native JavaScript objects
}
function isValidEmail(email) {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

async function main() {
  let createAccountButton = document.getElementById("create-account-button");
  createAccountButton.addEventListener("click",async () => {
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    console.log(email,username,password);
    try{
        // console.log("into the try block")
        let userData = {
            email: email,
            username: username,
            password: password,
        };
        let success=await postData("/api/user/createuser",userData);
        if(success) console.log(success);
        else console.log("try error")
        document.querySelector('form').reset();
    }
    catch(error){
        console.log(error)
    }
  });
}
main();