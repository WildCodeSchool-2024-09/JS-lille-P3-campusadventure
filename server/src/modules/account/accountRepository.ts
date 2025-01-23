import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Account = {
  id: number;
  username: string;
  email: string;
  password: string;
  teacher_1: string;
  teacher_2: string;
};

class AccountRepository {
  async create(account: Account) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO account (username, email, password) VALUE (?, ?, ?)",
      [account.username, account.email, account.password],
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from account");
    return rows as Account[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM account WHERE id = ?",
      [id],
    );
    return rows[0] as Account;
  }
  async readByEmail(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM account WHERE email = ?",
      [email],
    );
    return rows[0] as Account;
  }
  async updateInfos(account: Account) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE account SET username = ?, email = ?, password = ? WHERE id = ?",
      [account.username, account.email, account.password, account.id],
    );
    return result.affectedRows; // Retourne le nombre de lignes affectées
  }

  async updateTrainers(account: Account) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE account SET teacher_1 = ?, teacher_2 = ? WHERE id = ?",
      [account.teacher_1, account.teacher_2, account.id], // Utilisation correcte des propriétés
    );
    return result.affectedRows; // Retourne le nombre de lignes affectées
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM account WHERE id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new AccountRepository();
