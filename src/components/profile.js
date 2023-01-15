import { useLocation } from 'react-router-dom';
import Header from './header';
import './profile.css';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
// import { color } from '@mui/system';

// const data = [
//   { name: 'User 1', users: 2000000 },
//   { name: 'User 2', users: 1500000 },
//   { name: 'User 3', users: 1000000 },
//   { name: 'User 4', users: 500000 },
// ];

const chart = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around', marginTop: '100px'
};
const div_first = {
  marginTop: '-55px',
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '60px',
  justifyContent: 'space-evenly',
};
const div_second ={
  display: 'flex',
}

const div_inside = {
  width: '280px',
  height: '85px',
  marginRight: '35px',
  borderRadius: '5px',
  border: 'none',
  fontSize: '22px',
  fontFamily: 'arial',
  backgroundColor: '#002D70',
  color: 'white',
};

// const barchart = {
//   display: 'flex',
//   alignItem: 'center',
//   margin: ' 0 0 0 40px ',
// };

function Profile(props) {
  const { state } = useLocation();
  console.log(state);




  return (
    <div className="charge">
      <div>
        <Header />
      </div>

      <div>
        <div className='announce'><NotificationsActiveIcon style={{ fontSize: '16px', padding : '5px 5px 0 8px' }}/> ANNOUNCEMENTS <NotificationsActiveIcon style={{ fontSize: '16px', padding : '5px 5px 0 8px' }}/></div>
        <div className='annouce_inside'>We are taking a down-time on 15th January 2023 from 10:00am to 11:00am to bring you an event better expirence </div>
      </div>


      <div style={chart}>
        <div className="split" >
          <div style={div_first}>
            <div>
              <div className="para1">Total Members</div><br />

              <div className='div_inside'>127,000</div>
            </div>

            <div>
              <div className="para">  New Members <br />
                enrolled in last 30 days</div>
              <div className='div_inside'></div>
            </div>

            <div>
              <div className="para">

                Renewals<br />
                in last 30 days
              </div>
              <div className='div_inside'></div>
            </div>
            <div>
              <div className="para">
                Membership expiry <br />
                in last 30 days
                days
              </div>
              <div className='div_inside'></div>
            </div>
          </div>

          <div style={div_second}>
            <div>
              <div className="para">Total Redeem<br />
                Transactions</div>
              <div className='div_inside'></div>
            </div>
            <div>
              <div className="para">
                Redeem Transactions <br />
                in last 30 days

              </div>
              <div className='div_inside'></div>
            </div>
          </div>
        </div>

        {/* <div style={barchart}>
          <Container>
            <Row>
              <Col>
                <BarChart
                  width={620}
                  height={520}
                  data={data}
                  margin={{
                    top: 40,
                    right: 30,
                    left: 30,
                    bottom: 5,
                  }}
                  barSize={30}
                >
                  <XAxis
                    dataKey="name"
                    scale="point"
                    padding={{ left: 28, right: 10 }}
                    margin={{ left: 130 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar
                    dataKey="users"
                    fill="#e66e32"
                    background={{ fill: '#eee' }}
                  />
                </BarChart>
              </Col>
            </Row>
          </Container>
        </div> */}
      </div>
    </div >
  );
}
export default Profile;
