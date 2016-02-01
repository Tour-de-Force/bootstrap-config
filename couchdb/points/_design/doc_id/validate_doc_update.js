function(newDoc, oldDoc, userCtx, secObj) {
  if('_admin' in userCtx.roles) {
    return;
  } else if(newDoc._id.match(/point\/.*/)) {
    return;
  } else {
    throw({ 'forbidden': 'Document ids must begin with `point/`'});
  }
}
