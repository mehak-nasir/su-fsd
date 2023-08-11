import Dropdown from "./common/Dropdown";

import { File } from "./interfaces";

import getSortedFilesByCreatedAt from "./utils/getSortedFilesByCreatedAt";
import getSortedFilesByAToZ from "./utils/getSortedFilesByAToZ";
import getSortedFilesByZToA from "./utils/getSortedFilesByZToA";

const sortOptions = [
  {
    value: "sortByCreatedAt",
    label: "Sort by created at",
  },
  {
    value: "sortByAtoZ",
    label: "Sort by A-Z",
  },
  {
    value: "sortByZtoA",
    label: "Sort by Z-A",
  },
];

interface ISortFilesDropdown {
  files: File[];
  setFiles: (files: File[]) => void;
}

export const SortFilesDropdown = ({ files, setFiles }: ISortFilesDropdown) => {
  const sortHandler = (event: any) => {
    const handlers: { [key: string]: () => void } = {
      sortByCreatedAt: () => getSortedFilesByCreatedAt(files, setFiles),
      sortByAtoZ: () => getSortedFilesByAToZ(files, setFiles),
      sortByZtoA: () => getSortedFilesByZToA(files, setFiles),
    };

    const selectedHandler = handlers[event.target.value];
    selectedHandler();
  };

  return <Dropdown onChangeHandler={sortHandler} options={sortOptions} />;
};
