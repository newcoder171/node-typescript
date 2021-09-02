export interface CRUD {
    list: (limit: number, page: number) => Promise<any>;
    create: (resource: any) => Promise<any>;
    // putById: (id: string, resource: any) => Promise<string>;
    putById: (id: string, resource: any) => Promise<any>;
    readById: (id: string) => Promise<any>;
    // deleteById: (id: string) => Promise<string>;
    deleteById: (id: string) => Promise<any>;
    // patchById: (id: string, resource: any) => Promise<string>;
    patchById: (id: string, resource: any) => Promise<any>;
}