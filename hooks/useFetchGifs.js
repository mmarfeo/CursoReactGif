import { useEffect , useState } from "react";
import { getGifs } from "../helpers/getGifs";




//Un hook es una función que retorna algo
export const useFetchGifs = ( category ) => {
  
    const [images, setImages] = useState([]);
    const [isLoading , setIsLoading] = useState(true);

  const getImages = async() => {
    const newImages = await getGifs(  {category}  );
    setImages(newImages);
    setIsLoading(false);
  }
  
  //Acá utilizamos el hook useEffect de React, que sirve para ejecutar efectos secundarios, ejemplo, cuando la categoria cambie yo quiero ejecutar un efecto
  //el useeffect necesita 2 parametros, el primer un callback (que es una función), y el segundo es una lista de dependencias, que es una lista de condiciones de cuando yo quiero volver a ejecutar el callback (la función) puesta en el primer paraetro
  useEffect(
    //este es el primer parametro del useEffect y es una función de flecha, que tiene el código que queremos ejecutar, en este caso se llama a la función getGifs(category)
    () =>{
      /* getGifs(category); */
      getImages();
    },
    //Este es el segundo parametro, que es un arreglo de mis dependencias/condiciones, si dejo el array vacio, significa que ese hook solo se va a ejecutar la primera vez que se crea y construye este componente.
    []
    )

  
  
    return {
    images,
    isLoading
  }
}

