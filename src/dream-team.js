module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  members = members.filter(item => typeof(item) === 'string');
  return members.map(elem => elem.toUpperCase() .trim().slice(0,1)).sort().join('')
};
