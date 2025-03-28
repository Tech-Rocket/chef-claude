import { useState } from "react";

const Form = () => {
  const [ingredients, setIngredients] = useState([
    "cheese",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);

  const [recipeShown, setRecipeShown] = useState(false);

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

  const toggleRecipeShown = () => {
    setRecipeShown((prevState) => !prevState);
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
          <h1 className="text-4xl font-semibold mt-7 mb-6">
            Ingredients on hand:
          </h1>
          <ul className="mb-12 list-disc">{ingredientsElement}</ul>

          {ingredients.length > 3 && (
            <div className="transtion-all duration-300 bg-[#F0EFEB] md:w-[610px] text-black font-medium p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-5">
                  <h2 className="text-2xl font-medium">Ready for a recipe?</h2>
                  <p className="text-xl font-normal text-gray-500">
                    Generate a recipe from a list of ingredients
                  </p>
                </div>
                <button
                  onClick={toggleRecipeShown}
                  className="transiion-all duration-300 cursor-pointer hover:bg-orange-300 text-white bg-[#D17557] px-6 py-3 rounded-md"
                >
                  Get a recipe
                </button>
              </div>
            </div>
          )}
        </section>
      )}
      {/* recipeCode.md content  */}

      {recipeShown === true && (
        <section className="mt-4 text-slate-700 font-medium text-lg">
          <h2 className="text-3xl font-bold">Chef Claude Recommends:</h2>
          <article
            className="mt-5 w-[70%] flex flex-col gap-5"
            aria-live="polite"
          >
            <p className="">
              Based on the ingredients you have available, I would recommend
              making a simple a delicious <strong> Beef Bolognese Pasta</strong>
              . Here is the recipe:
            </p>
            <h3 className="text-2xl font-bold">Beef Bolognese Pasta</h3>
            <strong className="text-xl">Ingredients:</strong>
            <ul className="list-disc ml-9">
              <li>1 lb. ground beef</li>
              <li>1 onion, diced</li>
              <li>3 cloves garlic, minced</li>
              <li>2 tablespoons tomato paste</li>
              <li>1 (28 oz) can crushed tomatoes</li>
              <li>1 cup beef broth</li>
              <li>1 teaspoon dried oregano</li>
              <li>1 teaspoon dried basil</li>
              <li>Salt and pepper to taste</li>
              <li>
                8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
              </li>
            </ul>
            <strong className="text-xl">Instructions:</strong>
            <ol className="list-decimal ml-9">
              <li>
                Bring a large pot of salted water to a boil for the pasta.
              </li>
              <li>
                In a large skillet or Dutch oven, cook the ground beef over
                medium-high heat, breaking it up with a wooden spoon, until
                browned and cooked through, about 5-7 minutes.
              </li>
              <li>
                Add the diced onion and minced garlic to the skillet and cook
                for 2-3 minutes, until the onion is translucent.
              </li>
              <li>Stir in the tomato paste and cook for 1 minute.</li>
              <li>
                Add the crushed tomatoes, beef broth, oregano, and basil. Season
                with salt and pepper to taste.
              </li>
              <li>
                Reduce the heat to low and let the sauce simmer for 15-20
                minutes, stirring occasionally, to allow the flavors to meld.
              </li>
              <li>
                While the sauce is simmering, cook the pasta according to the
                package instructions. Drain the pasta and return it to the pot.
              </li>
              <li>
                Add the Bolognese sauce to the cooked pasta and toss to combine.
              </li>
              <li>
                Serve hot, garnished with additional fresh basil or grated
                Parmesan cheese if desired.
              </li>
            </ol>
          </article>
        </section>
      )}
    </main>
  );
};

export default Form;
