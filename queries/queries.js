import pool from '../config/db.js';

const argumento = process.argv.slice(2);
const opcion = argumento[0];
let nombre = argumento[1];
let rut = argumento[2];
let curso = argumento[3];
let nivel = argumento[4];

const addEscuelamusica = async () => {
    try {
        const text = 'INSERT INTO escuelaMusica(nombre, rut, curso, nivel) values($1, $2, $3, $4) RETURNING *';
        const values = [nombre, rut, curso, nivel];
        const response = await pool.query(text, values);
        console.log(response.rows);
    } catch (error) {
        console.log(error.message);
    }
};

const getEscuelamusica = async () => {
    try {
        const response = await pool.query('SELECT * FROM escuelaMusica');
        console.log(response.rows);
    } catch (error) {
        console.log(error.message);
    }
};

const getEscuelamusicaEstud = async () => {
    try {
      const consulta = 'SELECT * FROM escuelaMusica WHERE rut = $1';
      const values = [rut];
      const { rows } = await pool.query(consulta, values);
      console.log(rows);
      
    } catch (error) {
      console.log(error.message);
    }
  };

const editEscuelamusica = async () => {
    try {
        const text = 'UPDATE escuelaMusica set nombre = $1, rut = $2, curso = $3, nivel = $4 WHERE rut = $2 RETURNING *';
        const values = [nombre, rut, curso, nivel];
        const response = await pool.query(text, values);
        console.log(response.rows)
    } catch (error) {
        console.log(error.message);
    }
};


const deleteEscuelamusica = async () => {
    try {
    const text = "DELETE FROM escuelaMusica WHERE rut = $1 RETURNING *";
    const values = [rut];
    const response = await pool.query(text, values);
    console.log(response.rows)
    } catch (error) {
      console.log(error.message);
    }
    };

   
    

if (opcion === 'add') {
    addEscuelamusica();
} else if (opcion === 'get') {
    getEscuelamusica();
} else if (opcion === 'getEstudiante') {
    rut = argumento[1]
    getEscuelamusicaEstud();
} else if (opcion === 'edit') {
    editEscuelamusica();
} else if (opcion === 'delete') {
    rut = argumento[1]
    deleteEscuelamusica();
} else {
    console.log('No es una opción')
}