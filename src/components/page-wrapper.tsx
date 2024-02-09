import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col space-y-2 pb-0 bg-zinc-100 flex-grow">
      {children}
    </div>
  );
}