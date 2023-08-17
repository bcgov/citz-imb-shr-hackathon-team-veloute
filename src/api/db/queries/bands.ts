import { Bands } from "../models/bands";

export const getBands = async () => {
  // Find all bands
  const bands = await Bands.findAll();
  return bands;
};

interface BandProps {
  name: string;
  minValue?: number;
  maxValue?: number;
}

export const insertOneBand = async (record: BandProps) => {
  await Bands.create({
    name: record.name,
    minValue: record.minValue || null,
    maxValue: record.maxValue || null,
  });
};
