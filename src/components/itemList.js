const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - Rs
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="bg-black p-2 mx-22 rounded-lg shadow-lg text-white">
                Add +
              </button>
            </div>
            <img
              className="w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6N15cmAj-Z-nkv7zcm7NQUqNyDjLeJ155Xw&s"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
