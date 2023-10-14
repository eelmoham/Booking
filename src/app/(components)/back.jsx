import Link from "next/link";

const Back = ({ link, Submited = true, setHidden = false }) => {
    return (
      <Link className={Submited ? "p-2 mx-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400" : " pointer-events-none opacity-30 p-2 mx-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400"}
        href={link}
        onClick={()=> {
          setHidden != false && setHidden(false)
        }}
      >
          <div className="flex gap-1 items-center px-2">
              <span>Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" height=".8em" fill='white' className='text-white' viewBox="0 0 320 512"> <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
          </div>
      </Link>
    );
    };

export default Back;