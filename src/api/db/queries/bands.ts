import { Band } from "../models/bands";

export const getBands = async () => {
  // Find all bands
  const bands = await Band.findAll();
  return bands;
};
