Meteor.methods({
    "SimpleChat.newMessage": function (message, roomId, username) {
        console.log(message, roomId, username)
        check(message, String);
        check(roomId, String);
        check(username, String);
        SimpleChat.Chats.insert({
            message: message,
            roomId: roomId,
            username: username,
            date: new Date()
        })
    }
});