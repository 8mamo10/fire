export type Employee = {
  employee_id: string;
  name: string;
  position: string;
  image_url: string;
  join_date: string;
  location_id: number;
  department_id: number;
  location_name: string;
  department_name: string;
  image_file?: File;
};

export const findAllEmployees = async (db: D1Database) => {
  const query = `
      SELECT employees.*, locations.location_name, departments.department_name 
      FROM employees
      JOIN locations ON employees.location_id = locations.location_id
      JOIN departments ON employees.department_id = departments.department_id
      `;
  const { results } = await db.prepare(query).all();
  const employees = results;
  return employees;
};
