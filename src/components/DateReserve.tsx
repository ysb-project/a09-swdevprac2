'use client'

import { useState } from "react"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from "@mui/material"

export default function DateReserve() {
    const [venue, setVenue] = useState("")

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 gap-5
            w-full px-5 py-4 flex flex-row justify-center items-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white w-full" />
            </LocalizationProvider>
            <Select
                variant="standard"
                name="venue"
                id="venue"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                className="w-full item-center justify-center"
                displayEmpty
            >
                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                <MenuItem value="Spark">Spark Space</MenuItem>
                <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>
        </div>
    )
}