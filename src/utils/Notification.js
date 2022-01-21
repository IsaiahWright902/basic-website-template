import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2";
import "sweetalert2/dist/sweetalert2.all";

// Sweet Alert Docs
// https://sweetalert2.github.io/#configuration

export default class Notification {
  static Saved() {
    Swal.fire({
      title: "Saved",
      icon: "warning",
      position: "top-right",
      timer: 3000,
      timerProgressBar: true,
      toast: true,
      showConfirmButton: false,
    });
  }
}
