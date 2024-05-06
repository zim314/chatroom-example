import Button from '../components/Button';
import buttonData from '../components/Button/buttonList';
import { useState } from 'react';
import Chatroom from '../components/Chatroom';

const Home = () => {
    const [user, setUser] = useState('');
    const [targetUser, setTargetUser] = useState('');

    const chooseUser = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.target as HTMLButtonElement;
        setUser(button.value);
        setTargetUser('');
    };

    const chooseTargetUser = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.target as HTMLButtonElement;
        setTargetUser(button.value);
    };

    return (
        <div style={{ padding: '30px' }}>
            <h1 style={{ marginBottom: '40px' }}>webSocket 聊天室 sample</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <h5 style={{ marginTop: '20px', marginBottom: '20px' }}>
                        請選擇登入身份
                    </h5>
                    {buttonData.map((info) => (
                        <Button
                            color={info.color}
                            key={info.id}
                            state={user}
                            value={info.id}
                            handleClick={chooseUser}
                        >
                            {info.user}
                        </Button>
                    ))}
                    {user !== '' && (
                        <>
                            <h5
                                style={{
                                    marginTop: '20px',
                                    marginBottom: '20px',
                                }}
                            >
                                請選擇聯絡對象
                            </h5>
                            {buttonData.map((info) => (
                                <Button
                                    color={info.color}
                                    hidden={info.id === user}
                                    key={info.id}
                                    state={targetUser}
                                    value={info.id}
                                    handleClick={chooseTargetUser}
                                >
                                    {info.user}
                                </Button>
                            ))}
                        </>
                    )}
                </div>
                {targetUser !== '' && (
                    <Chatroom userID={user} targetUserID={targetUser} />
                )}
            </div>
        </div>
    );
};

export default Home;
