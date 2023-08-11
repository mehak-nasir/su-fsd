import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

import { File } from "./../../components/interfaces";

const FILE_NAME = "data.csv";
const REGEX = /\r?\n/;
const SPLIT_BY_SEMI_COLON = ";";

const fetchFilesInfo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const filePath = path.join(process.cwd(), FILE_NAME);
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .json({ error: "An error occurred while reading the file." });
        return;
      }

      const dataArray: File[] = data
        .split(REGEX)
        .map((line) => {
          const [createdAt, filename] = line.split(SPLIT_BY_SEMI_COLON);

          return { name: filename, created_at: createdAt };
        })
        .filter((File) => File.name && File.created_at);

      res.status(200).json(dataArray);
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
};

export default fetchFilesInfo;
