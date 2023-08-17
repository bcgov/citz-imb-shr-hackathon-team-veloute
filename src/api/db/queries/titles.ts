import { Titles } from "../models/titles";

export const getTitles = async () => {
    const titles = await Titles.findAll();
    return titles;
};

interface TitleProps {
    name: string;
}

export const insertOneTitle = async (record: TitleProps) => {
    await Titles.create({
        name: record.name,
    });
  };