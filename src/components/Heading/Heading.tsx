import { ReactElement } from "react";

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps): ReactElement => {
  return (
    <h1 className="py-8 text-center text-5xl font-bold text-sb-white">
      {title}
    </h1>
  );
};

export default Heading;
