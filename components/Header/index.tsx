import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-4 py-8 lg:px-12">
      {/* head */}
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center">
          <Icon className="mr-2" icon="eos-icons:installing" fontSize={24} />
          <strong className="text-sm"> Yuu </strong>
        </div>

        <div>
          <Link passHref href="https://github.com/Francisco5g/yuu">
            <a target={"_blank"}>
              <Icon icon="akar-icons:github-fill" className="duration-200 text-gray hover:text-black" fontSize={24} />
            </a>
          </Link>
        </div>
      </div>

      <div className="mt-20"></div>

      {/* profile */}
      <div className="flex flex-col items-center">
        <div>
          <figure className="relative w-24 h-24 ">
            <Image
              className="rounded-full"
              src="/user-avatar.jpg"
              objectFit="cover"
              layout="fill"
              alt="Avatar"
              priority
              draggable="false"
            />
          </figure>
        </div>

        <div className="mt-5"></div>

        <div className="text-center">
          <div className="text-black">
            <strong> Francisco Zhou </strong>&#x2022;<span className="text-black"> 15y </span>
          </div>

          <div className="mt-2"></div>

          <p>Front-end Developer | Brazil</p>
        </div>
        <div>
          <span className="border px-1 rounded-md text-sky-300 mr-1"> React </span>
          <span className="border px-1 rounded-md text-yellow-500 ml-1"> JavaScript </span>
        </div>
      </div>
    </header>
  );
}
