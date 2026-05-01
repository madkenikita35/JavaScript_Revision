function One(callback) {
  console.log("One");
  callback();
}

function Two(callback) {
  console.log("Two");
  callback();
}

function Three() {
  console.log("Three");
}

One(function () {
  Two(function () {
    Three();
  });
});
