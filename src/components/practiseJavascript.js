function SayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
}
const person = {
  name: "Mosh",
  walk: () => console.log(this),
  talk: () => {}
};
person.talk();
const targetMember = "name";
person[targetMember.value] = "John";

SayHello();

const hi = function(number) {
  return number * number;
};
const hi = number => number * number;

const jobs = [
  { id: 1, isActive: false },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
];

const activeJobs = jobs.filter(function(job) {
  return job.isActive;
});

console.log(activeJobs);

const person = {
  talk() {
    console.log("this", this);
  }
};

colors = ["blue", "green", "yellow"];

const listOfColors = colors.map(color => `<li>${color}</li>`);
console.log(listOfColors);

const address = {
  street: "",
  city: "",
  country: ""
};
const { street } = address;
const street = address.street;
const { street: st } = address;
