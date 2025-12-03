export interface IRole{
    roleId: number,
    role: string
}

export interface IDesignation{
    designationId:number,
    designation:string
}

export interface APIResponseModal{
    message:string,
    result: boolean,
    data:any
}