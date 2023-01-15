import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import { useLocation } from 'react-router-dom';
import Header from './header';
import './profile.css';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'User 1', users: 2000000 },
  { name: 'User 2', users: 1500000 },
  { name: 'User 3', users: 1000000 },
  { name: 'User 4', users: 500000 },
];

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
  marginLeft: '35px',
  justifyContent: 'space-around',
};

const div_inside = {
  width: '280px',
  height: '85px',
  marginRight: '35px',
  borderRadius: '5px',
  border: 'none',
  fontSize: '22px',
  fontFamily: 'arial',
};

const barchart = {
  display: 'flex',
  alignItem: 'center',
  margin: ' 0 0 0 40px ',
};

function Profile(props) {
  const { state } = useLocation();
  console.log(state);




  return (
    <div className="charge">
      <div>
        <Header />
      </div>


      <div style={chart}>
        <div className="split" style={{ marginTop: '70px' }}>
          <div style={div_first}>
            <div>
              <p className="para">Total Members</p>

              <button style={div_inside}>10</button>
            </div>

            <div>
              <p className="para">Total Earn Transactions</p>
              <button style={div_inside}>4</button>
            </div>
          </div>

          <div style={div_first}>
            <div>
              <p className="para">
                Members enrolled in last 30 <br />
                days
              </p>
              <button style={div_inside}>25</button>
            </div>
            <div>
              <p className="para">
                Earn Transactions in last 30 <br />
                days
              </p>
              <button style={div_inside}>89</button>
            </div>
          </div>

          <div style={div_first}>
            <div>
              <p className="para">Total Redeem Transactions</p> <br />
              <button style={div_inside}>78</button>
            </div>
            <div>
              <p className="para">
                Redeem Transactions in last 30
                <br /> days
              </p>
              <button style={div_inside}>15</button>
            </div>
          </div>
        </div>

        <div style={barchart}>
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
        </div>
      </div>
    </div >
  );
}
export default Profile;
