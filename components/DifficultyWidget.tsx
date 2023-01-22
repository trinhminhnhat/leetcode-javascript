import { DIFFICULTIES } from '@/lib/constants';
import Link from 'next/link';
import React from 'react';
import Tag from './Tag';

const DifficultyWidget = () => {
    return (
        <div className="">
            <h2 className="text-2xl rounded-tr-md border text-white border-darkGreen rounded-tl-md bg-darkGreen px-4 py-2 font-bold">
                Difficulties
            </h2>
            <div className="flex gap-4 p-5 flex-wrap border border-darkGreen border-t-0">
                {DIFFICULTIES.map((item) => (
                    <Link key={item} href={`/difficulties/${item}`}>
                        <Tag hasBorder difficulty={item} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default DifficultyWidget;
