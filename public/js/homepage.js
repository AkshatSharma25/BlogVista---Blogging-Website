var user_sign_in = false;
document.addEventListener('DOMContentLoaded', function() {
  if (user_sign_in == false) {
    
  } else {
    document.querySelector(".sign-in-button").classList.toggle("hidden");
    document.querySelector(".hide-until-signin").classList.toggle("hidden");
    // hide.style.display="visible";
    let profile_dropdown_visible = true;
    let profile_button = document.querySelector(".toggle-profile");
    console.log(profile_button);
    profile_button.addEventListener("click", function (event) {
      let display_elment = document.querySelector(".profile-dropdown");
      display_elment.classList.toggle("hidden");
      if (profile_dropdown_visible) {
        profile_dropdown_visible = false;
      } else {
      //   display_elment.style.opacity = "1";
        profile_dropdown_visible = true;
      }
    });
    console.log("helloworld");
  
  }
});






