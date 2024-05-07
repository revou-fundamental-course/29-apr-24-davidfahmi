function validateform  () {
    const forminputname = document.forms['forminput']['fullname_input'].value
    const forminputemail = document.forms['forminput']['email_input'].value
    const forminputmobilenumber = document.forms['forminput']['mobile_number_input'].value
    if (forminputname == "" || forminputemail == "" || forminputmobilenumber == "" ) 
        {
        // or  (forminputmobilenumber == "" )
    // if ( length (forminputemail+forminputmobilenumber+forminputemail)  == 0)     {
        alert ("Fullname, Email & Mobile Number can't be empty!");
        // document.getElementById('name03').innerHTML= document.forms['form-input']['form-input_fullname'].value
        // document.getElementById('form_error-msg').innerHTML="Tidak Boleh Kosong!"
        return false 
    } 
    //     document.getElementById('name03').innerHTML= forminputname;
    //     document.getElementById('form_error-msg').innerHTML=""
    // return false 
}