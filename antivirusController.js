const Antivirus = require("./antivirusModel");

module.exports.antivirus_get = async (req, res) => {
	try {
		const antivirus = await Antivirus.find();
		console.log(antivirus);
		res.status(201).json({ antivirus });
	} catch (err) {
		console.log(err.message);
		res.status(400).json({ error: err.message });
	}
};

//
module.exports.antivirus_post = async (req, res) => {
	try {
		const computerObj = req.body;
		const systemAntivirusInfo = new Map(Object.entries(computerObj.systemAntivirusInfo));
		const systemInfo = new Map(Object.entries(computerObj.systemInfo));
		const computerMap = { systemInfo, systemAntivirusInfo };
		console.log("Recieved:", computerObj);
		await Antivirus.create(computerMap);
		res.status(201).json({ success: "Added antivirus" });
	} catch (err) {
		console.log(err.message);
		res.status(400).json({ error: err.message });
	}
};
