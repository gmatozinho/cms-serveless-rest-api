
init = async (client) => {
    await client.query(`
    CREATE TABLE IF NOT EXISTS access_group
    (
        id MEDIUMINT UNSIGNED not null AUTO_INCREMENT, 
        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        value varchar(100) not null, 
        PRIMARY KEY (id)
    );  
    `)

    await client.query(`
    INSERT INTO access_group (value)
    VALUES ("User manager")
    VALUES ("Content manager")
    VALUES ("Content curator");
    `)
}

module.exports = {
    init
}