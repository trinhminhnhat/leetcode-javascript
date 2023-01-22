const Tag = ({ difficulty, hasBorder = false }: { difficulty: string; hasBorder?: boolean }) => {
    const config: any = {
        easy: hasBorder ? 'bg-lightGreen text-green' : 'text-green',
        medium: hasBorder ? 'bg-yellow text-orange' : 'text-orange',
        hard: hasBorder ? 'bg-pink text-red' : 'text-red',
    };

    return (
        <div
            className={`first-letter:uppercase text-center inline-block px-2 py-1 w-[85px] transition-all ${hasBorder && 'border rounded-[9999px] hover:scale-105'
                } ${config[difficulty]}`}
        >
            {difficulty}
        </div>
    );
};

export default Tag;
