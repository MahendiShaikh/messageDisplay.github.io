(function (){

const form = document.querySelector("#message-form")
const message=document.querySelector("#message")
const feedback=document.querySelector(".feedback")
const messageContent=document.querySelector(".message-content")

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    if(message.value === ''){
        feedback.classList.add('show')
        setTimeout(()=> {
            feedback.classList.remove('show')
        }, 3000);
    } else
    {
        messageContent.textContent=message.value;
        message.value = ''; 
    }
})
    
})()




