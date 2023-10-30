import React from "react";

import CartButton from "./CartButton";
import UserNav from "./UserNav";

import Logo from "./Logo";

export default function Header() {
    return (
        <header className="sticky top-0 z-10 shadow">
            <div className="container ms-auto p-4 flex items-center justify-between">
                <Logo />
                <div className="flex items-center justify-center space-x-4">
                    <CartButton />
                    <UserNav />
                </div>
            </div>
        </header>
    );
}
