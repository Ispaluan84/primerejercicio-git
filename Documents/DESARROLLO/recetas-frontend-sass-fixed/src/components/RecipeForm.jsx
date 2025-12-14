import React from "react";

export default function RecipeForm({ form, onChange, onSubmit, titleForm = "Formulario de Receta", error}) {
  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto mt-10 space-y-4">
        <h2 className="text-2x1 font-bold">{titleForm}</h2>
        {error && <p className="text-red-500">{error}</p>}

        <input
            name="title"
            value={form.title}
            onChange={onChange}
            className="border p-2 w-full"
            placeholder="Título"
            required
        />

        <textarea
            name="ingredients"
            value={form.ingredients}
            onChange={onChange}
            className="border p-2 w-full"
            placeholder="Ingredientes"
            required
        />

        <textarea
            name="instructions"
            value={form.instructions}
            onChange={onChange}
            className="border p-2 w-full"
            placeholder="Instrucciones"
            required
        />  

        <button className="bg-blue-600 text-white py-2 px-4 rounded">
            Guardar    
        </button>  
    </form>
  )  
}




