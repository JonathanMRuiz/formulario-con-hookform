import React from 'react';
import { useForm } from "react-hook-form";

const HookForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset();
    }

    return (
        <>
            <h1>Form</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    name="titulo"
                    className="form-control my-2"
                    {...register("name", {
                        required: {
                            value: true,
                            message: 'Titulo obligatorio'
                        }
                    })

                    }


                />
                <span className="text-danger text-small d-block mb-2">
                    {errors.name && errors.name.message}</span>

                <button className="btn btn-dark">Enviar</button>
            </form>
        </>
    );
}


export default HookForm;
