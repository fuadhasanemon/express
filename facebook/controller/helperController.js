// Check age

const checkAge = (req, res) => {
  const { name, age } = req.body;

  if (age >= 21) {
    res.status(200).send(`hi ${name}, Tomar biyar boyosh hoise`);
  } else {
    res.status(404).send(`hi ${name}, Tomar biyar boyosh hoy nai`);
  }
};

const currancyCheck = (req, res) => {
  const { doller, type } = req.params;
  //   res.status(200).send(`${doller} Doller = ${doller * 120}  BDT`);
  res.send(`${doller} and ${type}`);
};

module.exports = {
  checkAge,
  currancyCheck,
};
