const configs = {
  "orient-mob-width": { px: "470px" },
  "orient-mid-width": { px: "600px" },
  registration: {
    id: {
      name: "idnote",
      info: "4-24 characters. Must be numbers. Greater than 1. Doesn't start with a 0",
    },
    fname: { name: "fnote", info: "3-10 characters. Must be letters" },
    lname: { name: "lnote", info: "3-10 characters. Must be letters" },
    cellphone: {
      name: "cellnote",
      info: "8-14 characters. Must be numbers. Must start with 0",
    },
    email: {
      name: "emailnote",
      info: "Must be a valid email. Less than 40 characters. Example: user@email.com",
    },
    creditlimit: {
      name: "creditlimitnote",
      info: "Must be numbers",
    },
  },
};
export default configs;
