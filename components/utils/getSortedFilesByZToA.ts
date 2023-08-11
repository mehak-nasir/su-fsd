import { File } from "../interfaces";
import naturalSortHandler from "./getNaturalSort";

const getSortedFilesByZToA = (
  files: File[],
  setFiles: (files: File[]) => void
) => {
  const sortedFiles = [...files].sort((a, b) => {
    return naturalSortHandler(b.name, a.name);
  });
  setFiles(sortedFiles);
};

export default getSortedFilesByZToA;
