'use client';

const Navigator = () => {
    const paths = ['Packs', 'Hostel', 'Days', 'CheckOut'];

    const handlePrev = () => {
        const index = paths.indexOf(location.pathname.slice(1));
        if (index > 0) {
            location.pathname = `/${paths[index - 1]}`;
        }
    }

    const handleNext = () => {
        const index = paths.indexOf(location.pathname.slice(1));
        if (index > 0) {
            location.pathname = `/${paths[index + 1]}`;
        }
    }
    
    return (
        <div className="w-full flex justify-between">
            <button className=" p-2" onClick={handlePrev}>Previous</button>
            <button className=" p-2" onClick={handleNext}>Next</button>
        </div>
    );
};

export default Navigator;
