interface PortfolioProps {
  params: {
    username: string;
  };
}

export default function Portfolio(props: PortfolioProps) {
  console.log(props.params.username, "params");
  return <>Portfolio</>;
}
