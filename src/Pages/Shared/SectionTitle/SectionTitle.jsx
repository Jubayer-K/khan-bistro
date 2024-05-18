const SectionTitle = ({heading , subHeading}) => {
    return (
        <>
            <div className="text-center max-w-80 mx-auto my-8">
                <p className="text-base text-yellow-600">---{subHeading}---</p>
                <h3 className="md:text-4xl border-y my-2 py-1 uppercase">{heading}</h3>
            </div>
        </>
    );
};

export default SectionTitle;