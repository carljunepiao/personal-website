const Sequelize = require('sequelize');

const connectionUrl = 'postgres://webeng:webeng@localhost:5432/webeng-carlpiao';
const database = new Sequelize(connectionUrl);

const Visitor = database.define('visitors', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	fname: {
		type: Sequelize.STRING,
		allowNull: false
	},
    lname: {
        type: Sequelize.STRING,
		allowNull: false
    },
	country: {
		type: Sequelize.STRING,
		allowNull: false
	},
	message: {
		type: Sequelize.STRING,
		allowNull: false
	}
}, {
	timestamps: true
});

database.sync();

module.exports.Visitor = Visitor;