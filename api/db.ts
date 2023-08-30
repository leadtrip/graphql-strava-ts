export interface Activity {
    average_watts?: number
    distance: number
    elapsed_time: number
    id: number
    max_watts?: number
    moving_time: number
    name: string
    private: boolean
    sport_type: string
}

export interface Db {
    activities: Activity[]
}

export const db: Db = {
    activities: [
        {id: 1, name: 'Activity 1', distance: 32.0, moving_time: 60, elapsed_time: 64, sport_type: 'IndoorBike', private: false, average_watts: 220, max_watts: 500},
        {id: 2, name: 'Activity 2', distance: 64.0, moving_time: 90, elapsed_time: 92, sport_type: 'OutdoorBike', private: true, average_watts: 214, max_watts: 812},
        {id: 3, name: 'Activity 3', distance: 123.0, moving_time: 240, elapsed_time: 250, sport_type: 'OutdoorBike', private: false, average_watts: 211, max_watts: 302},
        {id: 4, name: 'Activity 4', distance: 5.0, moving_time: 33, elapsed_time: 34, sport_type: 'Run', private: true},
        {id: 5, name: 'Activity 5', distance: 25.0, moving_time: 50, elapsed_time: 50, sport_type: 'OutdoorBike', private: false, average_watts: 187, max_watts: 232}
]}