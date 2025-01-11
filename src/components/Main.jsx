import { useState } from "react";

const Form = () => {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsElement = ingredients.map((data) => {
    return <li key={data}>{data}</li>;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");

    if (typeof newIngredient === "string" && newIngredient.trim() !== "") {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }
  };

  return (
    <main className="flex flex-col justify-center p-16">
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-3 w-full">
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          className="col-span-2 border border-gray-300 py-2 px-4 rounded-md shadow-md"
        />
        <button
          type="submit"
          className="border-none duration-300 transition-all hover:bg-slate-800 bg-black text-white font-medium cursor-pointer rounded-md py-2 px-6 w-full md:w-[175px]"
        >
          + Add ingredient
        </button>
      </form>

      <div>
        <h1 className="text-2xl font-semibold mt-10 mb-5">
          Ingredients on Hand:
        </h1>
        <ul>{ingredientsElement}</ul>
      </div>
    </main>
  );
};

export default Form;
