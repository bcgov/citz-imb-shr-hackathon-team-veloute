import { Ministries } from "../models/ministries";

export const getMinistries = async () => {
    const ministries = await Ministries.findAll();
    return ministries;
};

interface MinistriesProps {
    name: string;
}

export const insertOneMinistry = async (record: MinistriesProps) => {
    await Ministries.create({
        name: record.name,
    });
  };