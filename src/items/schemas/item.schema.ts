import * as mongoose from "mongoose";

export const ItemSchema = new mongoose.Schema({
	name: { type: String },
	qty: { type: Number },
	description: { type: String },
});