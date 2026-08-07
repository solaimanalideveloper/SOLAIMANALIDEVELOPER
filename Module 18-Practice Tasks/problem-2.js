function buildProfileCard(user) {
  return `${user.name}\n${user.title} at ${user.company}`;
}
console.log(
  buildProfileCard({
    name: "Arif",
    title: "Developer",
    company: "Programming Hero",
  }),
);
console.log(
  buildProfileCard({
    name: "Solaiman",
    title: "Developer",
    company: "Programming Hero",
  }),
);
