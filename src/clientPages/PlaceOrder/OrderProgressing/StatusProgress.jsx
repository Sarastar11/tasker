import React from 'react'
import { Card } from 'react-bootstrap'

export default function StatusProgress() {
    return (
        <Card className='mt-3 p-3 d-flex flex-row justify-content-between  align-items-center'>
            <div>
                <span style={{ fontSize: 24, fontWeight: 500 }}>Order  Status</span>
                <p className='text-muted'>Your order is in progress. Our workers will make sure to do quality work for you.</p>
            </div>
            <div>
                <span
                    style={{
                        border: '1px solid rgba(149, 123, 249, 1)',
                        borderRadius: "24px",
                        color: "rgba(149, 123, 249, 1)",
                        padding: "4px 24px",
                    }}
                >In Progress</span>
            </div>
        </Card>
    )
}
