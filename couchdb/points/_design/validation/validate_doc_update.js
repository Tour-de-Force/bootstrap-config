function(newDoc, oldDoc, userCtx, secObj) {
	if('_admin' in userCtx.roles) return;
	if(newDoc._deleted) {
		throw({'forbidden': 'only admins can delete documents'});
	}
}
