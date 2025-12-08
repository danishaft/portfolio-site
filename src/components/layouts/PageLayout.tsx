import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import ThreeBackground from '../shared/ThreeBackground';

type PageLayoutProps = {
  children: React.ReactNode,
};

const PageLayout = (props: PageLayoutProps): React.ReactElement | null => {
  const { children } = props;

  if (!children) {
    return null;
  }

  return (
    <main className="flex flex-col items-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200 relative">
      <ThreeBackground geometryType="network" accentColor="#4CC9F0" />
      <div className="max-w-screen-xl self-stretch m-auto w-full relative z-20">
        <Header className="px-6 sm:px-12 py-6" />
        <article className="px-6 sm:px-12 py-6">
          {children}
        </article>
        <Footer className="px-6 sm:px-12 py-12" />
      </div>
    </main>
  );
};

export default PageLayout;
