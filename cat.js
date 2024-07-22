let url="https://catfact.ninja/fac";
let btn=document.querySelector("button");

btn.addEventListener("click",async(resolve,reject)=>{
    let fact=document.querySelector(".fact");
    let resp= await catCall();
    if(resp=="Server Down! Please try later"){
         fact.innerText=resp;
         fact.style.color="transparent";
        setTimeout(()=>{
            fact.style.color="red";
        },150)
        }else{
            console.log(resp);
            fact.style.color="transparent";
            setTimeout(() => {
               fact.style.color="white";
            }, 150);
            fact.innerText=resp;
        }     
})

async function catCall(){
    try{
        let resp=await axios.get(url);
        return resp.data.fact;
    }
    catch(err){
        return "Server Down! Please try later";
    }
    
}


//Hang burger

let icon=document.querySelector("i");
icon.addEventListener("click",()=>{
    onOff();
    
})

let cross=document.querySelector(".cross");
cross.addEventListener("click",()=>{
    onOff();
})

function onOff(){
    let sub=document.querySelector(".slider");
    sub.classList.toggle("s");
    let hangdisable=document.querySelector(".a");
    setTimeout(()=>{
        hangdisable.classList.toggle("hangRemove");
    },250);
    
}


// icon.addEventListener("click",()=>{
//    let sub=document.querySelector(".sub");
//    sub.style.display="inline block";
//    sub.style.position="absolute";
//    sub.style.height="400px";
//    sub.style.width="17%";
// //    sub.style.marginTop="500px";
//    sub.style.marginLeft="75%";
//    sub.style.backgroundColor="green";
//    icon.addEventListener("click",()=>{

//    })

// });