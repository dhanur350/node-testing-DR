const calculateAge = require('./utils')
let log = console.log
test('one equals to one', () => {
	// if (1 == 1) {
	// 	console.log('test passed!!')
	// }

	let result = 1
	let expected = 1

	expect(result).toBe(expected)
})

test('json check', () => {
	let received = {name: 'dhanur'}
	let expected = '{"name":"dhanur"}'

	let json = JSON.stringify(received)

	expect(json).toBe(expected)
})

test('rakesh age', () => {
	let born = 1996
	let expected = 26

	let received = calculateAge(born)
	expect(received).toBe(expected)
})

test('dhanur age', () => {
	let born = 1995
	let expected = 27

	let received = calculateAge(born)
	expect(received).toBe(expected)
})

test('undefined age', () => {
	let born
	let expected = 'Please provide dob first!'

	let received = calculateAge(born)
	expect(received).toBe(expected)
})

test('has a property', () => {
	let obj = {name: 'sahil', _id: '10', age: 20}

	// expect(bruno).toHaveProperty('_id')
	expect(obj).toHaveProperty('name')
	expect(obj).toHaveProperty('_id')
	expect(obj).toHaveProperty('age')
})

test('matching object', () => {
	// expect(bruno).toMatchObject(_bruno)

	let received = {name: 'Dhanur', age: 18}
	let expected = {name: 'Dhanur', age: 18}

	expect(received).toMatchObject(expected)
})

// Wrong way of comparing objects!
// if (received === expected) {
// 	console.log('values are equal!!')
// } else {
// 	console.log('values are *NOT* equal!!')
// }

// Right way of comparing objects!
// if (JSON.stringify(received) === JSON.stringify(expected)) {
// 	console.log('values are equal!!')
// } else {
// 	console.log('values are *NOT* equal!!')
// }

// test('properties check', () => {
// 	let result = {name: 'Dhanur', age: 20, place: 'hoshiarpur'}
// 	let expected = 1

// 	expect(result).toBe(expected)
// })
