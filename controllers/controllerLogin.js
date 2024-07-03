//Login Handler
//POST
const getLogin = async (req, res) => {
  const { username, password } = req.body;
  let role;
  switch (username) {  //based on username roles will be assigned
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
    res.cookie("verified", role); //role assigned to cookie, for updating verification status
    res.json({ username: username, role: role });
  } else {
    res.json("user not found");
  }
  
};

module.exports = { getLogin };
