let captchastatus=false;
function beforesubmit(event){
    if(captchastatus)
    {
    let inputdate=document.querySelector(".inputdate");
    let outputdate=document.querySelector(".outputdate");
    console.log('inputdate.value',inputdate.value);
    console.log('type of input date',typeof inputdate);
    let formattedDate=new Date(inputdate.value).toLocaleDateString("en-US");
    outputdate.value=formattedDate;
    }else
    {
        alert("Please check the cptcha box to submit the lead form");
        event.preventDefault();
    }
}
function timestamp() { 
    var response = document.getElementById("g-recaptcha-response");
     if (response == null || response.value.trim() == "") 
     {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
     elems["ts"] = JSON.stringify(new Date().getTime());
     document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
    } 
} 
setInterval(timestamp, 500);
function captchasuccess()
{
captchastatus=true;
}