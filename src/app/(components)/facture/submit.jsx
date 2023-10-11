import axios from 'axios';
import Link from 'next/link';
const Submit = ({ days, hostel, info, packs, siter }) => {
    let servicesID = ''

    info.service.map((service) => {
        if (service !== undefined) {
            servicesID += service.id + ","
        }
    })
    servicesID = servicesID.substring(0, servicesID.length - 1);
    const order = {
        id_pack: packs.id,
        id_room: hostel.id,
        booking_type: days.offer ? "pack" : "days",
        start_date: new Date(days.from).toISOString().substring(0, 10),
        end_date: new Date(days.to).toISOString().substring(0, 10),
        pack_price: packs.pack_price,
        room_price: hostel.day_price,
        total_price: null,
        full_name: info.fullName,
        email: info.Email,
        age: info.Age,
        tele: info.Telephone,
        level: info.Level,
        extra_services: servicesID,
        guest: info.Guest
    }
    return (
        <div>
            <Link
                href="/Thanks"
                className='mx-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400 flex gap-1 items-center cursor-pointer'
                onClick={() => {
                    siter(false)
                    axios.post('https://booking.tayyurt-surf.com/api/v1/bookings', order)
                        .then(res => {
                        }).catch(error => {
                            console.error("Error:", error);
                        });

                }}
            >
                
                   <span>Submet</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="white" className=" text-white"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" /></svg>

            </Link>
        </div>
    )
}
export default Submit
