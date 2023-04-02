import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./tuits-service"

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuits', async(tuit) => {
        const newTuit = await service.createTuit(tuit)
        return newTuit
    }
)

export const findTuitsThunk = createAsyncThunk (
    'tuits/findTuits', async () =>
        await service.findTuits()
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit', async (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId
    })

export const updateTuitThunk = createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) => {
            return await service.updateTuit(tuit);
        })
