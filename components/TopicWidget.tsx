import Link from 'next/link';

import { TOPICS } from '@/lib/constants';

const TopicWidget = () => {
    return (
        <div className="">
            <h2 className="text-2xl rounded-tr-md border text-white border-darkGreen rounded-tl-md bg-darkGreen px-4 py-2 font-bold">
                Topics
            </h2>
            <div className="flex gap-x-7 gap-y-5 p-5 flex-wrap border border-darkGreen border-t-0">
                {TOPICS.map((item) => (
                    <Link
                        key={item}
                        href={`/difficulty/${item}`}
                        className="underline underline-offset-2 hover:text-blue"
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TopicWidget;
