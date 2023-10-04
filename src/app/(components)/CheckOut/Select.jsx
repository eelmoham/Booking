import { useState } from "react";

const Select = ({state}, id) => {
  const options = [
    {
      value: "Beginner",
      text: "Beginner",
    },
    {
      value: "intermediate",
      text: "intermediate",
    },
    {
      value: "Advanced",
      text: "Advanced",
    },
  ];
  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (event) => {
    setSelected(event.target.value);
    state(event.target.value);
    alert(event.target.value);
  };

  return (
    <div>
      <select
        id={"id-" + id}
        value={selected}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} >
            {option.text}{" "}
          </option>
        ))}{" "}
      </select>
    </div>
  );
};

export default Select;
