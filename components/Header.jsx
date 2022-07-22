"use strict";
import React from 'react';
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline";

const Header = () => {
    return (
        <header className={'header flex flex-col sm:flex-row m-5 justify-between items-center h-auto'}>
            <div className={'flex flex-grow justify-evenly max-w-2xl'}>
                <HeaderItem title={'HOME'} Icon={HomeIcon} />
                <HeaderItem title={'TRENDING'} Icon={LightningBoltIcon} />
                <HeaderItem title={'VERIFIED'} Icon={BadgeCheckIcon} />
                <HeaderItem title={'COLLECTIONS'} Icon={CollectionIcon} />
                <HeaderItem title={'SEARCH'} Icon={SearchIcon} />
                <HeaderItem title={'ACCOUNT'} Icon={UserIcon} />
            </div>

            <Image className={'object-contain'} alt={'test name'} width={200} height={100} src={'https://links.papareact.com/ua6'}/>
        </header>
    )
}
export default Header;