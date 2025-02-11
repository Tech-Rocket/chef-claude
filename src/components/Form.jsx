const Form = () => {
  function signUp(formData) {
    const emailElement = formData.get("email");
    const passwordElement = formData.get("password");
  }
  return (
    <section className="bg-green-600 min-h-screen flex flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-semibold">Signup Form</h1>
      <form action={signUp} className="flex flex-col gap-3 w-[250px]">
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium text-lg">
            Email:
          </label>
          <input type="email" name="email" className="py-2 px-4 rounded-sm" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 font-medium text-lg">
            Password:
          </label>
          <input
            type="password"
            name="password"
            className="py-2 px-4 rounded-sm"
          />
        </div>

        <button className="transition-all duration-200 ease-in-out bg-black hover:bg-slate-600  py-2 text-white rounded-sm cursor-pointer">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
