import { database } from "../database.js";

export const getUsers = (_, response) => 
{
    const query = "SELECT * FROM usuarios;"

    database.query(query, (error, data) => 
    {
        if(error) return response.json(error)

        return response.status(200).json(data)
    })
};

export const getUsersById = (request, response) => 
{
    const query = "SELECT * FROM usuarios WHERE `id` = ?;"

    database.query(query, [request.params.id], (error, data) => 
    {
        if(error) return response.json(error)

        return response.status(200).json(data)
    })
};

export const addUser = (request, response) =>
{
    const query = "INSERT INTO usuarios(`name`, `email`, `phone`, `birth_date`) VALUES(?);"

    const values = 
    [
        request.body.name,
        request.body.email,
        request.body.phone,
        request.body.birth_date,
    ];

    database.query(query, [values], (error) => 
    {
        if(error) return response.json(error);

        return response.status(201).json("Usuario cadastrado com sucesso.")
    })
};

export const updateUser = (request, response) =>
{
    const query = "UPDATE usuarios SET `name` = ?, `email` = ?, `phone` = ?, `birth_date` = ? WHERE `id` = ?;"

    const values = 
    [
        request.body.name,
        request.body.email,
        request.body.phone,
        request.body.birth_date,
    ]
    
    database.query(query, [...values, request.params.id], (error) => 
    {
        if(error) return response.json(error)

        return response.status(200).json("Usuario atualizado com sucesso.")
    })
};

export const deleteUser = (request, response) => 
{
    const query = "DELETE FROM usuarios WHERE `id` = ?;"

    database.query(query, [request.params.id], (error) =>
    {
        if(error) return response.json(error)

        return response.status(200).json("Usuario deletado com sucesso")
    })
};
