interface IOption {
  label: string;
  value: string;
}

interface IDropdown {
  onChangeHandler: (event: any) => void;
  options: IOption[];
}

const Dropdown = ({ onChangeHandler, options }: IDropdown) => {
  return (
    <div className="relative inline-block text-left">
      <select
        className="block w-full py-2 pl-3 pr-10 text-base leading-6 border rounded-md appearance-none focus:outline-none focus:ring focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5 text-gray-900"
        id="dropdown"
        name="dropdown"
        onChange={onChangeHandler}
      >
        <option value="" disabled selected>
          Select an option
        </option>
        {options.map(({ value, label }: IOption, index: number) => (
          <option value={value} key={index + 1}>
            {label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M7 7l3-3 3 3m0 6l-3 3-3-3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Dropdown;
