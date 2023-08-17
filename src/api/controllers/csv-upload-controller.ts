import { parse } from "csv-parse";
import { Request, Response } from "express";
import fs from "fs";

/**
 * @description Used to check if API is running.
 * @param {Request}     req Incoming request
 * @param {Response}    res Outgoing response
 * @returns {Response}      A 200 status indicating API is healthy and running
 */

const decodeBase64ToJSON = (base64String: string) => {
  try {
    return JSON.parse(Buffer.from(base64String, "base64").toString("ascii"));
  } catch {
    throw new Error("Invalid input in decodeBase64ToJSON()");
  }
};

export const csvUpload = async (req: Request, res: Response) => {
  console.log(req.body.test);
  parseCSVData(decodeBase64ToJSON(req.body.test));
  res.status(201).send();
};

function parseCSVData(jsonData: fs.PathLike) {
  // function to parse the csv JSON data
  const results: any[] = [];

  fs.createReadStream(jsonData)
    .pipe(parse())
    .on("data", (data: any) => results.push(data))
    .on("end", () => {
      console.log(results);
    });
}
