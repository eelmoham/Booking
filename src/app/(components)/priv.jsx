import Link from "next/link";

const Prev = ({ link }) => {
    return (
        <Link
          href={link}
          className="w-max mx-2 pr-4 pl-3 py-2 bg-inherit hover:bg-gray-200 rounded-md text-black border flex gap-1 items-center cursor-pointer"
        >
          <span className='rotate-180'><svg xmlns="http://www.w3.org/2000/svg" height=".8em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></span>
          <span className="pl-1">Previous</span>
        </Link>
    );
    };

export default Prev;