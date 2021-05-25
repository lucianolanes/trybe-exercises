const nameEmail = (name) => {
  const email = name.toLowerCase().split(' ').join('_');
  return ({'name': name, 'email': `${email}@email.com`});
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Rita Cadillac') ,
    id2: callback('Carla Perez') ,
    id3: callback('Gretchen') ,
  }
  return employees;
};

console.log(newEmployees(nameEmail));
