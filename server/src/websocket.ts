import { WebSocketServer } from 'ws';

const chatroom = () => {
    const wss = new WebSocketServer({ port: 4646 });
    const rooms = new Map();
    const database = new Map();

    wss.on('connection', (ws) => {
        console.log('server 已連接 webSocket 聊天室');

        ws.on('message', (data) => {
            const info = JSON.parse(data.toString());

            switch (info.type) {
                case 'login': {

                    //創建聊天室
                    if(!rooms.has(info.roomID)) {
                        rooms.set(info.roomID, new Set())   
                    }
                    rooms.get(info.roomID).add(ws);
                  
                    //創建database
                    if(!database.has(info.roomID)) {
                        database.set(info.roomID, {
                            messages: []
                        })
                    } 
                    
                    //獲取database
                    let roomData = database.get(info.roomID);
                    if (roomData && roomData.messages.length > 0) {
                        ws.send(JSON.stringify(roomData.messages));
                    }
                   
                    break;
                }
                case 'message': {
                    if (rooms.has(info.roomID)) {

                        //記錄到database
                        let roomData = database.get(info.roomID);
                        roomData.messages.push({
                            userID: info.userID,
                            message: info.message
                        }); 
                        database.set(info.roomID, roomData);

                        //傳送訊息給每個client
                        for (const client of rooms.get(info.roomID)) {
                            client.send(JSON.stringify([{
                                    userID: info.userID,
                                    message: info.message,
                                }]));
                        }
                    }
                    break;
                }
            }
        }); 

        ws.on('close', () => {
            rooms.forEach((clients, roomID) => {
                if (clients.has(ws)) clients.delete(ws);
                if (clients.size === 0) rooms.delete(roomID); 
            });
        });
    });
};

export default chatroom;
