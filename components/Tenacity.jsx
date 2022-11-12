import NavBar from './NavBar'
import * as TogglePrimitive from '@radix-ui/react-toggle';

export default function Tenacity(){
    return(
        // <div>
        //     <NavBar></NavBar>
        //     <button className='w-full h-96 bg-black text-white'>test button</button>
        // </div>
        <div>
        <NavBar></NavBar>
            <TogglePrimitive.Root className="Toggle">
                test
            </TogglePrimitive.Root>
        </div>


    )
}



