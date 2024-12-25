```javascript
// Assuming you're using the MongoDB Node.js driver

const { MongoClient } = require('mongodb');

async function updateDocument() {
  const uri = "mongodb://localhost:27017/"; // Replace with your connection string
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('myDatabase');
    const collection = database.collection('myCollection');

    // Incorrect update operation leading to potential error
    const result = await collection.updateOne({
      _id: ObjectId("651a7f07576d1a47a8018555") //Replace with your ObjectId 
    },{
      $set: { field1: 'value1', field2: 'value2' }
    });

    console.log(`Modified count: ${result.modifiedCount}`); // Check for 0

  } catch (err) {
    console.error('Error updating document:', err);
  } finally {
    await client.close();
  }
}

updateDocument();
```