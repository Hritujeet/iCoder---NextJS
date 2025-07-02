"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Edit3, Users, Sparkles, Code, BookOpen, Heart, ArrowRight, CheckCircle } from 'lucide-react';

const Featured = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 'blogging',
      title: 'Write blogs like never Before...',
      description: 'Transform your coding knowledge into compelling stories with our intuitive editor. Create professional, impactful content that resonates with developers worldwide.',
      image: 'https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: Edit3,
      highlights: [
        'Intuitive drag-and-drop editor',
        'Code syntax highlighting',
        'Customizable templates',
        'Real-time collaboration'
      ],
      reversed: false
    },
    {
      id: 'community',
      title: 'Heaven for Coders!',
      description: 'Join a thriving ecosystem where passionate developers connect, learn, and grow together. Share your expertise and discover cutting-edge insights from fellow coders.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: Users,
      highlights: [
        'Global developer community',
        'Expert tutorials & guides',
        'Latest tech trends',
        'Networking opportunities'
      ],
      reversed: true
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-blue-500" />
            <span className="text-blue-600 font-semibold text-lg">Why Choose iCoder</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Developers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the tools and community that will transform your coding journey
          </p>
        </div>

        {/* Features */}
        {features.map((feature, index) => (
          <div
            key={feature.id}
            id={feature.id}
            ref={el => sectionRefs.current[feature.id] = el}
            className={`mb-32 transition-all duration-1000 ${
              visibleSections[feature.id] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}
          >
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${
              feature.reversed ? 'lg:grid-flow-col-dense' : ''
            }`}>
              
              {/* Content */}
              <div className={`space-y-8 ${
                feature.reversed ? 'lg:col-start-2' : ''
              }`}>
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {feature.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 delay-${idx * 100}`}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <span>Get Started</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${
                feature.reversed ? 'lg:col-start-1' : ''
              }`}>
                <div className="relative group">
                  {/* Decorative elements */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-15 group-hover:opacity-25 transition-opacity duration-500"></div>
                  
                  {/* Image container */}
                  <div className="relative bg-white p-4 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 hover:scale-105">
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image
                        height={600}
                        width={500}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                        src={feature.image}
                        alt={`${feature.title} illustration`}
                        priority={index === 0}
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Floating badge */}
                    <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-700">Live</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom CTA Section */}
        <div className="mt-32 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-3xl"></div>
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 translate-y-16"></div>
            
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">
                Ready to Start Your Coding Journey?
              </h3>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Join thousands of developers who are already creating amazing content on iCoder
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Start Writing</span>
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center space-x-2">
                  <Heart className="h-5 w-5" />
                  <span>Join Community</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;