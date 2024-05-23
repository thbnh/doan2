import './booking.scss';
import Buttons from '../../Components/Button/button';
import { useState, useEffect } from 'react';
import { getServiceInforApi } from '../../services/servService';

function Booking() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const getServiceInfor = async () => {
            try {
                const serviceData = await getServiceInforApi();
                setServices(serviceData);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu dịch vụ:', error);
            }
        };
        getServiceInfor();
    }, []);


    return (
        <div className="booking-container">
            <div className="booking-wrapper">
                <div className="content-left col-3">
                    {services.map((service) => (
                        <div key={service.id}>
                            <Buttons className="content-btn">
                                {service.serviceName}
                            </Buttons>
                            <hr />
                        </div>
                    ))}
                </div>
                <div className="content-right col-7">
                    <>
                        <div className="first">
                            <div className="first-group">
                                <label>Email</label>
                                <div className="input-group">
                                    <input type="text" name="email" />
                                </div>
                            </div>
                            <div className="first-group">
                                <label>Họ và tên</label>
                                <div className="input-group">
                                    <input type="text" name="fullName" />
                                </div>
                            </div>
                        </div>
                        <div className="second">
                            <div className="second-group">
                                <label>Địa chỉ</label>
                                <div className="input-group">
                                    <input type="text" name="address" />
                                </div>
                            </div>
                            <div className="second-group">
                                <label>Số điện thoại</label>
                                <div className="input-group">
                                    <input type="text" name="phoneNumber" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <Buttons className="booking-btn" mainbtn>
                                Đặt dịch vụ
                            </Buttons>
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
}

export default Booking;
