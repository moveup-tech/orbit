import { HTMLAttributes } from "react";
import { Outlet } from "react-router-dom";

export type PublicLayoutProps = {} & HTMLAttributes<HTMLElement>;

export function PublicLayout({ ...rest }: PublicLayoutProps) {
  return (
    <div {...rest}>
      <Outlet />
    </div>
  );
}
