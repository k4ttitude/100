import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="min-h-screen bg-black flex">{children}</div>;
};

export default Layout;
