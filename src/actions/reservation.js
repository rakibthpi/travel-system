'use server'

import Reservation from "@/models/Reservations";
import dbConnect from "@/utils/db";

export const getReservations = async () => {
    await dbConnect();
    return await Reservation.find({});
}

export const createReservaion = async (reservation) => {
    await dbConnect();
    return await Reservation.create(reservation);
}