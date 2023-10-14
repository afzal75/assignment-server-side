import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BookingService } from './booking.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization as string;
  console.log(token);
  const bookingData = req.body; // Make sure req.body is in the expected format

  // Pass booking data to the function
  const result = await BookingService.insertIntoDB(token, bookingData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking added successfully',
    data: result,
  });
});

const getAllBookings = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization as string;
  console.log(token);

  // Pass booking data to the function
  const result = await BookingService.getAllBookings(token);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking fetched successfully',
    data: result,
  });
});

const getSingleBookings = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization as string;
  const { id } = req.params;

  const result = await BookingService.getSingleBookings(token, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get single Booking fetched successfully',
    data: result,
  });
});

const updateBookingData = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization as string;

  const bookingData = req.body;
  const { id } = req.params;

  const result = await BookingService.updateBookingData(token, id, bookingData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking data updated successfully successfully',
    data: result,
  });
});

export const BookingController = {
  insertIntoDB,
  getAllBookings,
  getSingleBookings,
  updateBookingData
};
