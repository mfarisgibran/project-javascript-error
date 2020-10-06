try {
  const expectedName = "Faris";
  const inputName = prompt("What's your name?");

  if (expectedName.toLowerCase() === inputName.toLowerCase()) {
    console.log("You are " + expectedName);
  } else {
    throw Error("You are not " + expectedName);
  }
} catch (error) {
  console.error(error.message);
}
