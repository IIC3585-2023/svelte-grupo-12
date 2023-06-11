import { writable } from "svelte/store";

const getRandomSize = () => {
  var sizes = ["card_small", "card_medium", "card_large"];
  let randomIndex = Math.floor(Math.random() * sizes.length);
  return sizes[randomIndex];
};

export const loading = writable(false);
export const error = writable(false);
export const data = writable([]);

export const get = async (url) => {
  loading.set(true);
  error.set(false);
  console.info("get", url);
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: 
        //"Client-ID MWAxqOZG1EXPZkFrnlWZ4PyB-2aqQZpEZydGHRmjDJI",
        //"Client-ID 6H1smp1FpNFz-V7LF-BHILxuuM6MYd1aC_2lFqNN_2k",
        "Client-ID nwcUw1WtMWgLsEeQQG_f8osbotd9JvJLJdPuVLnSsEw",
      },
    });
    const imageData = await response.json();
    imageData.forEach((image) => {
      image.size = getRandomSize();
    });
    data.set(imageData);
  } catch (e) {
    error.set(e);
  }
  loading.set(false);
};

export const loadMore = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: 
        //"Client-ID MWAxqOZG1EXPZkFrnlWZ4PyB-2aqQZpEZydGHRmjDJI",
          // "Client-ID 6H1smp1FpNFz-V7LF-BHILxuuM6MYd1aC_2lFqNN_2k",
          "Client-ID nwcUw1WtMWgLsEeQQG_f8osbotd9JvJLJdPuVLnSsEw",
      },
    });
    const imageData = await response.json();
    imageData.forEach((image) => {
      image.size = getRandomSize();
    });
    data.update((d) => {
      return [...d, ...imageData];
    });
  } catch (e) {
    error.set(e);
  }
};
