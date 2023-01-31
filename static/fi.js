window.onload=function(){
    let Recording;
    const parts=[];
    navigator.mediaDevices.getUserMedia({audio:true,video:true}).then(stream=>{
        document.getElementById("video").srcObject=stream;
        document.getElementById("btn").onclick=function(){
            document.getElementById("st").innerHTML="Recording has started";
            Recording=new MediaRecorder(stream);
            Recording.start(1000);
            Recording.ondataavailable=function(e){
                parts.push(e.data);
            }
        };
    });


    document.getElementById("st_btn").onclick=function(){
        document.getElementById("st").innerHTML="Thank You for Recording";
        Recording.stop();
        const blob = new Blob(parts,{
            type:"video/webm"
        });
        const url=URL.createObjectURL(blob);
        const a=document.createElement("a");
        document.body.appendChild(a);
        a.style="display:none";
        a.href=url;
        a.download="test.webm";
        a.click();
    }

    
    document.getElementById("check").onclick=function(){
        document.getElementById("st").innerHTML="Please Wait Processing......."
    }
   
   


}


