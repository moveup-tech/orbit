import { HTMLAttributes } from "react";
import { Outlet } from "react-router-dom";

export type PrivateLayoutProps = {} & HTMLAttributes<HTMLElement>;

export function PrivateLayout({ ...rest }: PrivateLayoutProps) {
  return (
    <div {...rest}>
      <Outlet />
    </div>
  );
}
