/**
 * Un-Authorized Error
 * @class UnauthorizedError
 * @extends Error
 * @classdesc Un-Authorized Error Class
 * @memberof Errors.http
 */
module.exports = class UnauthorizedError extends Error {
	constructor(message, description) {
		super(message);
		this.description = description;
	}
};
