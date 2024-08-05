'use client';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

const destinations = ['Paris', 'New York', 'Tokyo', 'London', 'Sydney'];

const Search = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [activeTab, setActiveTab] = useState('calendar');

  const handleFocus = () => {
    setShowDropdown(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowDropdown(false), 100);
  };

  const handleDateInputFocus = () => {
    setShowCalendar(true);
  };

  const handleDateInputBlur = () => {
    setTimeout(() => setShowCalendar(false), 100);
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const formatDateRange = () => {
    if (startDate && endDate) {
      return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
    } else if (startDate) {
      return startDate.toLocaleDateString();
    }
    return '';
  };

  return (
    <div className='px-96 flex justify-center'>
      <div className='relative z-50 flex justify-center p-1 bg-yellow-500 w-[1200px]'>
        <div className='relative w-80 mr-2'>
          <input
            type='text'
            placeholder='Search hotels, destinations, or deals'
            className='p-4 rounded w-full'
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {showDropdown && (
            <ul className='absolute z-30 bg-white mt-1 w-full rounded shadow-lg'>
              {destinations.map((destination, index) => (
                <li
                  key={index}
                  className='p-2 hover:bg-blue-500 hover:text-white cursor-pointer'
                  onMouseDown={() => setShowDropdown(false)}
                >
                  {destination}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className='relative w-80 mr-2'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Check-in and Check-out'
              className='p-4 pl-10 rounded w-full'
              onFocus={handleDateInputFocus}
              onBlur={handleDateInputBlur}
              value={formatDateRange()}
              readOnly
            />
            <FaCalendarAlt className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
          </div>
          {showCalendar && (
            <div
              className='absolute z-30 bg-white mt-2 w-[850px] rounded shadow-lg p-4 -left-8 h-[450px]'
              onMouseDown={(e) => e.preventDefault()}
            >
              <div className='flex mb-4 justify-between border-b-2 '>
                <button 
                  className={`p-2 w-1/2 rounded-l hover:bg-gray-300 ${activeTab === 'calendar' ? 'border-b-2 bg-gray-300 border-blue-500 text-blue-700' : ''}`}
                  onClick={() => setActiveTab('calendar')}
                >
                  Calendar
                </button>
                <button 
                  className={`p-2 w-1/2 rounded-r hover:bg-gray-300 ${activeTab === 'flexible' ? 'border-b-2 bg-gray-300 border-blue-500 text-blue-700' : ''}`}
                  onClick={() => setActiveTab('flexible')}
                >
                  I&apos;m flexible
                </button>
              </div>
              {activeTab === 'calendar' ? (
                <div className='h-[500px]'>
                  <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                    monthsShown={2}
                  />
                  <div className='mt-12 flex justify-between'>
                    <button 
                      className='p-2 rounded text-white bg-blue-500'
                      onClick={() => setShowCalendar(false)}
                    >
                      Confirm Dates
                    </button>
                    <button 
                      className='p-2 rounded text-white bg-red-500'
                      onClick={() => setShowCalendar(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <div className='h-[500px] flex items-center justify-center'>
                  <p>Flexible dates options will be displayed here.</p>
                </div>
              )}
            </div>
          )}
        </div>
        <div className='relative w-80 mr-2'>
          <input
            type='text'
            placeholder='persons'
            className='p-4 rounded w-full'
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {showDropdown && (
            <ul className='absolute z-30 bg-white mt-1 w-full rounded shadow-lg'>
              {destinations.map((destination, index) => (
                <li
                  key={index}
                  className='p-2 hover:bg-blue-500 hover:text-white cursor-pointer'
                  onMouseDown={() => setShowDropdown(false)}
                >
                  {destination}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <button className='p-4 rounded w-[150px] text-white bg-blue-500'>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
