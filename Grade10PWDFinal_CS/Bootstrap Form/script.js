function showAlert(alertId) {
    const bootstrapAlert = document.querySelector("#" + alertId);
    const collapse = new bootstrap.Collapse(bootstrapAlert); 
    collapse.show();
 }
 
 const Btn = document.querySelector("#SubmitButton");
 Btn.addEventListener("click", function () {    
    showAlert("conf-alert");
 });
 