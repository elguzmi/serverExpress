// declaración sql
var sqlMap = {
    user: {
        // Agregar usuario
        add: 'insert into user(name, age) values (?, ?)',
        // consulta al usuario
        select: 'select * from users '
    }
};

module.exports = sqlMap;