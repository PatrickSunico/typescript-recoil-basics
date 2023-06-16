import { ReactNode, useState } from "react";
import "../App.css";

// default Props
const defaultContainerProps = {
  heading: <strong>Heading Container</strong>,
};

interface ContainerProps {
  children: ReactNode;
  heading?: ReactNode;
}

export const HeadingContainer = ({
  children,
  heading = defaultContainerProps.heading,
}: ContainerProps): ReactNode => {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  );
};
