import { Schema, model } from "mongoose";

const userSchema = new Schema({
	first_name: { type: String, default: null },
	last_name: { type: String, default: null },
	email: { type: String, unique: true },
	password: { type: String },
	role: { type: String },
	token: { type: String },
	phone: { type: String, default: null },
});

// model
const User = model("user", userSchema);

const findOne = (email) => {
	User.findByEmail(email, function (err, user) {
		if (err) return handleError(err);
		return user;
	});
};

export { findOne };
export default model("user", userSchema);
