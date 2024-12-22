# AI-POWERED 3D WEBSITE

Full stack project in which you would be able customize different sections of your PS5,
change color or apply skin of your choice using AI or the image files you
already have. It's built using React.js, Node.js and ThreeJS.


# Setup Instructions

Download the Project Files:
Clone the repository to your local machine.

Setup the Client:
Open Git Bash in the project directory.
Navigate to the client folder: cd client
Install the required dependencies: npm install
Start the client in development mode: npm run dev

Setup the Server:
Open another Git Bash window.
Navigate to the server folder: cd server
Install the required dependencies: npm install

Create the .env File: Inside the server directory, create a .env file if it doesn’t already exist.
touch .env
Open the .env file with a text editor (e.g., nano .env or vim .env) and add the following line to set the OPENAI_API_KEY variable:
Replace your_dalle_api_key_here with your actual API key from DALL·E.
OPENAI_API_KEY=your_dalle_api_key_here

Start the server: node index.js

Start Using the Application:
Once both the client and server are up and running, you can start using the application.


