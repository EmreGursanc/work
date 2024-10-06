import React from "react";
import styles from "@/components/Menu/menu.module.css";
import Image from "next/image";
const menu = () => {
  return (
    <div className="fixed bottom-[35px]  w-[430px]">
      <div className="flex justify-center bg-transparent p-4">
        <div className="flex space-x-6">
          <div className="missions flex flex-col justify-center items-center mr-3">
            <Image
            className="object-cover"
            src="/missions.png"
            alt="Picture of the author"
            width={25}
            height={25}
            quality={100}
            />
            <p className={styles.text}>Missions</p>
          </div>
          <div className="upgrades flex flex-col justify-center items-center mr-3">
            <Image
            className="object-cover"
            src="/upgrades.png"
            alt="Picture of the author"
            width={25}
            height={25}
            quality={100}
            />
            <p className={styles.text}>Upgrades</p>
          </div>
          <div className="home mr-7 ml-7 mb-1 flex flex-col justify-center items-center">
            <Image
            className="object-cover"
            src="/menu-door.png"
            alt="Picture of the author"
            width={56}
            height={56}
            quality={100}
            />
          </div>
          <div className="friends flex flex-col justify-center items-center mr-3">
            <Image
            className="object-cover"
            src="/friends.png"
            alt="Picture of the author"
            width={25}
            height={25}
            quality={100}
            />
            <p className={styles.text}>Friends</p>
          </div>
          <div className="stats flex flex-col justify-center items-center mr-3">
            <Image
            className="object-cover"
            src="/stats.png"
            alt="Picture of the author"
            width={25}
            height={25}
            quality={100}
            />
            <p className={styles.text}>Stats</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;
