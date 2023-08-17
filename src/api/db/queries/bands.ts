import { Bands } from "../models/bands";

export const getBands = async () => {
  // Find all bands
  const bands = await Bands.findAll();
  return bands;
};
