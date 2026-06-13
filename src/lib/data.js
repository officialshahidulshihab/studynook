export const getFeaturedRooms = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/rooms/featured`,{cache: "no-store"});
  const data = await res.json();
  return data;
};

export const getAllRooms = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/rooms`,{ cache: "no-store" } );
  const data = await res.json();
  return data;
};

export const getRoomById = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/rooms/${id}`);
  if (!res.ok) return null;
  const data = await res.json();
  return data;
};

export const getUserListingRoom = async (userId, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/rooms/user/${userId}`, {
    cache: 'no-store',
    headers: {
      
      authorization: token,
    },
  });
  const data = await res.json();
  return data;
};

export const getAllBookings = async (id, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/booking/${id}`, {
    headers: {
      authorization: token,
    },
  });
  const data = await res.json();
  return data;
};
