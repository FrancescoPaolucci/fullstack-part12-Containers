const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];
const name1 = process.argv[3];
const number1 = process.argv[4];

const url = `mongodb+srv://fullstack:${password}@cluster0.zoptv.mongodb.net/persone?retryWrites=true&w=majority`;

mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);
const person = new Person({
  name: name1,
  number: number1,
});

if (process.argv.length > 3) {
  person.save().then((result) => {
    console.log("Person saved!");
    mongoose.connection.close();
  });
} else if (process.argv.length < 4) {
  Person.find({}).then((result) => {
    result.forEach((person) => {
      console.log(person);
    });
    mongoose.connection.close();
    console.log("Connection closed");
  });
}
