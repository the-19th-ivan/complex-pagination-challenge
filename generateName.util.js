module.exports = (n, fname, lname) => {
  // throw an error if N is less than zero
  if (n < 1) throw new Error("N is invalid!");

  const output = []; // store the random names generated

  for (let i = 0; i < n; i++) {
    const randomFname = fname[Math.floor(Math.random() * fname.length)];
    const randomLname = fname[Math.floor(Math.random() * lname.length)];

    output.push(`${randomFname} ${randomLname}`);
  }

  return output;
};
