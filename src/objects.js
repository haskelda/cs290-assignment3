/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  //your code here
  return {
    type: 'Goldfish',
    brand: 'Pepperidge Farm',
    flavor: 'Cheddar',
    count: 2000
  }; //Modify ONLY this line
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received


*/

//your code here
var totalSystemMessagesReceived = 0; //for Extra Credit

function MessageLog(user){
  this.user = user;
  this.receivedMessageArray = [];
  this.totalMessagesReceived = 0;
  this.sentMessageArray = [];
  this.totalMessagesSent = 0;
  MAX_ARRAY_SIZE = 5;
  this.logMessage = function(messageText, direction) {
    if (direction == 1){ //user received message
      /*This while loop rewrites every element in the array so that
       the most recent element is always element 0. 
       This is to make the implementation of lastReceivedMessage easier */
      var i = this.receivedMessageArray.length;
      if (i = MAX_ARRAY_SIZE)  // Limits size of array array
        i = MAX_ARRAY_SIZE - 1;
      while (i > 0) {
        this.receivedMessageArray[i] = this.receivedMessageArray[i - 1];
        i--;
      }
      this.receivedMessageArray[0] = messageText;
      this.totalMessagesReceived++;
      totalSystemMessagesReceived++;
    }
    if (direction == 0) { //user sent message
      /*This while loop rewrites every element in the array so that
       the most recent element is always element 0. 
       This is to make the implementation of getSentMessage easier */
      var i = this.sentMessageArray.length;
      if (i = MAX_ARRAY_SIZE)  // Limits size of array
        i = MAX_ARRAY_SIZE - 1;
      while (i > 0) {
        this.sentMessageArray[i] = this.sentMessageArray[i - 1];
        i--;
      }
      this.sentMessageArray[0] = messageText;
      this.totalMessagesSent++;
    }
  };
  this.getSentMessage = function(n) {
    if (this.totalMessagesSent > n)
      return this.sentMessageArray[n];
  };
  this.totalSent = function() {
    return this.totalMessagesSent;
  };
  this.totalReceived = function() {
    return this.totalMessagesReceived;
  };
}
//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here
MessageLog.prototype.lastReceivedMessage = function() {
  return (this.receivedMessageArray[0]);
};
//end your code
/*
*
* OR for Extra Credit:
*
* Add a method to the MessageLog prototype called systemReceived().
* This method should return the total number of messages received for all
* instances of message logs. So if you have logs A and B, A has received
* 3 messages, B has received 8. systemReceived() should return 11. You
* may need to do more than simply add a method to make this functionality
* work.
*/
//your code here

MessageLog.prototype.systemReceived = function() {
  return (totalSystemMessagesReceived);
};

//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

//your code here
var myLog = new MessageLog('BlackHatGuy');
myLog.logMessage('foo', 1);
myLog.logMessage('bar', 1);
myLog.logMessage('baz', 1);
//end your code


