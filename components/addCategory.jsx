import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue,SetinputValue] = useState('');

    const onInputChange = (event) => {
        /* console.log(event.target.value) */
        SetinputValue(event.target.value);
    }

    const onSubmit = (event) => {


        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        /* setCategories( categories => [ inputValue , ...categories ]); */
        SetinputValue('');
        onNewCategory(inputValue.trim());
        
    }

    return(

        <form onSubmit={(event)=> onSubmit(event)} >

            <input 
                type="text"  
                placeholder='Buscar gift' 
                value={inputValue}
                onChange={ (event) => onInputChange(event)}
            />
        </form>
    )

}