import MinimalistResume from "@/components/templates/minimalistResume";
import * as actions from "@/actions";
interface PortfolioProps {
  params: {
    username: string;
  };
}

export default async function Portfolio(props: PortfolioProps) {
  const username = props.params.username;

  const user = await actions.getUserByUsername(username);

  return <MinimalistResume user={user} />;
}
