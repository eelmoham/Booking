import React from "react";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

interface CardHostelProps {
    id: number;
    picture: string;
    name: string;
    short_description: string;
    link: string;
}

const CardHostel: React.FC<CardHostelProps> = ({ id, picture, name, short_description, link }) => {
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
                <p className="text-tiny uppercase font-bold">{name}</p>
                <small className="text-default-500">{short_description}</small>
                <Link
                    // href={link}
                    href="Days"
                    className="font-bold text-white text-large bg-green-500 px-2 py-1 mt-1 rounded-lg" >select</Link>
            
            </CardHeader>
        </Card>
    );
}
export default CardHostel;