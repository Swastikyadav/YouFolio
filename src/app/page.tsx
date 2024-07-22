import * as actions from "@/actions";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <form action={actions.signIn}>
        <button>SignIn</button>
      </form>
      <form action={actions.signOut}>
        <button>SignOut</button>
      </form>

      <div>{JSON.stringify(session?.user)}</div>
    </div>
  );
}
