function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("Data loaded");
      } else {
        reject("Failed to load");
      }
    }, 2000);
  });
}

fetchData()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));