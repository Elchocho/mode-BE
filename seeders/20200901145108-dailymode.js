'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'dailymodes',
			[
				{
					mode: 4,
					comment: 'a',
					image: null,
					createdAt: '2020-09-03',
					updatedAt: new Date(),
					userId: 1,
				},
				{
					mode: 4,
					comment: 'b',
					image: null,
					createdAt: '2020-09-03',
					updatedAt: new Date(),
					userId: 2,
				},
				{
					mode: 4,
					comment: 'This is the way',
					image: null,
					createdAt: '2020-09-03',
					updatedAt: new Date(),
					userId: 3,
				},
				{
					mode: 2,
					comment: 'a',
					image: null,
					createdAt: '2020-09-4',
					updatedAt: new Date(),
					userId: 1,
				},
				{
					mode: 2,
					comment: 'b',
					image: null,
					createdAt: '2020-09-4',
					updatedAt: new Date(),
					userId: 2,
				},
				{
					mode: 2,
					comment: 'This is the way',
					image: null,
					createdAt: '2020-09-4',
					updatedAt: new Date(),
					userId: 3,
				},
				{
					mode: 3,
					comment: 'a',
					image: null,
					createdAt: '2020-09-05',
					updatedAt: new Date(),
					userId: 1,
				},
				{
					mode: 3,
					comment: 'b',
					image: null,
					createdAt: '2020-09-05',
					updatedAt: new Date(),
					userId: 2,
				},
				{
					mode: 3,
					comment: 'This is the way',
					image: null,
					createdAt: '2020-09-05',
					updatedAt: new Date(),
					userId: 3,
				},
				{
					mode: 2,
					comment: 'a',
					image: null,
					createdAt: '2020-09-06',
					updatedAt: new Date(),
					userId: 1,
				},
				{
					mode: 2,
					comment: 'b',
					image: null,
					createdAt: '2020-09-06',
					updatedAt: new Date(),
					userId: 2,
				},
				{
					mode: 2,
					comment: 'This is the way',
					image: null,
					createdAt: '2020-09-06',
					updatedAt: new Date(),
					userId: 3,
				},
				{
					mode: 3,
					comment: 'a',
					image: null,
					createdAt: '2020-09-07',
					updatedAt: new Date(),
					userId: 1,
				},
				{
					mode: 3,
					comment: 'b',
					image: null,
					createdAt: '2020-09-07',
					updatedAt: new Date(),
					userId: 2,
				},
				{
					mode: 3,
					comment: 'This is the way',
					image: null,
					createdAt: '2020-09-07',
					updatedAt: new Date(),
					userId: 3,
				},
				{
					mode: 4,
					comment: 'a',
					image: null,
					createdAt: '2020-09-08',
					updatedAt: new Date(),
					userId: 1,
				},
				{
					mode: 4,
					comment: 'b',
					image: null,
					createdAt: '2020-09-08',
					updatedAt: new Date(),
					userId: 2,
				},
				{
					mode: 4,
					comment: 'This is the way',
					image: null,
					createdAt: '2020-09-08',
					updatedAt: new Date(),
					userId: 3,
				},
				{
					mode: 5,
					comment: 'a',
					image: null,
					createdAt: '2020-09-09',
					updatedAt: new Date(),
					userId: 1,
				},
				{
					mode: 5,
					comment: 'b',
					image: null,
					createdAt: '2020-09-09',
					updatedAt: new Date(),
					userId: 2,
				},
				{
					mode: 5,
					comment: 'This is the way',
					image: null,
					createdAt: '2020-09-09',
					updatedAt: new Date(),
					userId: 3,
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('dailymodes', null, {})
	},
}
