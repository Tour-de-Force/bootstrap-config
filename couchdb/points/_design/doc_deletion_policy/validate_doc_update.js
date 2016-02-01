function(newDoc, oldDoc, userCtx, secObj) {
  if('_admin' in userCtx.roles) {
    return;
  } else if(newDoc._deleted) {
    throw({ 'forbidden': 'Only admins may delete documents' });
  } else {
    return;
  }
}
