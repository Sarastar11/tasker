import React from 'react'
import { Button, Card } from 'react-bootstrap'
import RateWorker from './RateWorker/RateWorker'
import RateWorkers from './RateWorker/RateWorker'

export default function StatusComplete() {
    return (
        <div>
            <Card className='mt-3 p-3 d-flex flex-row justify-content-between  align-items-center'>
                <div>
                    <span style={{ fontSize: 24, fontWeight: 500 }}>Order  Status</span>
                    <p className='text-muted'>Your order has successfully been completed. We hope that you have liked our services</p>
                </div>
                <div>
                    <span
                        style={{
                            border: '1px solid rgba(15, 153, 24, 1)',
                            borderRadius: "24px",
                            color: "rgba(15, 153, 24, 1)",
                            padding: "4px 24px",
                        }}
                    >Completed</span>
                </div>
            </Card>
            <div className='d-flex justify-content-end my-2'>
               <RateWorkers/>
            </div>

        </div>
    )
}
