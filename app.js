const ev = document.querySelector('#enviar')
const input = document.querySelector('input')
const body = document.querySelector('body')
ev.addEventListener('click',function(){
    
    Swal.fire({
        title: "Você desejar postar ",
        text: "Não terar como tirar a avaliação !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim postar"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Obrigado",
            text: "Volta sempre.",
            icon: "success"
          });
        }
      });
})