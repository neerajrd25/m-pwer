export interface Login {
    email: string;
    tenantid: number;
    password: string;
    id_type: string

}

export interface Task {
    "id": number,
    "creator": number
    "owner": number
    "assignee": number
    "parent_id": null,
    "start_dt": Date
    "due_dt": Date
    "reminder_dt": Date
    "status": string
    "attr": {
        "description": string,
        "priority": string,
        "label": string[]
    }
}


export interface AppResponse<T> {
    message: string,
    data: T[]
}