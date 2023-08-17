import { DataTypes } from "sequelize";
import { Employees } from "../models/employees";

export const getEmployees = async () => {
    const employees = await Employees.findAll();
    return employees;
};

interface EmployeeProps {
    salary: typeof DataTypes.INTEGER;
}

export const insertOneEmployee = async (record: EmployeeProps) => {
    await Employees.create({
      salary: record.salary,
    });
  };