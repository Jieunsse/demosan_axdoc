export type Role = "admin" | "employee";

export interface Company {
  id: string;
  name: string;
  ceo_name: string;
  reg_number: string;
  address: string;
  seal_url: string | null;
  created_at: string;
}

export interface Employee {
  id: string;
  company_id: string;
  user_id: string | null;
  email: string;
  name: string;
  department: string;
  position: string;
  joined_at: string;
  role: Role;
  created_at: string;
}

export interface CertificateIssuance {
  id: string;
  employee_id: string;
  purpose: string;
  issued_at: string;
}
