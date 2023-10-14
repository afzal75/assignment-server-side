import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { BookingRoutes } from '../modules/booking/booking.routes';
import { FeedbackRouter } from '../modules/feedback/feedback.routes';
import { ReviewRoutes } from '../modules/review/review.routes';
import { ServiceRoutes } from '../modules/service/service.routes';
import { UserRouter } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRouter,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/service',
    route: ServiceRoutes,
  },
  {
    path: '/review',
    route: ReviewRoutes,
  },
  {
    path: '/booking',
    route: BookingRoutes,
  },
  {
    path: '/feedback',
    route: FeedbackRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
