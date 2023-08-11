import { File } from "../interfaces";

interface IGrid {
  items: File[];
}

const Grid = ({ items }: IGrid) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((file: File) => (
        <>
          <div className="bg-white shadow-md rounded-lg p-4">
            <p className="text-gray-600">{file.created_at}</p>
            <h2 className="text-xl font-semibold mb-2 text-gray-600">
              {file.name}
            </h2>
          </div>
        </>
      ))}
    </div>
  );
};

export default Grid;
