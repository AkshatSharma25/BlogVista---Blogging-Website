async function postData(email, password) {
  // Default options are marked with *
  const data = {
    email: email,
    password: password,
  };
  url = "/api/user/signin";

  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

async function main() {
  let submit = document.getElementById("submit-button");
  // console.log(submit);
  submit.addEventListener("click", async () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    //   console.log(email,password);

    try {
      let success = await postData(email, password);
      // console.log(success.user);
      if (success) {
            window.location.replace(`/profile/${success.user.username}`);
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.log(error);
    }
  });
}

main();
