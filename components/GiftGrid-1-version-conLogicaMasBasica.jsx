import {  useEffect , useState } from "react";
import {GifItem} from "./GifItem";
import { getGifs } from "../helpers/getGifs";




export const GiftGrid = ({category}) => {

  const [images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs( { category } );
    setImages(newImages);
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

 /*  getGifs(category); */

    return (
    <>
        <h3>{ category }</h3>

        <div className="card-grid">


            
            {/* Versión mas clara a la vista, pero no tan prolija */}
            {
              images.map( (image) => {
               /* return console.log(image)  */
              
               return <GifItem 
                    key={ image.id}
                    //Pasar propiedaes al componente de una manera clara, pero no de la mejor forma, ya que se debe escribir cada una de las propiedades
                    /* title = { image.title}
                    url = { image.url} */

                    //Una mejor forma de hacerlo, seria de la siguiente manera, donde se envia todas las propiedades existentes en el objeto al componente

                    { ...image }
                />
              })
            }

            {/* Lo mismo que lo anterior se puede hacer de la siguiente manera, desestructurando y de manera más prolija */}

           {/*  { 
              images.map( ({id, title}) => {
                return <li key={id}>{title}</li>
              })
            } */}


        </div>
        
    </>
  )
}

/* export default GiftGrid */
