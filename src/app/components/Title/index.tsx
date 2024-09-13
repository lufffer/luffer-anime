import Marquee from "react-fast-marquee";

type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => {
  return (
    <Marquee>
      <h2 className="title">{children}</h2>
    </Marquee>
  );
};

export default Title;
