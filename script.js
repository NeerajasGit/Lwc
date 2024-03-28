function beforesubmit(){
    let inputdate=document.querySelector(".inputdate");
    let outputdate=document.querySelector(".outputdate");
    console.log('inputdate.value',inputdate.value);
    console.log('type of input date',typeof inputdate);
    let formattedDate=new Date(inputdate.value).toLocaleDateString("en-US");
    outputdate.value=formattedDate;
}