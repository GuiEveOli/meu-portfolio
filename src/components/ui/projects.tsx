"use client";
import React from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function Projects() {
  return (
    <div className="py-10 w-full" id="projects">
      <div>
        <div className="max-w-7xl mx-auto pb-0 px-4 md:px-8 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl mb-1 text-white font-bold text-indigo-900">
            Projects
          </h2>
          <p className="text-xl text-white text-sm md:text-base">
            Some of the noteworthy projects I have built:
          </p>
        </div>
      </div>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
    <p className="font-bold md:text-4xl text-xl text-white">
        Promypet - Mobile App
    </p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A native app focused on UX/UI for booking pet services and purchasing products. Features icon-based navigation, functional categories, and location integration. Fully responsive across devices.
    </p>
    <a
        href="https://xd.adobe.com/view/96b86955-c50b-472f-99c8-44da7d476fc4-c3eb/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Know more...
        </span>
    </a>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
    <p className="font-bold md:text-4xl text-xl text-white">
        Promypet - Web Site
    </p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Responsive e-commerce platform with focus on conversion and accessibility. Modular layout, smart filters, and integration with payment and geolocation systems. Designed for smooth user navigation.
    </p>
    <a
        href="https://xd.adobe.com/view/54b6c200-7790-4160-bc88-b8097406a00a-01e5/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Know more...
        </span>
    </a>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
    <p className="font-bold md:text-4xl text-xl text-white">
        Promypet - Partner Web Site
    </p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        B2B portal for partner registration and management. Clean interface with optimized form and login area. Branded design and ready for CRM and admin system integration.
    </p>
    <a
        href="https://xd.adobe.com/view/daf86965-0d16-4106-8cf6-0b01842bcf87-8fab/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Know more...
        </span>
    </a>
    </div>
  );
};


const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail:
      "images/projects/pj01.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "images/projects/pj02.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "images/projects/pj03.png",
  },
  // {
  //   id: 4,
  //   content: <SkeletonFour />,
  //   className: "md:col-span-1",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
  //   {
  //   id: 5,
  //   content: <SkeletonFive />,
  //   className: "md:col-span-1",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
  // {
  //   id: 6,
  //   content: <SkeletonFive />,
  //   className: "col-span-1",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
];
