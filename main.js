const typed = new Typed('.typer', {
    strings: ['Olá', 'Eu sou o Thiago Lopes', 'Desenvolvedor web', 'Seja bem-vindo(a)'],
    typeSpeed: 50,
    backSpeed:50,
    loop:true
  });




  let valueNumbers=document.querySelectorAll(".exp-number");
  let interval=4000;

  valueNumbers.forEach((valueNumber)=>{
    let startValue=0;
    let endValue=parseInt(valueNumber.getAttribute("data-val"));
    let duration=Math.floor(interval/endValue);
    let counter=setInterval(()=>{
      startValue+=1;
      valueNumber.textContent=startValue;
      if(startValue==endValue){
        clearInterval(counter);
      }
    },duration)
  });
  var snippet = [].slice.call(document.querySelectorAll('.hover'));
if (snippet.length) {
  snippet.forEach(function (snippet) {
    snippet.addEventListener('mouseout', function (event) {
      if (event.target.parentNode.tagName === 'figure') {
        event.target.parentNode.classList.remove('hover')
      } else {
        event.target.parentNode.classList.remove('hover')
      }
    });
  });
}