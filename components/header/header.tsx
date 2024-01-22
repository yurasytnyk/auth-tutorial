import { useSession, signIn, signOut } from "next-auth/react";

export const Header = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Signed in as {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <p>Not Signed in</p>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};
