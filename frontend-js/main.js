import Base from "./modules/base";
import LocalStorageHandler from "./modules/localStorageHandler";
import UserQuery from "./modules/adminOnly/userQuery";
import NotesScreen from "./modules/notesScreen";
import ContributorProfile from "./modules/contributorProfile";
import SaveFacultyAndSemester from "./modules/saveFacultyAndSemester";
import ReadyToGo from "./modules/readyToGoScreen";
import Admin from "./modules/adminOnly/adminDashboard";

new Base();

if (document.getElementById("saveFacultyAndSemesterScreen")) {
  new SaveFacultyAndSemester();
}

if (document.getElementById("readyToGoScreen")) {
  new ReadyToGo();
}

if (document.getElementById("adminDashboardScreen")) {
  new Admin();
}

if (
  document.getElementById("welcomeScreen") ||
  document.getElementById("notesScreen")
) {
  new LocalStorageHandler();
}

if (document.getElementById("userQueryScreen")) {
  new UserQuery();
}

if (document.getElementById("notesScreen")) {
  new NotesScreen();
}

if (document.getElementById("contributorProfileScreen")) {
  new ContributorProfile();
}

//flash messages
if (document.getElementById("flash-wrap")) {
  if (document.getElementById("flash-wrap").childElementCount) {
    const flash = document.getElementById("flash-wrap");
    flash.classList.add("visible");
    flash.addEventListener("click", function () {
      flash.classList.remove("visible");
    });
  }
}
