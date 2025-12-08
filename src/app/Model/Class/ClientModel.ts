export class ClientModel{
    clientId: number;
    contactPersonName: string;
    companyName: string;
    address: string;
    city: string;
    pinCode: string;
    state: string;
    employeStrength: number;
    gstNO: string;
    contactNo: string;
    regNo: string;

    constructor()
    {
        this.clientId = 0;
        this.contactPersonName = '';
        this.companyName = '';
        this.address = '';
        this.city = '';
        this.pinCode = '';
        this.state = '';
        this.employeStrength = 0;
        this.gstNO = '';
        this.contactNo = '';
        this.regNo = '';
    }
}