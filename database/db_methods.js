const db = require('./db_config');

function addUser(user) {
  return db("users")
    .insert(user)
    .then(res => {
      return { id: res[0] };
    });
}

function findBy(filter) {
    console.log(filter)
    return db('users')
      .where(filter);
  }

  
function findClasses() {

  return db("classes")
}

function getClassComment(classesId) {
  return db("comments")
      .where("classes_id", classesId)
      .then(classes => classes.map(Class => mappers.actionToBody(Class)));
}

function findClassById(id) {
    return db('classes')
      .where({ id });
}

function addClass(classInit) {
  return db('classes')
    .insert(classInit);
}

function updateClass(id, changes) {
  return db('classes')
    .where({ id }).update(changes);
}

function removeClass(id) {
  return db('classes')
    .where({ id })
    .del();
}


function findComments(id) {

  return db("comments as c")
    .join("classes as cl", "cl.id", "=", "c.classes_id")
    .select(
      "c.tittle",
      "c.content",
      "c.users_id",
      "c.classes_id"
    )
    .where({classes_id: id });
}

function addComment(comment) {
  return db('comments')
  .insert(comment);
}

function updateComment(id, changes) {
  return db('comments')
    .where({ id }).update(changes);
}

function removeComment(id) {
  return db('comments')
    .where({ id })
    .del();
}

module.exports = {
  addUser,
  findBy,
  findClasses,
  findComments,
  addClass,
  updateClass,
  removeClass,
  findClassById,
  getClassComment,
  addComment,
  updateComment,
  removeComment
}