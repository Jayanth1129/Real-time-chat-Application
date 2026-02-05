exports.login = (req, res) => {
  const { emailOrPhone } = req.body;

  res.json({
    user: {
      id: "user123",
      username: "demo_user",
      email: emailOrPhone,
      phone: null,
      avatar: "",
    },
  });
};
