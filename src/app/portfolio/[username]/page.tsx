import MinimalistResume from "@/components/templates/minimalistResume";
import * as actions from "@/actions";
import Link from "next/link";
interface PortfolioProps {
  params: {
    username: string;
  };
}

export default async function Portfolio(props: PortfolioProps) {
  const username = props.params.username;

  const user = await actions.getUserByUsername(username);

  if (!user) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h2 className="text-xl font-medium">
          404 | No template exists for {username}. Start building your developer
          portfolio{" "}
          <Link href="/" className="text-blue-600">
            here.
          </Link>
        </h2>
      </div>
    );
  }

  return <MinimalistResume user={user} />;
}
