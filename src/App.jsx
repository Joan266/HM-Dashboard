import { Routes, Route } from 'react-router-dom';

import { DashBoard } from './components/DashBoard';
import { Bookings } from './components/Bookings';
import { BookingDetails } from './components/BookingDetails';
import { Reviews } from './components/Reviews';
import { Rooms } from './components/Rooms';
import { Employees } from './components/Employees';
import { Login } from './components/Login';
import { Layout } from './components/Layout';

import { PrivateRoute } from './components/PrivateRoute';
import { AuthProvider } from './hooks/useAuth';

export const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<PrivateRoute><Layout/></PrivateRoute>}>
          <Route index element={<DashBoard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="bookings/:id" element={<BookingDetails />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="employees" element={<Employees />} />
        </Route>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </AuthProvider>
  );
};

