import * as actions from "@/actions";
import { auth } from "@/auth";

export default async function Dashboard() {
  const session = await auth();

  return (
    <>
      Dashboard! <p>{JSON.stringify(session?.user)}</p>
      {session && (
        <form
          action={actions.signOut}
          className="mt-10 flex justify-center gap-x-6"
        >
          <button className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900">
            SignOut
          </button>
        </form>
      )}
    </>
  );
}
