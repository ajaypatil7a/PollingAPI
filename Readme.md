<h1>A Polling Api System</h1>

<h3>Hosting Link: https://polling-system-api-9iv0.onrender.com </h3>

<h2>Tech stack </h2><br>
<ul>
 <li>NodeJS </li>
 <li>ExpressJS</li> 
 <li>MongoDB </li>
 <li>Mongoose </li>
</ul>

<h2>Features ✨✨</h2> <br>
<ul>
    <li>Create a question</li>
    <li>Add options to a question</li> 
    <li>Add a vote to an option of question</li> 
    <li>Delete a question</li> 
    <li>Delete an option</li> 
    <li>View a question</li> 
</ul>

<h2>Url Paths for performing actions 🔗🔗</h2> <br>
<ul>
    <li>To create a question :- http://localhost:5000/question/create </li><br>
    <li>To add options to a specific question :- http://localhost:5000/question/options/:QuesId/create </li><br>
    <li>To view a question and it’s options :- http://localhost:5000/question/view/:QuesID </li><br>
    <li>To increment the count of votes :- http://localhost:5000/options/:OptionID/add_vote </li><br>
   <li>To delete an option :- http://localhost:5000/options/delete/:OptionID </li><br>
    <li>To delete a question :- http://localhost:5000/question/delete/:QuesID </li><br>
    </ul>

