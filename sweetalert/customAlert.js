const AlertType = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
};

function showAlert(icon, title) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    showCloseButton: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: icon,
    title: title,
  });
}

async function confirmAlert() {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: AlertType.WARNING,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    return result;
  });
}

$(function () {
  $("#success").on("click", function () {
    showAlert(AlertType.SUCCESS, "Successfully proceeded");
  });

  $("#error").on("click", function () {
    showAlert(AlertType.ERROR, "An error occurred");
  });

  $("#confirm").on("click", async function () {
    const { isConfirmed } = await confirmAlert();
    if (isConfirmed) {
      console.log("Action confirmed");
    }
  });

  setTimeout(() => {
    $("#loader-container").hide();
  }, 2000);
});
