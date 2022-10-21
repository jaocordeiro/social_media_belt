import Link from 'next/link';
import React from 'react';
import Seo from '@/components/Seo';

export default function Home() {
  return (
    <div className='text-3xl font-bold underline'>
      <Seo />
      <ul>
        <li>
          <Link href='/app'>
            <a>App</a>
          </Link>
        </li>
        <li>
          <Link href='/joaovitor'>
            <a>João Vitor</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
