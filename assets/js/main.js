function relogio(){

  function segundo (segundos){
    const data = new Date(segundos * 1000 );
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    })
  }
  
  console.log(segundo(10))
  
  
  
  const relogio = document.querySelector('.relogio')
  let segundos = 0;
  let timer;
  
  function iniciaRelogio(){
    timer = setInterval(function(){
      segundos++;
      relogio.innerHTML = segundo(segundos)}, 1000)
  }
  
  
  document.addEventListener('click', function(e){
    const el = e.target
  
    if (el.classList.contains('iniciar')){
      relogio.classList.remove('pausado')
  
      iniciaRelogio()
    
    }
  
    if (el.classList.contains('pausar')){
      clearInterval(timer);
      relogio.classList.add('pausado')
    
    }
  
    if (el.classList.contains('zerar')){
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado')
      segundos=0;
    
    }
  })
}

relogio()



// iniciar.addEventListener('click', function (event){
//   relogio.classList.remove('pausado')

//   iniciaRelogio()

// })

// pausar.addEventListener('click', function(event){
//   clearInterval(timer);
//   relogio.classList.add('pausado')
// })

// zerar.addEventListener('click', function(event){
//   clearInterval(timer);
//   relogio.innerHTML = '00:00:00';
//   relogio.classList.remove('pausado')
//   segundos=0;
// })