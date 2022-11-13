import NavBar from './NavBar'
import { useState } from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle';

export default function Tenacity(){
    const [starred, setStarred] = useState(false);
    let [count, setCount] = useState(0)


    return(
        // <div>
        //     <NavBar></NavBar>
        //     <button className='w-full h-96 bg-black text-white'>test button</button>
        // </div>
        <div>
        <NavBar></NavBar>
            {/* <TogglePrimitive.Root className="Toggle"> */}
            <TogglePrimitive.Root className="Toggle bg-white text-black h-96 w-full flex text-6xl items-center justify-center"
                defaultPressed={starred}
                onPressedChange={setStarred}
                asChild
            >
                <span>{starred ? "Starred" : "Star"}</span>
            </TogglePrimitive.Root>
        </div>


    )
}



