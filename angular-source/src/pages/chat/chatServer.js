const mongo = require('mongodb').MongoClient;
const client = require('socket.io').listen(4000).sockets;

// Connect to mongo

mongo.connect('mongodb://Breakpoint:breakpoint@breakpoint-shard-00-00-ti5q0.mongodb.net:27017,breakpoint-shard-00-01-ti5q0.mongodb.net:27017,breakpoint-shard-00-02-ti5q0.mongodb.net:27017/student-app?ssl=true&replicaSet=Breakpoint-shard-0&authSource=admin', function (err, db) {
    if (err) {
        throw err;
    }

    console.log('MongoDB Connected...');

    // Connect to Socket.io
    client.on('connection', function (socket) {
        let chat = db.collection('chats');

        // create function to send status
        sendStatus = function (s) {
            socket.emit('status', s);
        }

        // Get chats from mongo collection
        chat.find().limit(100).sort({ _id: 1 }).toArray(function (err, res) {
            if (err) {
                throw err;
            }

            // Emmit the messages
            socket.emit('output', res);
        });

        // Handle input events
        socket.on('input', function (data) {
            let name = data.name;
            let message = data.message;

            // Check for name & message
            if (name == "" || message == "") {
                sendStatus('Please enter a name and message');
            } 
            else {
                chat.insert({ name: name, message: message }, function(){
                    client.emit('output', [data]);

                    sendStatus({
                        message: 'Message Sent',
                        clear: true
                    });
                });
            }
        })

        // Handle Clear
        socket.on('clear', function (data) {
            // Remove all chats 
            chat.remove({}, function () {
                socket.emit('cleared');
            })
        })
    });
})