import { FC, ReactNode } from 'react';

const PublicLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="bg-common bg-no-repeat bg-cover bg-center bg-fixed h-screen w-screen flex">
      {children}
    </div>
  );
};

export default PublicLayout;
