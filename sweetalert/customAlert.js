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

function setAlert(type, message) {
  localStorage.setItem(`alert-${type}`, message);
}

$(function () {
  /* #region Custom Alert  */
  const alertSuccessKey = `alert-${AlertType.SUCCESS}`;
  const alertSuccess = localStorage.getItem(alertSuccessKey);
  const alertErrorKey = `alert-${AlertType.ERROR}`;
  const alertError = localStorage.getItem(alertErrorKey);
  if (alertSuccess) {
    $("#loader-container").hide();
    showAlert(AlertType.SUCCESS, alertSuccess);
    setTimeout(() => {
      localStorage.removeItem(alertSuccessKey);
    }, 1000);
  }
  if (alertError) {
    $("#loader-container").hide();
    showAlert(AlertType.ERROR, alertError);
    setTimeout(() => {
      localStorage.removeItem(alertErrorKey);
    }, 1000);
  }

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

  $("#reload-success").on("click", function () {
    setAlert(AlertType.SUCCESS, "Add resource successfully");
    window.location.reload();
  });

  $("#reload-error").on("click", function () {
    setAlert(AlertType.ERROR, "Add resource Failed");
    window.location.reload();
  });
  /* #endregion */

  /* #region  Loader Animation */
  setTimeout(() => {
    $("#loader-container").hide();
  }, 2000);
  /* #endregion */
});
