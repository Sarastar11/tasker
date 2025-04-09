import Status from '../OrderDetails/order-details/Status';
import OrderAdress from '../OrderDetails/order-details/OrderAdress';
import ServiceType from '../OrderDetails/order-details/ServiceType';
import { Card } from 'react-bootstrap';
import one from '../../assets/images/1.png';
import two from '../../assets/images/2.png';
import three from '../../assets/images/3.png';
import four from '../../assets/images/4.png';
import five from '../../assets/images/5.png';
import WorkerProgress from './WorkerProgress';
import StatusProgress from './StatusProgress';
import StatusComplete from './StatusComplete';
import WorkerConfirm from '../OrderDetails/order-details/worker/WorkerConfirm';
import SummaryComplete from './SummeryComplete';
import ConfirmedWorker from './ConfirmedWorker';
import WorkerComplete from './WorkerComplete';
import { useLocation } from 'react-router-dom';


export default function Completed() {
    const Attachments = [one, two, three, four, five];
    const location = useLocation();
    const worker = location.state?.worker || 0;
    return (
        <div style={{ width: '78%', margin: 'auto' }}>
            {/* Header.................... */}
            <div className="p-3 d-flex justify-content-between align-items-center"
                style={{
                    backgroundColor: 'var(--greenBar)',
                    height: 61,
                }}
            >
                <span style={{ fontSize: 24, fontWeight: 500 }}>Order Details</span>
            </div>

            {/*...Status  ........................*/}
            <StatusComplete />
            {/*...Order Address  ........................*/}
            <OrderAdress />
            {/*...Service Type  ........................*/}
            <ServiceType />
            {/*...Order Date  ........................*/}
            <Card className='mt-3 p-3 d-flex flex-row justify-content-between  align-items-center'>
                <div>
                    <span style={{ fontSize: 24, fontWeight: 500 }}>Order Date</span>
                    <p className='fw-bold mt-2'>20 March 12:00 PM</p>
                </div>

            </Card>
            {/*.... order details.................... */}
            <Card className='mt-3 p-3 d-flex flex-row justify-content-between  align-items-center'>
                <div>
                    <span style={{ fontSize: 24, fontWeight: 500 }}>Details</span>
                    <p className='fw-bold mt-2'>There are no limits in the world of Helppmi. You can be both a customer and a helper. For more you can press show more.</p>
                </div>

            </Card>
            {/* ..Attachment................... */}
            <Card className='mt-3 p-3 d-flex flex-row justify-content-between  align-items-center'>
                <div>
                    <span style={{ fontSize: 24, fontWeight: 500 }}>Attachments</span>
                    <div className='d-flex flex-wrap mt-3 gap-2'>
                        {Attachments.map((attachment, index) => (
                            <img width={120} key={index} src={attachment} alt={`Attachment ${index + 1}`} />
                        ))}
                    </div>
                </div>

            </Card>
          
              {/* Summary*/}
              <WorkerComplete worker={worker} />
            </div>
            )
}