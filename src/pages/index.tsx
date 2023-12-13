
import { api } from "$/utils/api";
import LayoutMain from '../lib/components/layout/LayoutMain';
import { signIn, useSession } from "next-auth/react";
import Button from "$/lib/components/button/Button";

export default function Home() {
  const hello = api.user.hello.useQuery({ text: "from tRPC" });
  const { data: session } = useSession();

  const handleClick = () => {
    console.log(session?.user.id)
  }

  return (
    <>
    <LayoutMain>
        <h1 className="text-6xl text-white">CARHEH</h1>
        <h2 className="text-2xl text-white">Carpooling for students from Mons</h2>
          <div className="flex flex-col items-center">
            {!session && <Button className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20" onClick={() => void signIn()}>Sign in</Button>}
            {session && (
              <>
                <h1>Logged in as {session.user.name}</h1>
                <h2>Session expires in {session.expires}</h2>
              </>
            )}
            </div>
      </LayoutMain>
    </>
  );
}

