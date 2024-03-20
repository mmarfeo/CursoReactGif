//No se por que pero los parametros se pasan entre llaves
export const getGifs = async( { category })  =>{

  
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Kcjun7o1HKDd7u9h5JVwmyKVeKy09wPr&q=${ category }&limit=5`;
   
    const response = await fetch (url);

    console.log(response);
  
    const { data } = await response.json();
  
    //Acá creo un nuevo objeto llamado gifs para obtener las propiedades que necesito mostrar en el front
    const gifs = data.map( img => ({
       id: img.id,
       title: img.title,
       url: img.images.downsized_medium.url
    }));
  
    /* console.log(gifs); */
    return gifs;
    
  }
  