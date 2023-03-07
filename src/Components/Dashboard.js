import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  IMAGE_URL,
  IMAGE_ARR,
  API_URL,
  deleteIcon,
  editIcon,
  nextIcon,
} from "../Constants";
import { addItems, setItems, deleteItems, updateItem } from "../utils/slice";
import Shimmer from "./Shimmer";

const Dashboard = () => {
  const restaurant = {
    data: {
      id: "",
      name: "",
      cuisines: ["North Indian", "Kebabs", "Biryani"],
      cloudinaryImageId: "",
    },
  };

  const [restaurantName, setRestaurantName] = useState("");
  const [editedId, setEditedId] = useState("");
  const [editedName, setEditedName] = useState("");

  const dispatch = useDispatch();

  const restaurants = useSelector((store) => store.restaurants.items);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data.statusCode !== 0) throw new Error(data?.message);
        const fetchedRestaurants = data?.data?.cards[2]?.data?.data?.cards;
        dispatch(setItems(fetchedRestaurants));
      } catch (e) {}
    };

    getData();
  }, [dispatch]);

  const handleAddItem = () => {
    const id = Math.floor(Math.random() * 100);
    const cloudinaryImageId =
      IMAGE_ARR[Math.floor(Math.random() * IMAGE_ARR.length)];
    const updatedList = {
      data: {
        ...restaurant.data,
        id,
        cloudinaryImageId,
        name: restaurantName,
      },
    };

    dispatch(addItems(updatedList));
    setRestaurantName("");
  };

  const handleDeleteItem = (e, id) => {
    e.preventDefault();
    dispatch(deleteItems(id));
  };

  const handlePatchItem = () => {
    dispatch(updateItem({ id: editedId, name: editedName }));
    setEditedId("");
    setEditedName("");
  };

  const Edit = () => (
    <div className="mt-2">
      <input
        type="text"
        autoFocus="autoFocus"
        className="bg-gray-100 p-2 border"
        value={editedName}
        onChange={(e) => {
          e.preventDefault();
          setEditedName(e.target.value);
        }}
      />
      <button
        onClick={handlePatchItem}
        className="bg-slate-500 p-2 mt-2 border-solid border text-white"
      >
        Change Name
      </button>
    </div>
  );

  const RestrauntCard = ({ id, name, cuisines, cloudinaryImageId }) => {
    return (
      <div className="w-128 bg-white m-2 shadow-slate-800 p-2 relative">
        <img
          src={IMAGE_URL + cloudinaryImageId}
          alt="res"
          className="w-64 h-40"
        />
        <Link to={"/restaurant/" + id}>
          <div className="absolute top-4 right-4 bg-white p-2 rounded">
            {nextIcon}
          </div>
        </Link>
        <div className="flex w-64">
          {id !== editedId && (
            <>
              <div className=" my-2 font-bold text-xl mr-2">{name} </div>
              <div
                className="flex items-center"
                onClick={() => {
                  setEditedId(id);
                  setEditedName(name);
                }}
              >
                {editIcon}
              </div>{" "}
            </>
          )}

          {id === editedId && <Edit />}
        </div>
        <h3 className="w-64">{cuisines?.join(", ")}</h3>
        <div onClick={(e) => handleDeleteItem(e, id)}>{deleteIcon}</div>
      </div>
    );
  };

  return (
    <>
      <div className="flex m-10">
        <input
          type="text"
          className="bg-gray-400 p-4"
          onChange={(e) => setRestaurantName(e.target.value)}
          value={restaurantName}
        />
        <button
          onClick={handleAddItem}
          className="bg-slate-500 w-128 px-4 mx-4 border-solid border text-white"
        >
          Add New restaurant
        </button>
      </div>
      <div className="p-3 m-2">Total Restaurants : {restaurants.length}</div>
      <div className="flex flex-wrap p-3 w-full h-full bg-gray-100">
        {restaurants.length > 0 ? (
          restaurants?.map((restaurant) => (
            <RestrauntCard key={restaurant?.data?.id} {...restaurant?.data} />
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </>
  );
};

export default Dashboard;
