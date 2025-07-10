import React from 'react';
import { FaCoins, FaCheckCircle } from 'react-icons/fa'; // Using FaCheckCircle for checkmarks

const Pricing = () => {
    // Data for pricing plans
    const pricingPlans = [
        {
            name: 'Basic',
            price: '$0',
            frequency: 'per month',
            features: [
                'Unlimited data',
                'Basic analytics',
                '24/7 customer support',
                'Limited features'
            ],
            buttonText: 'Start a Free Trial',
            isHighlighted: false,
        },
        {
            name: 'Pro',
            price: '$19',
            frequency: 'per month',
            features: [
                'All Basic features',
                'Advanced analytics',
                'Dedicated support',
                'Customizable reports',
                'Priority access'
            ],
            buttonText: 'Start a Free Trial',
            isHighlighted: true, // This plan will be highlighted
        },
        {
            name: 'Premium',
            price: '$39',
            frequency: 'per month',
            features: [
                'All Pro features',
                'Enterprise-grade security',
                'API access',
                'Personalized onboarding',
                'Unlimited users'
            ],
            buttonText: 'Start a Free Trial',
            isHighlighted: false,
        },
    ];

    return (
        <div className='w-full max-w-7xl mb-20  mx-auto mt-10 px-4'> {/* Added px-4 for horizontal padding */}
            <div className='flex flex-col gap-y-2 mx-auto items-start justify-center mb-10'> {/* Added mb-10 for spacing */}
                <span className='flex items-start mt-10 gap-x-3 p-2 border-neutral-800 border bg-transparent rounded-xl'>
                    <FaCoins className='bg-white w-5 h-5 rounded-full p-0.5' />
                    <span className='text-sm text-white'>Pricing</span>
                </span>
                <h1 className='text-5xl md:text-7xl bg-linear-to-r from-neutral-900 to-neutral-800 via-white bg-clip-text text-transparent mt-2 font-medium'>
                    Flexible Pricing For <br className='hidden md:block'></br>
                    Every Business
                </h1>
                <h6 className='text-md font-light text-white'>
                    We offer flexible pricing options as per user's convenience.
                </h6>
            </div>

            {/* Pricing Cards Container */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-20'>
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className={`
                            p-8 rounded-xl mask-b-from-90% flex flex-col items-center justify-between
                            ${plan.isHighlighted
                                ? 'bg-white text-neutral-900 shadow-2xl scale-105 transform transition-transform duration-300' // Highlighted style
                                : 'bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950 border border-neutral-800 text-white' // Default style with gradient
                            }
                        `}
                    >
                        {/* Plan Name */}
                        <div className={`flex items-center gap-x-2 mb-4 ${plan.isHighlighted ? 'text-neutral-900' : 'text-white'}`}>
                            {/* You can use a different icon for each plan if desired, or keep FaCoins */}
                            <FaCoins className='w-5 h-5' />
                            <h3 className='text-xl font-semibold'>{plan.name}</h3>
                        </div>

                        {/* Price */}
                        <div className='mb-6'>
                            <span className={`text-5xl font-bold ${plan.isHighlighted ? 'text-neutral-900' : 'text-white'}`}>
                                {plan.price}
                            </span>
                            <span className={`text-lg ${plan.isHighlighted ? 'text-neutral-600' : 'text-neutral-400'}`}>
                                /{plan.frequency}
                            </span>
                        </div>

                        {/* Features List */}
                        <ul className='flex flex-col items-start w-full mb-8 space-y-2'>
                            {plan.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className={`flex items-center gap-x-2 ${plan.isHighlighted ? 'text-neutral-700' : 'text-neutral-300'}`}>
                                    <FaCheckCircle className={`${plan.isHighlighted ? 'text-neutral-500' : 'text-neutral-400'} w-4 h-4`} />
                                    <span className='text-sm'>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Call to Action Button */}
                        <button
                            className={`
                                w-full py-3 rounded-full font-semibold transition-colors duration-300
                                ${plan.isHighlighted
                                    ? 'bg-gradient-to-br from-neutral-800 to-neutral-950 text-white hover:from-neutral-700 hover:to-neutral-900 shadow-md' // Highlighted button with dark gradient
                                    : 'bg-gradient-to-br from-neutral-800 to-neutral-900 text-white hover:from-gray-100 hover:to-white shadow-md' // Default button with light gradient
                                }
                            `}
                        >
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
