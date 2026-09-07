import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { LoginPage } from '../../pages/auth/LoginPage';
import { DashboardPage } from '../../pages/dashboard/DashboardPage';
import { QueueDetailsPage } from '../../pages/queues/QueueDetailsPage';
import { QueuesPage } from '../../pages/queues/QueuesPage';
import { JoinQueuePage } from '../../pages/public/JoinQueuePage';
import { TicketPage } from '../../pages/public/TicketPage';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { RegisterPage } from "../../pages/auth/RegisterPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />
      {/* Public customer routes opened from a QR code. */}
      <Route path="/q/:publicCode" element={<JoinQueuePage />} />
      <Route path="/ticket/:accessToken" element={<TicketPage />} />

      {/* Protect this route group when JWT authentication is implemented. */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/queues" element={<QueuesPage />} />
        <Route path="/queues/:queueId" element={<QueueDetailsPage />} />
      </Route>

      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
