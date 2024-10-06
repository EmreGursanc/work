import Image from "next/image";
import Menu from "../components/Menu/menu.jsx";
export default function Home() {
  return (
    <div className="mainContainer m-auto mt-1 relative">
      <div className="usercard bg-white/15 rounded-lg flex p-3 box-border justify-between border-2 absolute top-[50px] left-[30px] w-[374px] h-[100px]">
        <div className="usercard-left">
          <h1 className="m-1 font-mono font-bold text-lg username-text">
            Ensar_P
          </h1>
          <h4 className="m-1 username-level">Level 1</h4>
          <div className="bg-purple-900 rounded-full h-2.5 w-[200px] border-1 bar">
            <div className="bg-yellow-500 h-2.5 rounded-full w-[60%]"></div>
          </div>
        </div>
        <div className="usercard-right flex justify-between">
          <div className="box m-2 w-[65px] h-[50px] flex p-1 flex-col justify-center items-center">
            <div className="up flex justify-center items-center">
              <div className="icon w-1/3">
                <Image
                  className="point mt-2"
                  src="/point.png"
                  alt="Picture of the author"
                  width={15}
                  height={15}
                  quality={100}
                />
              </div>
              <div className="line w-1/3"></div>
              <div className="opsion w-1/3">
                <p className="hour-text">hour</p>
              </div>
            </div>
            <div className="number">
              <p className ="number-text">1089</p>
            </div>
          </div>
          <div className="box m-2 w-[65px] h-[50px] flex p-1 flex-col justify-center items-center">
            <div className="up flex justify-center items-center">
              <div className="icon w-1/3">
                <Image
                  className="point mt-2"
                  src="/point.png"
                  alt="Picture of the author"
                  width={15}
                  height={15}
                  quality={100}
                />
              </div>
              <div className="line w-1/3"></div>
              <div className="opsion w-1/3">
                <p className="hour-text">tap</p>
              </div>
            </div>
            <div className="number">
              <p className ="number-text">1089</p>
            </div>
          </div>
        </div>
      </div>
      <div className="medium-1 flex justify-between absolute top-[210px] w-[374px] h-[100px] left-[45px]">
        <div className="quest flex justify-center items-center flex-col p-5 bg-white/15 rounded-lg w-[70px] h-[70px] ml-5">
          <Image
            src="/guest.png"
            alt="Picture of the author"
            width={30}
            height={30}
            quality={100}
          />
          <p>Quest</p>
        </div>
        <div className="connect w-[130px] h-[55px] rounded-xl bg-yellow/50 text-white font-bold py-2 px-4 mr-2 flex items-center">
          <Image
            className="vector mr-2 object-cover"
            src="/Vector.png"
            alt="Picture of the author"
            width={25}
            height={25}
            quality={100}
          />
          <h4 className="connect-text">Connect</h4>
        </div>
      </div>
      <div className="medium-2 flex absolute top-[290px] justify-center items-center left-[35%] font-bold">
        <Image
          className="m-2"
          src="/point.png"
          alt="Picture of the author"
          width={50}
          height={50}
          quality={100}
        />
        <h4 className="point-text">98</h4>
      </div>
      <div className="medium-3 absolute top-[350px] justify-center items-center left-[55px] object-cover">
        <Image
          className="m-2 "
          src="/door.png"
          alt="door"
          width={300}
          height={300}
          quality={100}
        />
      </div>
      <div className="smoke-left flex absolute top-[230px]">
        <Image
          className="m-2"
          src="/smoke-left.png"
          alt="door"
          width={300}
          height={300}
          quality={100}
        />
      </div>
      <div className="smoke-right flex absolute top-[190px] right-[0px]">
        <Image
          className="m-2"
          src="/smoke-right.png"
          alt="door"
          width={285}
          height={300}
          quality={100}
        />
      </div>
      <div className="medium-1 flex justify-between absolute top-[720px] w-[374px] h-[100px] left-[45px]">
        <div className="quest flex justify-center items-center relative flex-col p-5 bg-white/15 rounded-lg w-[70px] h-[70px] ml-5">
          <Image
            src="/box.png"
            alt="Picture of the author"
            width={30}
            height={30}
            quality={100}
          />
          <p className="daily">Daily Reverd</p>
        </div>
        <div className="quest flex justify-center items-center absolute  flex-col p-5 bg-white/15 rounded-lg w-[70px] h-[70px] ml-5 right-[38px]">
          <Image
            src="/king.png"
            alt="Picture of the author"
            width={30}
            height={30}
            quality={100}
          />
          <p>Boost</p>
        </div>
      </div>
      <Menu />
    </div>
  );
}

// page.js in css ini oluşturmama gerekiyordu global.css e yazmanın yanlış olduğunu fazlalık ve gereksiz olduğunu sonradan hatırladım.