import { Request, Response } from "express";

/**
 * @description Used to check if API is running.
 * @param {Request}     req Incoming request
 * @param {Response}    res Outgoing response
 * @returns {Response}      A 200 status indicating API is healthy and running
 */

function extractFieldValues(jsonArray: any[]) {
  const extractedValues: {}[] = [];

  jsonArray.forEach(
    (item: { [x: string]: any; hasOwnProperty: (arg0: string) => any }) => {
      const values: any = {};

      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          values[key] = item[key];
        }
      }

      extractedValues.push(values);
    }
  );

  return extractedValues;
}

export const csvUpload = async (req: Request, res: Response) => {
  extractFieldValues(req.body);
  res.status(201).send();
};
