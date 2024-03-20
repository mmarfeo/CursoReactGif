import React from "react";
import { useState  } from "react";
/* Se creo un archivo index dentro de components para ordenar las importaciones, por eso se comenta esto y se busca todo dentro del index.js de la carpeta components
import { AddCategory } from "../components/addCategory";
import {GiftGrid} from "../components/GiftGrid"; */
import { AddCategory , GiftGrid } from "../components";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState( ['One Punch']);

    const onAddCategory = ( newCategory) =>{

        //Este if esta haciendo que si el array categories incluye a la newcategory, retorne y no haga nada, no continue, no agregue esta nueva categoria al array.
        if(categories.includes(newCategory)) return;

       setCategories( [newCategory , ...categories]);
       
       console.log(newCategory);
    }

    
    return(

        <>
        
            <h1>Gift Expert App</h1> 

            <AddCategory 
                //setCategories = { setCategories}
                onNewCategory={ (event) => onAddCategory(event)}
            />

            

           
                {
                    categories.map( category => ( 
                     
                     //Esto que esta comentado es lo mismo que el nuevo componente GiftGrid
                     // {
                       // return <li key={ category }>
                       //     { category}
                       // </li>
                    //} 

                    <GiftGrid key={category} category={category}/>
                    )
                    )
                }
            
        </>

    )
}