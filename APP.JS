let p=document.getElementById("clock");
function showclock ()
{
    let d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    if(s>60)
    {
        s=0;
        m=m+1;
    }
    if(m>60){
        m=0;
        h=h+1;
    }
    if(s<10){
        s="0"+s;
    }
    if(m<10){
        m="0"+m;
    }
    if(h<10){
        h="0"+h;
    }
    if(h==0){
        h=12;
    }
    if(h>12){
        h=h-12;
    }
p.innerHTML=h+":"+m+":"+s;
setTimeout(showclock,1000)

}
    
