import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
import type { FC } from 'hono/jsx'
import type { Employee } from '../db'
import { findAllEmployees, } from '../db'

const className = css`
  font-family: sans-serif;
`

const EmployeeCard: FC<{ employee: Employee }> = ({ employee }) => {
  const { employee_id, name, image_url, department_name, location_name } = employee;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
      <a href={`/ employee / ${employee_id}`}>
        <img className="bg-indigo-600 p-4 rounded-t-lg" src={image_url} alt={name} />
      </a>
    </div>
  );
};

export default createRoute(async (c) => {
  const employees = await findAllEmployees(c.env.DB)
  return c.render(
    <div class={className}>
      <h1>Hello, World!!</h1>
    </div>,
  )
})
