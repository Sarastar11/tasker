import React from 'react';
import { Card } from 'react-bootstrap';


export default function ServiceType() {
  
  return (
    <div>
        <Card className='mt-3 p-3 d-flex flex-row justify-content-between  align-items-center'>
            <div>
                <span style={{ fontSize: 24, fontWeight: 500 }}>ServiceType</span>
                <p className='fw-bold mt-2'>125, 2nd street, California, 19288</p>
            </div>
           
        </Card>
    </div>
  )
}
