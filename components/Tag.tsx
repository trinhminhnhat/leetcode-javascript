const Tag = ({ difficulty }: { difficulty: string }) => {
    const config: any = {
        Easy: 'bg-lightGreen text-green',
        Medium: 'bg-yellow text-orange',
        Hard: 'bg-pink text-red',
    };

    return (
        <div className={`inline-block px-5 py-1 w-[100px] border rounded-[9999px] ${config[difficulty]}`}>
            {difficulty}
        </div>
    );
};

export default Tag;
