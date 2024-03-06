


var xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
   if (xhr.readyState==XMLHttpRequest.DONE){
       if (xhr.status==200){
           console.log("Response",xhr.response)
       } else{
           console.log("Response Err",xhr.status)
       }
   }
}

xhr.open("http://localhost:9090/fetch1")
xhr.send()