import Link from "next/link";
import { useRouter } from "next/router";

export default function TabNavigator() {
  const router = useRouter();

  const tabs = [
    {
      title: "Songs",
      url: "/songs",
    },
    {
      title: "Gallery",
      url: "/",
    },
    {
      title: "Projects",
      url: "/projects",
    },
  ];

  return (
    <nav className="mt-4 w-full flex justify-center">
      {tabs.map((t) => (
        <div key={t.title} className="mx-4">
          <Link href={t.url} passHref>
            <a
              className={`text-sm hover:text-black duration-200 ${
                t.url === router.asPath ? "text-black underline-offset-4 underline" : "text-gray"
              }`}
            >
              {t.title}
            </a>
          </Link>
        </div>
      ))}
    </nav>
  );
}
