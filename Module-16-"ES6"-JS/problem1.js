// const user = {
//   name: "Rahim",
//   show: function () {
//     console.log(this.name);
//   },
// };

// user.show();

const user = {
  name: "Rahim",
  show: () => {
    console.log(this.name);
  }
};

user.show();