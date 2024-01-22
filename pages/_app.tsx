import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";

interface MyAppProps extends AppProps {
  pageProps: {
    session: any;
  };
}

export default function App({ Component, pageProps }: MyAppProps) {
  const { session } = pageProps;

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
