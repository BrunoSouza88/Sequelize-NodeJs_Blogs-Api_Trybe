<h1>Blogs-Api</h1>

<p>This is a project that implements a Blogs API using Sequelize and Node.js.</p>

<h2>Prerequisites</h2>

<p>Before you begin, ensure that you meet the following requirements:</p>

<ul>
  <li>Have Node.js installed: <a href="https://nodejs.org/en/download/">Node.js Downloads</a>.</li>
  <li>Have a database management system (e.g., MySQL, PostgreSQL) installed and running.</li>
</ul>

<h2>Installation</h2>

<p>Follow these steps to set up and run the project locally:</p>

<ol>
  <li>Clone the repository:</li>

  <pre><code>git clone https://github.com/BrunoSouza88/Sequelize-NodeJs_Blogs-Api_Trybe.git</code></pre>

  <li>Navigate to the project directory:</li>

  <pre><code>cd Sequelize-NodeJs_Blogs-Api_Trybe</code></pre>

  <li>Install the dependencies:</li>

  <pre><code>npm install</code></pre>

  <li>Create a `.env` file based on the provided `.env.example` file, and update the environment variables with your database connection details.</li>

  <li>Run the database migrations:</li>

  <pre><code>npx sequelize-cli db:migrate</code></pre>

  <li>Start the server:</li>

  <pre><code>npm start</code></pre>

  <li>Access the API endpoints using a tool like Postman or cURL.</li>
</ol>

<h2>Usage</h2>

<p>The API provides the following endpoints:</p>

<ul>
  <li>GET `/blogs` - Get a list of all blogs.</li>
  <li>GET `/blogs/:id` - Get a specific blog by ID.</li>
  <li>POST `/blogs` - Create a new blog.</li>
  <li>PUT `/blogs/:id` - Update an existing blog by ID.</li>
  <li>DELETE `/blogs/:id` - Delete a blog by ID.</li>
</ul>

<p>Make HTTP requests to the appropriate endpoints using tools like Postman or cURL.</p>

<h2>Contributing</h2>

<p>Contributions are what make the open-source community a fantastic place to learn, inspire, and create. Any contributions you make are greatly appreciated.</p>

<ol>
  <li>Fork the project.</li>
  <li>Create a branch for your feature (<code>git checkout -b feature/AmazingFeature</code>).</li>
  <li>Commit your changes (<code>git commit -m 'Add some amazing feature'</code>).</li>
  <li>Push to the branch (<code>git push origin feature/AmazingFeature</code>).</li>
  <li>Open a Pull Request.</li>
</ol>

<h2>License</h2>

<p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>

<h2>Contact</h2>

<p>Bruno Souza - <a href="mailto:bmsouza88@gmail">bmsouza88@gmail.com</a></p>

<p>Project Link: <a href="https://github.com/BrunoSouza88/Sequelize-NodeJs_Blogs-Api_Trybe">https://github.com/BrunoSouza88/Sequelize-NodeJs_Blogs-Api_Trybe</a></p>
