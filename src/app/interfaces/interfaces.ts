export interface Category {
    productor:string,
    extensionista:string,
    investigador:string
}

export interface Select {
    name:string,
    disabled?:boolean
}

export interface ContextMenu {
    name:string,
    url?:string,
    fn?:(val:any)=>void|any,
    params?:any[]
}
 export interface Gallery{
    previewImageSrc: string,
    alt: string,
    title?: string
    thumbnailImageSrc?: string,
 }

 export interface AppButtons {
    route?:boolean,
    url?:string
	fn?:(param:any|any[])=>void|any
	params?:any[]
 }

 export interface PostComments {
    userPhoto:string
    userName:string
    category:string
    date : string
    time : string
    content:string
 }

