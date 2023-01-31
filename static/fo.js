function validate()
{
    // document.getElementById("fo").addEventListener("click", function(event){
    //     event.preventDefault();
    //     return false;
    //   });
    var empt = document.forms["fo"]["name"].value;
    if(empt=="")
    {
        alert("Please enter valid input")
        return false;
    }   
}