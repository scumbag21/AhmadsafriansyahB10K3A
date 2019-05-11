function validasi (email) {
   pola_email = /^[a-zA-Z0-9._-@]+@$/;
      if (!pola_email.test(form.email.value)) {
         alert('Penulisan Email tidak valid');
      form.email.focus();
      return false;
      } else {
         return true; 
   }
}

function validasi (username){
   var mincar = 8;
   pola_username = /^[a-z.]+@$/
   if (form.username.value.length < mincar) {
      alert("Panjang Username Minimal 8 Karater!");
      form.username.focus();
      return (false);
   } else {
      return true;
   }
}
