const weatherForm =document.querySelector('form')
const serachElement=document.querySelector('input')
const messageOne=document.querySelector('#msg-1')
const messageTwo=document.querySelector('#msg-2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=serachElement.value
    messageOne.textContent='Loading...'
    messageTwo.textContent=''
    fetch(`/weather?address=${location}`).then((response)=>{
    response.json().then(data=>{
        if(data.error){
           messageOne.textContent= data.error
        }
        else{
           messageOne.textContent= data.location
           messageTwo.textContent= data.forecast
        }
    })
})
})