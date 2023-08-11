import { File } from "../interfaces";
import naturalSortHandler from "./getNaturalSort";

const getSortedFilesByAToZ = (
  files: File[],
  setFiles: (files: File[]) => void
) => {
  const sortedFiles = [...files].sort((a, b) => {
    return naturalSortHandler(a.name, b.name);
  });
  setFiles(sortedFiles);
};

export default getSortedFilesByAToZ;
