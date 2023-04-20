const s=document.getElementById("night-mode");
s.addEventListener('click',
()=>{
    if(s.dataset.mode==='day'){
        document.querySelector("body").style.backgroundColor='gray';
        document.querySelector("body").style.color='white';
        s.dataset.mode='night';
        document.querySelectorAll("a").forEach((e)=>{
            e.style.color="skyblue";
        });
    }
    else if(s.dataset.mode==='night'){
        document.querySelector("body").style.backgroundColor='white';
        document.querySelector("body").style.color='black';
        s.dataset.mode='day';
        for(const x of document.querySelectorAll("a")){
            x.style.color="darkblue"
        }
    }
})