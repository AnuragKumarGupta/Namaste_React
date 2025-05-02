import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-green-100 rounded-lg hover:bg-green-200 flex-col min-w-0">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={
          "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg"
        }
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="line-clamp-1">{cuisines.join(",")}</h4>
      <h4 className="bg-green-400">{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
