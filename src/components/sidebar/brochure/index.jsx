import React from "react";

const Brochure = () => {
    const handleDownload = (filename, content) => {
        const element = document.createElement("a");
        const file = new Blob([content], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = filename;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return (
        <div className="sidbar-menu">
            <ul>
                <li className="m-0">
                    <button onClick={() => handleDownload("brochure.txt", "Ha Ha Ha, Heavy Relax, See You Not For Mind. kew amare chuse kore na not on like. cold baby cold baby,  just chill.....\n[Motherboard Takla]")}>
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/images/service/icon/small/9.png"
                            }
                            alt="logo"
                        />
                        Brochure.PDF
                    </button>
                </li>
                <li className="m-0">
                    <button className="border-0" onClick={() => handleDownload("brochure.txt", "Ha Ha Ha, Heavy Relax, See You Not For Mind. kew amare chuse kore na not on like. cold baby cold baby,  just chill.....[Motherboard Takla]")}>
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/images/service/icon/small/10.png"
                            }
                            alt="logo"
                        />
                        Brochure.DOC
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Brochure;
