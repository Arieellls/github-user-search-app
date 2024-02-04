import { create } from "zustand";

// Function to format joined date
const formatJoinedDate = (rawDate) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = new Date(rawDate).toLocaleDateString(
    undefined,
    options
  );
  return formattedDate;
};

export const useProfileStore = create((set) => ({
  initializing: true,
  show: false,
  notFound: false,
  name: "",
  username: "",
  joinedDate: "",
  image: "",
  bio: "",
  repos: 0,
  followers: 0,
  following: 0,
  location: "Not Available",
  twitter: "Not Available",
  website: "Not Available",

  fetchData: async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      console.log("Something went wrong");
      set({ initializing: false });
      set({ notFound: true });
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    const responseData = await response.json();
    return responseData;
  },
  
  getUserProfile: async (username) => {
    set({ initializing: true });
    set({ notFound: false });
    const data = await useProfileStore.getState().fetchData(username);
    console.log(data);
    if (!data) {
      return;
    }

    set(() => ({
      initializing: false,
      name: data.name ? data.name : "No name",
      username: "@" + data.login.toLowerCase(),
      joinedDate: "Joined " + formatJoinedDate(data.created_at),
      bio: data.bio,
      repos: data.public_repos,
      followers: data.followers,
      image: data.avatar_url,
      following: data.following,
      location: data.location ? data.location : "Not Available",
      twitter: data.twitter_username ? data.twitter_username : "Not Available",
      website: data.blog ? data.blog : "Not available",
    }));
  },
}));
