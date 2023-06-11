import { writable } from "svelte/store";

const getRandomSize = () => {
  var sizes = ["card_small", "card_medium", "card_large"];
  let randomIndex = Math.floor(Math.random() * sizes.length);
  return sizes[randomIndex];
};

export default function (url) {
  const loading = writable(false);
  const error = writable(false);
  const data = writable([]);

  async function get() {
    loading.set(true);
    error.set(false);
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization:
            "Client-ID 6H1smp1FpNFz-V7LF-BHILxuuM6MYd1aC_2lFqNN_2k",
        },
      });
      const imageData = await response.json();
      imageData.forEach((image) => {
        image.size = getRandomSize();
      });
      console.info("imageData", imageData);
      data.set(imageData);
    } catch (e) {
      error.set(e);
    }
    loading.set(false);
  }

  async function loadMore() {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization:
            "Client-ID 6H1smp1FpNFz-V7LF-BHILxuuM6MYd1aC_2lFqNN_2k",
        },
      });
      const imageData = await response.json();
      imageData.forEach((image) => {
        image.size = getRandomSize();
      });
      console.info("imageData", imageData);
      data.update(imageData);
    } catch (e) {
      error.set(e);
    }
  }

  get();

  return [data, loading, error, get, loadMore];
}
