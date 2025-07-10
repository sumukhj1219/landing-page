import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Custom CSS for text shadow */}
      <style>
        {`
        .text-shadow-glow {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.7),
                       0 0 20px rgba(255, 255, 255, 0.5),
                       0 0 30px rgba(255, 255, 255, 0.3);
        }
        /* Responsive font size using clamp */
        .footer-text-size {
          font-size: clamp(8rem, 20vw, 18.75rem); /* Roughly 128px to 300px */
          line-height: 1; /* Adjust line height to prevent extra space */
        }

        /* Custom background gradient for 'SEO' */
        .bg-gradient-seo {
            background-image: linear-gradient(to bottom, #f5f5f5, #e0e0e0, #c0c0c0);
        }
        `}
      </style>
      <div className='w-full min-h-[100vh] bg-gradient-to-r from-neutral-700 via-neutral-900 to-neutral-950 flex flex-col items-center justify-between py-16'> {/* Changed h-[100vh] to min-h-[100vh] and adjusted flex direction and justify */}
        <div className='flex flex-col max-w-7xl mx-auto w-full h-full justify-between'> {/* Adjusted justify-between for internal spacing */}

          {/* Top section: Company Info, Legal, Menu, Social Media */}
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 w-full px-4 text-white mb-16'> {/* Added mb-16 for spacing from SEOtalos text */}
            {/* Column 1: Company Info & Button */}
            <div className='flex flex-col items-start col-span-1 md:col-span-2'> {/* Increased span for company info */}
              <h3 className='text-2xl font-bold mb-4'>SEOtalos.com</h3>
              <p className='text-neutral-400 text-sm leading-relaxed mb-6'>
                Your trusted partner for organic growth and digital success. We help businesses achieve their online goals with cutting-edge SEO strategies.
              </p>
              <button className='px-6 py-3 bg-white text-neutral-900 font-semibold rounded-full hover:bg-neutral-200 transition-colors duration-200 shadow-lg'>
                Start a Free Trial
              </button>
            </div>

            {/* Column 2: Legal Links */}
            <div className='flex flex-col items-start'>
              <h4 className='text-lg font-semibold mb-4'>Legal</h4>
              <ul className='space-y-2'>
                <li><a href='#' className='text-neutral-400 hover:text-white transition-colors duration-200 text-sm'>Privacy Policy</a></li>
                <li><a href='#' className='text-neutral-400 hover:text-white transition-colors duration-200 text-sm'>Terms of Service</a></li>
                <li><a href='#' className='text-neutral-400 hover:text-white transition-colors duration-200 text-sm'>DMCA</a></li>
              </ul>
            </div>

            {/* Column 3: Menu Links */}
            <div className='flex flex-col items-start'>
              <h4 className='text-lg font-semibold mb-4'>Menu</h4>
              <ul className='space-y-2'>
                <li><a href='#' className='text-neutral-400 hover:text-white transition-colors duration-200 text-sm'>Home</a></li>
                <li><a href='#' className='text-neutral-400 hover:text-white transition-colors duration-200 text-sm'>Solutions</a></li>
                <li><a href='#' className='text-neutral-400 hover:text-white transition-colors duration-200 text-sm'>Pricing</a></li>
                <li><a href='#' className='text-neutral-400 hover:text-white transition-colors duration-200 text-sm'>Blog</a></li>
                <li><a href='#' className='text-neutral-400 hover:text-white transition-colors duration-200 text-sm'>Contact</a></li>
              </ul>
            </div>

            {/* Column 4: Social Media */}
            <div className='flex flex-col items-start'>
              <h4 className='text-lg font-semibold mb-4'>Social Media</h4>
              <div className='flex gap-x-4'>
                {/* Replace with actual icons (e.g., Font Awesome) if available */}
                <a href='#' className='text-neutral-400 hover:text-white transition-colors duration-200 text-sm'>Facebook</a>
                <a href='#' className='text-neutral-400 hover:text-white transition-colors duration-200 text-sm'>Twitter</a>
                <a href='#' className='text-neutral-400 hover:text-white transition-colors duration-200 text-sm'>LinkedIn</a>
                <a href='#' className='text-neutral-400 hover:text-white transition-colors duration-200 text-sm'>Instagram</a>
              </div>
            </div>
          </div>

          {/* The existing SEOtalos large text - positioned at the bottom of the main content area */}
          <h2 className='font-extrabold tracking-tighter footer-text-size flex items-center justify-center w-full'>
            <span className='bg-gradient-seo bg-clip-text text-transparent'>
              SEO
            </span>
            <span className='text-shadow-xs text-shadow-white'>
              talos
            </span>
          </h2>

          {/* Copyright information - BELOW the SEOtalos text */}
          <div className='w-full text-center text-neutral-500 text-sm px-4 mt-8'> {/* Added mt-8 for spacing */}
            <p>&copy; {new Date().getFullYear()} SEOtalos. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
