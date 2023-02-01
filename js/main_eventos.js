const alertaSwal = (a) =>{
    Swal.fire({
        title: a,
        icon: 'error',
        iconColor: '#c81111',
        showDenyButton: true,
        denyButtonColor: '#c81111',
        showConfirmButton: false,
        denyButtonText: 'OK',
        allowOutsideClick: () => {
          const popup = Swal.getPopup()
          popup.classList.remove('swal2-show')
          setTimeout(() => {
            popup.classList.add('animate__animated', 'animate__headShake')
          })
          setTimeout(() => {
            popup.classList.remove('animate__animated', 'animate__headShake')
          }, 500)
          return false
        }
      })
}

const getEvento = (e) => {
    e.preventDefault();
    let datosForm = e.target;
    let eventoNombre = datosForm.children[0].children[0].children[2].value;
    let eventoTel = datosForm.children[0].children[1].children[2].value;
    let eventoEmail = datosForm.children[1].children[2].value;
    let eventoInfo = datosForm.children[3].children[0].value;

    if(eventoNombre == ""){
        alertaSwal('Ingresa tu nombre');
        return false;
    }
    if(eventoTel == ""){
        alertaSwal('Ingresa tu teléfono');
        return false;
    }
    if(eventoEmail == ""){
        alertaSwal('Ingresa tu email');
        return false;
    }
    if(eventoInfo == ""){
        alertaSwal('Cuéntanos sobre tu evento');
        return false;
    }

    datosForm.submit();
}

let formEvento = document.getElementById("eventos2");
formEvento.addEventListener("submit", getEvento);

