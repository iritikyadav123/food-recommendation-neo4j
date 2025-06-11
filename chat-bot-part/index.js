const schemaDescription = `
Your Neo4j graph database has the following types and relationships:

1. Restaurant:
   - Properties:
     - id: ID
     - restaurantId: String
     - name: String
   - Relationships:
     - (Restaurant)-[:IS_FROM]->(Zipcode)
     - (Restaurant)-[:HAS_ORDER]->(Order)
     - (Restaurant)-[:HAVE]->(Item)

2. User:
   - Properties:
     - id: ID
     - userId: String
     - name: String
     - email: String
     - age: Int
     - gender: String
   - Relationships:
     - (User)-[:LIVES_IN]->(Zipcode)
     - (User)<-[:ORDERED_BY]-(Order)

3. State:
    - Properties:
      - name: String
    - Relationships: 
      - (State)<-[:IS_IN]-(City)
4. City: 
    - Properties:
      - name: String
    - Relationships: 
      - (City)<-[:LIES_IN]-(Zipcode)
5. Zipcode:
   - Properties:
     - zipcode: String
   - Relationships:
     - (Zipcode)-[:LIES_IN]->(City)
     - (Zipcode)<-[:IS_FROM]-(Restaurant)

6. Category:
   - Properties:
     - name: String
   - Relationships:
     - (Category)-[:HAS_ITEM]->(Item)

7. Item:
   - Properties:
     - id: ID
     - itemId: String
     - name: String
     - price: Float
   - Relationships:
     - (Item)<-[:HAS_ITEM]-(Category)
     - (Item)<-[:HAVE]-(Restaurant)
     - (Item)<-[:LIKED]-(Order)
     - (Item)<-[:DISLIKED]-(Order)
     - (Item)<-[:INCLUDES]-(Order)

8. Order:
   - Properties:
     - id: ID
     - date: String
     - orderId: String
     - pay_mode: String
     - rating: Int
     - total_price: Float
   - Relationships:
     - (Order)-[:LIKED]->(Item)
     - (Order)-[:DISLIKED]->(Item)
     - (Order)-[:INCLUDES]->(Item)
     - (Order)<-[:HAS_ORDER]-(Restaurant)
     - (Order)-[:ORDERED_BY]->(User)

Now, based on this schema, write a Cypher query that answers the user's question:
"{{user message}}"

Only return the Cypher query.
`;


const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");
const neo4j = require("neo4j-driver");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Neo4j connection
const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

app.post("/chat", async (req, res) => {
  const { message } = req.body;
  console.log("Received message:", message);

  try {
    // Ask GPT-4 to convert message into Cypher query

    const prompt = `${schemaDescription}\nUser asked: "${message}"`;

    const gptResponse = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    const cypherQuery = gptResponse.choices[0].message.content.trim();
    console.log("Generated Cypher Query:", cypherQuery);

    // Run Cypher query
    const session = driver.session();
    const result = await session.run(cypherQuery);
    const records = result.records.map((record) => record.toObject());


   const prompt2 = `
Hi ChatGPT,

${message}

Answer is in JSON format:
${JSON.stringify(records, null, 2)}

Please create a human-readable answer in natural language based on the question and the data give me positive way .
`;

    const stringResponse = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt2 }],
    });

    const finalAnswer = stringResponse.choices[0].message.content.trim();
    

    await session.close();

    res.json({ reply: finalAnswer });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Something went wrong." });
  }
});

app.listen(3001, () => console.log("✅ Server running at http://localhost:3001"));
