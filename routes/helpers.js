var express = require('express');
var router = express.Router();

module.exports = router;
const dayRefs = {
    0000: "All Day",
    0100: "Early Morning",
    0600: "Morning",
    0700: "Breakfast",
    1200: "Midday",
    1200: "Lunch",
    1300: "Afternoon",
    1800: "Evening",
    1800: "Dinner"
}

const helperFunction = () => {
	//this is a function
}

const helpers = {
	dayRefs: dayRefs,
	helperFunction: helperFunction
}

modules.exports = helpers
// export default helpers
