import axios from 'axios';
import { Button } from 'flowbite-react';
import Link from 'next/link';
const Submet = ({ days, hostel, info, packs, siter }) => {
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
            <button className='bg-green-500 text-white'
                onClick={() => {
                    siter(false)
                    axios.post('https://booking.tayyurt-surf.com/api/v1/bookings', order)
                        .then(res => {
                        }).catch(error => {
                            console.error("Error:", error);
                        });

                }}
            >
                Submet
            </button>
        </div>
    )
}
export default Submet
