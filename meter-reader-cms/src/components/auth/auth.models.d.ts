export interface claim {
    name: string;
    value: string;
}

export interface userCredentials {
    email: string;
    password: string;
}

export interface authenticationResponse {
    token: string;
    expiration: Date;
}

export interface registerDTO {
    username: string;
    email: string;
    password: string;
}

export interface userDTO {
    id: string;
    email: string;
}

export interface errorDTO {
    code: string;
    description: string;
}