function validasi (email) {
   pola_email = /^[a-zA-Z0-9._-@]+@\$/;
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
   pola_username = /^[a-z.]/
   if(!pola_username.test(form.username.value)) {
      alert('Username Tidak valid');
      form.username.focus();
      return false;
   } else {
      return true;
   }
}

console.log(validasi('2'));