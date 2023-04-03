const ageValidator = (req, res, next) => {
  const { name, age } = req.body;

  if (age >= 70) {
    res.send(`${name} apnar biyer boyosh par hoye geche`);
  } else {
    next();
  }
};

module.exports = {
  ageValidator,
};
