const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched successfully");
    // reject("Error occurred"); // Uncomment to test reject
  }, 2000);
});

fetchData
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });