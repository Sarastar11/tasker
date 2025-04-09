import React from 'react'
import { Card } from 'react-bootstrap'

export default function Status() {
    return (
        <Card className='mt-3 p-3 d-flex flex-row justify-content-between  align-items-center'>
            <div>
                <span style={{ fontSize: 24, fontWeight: 500 }}>Order  Status</span>
                <p className='text-muted'>Your order is pending. Please wait till we find you the nearest workers</p>
            </div>
            <div>
                <span
                    style={{
                        border: '1px solid rgba(255, 151, 32, 1)',
                        borderRadius: "24px",
                        color: "rgba(255, 151, 32, 1)",
                        padding: "4px 24px",
                    }}
                >Pending</span>
            </div>
        </Card>
    )
}
