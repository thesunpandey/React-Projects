/* eslint-disable */

import React from 'react';
import { Puff } from 'react-loader-spinner';  // Use named import

export const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <Puff color="#00BFFF" height={550} width={80} />
  </div>
);