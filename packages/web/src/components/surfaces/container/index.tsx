import { env } from "@/env";
import { HTMLAttributes } from "react";
import { Helmet } from "react-helmet-async";

export type ContainerProps = {
  title?: string;
} & HTMLAttributes<HTMLElement>;

export function Container({
  title = "Home",
  children,
  ...rest
}: ContainerProps) {
  const rootTitle = `${env.VITE_APP_NAME} | ${title}`;

  return (
    <div {...rest}>
      <Helmet>
        <title>{rootTitle}</title>
      </Helmet>

      {children}
    </div>
  );
}
