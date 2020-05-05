import { uuid } from "uuidv4"
export const reaction=({type,emoji,username,messageId})=>
{
    return {
        type,
        item:{id:uuid(),timestamp:Date.now(),emoji,username,messageId}
       
    }
}

