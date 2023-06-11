(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  })();

  (function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  
function mostrarSenha(){
    var senha=document.getElementById('senha');
    if(senha.type=='password'){
        senha.type='text';
    }else{
        senha.type='password';
}
};

const fileInput = document.querySelector('#foto_estabelecimemto');

const uploadFile = (files) => {
  const API_ENDPOINT = "https://file.io";
  const request = new XMLHttpRequest();
  const formData = new FormData();

  request.open("POST", API_ENDPOINT, true);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
    }
  };
  
  for (let i = 0; i < files.length; i++) {
    formData.append(files[i].name, files[i])
  }
  request.send(formData);
};

fileInput.addEventListener("change", event => {
  const files = event.target.files;
  uploadFile(files);
});
