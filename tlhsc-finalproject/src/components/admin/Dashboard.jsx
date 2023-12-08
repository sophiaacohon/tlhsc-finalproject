import { Tab } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import Header from '../partials/Header';
import axios from 'axios';

import { TbTruckDelivery, TbPackage, TbTruckLoading } from "react-icons/tb";
import { LuPackageOpen } from "react-icons/lu";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { MdCancelPresentation } from "react-icons/md";
import { TbReceiptRefund } from "react-icons/tb";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/dashboard-data')
      .then((response) => {
        console.log(response.data);
        setDashboardData(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch dashboard data:', error);
      });
  }, []);

  const categories = [
    {
      id: 'ALL',
      title: 'All',
      
      counts: [
        {
          title: 'Unpacked',
          count: dashboardData?.deliveries?.unpacked || 0,
          icon: <LuPackageOpen/>,
          defcolor: 'bg-zinc-600',
          hovcolor: 'bg-zinc-700',
        },
        {
          title: 'Packed',
          count: dashboardData?.deliveries?.packed || 0,
          icon: <TbPackage/>,
          defcolor: 'bg-blue-600',
          hovcolor: 'bg-blue-900',
        },
        {
          title: 'Shipped',
          count: dashboardData?.deliveries?.shipped || 0,
          icon: <TbTruckDelivery/>,
          defcolor: 'bg-violet-600',
          hovcolor: 'bg-violet-900',
        },
        {
          title: 'Delivered',
          count: dashboardData?.deliveries?.delivered || 0,
          icon: <MdOutlineLibraryAddCheck/>,
          defcolor: 'bg-lime-500',
          hovcolor: 'bg-lime-700',
        },
        {
          title: 'Cancelled',
          count: dashboardData?.deliveries?.cancelled || 0,
          icon: <MdCancelPresentation/>,
          defcolor: 'bg-red-700',
          hovcolor: 'bg-red-900',
        },
      ],
    },
    {
      id: 'BRANCH_1',
      title: 'Branch 1',
      counts: [
        {
          title: 'Unpacked',
          count: dashboardData?.deliveries?.unpacked || 0,
          icon: <LuPackageOpen/>,
          defcolor: 'bg-zinc-600',
          hovcolor: 'bg-zinc-700',
        },
        {
          title: 'Packed',
          count: dashboardData?.deliveries?.packed || 0,
          icon: <TbPackage/>,
          defcolor: 'bg-blue-600',
          hovcolor: 'bg-blue-900',
        },
        {
          title: 'Shipped',
          count: dashboardData?.deliveries?.shipped || 0,
          icon: <TbTruckDelivery/>,
          defcolor: 'bg-violet-600',
          hovcolor: 'bg-violet-900',
        },
        {
          title: 'Delivered',
          count: dashboardData?.deliveries?.delivered || 0,
          icon: <MdOutlineLibraryAddCheck/>,
          defcolor: 'bg-lime-500',
          hovcolor: 'bg-lime-700',
        },
        {
          title: 'Cancelled',
          count: dashboardData?.deliveries?.cancelled || 0,
          icon: <MdCancelPresentation/>,
          defcolor: 'bg-red-700',
          hovcolor: 'bg-red-900',
        },
      ],
    },
    {
      id: 'BRANCH_2',
      title: 'Branch 2',
      counts: [
        {
          title: 'Unpacked',
          count: dashboardData?.deliveries?.unpacked || 0,
          icon: <LuPackageOpen/>,
          defcolor: 'bg-zinc-600',
          hovcolor: 'bg-zinc-700',
        },
        {
          title: 'Packed',
          count: dashboardData?.deliveries?.packed || 0,
          icon: <TbPackage/>,
          defcolor: 'bg-blue-600',
          hovcolor: 'bg-blue-900',
        },
        {
          title: 'Shipped',
          count: dashboardData?.deliveries?.shipped || 0,
          icon: <TbTruckDelivery/>,
          defcolor: 'bg-violet-600',
          hovcolor: 'bg-violet-900',
        },
        {
          title: 'Delivered',
          count: dashboardData?.deliveries?.delivered || 0,
          icon: <MdOutlineLibraryAddCheck/>,
          defcolor: 'bg-lime-500',
          hovcolor: 'bg-lime-700',
        },
        {
          title: 'Cancelled',
          count: dashboardData?.deliveries?.cancelled || 0,
          icon: <MdCancelPresentation/>,
          defcolor: 'bg-red-700',
          hovcolor: 'bg-red-900',
        },
      ],
    },
    {
      id: 'BRANCH_3',
      title: 'Branch 3',
      counts: [
        {
          title: 'Unpacked',
          count: dashboardData?.deliveries?.unpacked || 0,
          icon: <LuPackageOpen/>,
          defcolor: 'bg-zinc-600',
          hovcolor: 'bg-zinc-700',
        },
        {
          title: 'Packed',
          count: dashboardData?.deliveries?.packed || 0,
          icon: <TbPackage/>,
          defcolor: 'bg-blue-600',
          hovcolor: 'bg-blue-900',
        },
        {
          title: 'Shipped',
          count: dashboardData?.deliveries?.shipped || 0,
          icon: <TbTruckDelivery/>,
          defcolor: 'bg-violet-600',
          hovcolor: 'bg-violet-900',
        },
        {
          title: 'Delivered',
          count: dashboardData?.deliveries?.delivered || 0,
          icon: <MdOutlineLibraryAddCheck/>,
          defcolor: 'bg-lime-500',
          hovcolor: 'bg-lime-700',
        },
        {
          title: 'Cancelled',
          count: dashboardData?.deliveries?.cancelled || 0,
          icon: <MdCancelPresentation/>,
          defcolor: 'bg-red-700',
          hovcolor: 'bg-red-900',
        },
      ],
    },
  ];

  
  const categories1 = [
    {
      id: 'ALL',
      title: 'All',
      
      counts: [
        {
          title: 'Refunded',
          count: dashboardData?.deliveries?.packed || 0,
          icon: <TbPackage/>,
          defcolor: 'bg-orange-600',
          hovcolor: 'bg-orange-900',
        },
        {
          title: 'Sold',
          count: dashboardData?.deliveries?.unpacked || 0,
          icon: <LuPackageOpen/>,
          defcolor: 'bg-lime-500',
          hovcolor: 'bg-lime-700',
        },
        {
          title: 'Cancelled',
          count: dashboardData?.deliveries?.cancelled || 0,
          icon: <MdCancelPresentation/>,
          defcolor: 'bg-red-700',
          hovcolor: 'bg-red-900',
        },
      ],
    },
    {
      id: 'BRANCH_1',
      title: 'Branch 1',
      counts: [
        {
          title: 'Refunded',
          count: dashboardData?.deliveries?.packed || 0,
          icon: <TbPackage/>,
          defcolor: 'bg-orange-600',
          hovcolor: 'bg-orange-900',
        },
        {
          title: 'Sold',
          count: dashboardData?.deliveries?.unpacked || 0,
          icon: <LuPackageOpen/>,
          defcolor: 'bg-lime-500',
          hovcolor: 'bg-lime-700',
        },
        {
          title: 'Cancelled',
          count: dashboardData?.deliveries?.cancelled || 0,
          icon: <MdCancelPresentation/>,
          defcolor: 'bg-red-700',
          hovcolor: 'bg-red-900',
        },
      ],
    },
    {
      id: 'BRANCH_2',
      title: 'Branch 2',
      counts: [
        {
          title: 'Refunded',
          count: dashboardData?.deliveries?.packed || 0,
          icon: <TbPackage/>,
          defcolor: 'bg-orange-600',
          hovcolor: 'bg-orange-900',
        },
        {
          title: 'Sold',
          count: dashboardData?.deliveries?.unpacked || 0,
          icon: <LuPackageOpen/>,
          defcolor: 'bg-lime-500',
          hovcolor: 'bg-lime-700',
        },
        {
          title: 'Cancelled',
          count: dashboardData?.deliveries?.cancelled || 0,
          icon: <MdCancelPresentation/>,
          defcolor: 'bg-red-700',
          hovcolor: 'bg-red-900',
        },
      ],
    },
    {
      id: 'BRANCH_3',
      title: 'Branch 3',
      counts: [
        {
          title: 'Refunded',
          count: dashboardData?.deliveries?.packed || 0,
          icon: <TbPackage/>,
          defcolor: 'bg-orange-600',
          hovcolor: 'bg-orange-900',
        },
        {
          title: 'Sold',
          count: dashboardData?.deliveries?.unpacked || 0,
          icon: <LuPackageOpen/>,
          defcolor: 'bg-lime-500',
          hovcolor: 'bg-lime-700',
        },
        {
          title: 'Cancelled',
          count: dashboardData?.deliveries?.cancelled || 0,
          icon: <MdCancelPresentation/>,
          defcolor: 'bg-red-700',
          hovcolor: 'bg-red-900',
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
           <h1 className="text-3xl font-bold tracking-tight text-rose-950">Delivery Status</h1>
           <header className="bg-rose-950 shadow">
          <div className="relative items-center rounded-lg shadow justify-center pt-1 mt-2 mb-4">
          </div>
          </header>
          <div className="w-full ">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-white p-1">
                {categories.map((category) => (
                  <Tab
                    key={category.id}
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded-lg text-md font-medium bg-rose-950 leading-5',
                        'w-full py-2.5 ring-offset-2 ring-offset-rose-950',
                        selected
                          ? 'text-white'
                          : 'bg-white text-rose-950 shadow hover:bg-zinc-200 hover:text-rose-950'
                      )
                    }
                  >
                    {category.title}
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels className="mt-2">
                {categories.map((category) => (
                  <Tab.Panel
                    key={category.id}
                    className={classNames(
                      'rounded-xl bg-white p-3',
                      'ring-white/60  focus:outline-none focus:ring-2'
                    )}
                  >

                <div class="flex items-center justify-center">
                  
                    <ul >
                      {category.counts &&
                        category.counts.map((countItem, idx) => (
                          
                          <li
                            key={idx}
                            className={`inline-block m-3 max-w-sm p-4 pr-6 pl-6 border rounded-lg shadow hover:border-zinc-400 ${countItem.defcolor}`}
                          >

                          
                           <p class="block text-zinc-100 text-5xl mr-4 ">{countItem.icon}</p> 
                            <h5 class="mb-2 text-2xl font-bold inline-block tracking-tight text-zinc-100 dark:text-white pr-12"> 
                            {countItem.title}</h5>

                            <p className="mt-1 text-3xl inline-block font-bold leading-4 text-white">
                              {countItem.count}
                            </p>
                          </li>
                        ))}
                    </ul>

               </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mt-8 text-rose-950">Order Status</h1>
           <header className="bg-rose-950 shadow">
          <div className="relative items-center rounded-lg shadow justify-center pt-1 mt-2 mb-4">
          </div>
          </header>
          <div className="w-full ">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-white p-1">
                {categories.map((category) => (
                  <Tab
                    key={category.id}
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded-lg text-md font-medium bg-rose-950 leading-5',
                        'w-full py-2.5 ring-offset-2 ring-offset-rose-950',
                        selected
                          ? 'text-white'
                          : 'bg-white text-rose-950 shadow hover:bg-zinc-200 hover:text-rose-950'
                      )
                    }
                  >
                    {category.title}
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels className="mt-2">
                {categories1.map((category) => (
                  <Tab.Panel
                    key={category.id}
                    className={classNames(
                      'rounded-xl bg-white p-3',
                      'ring-white/60  focus:outline-none focus:ring-2'
                    )}
                  >

                <div class="flex items-center justify-center">
                  
                    <ul >
                      {category.counts &&
                        category.counts.map((countItem, idx) => (
                          
                          <li
                            key={idx}
                            className={`inline-block m-3 max-w-sm p-4 pr-6 pl-6 border rounded-lg shadow hover:border-zinc-400 ${countItem.defcolor} `}
                          >

                          
                           <p class="block text-zinc-100 text-5xl mr-4 ">{countItem.icon}</p> 
                            <h5 class="mb-2 text-2xl font-bold inline-block tracking-tight text-zinc-100 dark:text-white pr-12"> 
                            {countItem.title}</h5>

                            <p className="mt-1 text-3xl inline-block font-bold leading-4 text-white">
                              {countItem.count}
                            </p>
                          </li>
                        ))}
                    </ul>

               </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </main>
    </>
  );
}