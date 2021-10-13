const Pool = require('pg').Pool;

// Please fill this database login information in or app
// will not work
const POSTGRES_DB_LOGIN = {
  host: "fill_me_in",
  user: "fill_me_in",
  database: "decisions",
  port: 5432
};

const pool = new Pool(POSTGRES_DB_LOGIN);

const getPerson = async (req, res) => {
  const { name } = req.params;

  await pool.query(`
    SELECT
      *
    FROM
      person
    WHERE
      name = $1
  `, [name])
  .then((results) => { res.status(200).json(results.rows) })
  .catch((err) => res.send(err))
}

const getOptions = async (req, res) => {
  const { name } = req.params;

  await pool.query(`
    SELECT
      *
    FROM
      options
    WHERE
      person_id =
        ( SELECT
            id
          FROM
            person
          WHERE
            name = $1
        )
  `, [ name ])
  .then((results) => res.status(200).json(results.rows))
  .catch((err) => res.send(err));
}

const insertPerson = async (req, res) => {
  const { name } = req.body;

  await pool.query(`
    INSERT INTO
      person (name)
    VALUES
      ($1)
  `, [ name ])
  .then(() => res.send('Name added successfully'))
  .catch(err => res.send(err));
};

const insertOptions = async(req, res) => {
  const { option, rating, name } = req.body;

  await pool.query(`
    INSERT INTO
      options (each_option, rating, person_id)
    VALUES
      ($1, $2,
      ( SELECT
          id
        FROM
          person
        WHERE
          name = $3
      ))
  `, [option, rating, name])
  .then(() => res.send('Option data added successfully'))
  .catch(err => res.send(err))
}

module.exports = {
  getPerson,
  getOptions,
  insertPerson,
  insertOptions
}