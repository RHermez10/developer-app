import { redirect } from "next/navigation";

type DashBoardLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: DashBoardLayoutProps) {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    redirect("/login");
  }
  return <>{children}</>;
}
