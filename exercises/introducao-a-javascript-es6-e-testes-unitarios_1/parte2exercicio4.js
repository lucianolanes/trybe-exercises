const nomeTryber = (name) => `Tryber ${name} aqui!`;

let skills = ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'];

const textao = (nomeTryber) => {
    let skillsOrdenadas = skills.sort((key1,key2) => {
      for (let index = 0; index < skills.length; index += 1) {
        if (key1 < key2){
          return -1;
        } else if (key1 > key2){
          return +1;
        } else {
          return 0;
        }
      }
    })
    return skillsOrdenadas;
  }
