import axios from "axios";
import { saveToLocalStorage } from "./localStorageHandler";

export default class SaveFacultyAndSemester {
  constructor() {
    this._csrf = document.querySelector('[name="_csrf"]').value;
    this.form = document.getElementById("saveFacultyAndSemester__form");
    this.faculty = document.getElementById("faculty");
    this.semester = document.getElementById("semester");
    this.events();
  }

  events() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      axios
        .post("/users/saveFacultyAndSemester", {
          faculty: this.faculty.value,
          semester: this.semester.value,
          _csrf: this._csrf,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            return axios.get("/users/availableNotes");
          }
        })
        .then((notes) => {
          saveToLocalStorage(notes.data);
          setTimeout(() => (window.location.href = "/home"), 500);
        })
        .catch((error) => console.log(error));
    });
  }
}
