import { Divisions } from "../models/divisions";

export const getDivisions = async () => {
    const divisions = await Divisions.findAll();
    return divisions;
};

interface DivisionProps {
    name: string;
}

export const insertOneDivision = async (record: DivisionProps) => {
    await Divisions.create({
      name: record.name,
    });
  };