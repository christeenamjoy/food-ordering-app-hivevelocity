import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../Constants";
import useRestaurant from "../utils/hooks/useRestaurant";
import Shimmer from "./Shimmer";

const Restaurant = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);

  return (
    <div className="p-3 text-black">
      <div className="font-bold text-3xl m-2 my-8">{restaurant?.name}</div>
      <div className="m-2 text-2xl">Menu</div>

      <ul className="flex flex-wrap">
        {restaurant?.menu?.items ? (
          Object.values(restaurant?.menu?.items).map((item) => (
            <li
              key={item?.id}
              className="m-2 w-52 p-2 text-black text-lg shadow-lg"
            >
              <img
                src={IMAGE_URL + item?.cloudinaryImageId}
                alt="res"
                className="w-64 h-40"
              />

              {item?.name}
              <div className="text-sm">{item?.category}</div>
            </li>
          ))
        ) : (
          <Shimmer />
        )}
      </ul>
    </div>
  );
};

export default Restaurant;
