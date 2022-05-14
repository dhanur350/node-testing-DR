// Test Driven Development
// =======================
let calculateAge = (born) => {
	if (born) {
		return 2022 - born
	} else {
		return 'Please provide dob first!'
	}
}
// return DOB - 2022

module.exports = calculateAge
