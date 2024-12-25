```javascript
// Improved version with explicit error handling and modifiedCount check
const { MongoClient, ObjectId } = require('mongodb');

async function updateDocument() {
  const uri = "mongodb://localhost:27017/"; // Replace with your connection string
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('myDatabase');
    const collection = database.collection('myCollection');

    const result = await collection.updateOne({
      _id: new ObjectId("651a7f07576d1a47a8018555") // Make sure the ObjectId is correctly created
    },{
      $set: { field1: 'value1', field2: 'value2' }
    });

    if (result.modifiedCount === 0) {
      console.warn('Warning: No documents were updated.');
    } else {
      console.log(`Modified count: ${result.modifiedCount}`);
    }
  } catch (err) {
    console.error('Error updating document:', err);
  } finally {
    await client.close();
  }
}

updateDocument();
```