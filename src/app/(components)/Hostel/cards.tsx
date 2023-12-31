import React, { useState } from "react";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

// reduce
import { useSelector, useDispatch } from 'react-redux'
import { setOrder } from '../Shared/Hostel';
//fin
import Loading from '../Loading/page';
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
    siter: any;
}
const CardHostel: React.FC<Hostel> = ({ id, title, short_description, description, pack_price, day_price, picture , siter}) => {
    const dispatch = useDispatch()
    const handleLoading = () => {
        siter(false);
    }
    return (
        <div className="tester">
            <Card className="my-2 sm:mx-2 max-w-[300px] mx-auto pt-0 pb-2">
                <CardHeader className="overflow-visible">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={`https://booking.tayyurt-surf.com/storage/${picture}`}
                        width={"100%"}
                    />
                </CardHeader>
                <CardBody className="flex flex-col w-full items-start py-0">
                    <p className="text-tiny uppercase font-bold ">{title}</p>
                    <small className="text-default-500">{short_description}</small>
                </CardBody>
                <Link
                    onClick={
                        () => {
                            handleLoading();
                            dispatch(setOrder({ id: id, title: title, short_description: short_description, description: description, pack_price: pack_price, day_price: day_price, picture: picture }))
                        }
                    }
                    href="Days"
                    className="mx-auto mt-2 inline-flex items-center rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-100" >select</Link>

            </Card>
        </div>
    );
}
export default CardHostel;