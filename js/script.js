
var slideindex = 1;
showDivs (slideindex);

function plusDivs(n) {
    showDivs((slideindex += n ));
}

function showDivs(n) {
    var i;
    var imglist = document.getElementsByClassName("img-slideshow");
    if (n > imglist.length) slideindex =1;
    else if (n<1)slideindex =imglist.length;

    for ( i=0 ;i < imglist.length; i++) {
        imglist[i].style.display = "none";
    }
    imglist[slideindex - 1].style.display = "block";
    console.log(slideindex);
}




function validateform  () {
    const forminputname = document.forms['forminput']['fullname_input'].value
    const forminputemail = document.forms['forminput']['email_input'].value
    const forminputmobilenumber = document.forms['forminput']['mobile_number_input'].value
    if (forminputname == "" || forminputemail == "" || forminputmobilenumber == "" ) 
        {
        // or  (forminputmobilenumber == "" )
    // if ( length (forminputemail+forminputmobilenumber+forminputemail)  == 0)     {
        alert ("Fullname, Email & Mobile Number can't be empty!");
        return false;}
        // else {("Thank You " + forminputname + ", Our Admission will follow with newest information the Product or Promotion");  
        // alert ("Thank You " + forminputname + ", Our Admission will follow with newest information the Product or Promotion")
        // document.getElementById('name03').innerHTML= document.forms['form-input']['form-input_fullname'].value
        // document.getElementById('form_error-msg').innerHTML="Tidak Boleh Kosong!"
        // return false;

        alert ("Thank You " + forminputname + ", Our Admission will follow with newest information the Product or Promotion")
        return true;
         
    //     document.getElementById('name03').innerHTML= forminputname;
    //     document.getElementById('form_error-msg').innerHTML=""
    // return false 
}