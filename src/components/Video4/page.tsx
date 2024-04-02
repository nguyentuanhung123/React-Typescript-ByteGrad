import React, { useState } from 'react'
import Button from './button';

const Home = () => {

    // const onClick = () => {
        
    // }

    // const onClick = (test: string) => {
    //     return 5;
    // }

    // const icon = <i></i>

    const [count, setCount] = useState(0);

    return (
        <div className='min-h-screen flex justify-center items-center'>
            {/* <Button backgroundColor='red' fontSize={30} textColor='blue' padding={[5, 10, 20, 50]}/> */}

            {/* <Button 
                style={{ 
                    backgroundColor: 'blue', 
                    fontSize: 24, 
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: 8,
                    borderColor: 'transparent'
            }}/> */}

            {/* <Button 
                borderRadius={{
                    topLeft: 5,
                    topRight: 5,
                    bottomRight: 10,
                    bottomLeft: 10,
                }}/> */}

            {/* <Button onClick={onClick}/> */}

            {/* <Button>Click me!</Button> */}

            {/* <Button>{icon}</Button> */}

            {/* <Button setCount={setCount}/> */}

            <Button type='submit' autoFocus={true}/>
        </div>
    )
}

export default Home;
