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
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={`https://booking.tayyurt-surf.com/storage/${picture}`}
                    width={"100%"}
                />
            </CardBody>
            <CardHeader className="pl-5 pb-0 pt-2 flex-col items-start w-[100%]">
                <p className="text-tiny uppercase font-bold">{title}</p>
                <small className="text-default-500">{short_description}</small>
                <Link
                    onClick={
                        () => {
                            dispatch(setOrder({id:id, title:title, short_description:short_description, description:description, pack_price:pack_price, day_price:day_price, picture:picture}))
                            console.log('====================================');
                            console.log('id', id);
                            console.log('title', title);
                            console.log('short_description', short_description);
                            console.log('description', description);
                            console.log('pack_price', pack_price);
                            console.log('day_price', day_price);
                            console.log('picture', picture);
                            console.log('====================================');
                        }
                    }
                    href="Days"
                    className="font-bold text-white text-large bg-green-500 px-2 py-1 mt-1 rounded-lg" >select</Link>
            </CardHeader>
        </Card>
    );
}
export default CardHostel;