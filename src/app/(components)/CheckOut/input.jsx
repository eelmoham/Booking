
const Input = ({ validator, label, type, id, placeholder, seter, value }) => {
    return (
        <div className="relative z-0 w-full mb-6 group">
            <label
                htmlFor={'input-' + id}
                className="block mb-2 text-sm font-medium text-gray-900"
            >
                {label}
            </label>
            <input
                type={type}
                defaultValue={value}
                id={'input-' + id}
                className={validator == false?" bg-red-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5":"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"}
                placeholder={placeholder}
                required={true}
                onChange={(e) => seter(e.target.value)}
            />
        </div>
    );
};

export default Input;