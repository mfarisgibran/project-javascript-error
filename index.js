try {
  const name = "Faris";

  if (name === "Faris") {
    console.log("You are " + name);
  } else {
    throw Error("You are not " + name);
  }
} catch (error) {
  alert.error(error.message);
}
