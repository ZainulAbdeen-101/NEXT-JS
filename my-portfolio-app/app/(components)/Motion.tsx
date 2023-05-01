import { spring } from "framer-motion";

export const mains={
    hidden:{
opacity:1
    },
    show:{
        transition:{
            delayChildren:1
        }
    }
}
export const Anime={
    hidden:{
        opacity:0,
        x:-100,
        y:-80
    },
show:{
    opacity:1,
    x:0,
    y:0,
    transiton:{
        type:spring,
        delay:0.5,
        duration:2
       
        
    }
},
}

export const Textanime={
    hidden:{
        opacity:0,

    },show:{
        opacity:1,
        transition:{
            type:spring,
            delay:0.2,
            duration:1.2

        }
    }
}
