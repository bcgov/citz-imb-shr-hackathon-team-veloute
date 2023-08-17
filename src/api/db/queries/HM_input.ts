import { DataTypes } from "sequelize";
import { HM_input } from "../models/HM_input";

export const getHM_input = async () => {
    const HM_in = await HM_input.findAll();
    return HM_in;
};

interface HM_inputProps {
    experience: typeof DataTypes.INTEGER;
    comment: string;
}

export const insertOneHM_input = async (record: HM_inputProps) => {
    await HM_input.create({
        experience: record.experience,
        comment: record.comment || null,
    });
  };