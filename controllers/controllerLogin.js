const getLogin = async (req, res) => {
  const { username, password } = req.body;
  let role;
  switch (username) {
    case "student":
      role = "student";
      break;
    case "tutor":
      role = "tutor";
      break;
    case "dean":
      role = "dean";
      break;
    case "principle":
      role = "principle";
      break;
    default:
      console.log("user not found");
      break;
  }
  if (role) {
    res.cookie("verified", role);
    res.json({ username: username, role: role });
  } else {
    res.json("user not found");
  }
  
};

module.exports = { getLogin };
