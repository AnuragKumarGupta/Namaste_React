const Contact = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h2 className="font-bold text-3xl m-4 p-4">This is Contact Page</h2>
      <form className="flex items-center justify-center flex-col">
        <input
          className="m-2 p-2 border border-black"
          type="text"
          placeholder="Name"
        />

        <input
          className="m-2 p-2 border border-black"
          type="text"
          placeholder="Message"
        />

        <button
          className="rounded-lg m-2 p-2 border border-black"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
