import { File } from "../interfaces";

const getSortedFilesByCreatedAt = (
  files: File[],
  setFiles: (files: File[]) => void
) => {
  const sortedFiles = [...files].sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateB.getTime() - dateA.getTime();
  });

  setFiles(sortedFiles);
};

export default getSortedFilesByCreatedAt;
