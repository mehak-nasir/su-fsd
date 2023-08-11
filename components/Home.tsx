import { useEffect, useState } from "react";

import { File } from "./interfaces";
import { SortFilesDropdown } from "@/components/SortFilesDropdown";
import Grid from "@/components/common/Grid";

const URL = "/api/files";

export const HomeComponent = () => {
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    fetchFilesInfo();
  }, []);

  const fetchFilesInfo = async () => {
    await fetch(URL)
      .then((response) => response.json())
      .then((data) => setFiles(data));
  };
  return (
    <>
      <SortFilesDropdown files={files} setFiles={setFiles} />
      <Grid items={files} />
    </>
  );
};
