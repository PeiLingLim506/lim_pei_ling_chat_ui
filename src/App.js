import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { faHome, faBuilding, faHourglass, faEnvelope, faFileInvoice, faCalendar, faComment, faGear, faUserTie, faPhone, faVideo, faEllipsisVertical, faAt, faFont, faPaperclip, faFaceSmile, faImage, faLink, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { colors } from './assets/variables/colors';
import { SearchInput, UserList, CustomButton, GroupList, ChatList, ChatInputBar } from './components/';

function App() {
  const iconButtons = [faHome, faBuilding, faHourglass, faEnvelope, faFileInvoice, faCalendar, faComment, faGear, faUserTie];
  const roundButtons = [faPhone, faVideo, faEllipsisVertical];

  return (
    <div className="App">
      <div className='App-body pt-2 pb-4 px-1' style={{ backgroundColor: colors.secondary }}>
        <div className='d-flex overflow-auto'>
          <div style={{ width: '80px' }}>
            <div className="sider py-3 d-flex flex-column" style={{ backgroundColor: colors.primary }}>
              {iconButtons.map((iconButton, index) => (
                <div key={index} className='p-0'>
                  <CustomButton icon={iconButton} size='lg' w='100%' />
                </div>
              ))}
            </div>
          </div>

          <div className='chat-ui px-3 overflow-auto'>
            <div className='d-flex justify-content-between mb-3 align-items-center'>
              <div className=''>
                <p className='heading'>Chat</p>
              </div>
              <div className=''>
                <a href='' className='add-link' style={{ color: colors.primary }}>Add New Profile</a>
              </div>
            </div>

            <Row className='m-0 g-0'>
              <Col md={3} style={{ height: 'fit-content' }}>
                <div className='h-p100'>
                  <div className='p-3 rounded-3 mb-4' style={{ backgroundColor: colors.white }}>
                    <div className='mb-3'>
                      <SearchInput text='Search Contact' bgcolor={colors.secondary} />
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
                </div>
              </Col>

              <Col md={9} className='ps-3' style={{ height: '100vh' }}>
                <div className='rounded-3 h-p100' style={{ backgroundColor: colors.white }}>
                  <Row className='m-0 g-0 h-p100'>
                    <Col md={8} className='h-p100'>
                      <div className='h-p100 position-relative'>
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
                          <div className='d-flex align-items-center'>
                            <SearchInput text='Search' width='110px' />
                            {roundButtons.map((roundButton, index) => (
                              <div key={index} className='ms-2'>
                                <CustomButton icon={roundButton} color={colors.input} bordercolor={colors.input} isRoundBtn={true} w='30px' h='30px' border='1px solid' />
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className='p-3' style={{ height: '84%', overflow: 'auto' }}>
                          <ChatList />
                        </div>

                        <ChatInputBar />
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className='h-p100 rounded-3 shadow'>
                        <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' className="w-p100 rounded-3" alt="" />
                        <div className='border-bottom'>
                          <p className='user-name'>Kevin</p>
                          <p className='user-msg' style={{ color: colors.input }}>UI / UX Designer</p>
                          <p className='user-name'>San Francisco</p>
                          <div className='d-flex align-items-center'>
                            <div className='ms-4'>
                              <CustomButton icon={faPaperPlane} bgcolor={colors.info} color={colors.white} border='none' isRoundBtn={true} w='40px' h='40px' />
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className='user-name mb-2'>User Information</p>
                          <p className='user-name'>Phone</p>
                          <p className='mb-2'>+60-173948593</p>
                          <p className='user-name'>Email</p>
                          <p>kevin@gmail.com</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
