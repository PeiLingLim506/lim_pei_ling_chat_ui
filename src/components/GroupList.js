import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/GroupList.css';
import { colors } from '../assets/variables/colors';
import { SearchInput, UserList, CustomButton} from './index.js';
import { faAdd, faBuilding, faHourglass, faEnvelope, faFileInvoice, faCalendar, faComment, faGear, faUserTie } from '@fortawesome/free-solid-svg-icons';

const GroupList = () => {
    const [data, setData] = useState(null);
    const charColors = [
        [colors.lightPurple, colors.purple],
        [colors.lightOrange, colors.orange],
        [colors.lightPink, colors.pink],
        [colors.lightGreen, colors.green],
        [colors.lightMetal, colors.metal]
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

  return (
    <div>
        <div className='d-flex align-items-center justify-content-between'>
            <p className='group-heading'>Groups {data ? (<span>({data.length})</span>) : (0)}</p>
            <CustomButton icon={faAdd} color={colors.black} />
        </div>
        {data ? (
            <div className='group-list'>
                {data.map((group, index) => {
                    let count = index;
                    while (count >= charColors.length) count -= charColors.length;
                    
                    return (
                        <div className='d-flex align-items-center mb-2'>
                            <div className='group-char rounded-2 d-flex align-items-center justify-content-center me-3' style={{ backgroundColor: charColors[count][0] }}>
                                <p className='' style={{ color: charColors[count][1] }}>{group.company.name[0]}</p>
                            </div>
                            <div>
                                <p className='group-name'>{group.company.name}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
  );
};

export default GroupList;