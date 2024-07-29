$(function() {
  // YOUR CODE HERE
  const toggleBtn = $('#toggleButton')
  const colorBtn = $('#colorButton')
  const addClassBtn = $('#addClassButton')
  const rmClassBtn = $('#removeClassButton')
  const fadeInBtn = $('#fadeInButton')
  const fadeOutBtn = $('#fadeOutButton')
  const slideUpBtn = $('#slideUpButton')
  const slideDownBtn = $('#slideDownButton')

  toggleBtn.on('click',function(){
    $('#myParagraph').toggle()
  })

  colorBtn.on('click',function(){
    $('#colorDiv').css('background-color','yellow')
  })

  addClassBtn.on('click',function(){
    $('#classDiv').addClass('new-class')
  })
  rmClassBtn.on('click',function(){
    $('#classDiv').removeClass('new-class')
  })

  fadeInBtn.on('click',function(){
    $('#fadeDiv').fadeIn()
  })
  fadeOutBtn.on('click',function(){
    $('#fadeDiv').fadeOut()
  })

  slideUpBtn.on('click',function(){
    $('#slideDiv').slideUp()
  })
  slideDownBtn.on('click',function(){
    $('#slideDiv').slideDown()
  })

})