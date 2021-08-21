import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const EjercicioUno = () => {

    const { register, handleSubmit, formState: { errors }, reset} = useForm();

    const [entradas, setEntradas] = useState([]);

    const onSubmit = (data, e) => {
        console.log(data);
        setEntradas([
            ...entradas, 
            data
        ])
        reset();
    }
    return (
        <>
            <h1>Ejercicio Uno</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    name="nombre"
                    placeholder="Ingrese nombre"
                    className="form-control my-2"
                    {...register("nombre", {
                        required: { value: true, message: "Nombre obligatorio" }

                    })}

                />
                <span className="text-danger text-small d-block mb-2">
                    {errors.nombre && errors.nombre.message}</span>


                <input
                    name="descripcion"
                    placeholder="ingrese descripcion"
                    className="form-control my-2"
                    {...register("descripcion",{
                        required: { value: true, message: "Descripcion obligatoria" },
                        minLength: { value: 5, message: "Escriba al menos 5 letras" }
                    })}

                />
                <span className="text-danger text-small d-block mb-2">
                    {errors.descripcion && errors.descripcion.message}</span>
                <button className="btn btn-dark">Agregar</button>
            </form>

            <ul>
                {entradas.map(item => 
                    <li>{item.nombre} - {item.descripcion}</li>)}
            </ul>
        </>
    );
}

export default EjercicioUno;
