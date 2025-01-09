export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  teacher1?: string;
  teacher2?: string;
}

export interface AdminUser extends User {
  isAdmin: boolean;
}
