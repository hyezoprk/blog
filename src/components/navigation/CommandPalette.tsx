import { useRouter } from "next/router";
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  useMatches,
  KBarPositioner,
  KBarSearch,
  KBarResults,
} from "kbar";
import { LayoutProps } from "@/components/layout/Layout";
import { VscGithubInverted, VscTwitter } from "react-icons/vsc";
import { FcDislike, FcWorkflow, FcPuzzle } from "react-icons/fc";
import { SiAboutdotme } from "react-icons/si";
import { IoCloud } from "react-icons/io5";
import { GiCircle } from "react-icons/gi";
import useSound from "use-sound";

export default function CommandPalette({ children }: LayoutProps) {
  const router = useRouter();
  const actions = [
    {
      id: "home",
      name: "Home",
      shortcut: ["h"],
      keywords: "home",
      section: "_root",
      perform: () => router.push("/"),
      icon: <GiCircle className="size-4" />,
    },
    {
      id: "coding",
      name: "Coding",
      shortcut: ["c"],
      keywords: "coding",
      section: "_root",
      perform: () =>
        router.push(
          {
            pathname: "/",
            query: { category: "coding" },
          },
          "/coding",
        ),
      icon: <FcWorkflow className="size-4" />,
    },
    {
      id: "project",
      name: "Project",
      shortcut: ["p"],
      keywords: "project",
      section: "_root",
      perform: () =>
        router.push(
          {
            pathname: "/",
            query: { category: "project" },
          },
          "/project",
        ),
      icon: <FcDislike className="size-4" />,
    },
    {
      id: "reading",
      name: "Reading",
      shortcut: ["r"],
      keywords: "reading",
      section: "_root",
      perform: () =>
        router.push(
          {
            pathname: "/",
            query: { category: "reading" },
          },
          "/reading",
        ),
      icon: <FcPuzzle className="size-4" />,
    },
    {
      id: "github",
      name: "Github",
      shortcut: ["g"],
      keywords: "github",
      section: "public",
      perform: () => window.open("https://github.com/10004ok", "_blank"),
      icon: <VscGithubInverted className="size-4" />,
    },
    {
      id: "twitter",
      name: "Twitter",
      shortcut: ["t"],
      keywords: "twitter",
      section: "public",
      perform: () => window.open("https://twitter.com/", "_blank"),
      icon: <VscTwitter className="size-4" fill="#1DA1F2" />,
    },
    {
      id: "about",
      name: "About",
      shortcut: ["a"],
      keywords: "about",
      section: "README.md",
      perform: () => router.push("/about"),
      icon: <SiAboutdotme className="size-4" />,
    },
    // {
    //   id: 'copy',
    //   name: 'Copy URL',
    //   shortcut: ['u'],
    //   keywords: 'copy-url',
    //   section: 'etc..',
    //   perform: () => navigator.clipboard.writeText(window.location.href),
    //   icon: <CopyIcon className="w-4 h-4" />,
    // },
    // {
    //   id: 'email',
    //   name: 'Send Email',
    //   shortcut: ['e'],
    //   keywords: 'send-email',
    //   section: 'etc..',
    //   perform: () => window.open('mailto:hyezoprk@kakao.com', '_blank'),
    //   icon: <EnvelopeClosedIcon className="w-4 h-4" />,
    // },
  ];

  return (
    <KBarProvider actions={actions} options={{ disableScrollbarManagement: true }}>
      <KBarPortal>
        <KBarPositioner className="z-10 bg-zinc-900/80">
          <KBarAnimator className="w-full  max-w-lg overflow-y-auto rounded-lg bg-white shadow-lg dark:bg-zinc-800">
            <div className="relative flex text-gray-600 focus-within:text-gray-400">
              <button
                type="submit"
                className="bg-white px-2 py-4 focus:shadow-md dark:bg-zinc-800"
              >
                <IoCloud
                  className="size-6 bg-white focus:shadow-md dark:bg-zinc-800"
                  fill="skyblue"
                />
              </button>
              <KBarSearch
                className="w-full rounded-none border-4 border-white bg-white px-3 py-4 text-sm text-black caret-blue-500 outline-none dark:border-zinc-800 dark:bg-zinc-800 dark:text-white"
                defaultPlaceholder="첫글자는 단축키 &nbsp;🚀"
              />
            </div>
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>

      {children}
    </KBarProvider>
  );
}

function RenderResults() {
  const { results } = useMatches();
  const [tick] = useSound("/sounds/tick.mp3");
  const [tap] = useSound("/sounds/tap.mp3", { volume: 0.6 });

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => (
        <div
          className={`
          flex w-full items-center justify-between border-4 border-white bg-white px-3 text-sm text-gray-900 dark:border-zinc-800 dark:bg-zinc-800 dark:text-gray-100`}
        >
          {typeof item === "string" ? (
            <div className="cursor-default text-gray-500/80">{item}</div>
          ) : (
            <div
              onMouseEnter={() => tick()}
              onMouseUp={() => tap()}
              className={`${
                active
                  ? "cursor-pointer rounded-md  bg-emerald-600 text-gray-100"
                  : "bg-transparent"
              } 
            flex w-full items-center space-x-3 p-2 text-base`}
            >
              {item.icon}
              <p className="text-sm">{item.name}</p>
            </div>
          )}
        </div>
      )}
    />
  );
}
