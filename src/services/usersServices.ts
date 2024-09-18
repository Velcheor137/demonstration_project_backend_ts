import { db } from "./../db/pool";

class users {
  async getAllUsers() {
    return "All users";
  }

  async getUserById(id: string) {
    const sql_request: string = `
            SELECT 
                *
            FROM public.users
            WHERE id = $1;
        `;

    const admin: JSON = await db.query(sql_request, [id]);

    return admin;
  }
}

export default users;
