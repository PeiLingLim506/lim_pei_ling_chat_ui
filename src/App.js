import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBuilding, faHourglass, faEnvelope, faFileInvoice, faCalendar, faComment, faGear, faUserTie } from '@fortawesome/free-solid-svg-icons';

import { colors } from './assets/variables/colors';
import { SearchInput, UserList, CustomButton, GroupList} from './components/';

function App() {
  const iconButtons = [faHome, faBuilding, faHourglass, faEnvelope, faFileInvoice, faCalendar, faComment, faGear, faUserTie];

  return (
    <div className="App">
      <body className='App-body pt-2 pb-4 px-1' style={{ backgroundColor: colors.secondary }}>
        <Row className='m-0 g-0'>
          <Col md={4}>
            <Row className='m-0 g-0'>
              <Col md={2}>
                <div className="sider py-3 d-flex flex-column" style={{ backgroundColor: colors.primary }}>
                  {iconButtons.map(iconButton => (
                    <CustomButton icon={iconButton} size='lg' />
                  ))}
                </div>
              </Col>
              
              <Col md={10} className='px-4'>
                <p className='heading mb-3'>Chat</p>
                <div className='p-3 rounded-3 mb-4' style={{ backgroundColor: colors.white }}>
                  <div className='mb-3'>
                    <SearchInput text='Search Contact' />
                  </div>
                  <UserList />
                  <div className='d-flex mt-3'>
                    <CustomButton text='Meeting' bgcolor={colors.primary} color={colors.white} />
                    <CustomButton text='Schedule' bgcolor={colors.secondary} color={colors.black} />
                  </div>
                </div>
                <div className='p-3 pt-1 rounded-3' style={{ backgroundColor: colors.white }}>
                  <GroupList />
                </div>
              </Col>
            </Row>
          </Col>

          <Col md={8} className='pe-3'>
            <div className='d-flex flex-column h-p100'>
              <div className='text-end'>
                <a href='' className='add-link' style={{ color: colors.primary }}>Add New Profile</a>
              </div>
              <div className='rounded-3 mt-4 flex-grow-1' style={{ backgroundColor: colors.white }}>
                <Row className='m-0 g-0 h-p100'>
                  <Col md={8}>
                    <div className='d-flex align-items-center justify-content-between border-bottom p-3'>
                      <div className='d-flex align-items-center'>
                        <div className='pe-2'>
                            <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' className="user-img" alt="" />
                        </div>
                        <div>
                            <p className='user-name'>Kevin</p>
                            <p className='user-msg' style={{ color: colors.input }}>UI / UX Designer</p>
                        </div>
                      </div>
                      <div>
                        <SearchInput text='Search Contact' />
                      </div>
                    </div>
                  </Col>
                  <Col md={4} style={{ backgroundColor: colors.lightPurple }}>
                    hi
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </body>
    </div>
  );
}

export default App;
