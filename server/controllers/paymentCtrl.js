const Payments = require("../models/paymentModel");
const { getUserById } = require("../queries/users");

exports.getPayment = async (req, res, next) => {
  try {
    const user = await getUserById(req.user.userId).select("name email");
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    const { cart, paymentID, address } = req.body;
    const { _id, name, email } = user;

    const newPayment = new Payments({
      user_id: _id,
      name,
      email,
      cart,
      paymentID,
      address,
    });

    res.json({ status: "success", data: newPayment });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

exports.createPayment = async (req, res, next) => {
  try {
    const user = await getUserById(req.user.userId).select("name email");
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    const { cart, paymentID, address } = req.body;
    const { _id, name, email } = user;

    const newPayment = new Payments({
      user_id: _id,
      name,
      email,
      cart,
      paymentID,
      address,
    });

    res.json({ status: "success", data: newPayment });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
