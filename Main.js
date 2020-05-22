console.log("It Works")

$(document).ready(function (){
$('.submit').click(function(event){

  
  console.log('clicked button')

  var email=$('.email').val()
  var subject=$('.subject').val()
  var message=$('.message').val()
  var statusElm=$('.status').val()
  statusElm.empty()

if(email.length>5 && email.includes('@') && email.includes('.')){
  statusElm.append('<div>Email is valid</div>')
}
else{
  statusElm.append('<div>Email is invalid</div>')
  event.preventDefault()
}

if(email.length>2){
  statusElm.append('<div>Subject is valid</div>')
  
}
else{
  statusElm.append('<div>Subject is invalid</div>')
  event.preventDefault()
}

if(message.length>0) {
  statusElm.append('<div>Message is valid</div>')
}
else{
  statusElm.append('<div>Message is invalid</div>')
  event.preventDefault()
}



})

})