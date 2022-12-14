import { Chip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { child, ref } from 'firebase/database';
import React, { useEffect, useState, } from 'react';
import { db } from '../../firebase';
import style from './style.module.css'

export default function Calls(params : {

}){
    const [calls, setCalls] = useState<[{
        id: number,
        origin: string, // FK? to areas? patients? wtf even are these?
        urgency: string, // Urgent / Not urgent
        resolution: string, // Solved / Unattended
        calledAt: Date,
        solvedAt: Date | null,
    }]>()
    const callsRef = child(ref(db), 'calls')

    const [averageResponse, updateAverage] = useState(/* sum of all solvedAt-calledAt / amount resolved */)

    return (
        <div className={style["table-container"]}>
            <DataGrid
                rows={calls !== undefined? calls : []}
                columns={[
                    { field: 'id', headerName: 'ID', width: 70 },
                    { field: 'origin', headerName: 'Origin', width: 70 },
                    { field: 'urgency', headerName: 'Urgent', width: 70 },
                    { field: 'resolution', headerName: 'Solved?', width: 70 },
                    {
                        field: 'calledAt',
                        headerName: 'Call emmitted:',
                        type: 'date',
                        width: 70,
                    },
                    {
                        field: 'solvedAt',
                        headerName: 'Call attended:',
                        type: 'date',
                        width: 70,
                    },
                ]}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
            <Chip label={"Average response time: "+averageResponse} />
        </div>
    )
}