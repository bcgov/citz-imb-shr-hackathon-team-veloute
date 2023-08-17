import { Positions } from "../models/positions";

export const getPositions = async () => {
    const positions = await Positions.findAll();
    return positions;
};

interface PositionProps {
    positionNumber: string;
}

export const insertOnePosition = async (record: PositionProps) => {
    await Positions.create({
        positionNumber: record.positionNumber,
    });
  };