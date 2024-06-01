import { database } from "../database.js";

export const getUsers = (_, response) => 
{
    const query = "SELECT * FROM usuarios;"

    database.query(query, (error, data) => 
    {
        if(error) return response.json(error)

        return response.status(200).json(data)
    })


}
