import { ReactElement } from "react";

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps): ReactElement => {
  return <h1 className="text-5xl font-bold text-white">{title}</h1>;
};

export default Heading;
