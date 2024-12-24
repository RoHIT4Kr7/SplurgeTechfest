'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async (provider: string) => {
    try {
      setLoading(true);
      await signIn(provider, { 
        redirect: true
      });
    } catch (error) {
      console.error('Sign in error:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen relative z-[400]">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-25 z-[500]">
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <Image src="/Splurge.png" alt="Splurge 2K25 logo" width={100} height={100} className="mx-auto" />
        <h1 className="Michroma text-2xl font-bold text-gray-800 mb-6 text-center">SIGN IN TO EXPLORE SPLURGE 2K25</h1>
        <div className="mt-6">
          <button
            onClick={() => handleSignIn('google')}
            className="Michroma w-full bg-white border border-gray-300 text-gray-800 p-3 rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
          >
            <Image src="/google.png" alt="Google logo" width={20} height={20} className="mr-2" />
            Sign in with Google
          </button>
        </div>
        <div className="mt-6">
          <button
            onClick={() => handleSignIn('github')}
            className="Michroma w-full bg-white border border-gray-300 text-gray-800 p-3 rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
          >
            <Image src="/github.png" alt="GitHub logo" width={20} height={20} className="Michroma mr-2" />
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}