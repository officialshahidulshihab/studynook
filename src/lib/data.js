export const getFeaturedRooms=async()=>{
    const res=await fetch('http://localhost:5000/api/rooms/featured')
    const data=await res.json()
    return data;

}



export const getAllRooms=async()=>{
    const res= await fetch('http://localhost:5000/api/rooms')
    const data=await res.json()
    return data;

}


export const getRoomById=async(id)=>{
    const res=await fetch(`http://localhost:5000/api/rooms/${id}`)
    const data=await res.json()
    return data
}


export const getUserListingRoom=async(userId)=>{
    const res= await fetch(`http://localhost:5000/api/rooms/user/${userId}`)
    const data= await res.json()
    return data;

}