// Folder and file to define your Types (This is the right way to do it)

// Type Guitar  definition
export type Guitar = {
    id : number
    name : string
    image : string
    description : string 
    price : number
}

// Type CartItem  definition
// Inherits all the attributes from Guitar -> Using  'Guitar &'
export type CartItem = Guitar & {  
    quantity : number
}