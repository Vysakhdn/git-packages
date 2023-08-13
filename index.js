
let userID;
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
  
      const formData = new FormData(form);
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
      fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formDataObject)
      })
        .then(response => response.json())
        .then(data => {
          console.log("Response Data:", data);
          textContent=JSON.stringify(data,null,2)
          userID = data.id
        })
        .catch(error => {
          console.error("Error:", error);
        });
    });
  });
