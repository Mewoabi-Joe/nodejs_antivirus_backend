const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const antivirusSchema = new Schema(
	{
		systemInfo: Map,
		systemAntivirusInfo: Map,
	},
	{ timestamps: true }
);

const Antivirus = mongoose.model("antivirus", antivirusSchema);
module.exports = Antivirus;
