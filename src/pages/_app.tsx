import { CommandPalette, Logo } from "@/components/navigation";
import { apolloClient } from "@/lib/graphql/apollo-client";
import "@/styles/tailwind.css";
import { ApolloProvider } from "@apollo/client";
import "@code-hike/mdx/dist/index.css";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";

export default function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <ApolloProvider client={apolloClient}>
        <SessionProvider session={pageProps.session}>
          <RecoilRoot>
            <ThemeProvider attribute="class" defaultTheme="system">
              <CommandPalette>
                <Logo>
                  <Component {...pageProps} />
                  <Toaster />
                </Logo>
              </CommandPalette>
            </ThemeProvider>
          </RecoilRoot>
        </SessionProvider>
      </ApolloProvider>
    </>
  );
}
