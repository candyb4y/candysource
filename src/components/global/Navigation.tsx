import Image from "next/image";
import React from "react";

const Navigation = () => {
    return (
        <div className="p-4 flex items-center justify-between relative">
            <aside className="flex items-center gap-2">
                <Image
                    src={"/canicorr.png"}
                    width={40}
                    height={40}
                    alt="candy icon"
                />
                <span className="text-xl font-bold">
                    candybay.
                </span>
            </aside>
            <nav className=""></nav>
        </div>
    )
}

export default Navigation;