const { optionTypes, optionLocations } = require("@/data/data");
const { z } = require("zod");


const schema = z.object({
    name: z.string().min(1, {message: "Name is required"}),
    desc: z.string().min(1, {message: "Description is required"}),
    beds: z.number().min(1, {message: "Number of beds is required"}),
    hasFreeWifi: z.boolean().optional(),
   
    location: z.enum(optionLocations.map((value) => value)),
    type: z.enum(optionTypes.map(((value) => value))),
    pricePerNight: z.number().min(15, {message: "Price per night is required"}).max(500088, {message: "Price per night is too high"})
})

export {
    schema
}