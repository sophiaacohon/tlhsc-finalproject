import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tab } from '@headlessui/react';
import Header from '../partials/Header';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Employees = () => {
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/employee-data')
      .then((response) => {
        console.log(response.data);
        setEmployeeData(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch employee data:', error);
      });
  }, []);

  useEffect(() => {
    refreshEmployeeData();
  }, []);

  const refreshEmployeeData = () => {
    axios
      .get('http://localhost:3000/employee-data')
      .then((response) => {
        console.log(response.data);
        setEmployeeData(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch employee data:', error);
      });
  };

  const categories = [
    {
      id: 'ALL',
      title: 'All',
      row: employeeData ? employeeData.row : [],
    },
    {
      id: 'Branch1',
      title: 'BRANCH 1',
      row: employeeData ? employeeData.row : [],
    },
    {
      id: 'Branch2',
      title: 'BRANCH 2',
      row: employeeData ? employeeData.row : [],
    },
    {
      id: 'Branch3',
      title: 'BRANCH 3',
      row: employeeData ? employeeData.row : [],
    },
  ];

  const handleDeleteEmployee = async (employeeId) => {
    try {
      await axios.delete(`http://localhost:3000/employee/${employeeId}`);
      refreshEmployeeData();
    } catch (error) {
      console.error('Failed to delete employee:', error);
    }
  };

  const handleAddEmployee = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      await axios.post('http://localhost:3000/add-employee', data);
      refreshEmployeeData();
    } catch (error) {
      console.error('Failed to add employee:', error);
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-rose-950">Employee Management</h1>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-rose-950">Employee Management</h1>
          <header className="bg-rose-950 shadow">
            <div className="relative items-center rounded-lg shadow justify-center pt-1 mt-2 mb-4"></div>
          </header>
          <div className="w-full">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Add Employee</h2>
              <form onSubmit={handleAddEmployee}>
              <div className="grid grid-cols-2 gap-4">
  <div>
    <label htmlFor="emp_fname" className="block text-sm font-medium text-gray-700">
      First Name
    </label>
    <input
      type="text"
      name="emp_fname"
      id="emp_fname"
      autoComplete="given-name"
      className="mt-1 p-2 border rounded-md w-full"
      required
    />
  </div>
  <div>
    <label htmlFor="emp_mname" className="block text-sm font-medium text-gray-700">
      Middle Name
    </label>
    <input
      type="text"
      name="emp_mname"
      id="emp_mname"
      autoComplete="additional-name"
      className="mt-1 p-2 border rounded-md w-full"
    />
  </div>
  <div>
    <label htmlFor="emp_lname" className="block text-sm font-medium text-gray-700">
      Last Name
    </label>
    <input
      type="text"
      name="emp_lname"
      id="emp_lname"
      autoComplete="family-name"
      className="mt-1 p-2 border rounded-md w-full"
      required
    />
  </div>
  <div>
    <label htmlFor="emp_username" className="block text-sm font-medium text-gray-700">
      Username
    </label>
    <input
      type="text"
      name="emp_username"
      id="emp_username"
      autoComplete="username"
      className="mt-1 p-2 border rounded-md w-full"
      required
    />
  </div>
  <div>
    <label htmlFor="emp_password" className="block text-sm font-medium text-gray-700">
      Password
    </label>
    <input
      type="password"
      name="emp_password"
      id="emp_password"
      autoComplete="new-password"
      className="mt-1 p-2 border rounded-md w-full"
      required
    />
  </div>
  <div>
    <label htmlFor="branch_id" className="block text-sm font-medium text-gray-700">
      Branch ID
    </label>
    <input
      type="text"
      name="branch_id"
      id="branch_id"
      className="mt-1 p-2 border rounded-md w-full"
      required
    />
  </div>
  <div>
    <label htmlFor="emp_type" className="block text-sm font-medium text-gray-700">
      Employee Type
    </label>
    <input
      type="text"
      name="emp_type"
      id="emp_type"
      className="mt-1 p-2 border rounded-md w-full"
      required
    />
  </div>
</div>
                <button type="submit">Add Employee</button>
              </form>
            </div>
          </div>
        </div>
          <header className="bg-rose-950 shadow">
            <div className="relative items-center rounded-lg shadow justify-center pt-1 mt-2 mb-4"></div>
          </header>
          <div className="w-full">
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
                    <div className="flex items-center justify-center">
                      <table>
                        <thead className="text-xs text-white uppercase bg-rose-950 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            {Object.keys(category.row[0] || {}).map((header, index) => (
                              <th key={index} scope="col" className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                {header}
                              </th>
                            ))}
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.row.map((row, rowIndex) => (
                            <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              {Object.values(row).map((value, colIndex) => (
                                <td key={colIndex} className="px-6 py-4">{value}</td>
                              ))}
                              <td>
                                <button onClick={() => handleDeleteEmployee(row.emp_id)}>Delete</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
};

export default Employees;
