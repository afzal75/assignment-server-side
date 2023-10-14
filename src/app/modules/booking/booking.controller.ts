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

export const BookingController = {
    insertIntoDB
}