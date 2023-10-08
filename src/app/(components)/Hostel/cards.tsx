import React from "react";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

// reduce
import { useSelector, useDispatch } from 'react-redux'
import { setOrder } from '../Shared/Hostel';
//fin

// interface CardHostelProps {
//     id: number;
//     picture: string;
//     name: string;
//     short_description: string;
//     link: string;
// }

interface Hostel {
    id: number | null;
    title: string | null;
    short_description: string | null;
    description: string | null;
    pack_price: number | null;
    day_price: number | null;
    picture: string | null;
}

const CardHostel: React.FC<Hostel> = ({ id, title, short_description, description, pack_price, day_price, picture }) => {
    const dispatch = useDispatch()
    return (
        <Card className="py-4 my-2 sm:mx-2 max-w-[300px] mx-auto">
            <CardHeader className="   overflow-visible pt-1">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={`https://booking.tayyurt-surf.com/storage/${picture}`}
                    width={"100%"}
                />
            </CardHeader>
            <CardBody className="flex flex-col w-full items-start">
                <p className="text-tiny uppercase font-bold ">{title}</p>
                <small className="text-default-500 pt-2">{short_description}</small>
            </CardBody>
            <Link
                    onClick={
                        () => {
                            dispatch(setOrder({ id: id, title: title, short_description: short_description, description: description, pack_price: pack_price, day_price: day_price, picture: picture }))
                        }
                    }
                    href="Days"
                    className="mx-auto mt-2 inline-flex items-center rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-100" >select</Link>
        </Card>
    );
}
export default CardHostel;