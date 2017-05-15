function(newDoc, oldDoc, userCtx, secObj) {
  if('_admin' in userCtx.roles) {
    return;
  } else {
    throw({ 'forbidden': 'Only admins may add, edit, or delete documents' });
  }
}
