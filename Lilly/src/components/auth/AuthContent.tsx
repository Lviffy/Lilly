import React from 'react';

interface AuthContentProps {
  children: React.ReactNode;
}

export default function AuthContent({ children }: AuthContentProps) {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[#0B0B1F]">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="/logo.svg"
          alt="UpResume"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Welcome to UpResume
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white/5 backdrop-blur-lg py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-purple-500/20">
          {children}
        </div>
      </div>
    </div>
  );
}
