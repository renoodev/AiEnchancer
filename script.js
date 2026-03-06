async function sendImage(endpoint){

const file=document.getElementById("imageInput").files[0]

const formData=new FormData()
formData.append("image",file)

const res=await fetch(endpoint,{
method:"POST",
body:formData
})

const data=await res.json()

document.getElementById("output").src=data.image

}

function removeBG(){
sendImage("/api/removebg")
}

function enhance(){
sendImage("/api/enhance")
}

function expand(){
sendImage("/api/expand")
}

async function addObject(){

const file=document.getElementById("imageInput").files[0]
const prompt=document.getElementById("prompt").value

const formData=new FormData()

formData.append("image",file)
formData.append("prompt",prompt)

const res=await fetch("/api/addobject",{
method:"POST",
body:formData
})

const data=await res.json()

document.getElementById("output").src=data.image

}
