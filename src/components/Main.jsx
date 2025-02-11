import { useState } from "react";

const Form = () => {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsElement = ingredients.map((data) => {
    return (
      <li key={data} className="mb-1">
        {data}
      </li>
    );
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
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full"
      >
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          className="md:col-span-2  border-2 border-gray-300 py-3 px-4 rounded-lg shadow-md focus:outline-none tracking-wider font-medium"
        />
        <button
          type="submit"
          className="border-none duration-300 transition-all hover:bg-slate-800 bg-black text-white font-semibold tracking-wide cursor-pointer rounded-lg py-3 px-6 w-full md:w-[200px] uppercase"
        >
          + Add ingredient
        </button>
      </form>
      {ingredients.length > 0 && (
        <section>
          <h1 className="text-4xl font-semibold mt-7 mb-4">
            Ingredients on hand:
          </h1>
          <ul className="mb-12 list-disc">{ingredientsElement}</ul>

          {ingredients.length > 3 && (
            <div className="transtion-all duration-300 bg-cyan-700 md:w-[610px] text-white font-medium p-6 rounded-md shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-5">
                  <h2 className="text-2xl font-medium">Ready for a recipe?</h2>
                  <p className="text-xl font-normal text-gray-300">
                    Generate a recipe from a list of ingredients
                  </p>
                </div>
                <button className="transiion-all duration-300 cursor-pointer hover:bg-orange-300 text-black bg-orange-400 px-4 py-3 rounded-md">
                  Get a recipe
                </button>
              </div>
            </div>
          )}
        </section>
      )}
    </main>
  );
};

export default Form;
