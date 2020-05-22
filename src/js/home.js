// console.log('Hola mundo!');
// const noCambia = 'Camilo'
// let cambia = '@camiloHurtado'

// function cambiarNombre(nuevoNomnbre){
//   cambia = nuevoNomnbre
// }


// // Promesas

// const getUser = new Promise((resolve,reject)=>{
//   //llamar a un api
//   // setInterval
//   setTimeout(()=>{
//     //Luego de 3 segundos 
//     resolve('Se acabo el tiempo');
//   },3000)
// })

// const getUserAll = new Promise((resolve,reject)=>{
//   //llamar a un api
//   // setInterval
//   setTimeout(()=>{
//     //Luego de 3 segundos 
//     resolve('Se acabo el tiempo');
//   },5000)
// })

// getUser
//   .then(resp => console.log('Todo esta bien en la vida;'))
//   .catch((error)=>console.log(`${error}`))

  // Promise.all([getUser,
  // getUserAll])
  // .then((res)=>console.log(res))
  // .catch((erro)=>console.log(`${erro}`))

  //   Promise.race([getUser,
  // getUserAll])
  // .then((res)=>console.log(res))
  // .catch((erro)=>console.log(`${erro}`))


  // $.ajax('https://randomuser.me/api/11',{
  //   method: 'GET',
  //   success: function(data){
  //     console.log(data)
  //   },
  //   error: function(err){
  //     console.log(err)
  //   }
  // }
  // )

  (async function load(){
    // await
    // accion
    //animation
    // terror

    async function getData(url){
      const response = await fetch(url)
      const data = await response.json();
      return data

    }
    const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action')
    const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama')
    const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation')
   
    //  getData('https://yts.mx/api/v2/list_movies.json?genre=action')
    //  .then((data)=>{
    //    console.log('terrolist',data)
    //    terrorList = data;
    //  })
     
    console.log(actionList,dramaList,animationList);
    // const  $home  = $('.home .list ');
    const $actionContainer = document.querySelector('#action')
    const $dramaContainer = document.getElementById('drama')
    const $animationContainer = document.getElementById('animation')
    
    const videoItemTemplate = (movie)=>{
      return(
        `<div class="primaryPlayListItem">
        <div class="primaryPlayListItem-image">
        <img stc="${movie.medium_cover_image}">
        </div>
        <h4 class ="primaryPlaylistItem-title">
        ${movie.title}
        </h4>
        </div>`

      )
    }

    actionList.data.movies.forEach((movie)=>{
      const HTMLString = videoItemTemplate(movie)
      console.log(HTMLString)
    })
    
    const $modal = document.getElementById('modal');
    const $overlay = document.getElementById('overlay');
    const $hideModal = document.getElementById('hide-modal');
    
    const $featuringContainer = document.getElementById('featuring');
    const $form = document.getElementById('form');
    const $home = document.getElementById('home');
   
    
    
    const $modaleTitle = $modal.querySelector('h1')
    const $modalImage = $modal.querySelector('img')
    const $modalDescription = $modal.querySelector('p')
     
 
    // console.log(videoItemTemplate('src/images/covers/bitcoin.jpg','title'))

  })();

  
  
  // fetch('https://randomuser.me/api/1')
  //   .then(res => 
  //     // console.log(res)
  //     res.json())
  //     .then((user)=>console.log('user',user.results[0].name.first))
  //     .catch(error=> console.log('algo fallo')) 


