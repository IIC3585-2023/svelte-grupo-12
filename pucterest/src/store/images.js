import { writable } from "svelte/store";

export const loading = writable(false);
export const error = writable(false);
export const data = writable([]);

let url = "https://api.unsplash.com/photos/random?count=30";

export const changeUrl = (newUrl) => {
  url = newUrl;
};

const fechtData = async () => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: 
      //"Client-ID MWAxqOZG1EXPZkFrnlWZ4PyB-2aqQZpEZydGHRmjDJI",
      //"Client-ID 6H1smp1FpNFz-V7LF-BHILxuuM6MYd1aC_2lFqNN_2k",
      "Client-ID nwcUw1WtMWgLsEeQQG_f8osbotd9JvJLJdPuVLnSsEw",
    },
  });
  return await response.json();
};

export const get = async () => {
  loading.set(true);
  error.set(false);
  try {
    const imageData = await fechtData();
    data.set(imageData);
  } catch (e) {
    error.set(e);
  }
  loading.set(false);
};

export const loadMore = async () => {
  try {
    const imageData = await fechtData();
    data.update((d) => {
      return [...d, ...imageData];
    });
  } catch (e) {
    error.set(e);
  }
};
