import { useState,useEffect } from "react"
const useRestaurant = (id) =>{
    const [restaurant,setRestaurant] = useState({})

    useEffect(()=>{
        const getData = async ()=>{
            try {
                const response = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627&menuId="+id)
            const data = await response.json()
            if (data.statusCode !== 0) throw new Error(data?.statusMessage);

            setRestaurant(data.data)
            } catch (error) {
                setRestaurant(error)
            }
        }
        getData()

    },[id])



    return restaurant
}

export default useRestaurant