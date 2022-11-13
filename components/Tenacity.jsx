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
            {/* <TogglePrimitive.Root className="Toggle"> */}
            <TogglePrimitive.Root className="Toggle bg-white text-black h-96 w-full flex text-6xl items-center justify-center">
                test
            </TogglePrimitive.Root>
        </div>


    )
}



