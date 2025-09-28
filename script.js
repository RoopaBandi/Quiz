let currentStream="", currentSubject="";
let timer, timeLeft=60;
// ✅ Hide all pages (register, login, stream, subject, quiz, result)
function hideAllPages() {
   document.getElementById("welcomePage").classList.add("hidden");
  document.getElementById("registerPage").classList.add("hidden");
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("streamPage").classList.add("hidden");
  document.getElementById("subjectPage").classList.add("hidden");
  document.getElementById("quizPage").classList.add("hidden");
  document.getElementById("resultPage").classList.add("hidden");
  document.getElementById("profilePage").classList.add("hidden");
  document.getElementById("difficultyPage").classList.add("hidden");
   document.getElementById("historyPage").classList.add("hidden");
}

// ✅ Show Register & Login Pages
function showLogin(){
  document.getElementById("registerPage").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
}
function goToRegister(){
  hideAllPages(); 
  document.getElementById("registerPage").classList.remove("hidden");
}

// ✅ Register User
function register(){
  let name = document.getElementById("regName").value.trim();
  let studentID = document.getElementById("regID").value.trim();
  let branch = document.getElementById("regBranch").value.trim();
  let dob = document.getElementById("regDOB").value;
  let grade = document.getElementById("regGrade").value.trim();
  let user = document.getElementById("regUsername").value.trim();
  let pass = document.getElementById("regPassword").value.trim();
  

  if(name && studentID && branch && dob && grade && user && pass){
    let users = JSON.parse(localStorage.getItem("users")) || {};
    if(users[user]){
      alert("Username already exists! Please login.");
    } else {
      users[user] = { name, studentID, branch, dob, grade, password: pass };
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registration successful! Please login.");
      showLogin();
    }
  } else {
    alert("Please fill all the fields.");
  }
}


// ✅ Login User
function login(){
  let user = document.getElementById("username").value.trim();
  let pass = document.getElementById("password").value.trim();

  let users = JSON.parse(localStorage.getItem("users")) || {};
  if(users[user] && users[user].password === pass){
    alert("Login successful! Welcome " + users[user].name);
    localStorage.setItem("currentUser", user); // Save logged-in username
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("streamPage").classList.remove("hidden");
    loadStreams();
  } else {
    alert("Invalid username or password!");
  }
}
function showProfile() {
  hideAllPages();
  document.getElementById("profilePage").classList.remove("hidden");

  let currentUser = localStorage.getItem("currentUser");
  if(!currentUser) return;

  let users = JSON.parse(localStorage.getItem("users")) || {};
  let info = users[currentUser];

  document.getElementById("profileName").textContent = info.name;
  document.getElementById("profileID").textContent = info.studentID;
  document.getElementById("profileBranch").textContent = info.branch;
  document.getElementById("profileDOB").textContent = info.dob;
  document.getElementById("profileGrade").textContent = info.grade;
  document.getElementById("profileAvatar").src = users[currentUser].avatar || "avatar.png";

}

// ✅ Load Streams
function loadStreams(){
  let streamDiv=document.getElementById("streamList");
  streamDiv.innerHTML="";
  Object.keys(questionBank).forEach(stream=>{
    let btn=document.createElement("button");
    btn.textContent=stream;
    btn.onclick=()=>selectStream(stream);
    streamDiv.appendChild(btn);
  });
}

// ✅ Select Stream → show subjects
function selectStream(stream){
  currentStream=stream;
  document.getElementById("streamPage").classList.add("hidden");
  document.getElementById("subjectPage").classList.remove("hidden");

  let subjectDiv=document.getElementById("subjectList");
  subjectDiv.innerHTML="";
  Object.keys(questionBank[stream]).forEach(sub=>{
    let btn=document.createElement("button");
    btn.textContent=sub;
    btn.onclick=()=>selectSubject(sub);
    subjectDiv.appendChild(btn);
  });
}
function backToStreams(){
  hideAllPages(); 
  document.getElementById("streamPage").classList.remove("hidden");
}
function backToSubjects(){
  hideAllPages();
  document.getElementById("subjectPage").classList.remove("hidden");
}

// ✅ Select Subject → load quiz
function selectSubject(sub){
  currentSubject = sub;
  document.getElementById("subjectPage").classList.add("hidden");
  document.getElementById("difficultyPage").classList.remove("hidden");
}


// ✅ Load Quiz
function loadQuiz(){
  document.getElementById("subjectTitle").textContent = currentSubject + " Quiz (" + currentDifficulty + ")";
  let quizBox = document.getElementById("quizBox");
  quizBox.innerHTML = "";

  let questions = questionBank[currentStream][currentSubject][currentDifficulty];

  questions.forEach((q,i)=>{
    let div=document.createElement("div");
    div.innerHTML=`<p>${i+1}. ${q.q}</p>`;
    q.options.forEach((opt,idx)=>{
      div.innerHTML+=`<label><input type='radio' name='q${i}' value='${idx}'> ${opt}</label><br>`;
    });
    quizBox.appendChild(div);
  });

  startTimer();
}


// ✅ Timer
function startTimer(){
  timeLeft=60;
  document.getElementById("time").textContent=timeLeft;
  timer=setInterval(()=>{
    timeLeft--;
    document.getElementById("time").textContent=timeLeft;
    if(timeLeft<=0){
      clearInterval(timer);
      alert("Time Up!");
      submitQuiz();
    }
  },1000);
}

// ✅ Submit Quiz
// ✅ Submit Quiz
function submitQuiz() {
  clearInterval(timer);

  let questions = questionBank[currentStream][currentSubject][currentDifficulty];
  let score = 0;

  questions.forEach((q, i) => {
    let selected = document.querySelector(`input[name='q${i}']:checked`);
    if (selected && parseInt(selected.value) === q.ans) {
      score++;
    }
  });

  let percent = (score / questions.length) * 100;

  // Save quiz attempt
  let currentUser = localStorage.getItem("currentUser");
  if(currentUser){
    let quizAttempt = {
      date: new Date().toLocaleString(),
      stream: currentStream,
      subject: currentSubject,
      difficulty: currentDifficulty,
      score: percent
    };
    let history = JSON.parse(localStorage.getItem(currentUser + "_history")) || [];
    history.push(quizAttempt);
    localStorage.setItem(currentUser + "_history", JSON.stringify(history));
  }

  // Show result page (existing code)
  hideAllPages();
  document.getElementById("resultPage").classList.remove("hidden");

  let progressBar = document.getElementById("progressBar");
  progressBar.style.width = "0%";
  let currentWidth = 0;
  let target = percent;

  let animation = setInterval(() => {
    if (currentWidth >= target) {
      clearInterval(animation);
    } else {
      currentWidth++;
      progressBar.style.width = currentWidth + "%";
      progressBar.textContent = currentWidth + "%";
    }
  }, 20);

  let feedback = document.getElementById("feedback");
  if (percent >= 90) {
    feedback.textContent = "Outstanding 🎉";
    progressBar.style.backgroundColor = "#4CAF50";
  } else if (percent >= 60) {
    feedback.textContent = "Good 👍";
    progressBar.style.backgroundColor = "#2196F3";
  } else {
    feedback.textContent = "Try Again 💪";
    progressBar.style.backgroundColor = "#f44336";
  }
}



// ✅ Go back to Home
function goHome(){
  hideAllPages();
  document.getElementById("streamPage").classList.remove("hidden");

  // reset result UI
  document.getElementById("progressBar").style.width = "0%";
  document.getElementById("progressBar").textContent = "";
  document.getElementById("feedback").textContent = "";
}

let currentDifficulty = "";

function selectDifficulty(level){
  currentDifficulty = level;
  document.getElementById("difficultyPage").classList.add("hidden");
  document.getElementById("quizPage").classList.remove("hidden");
  loadQuiz();
}
// ✅ Show History Page
function showHistory() {
  hideAllPages();
  document.getElementById("historyPage").classList.remove("hidden");

  let currentUser = localStorage.getItem("currentUser");
  if(!currentUser) return;

  let history = JSON.parse(localStorage.getItem(currentUser + "_history")) || [];

  // Populate table
  let tbody = document.querySelector("#historyTable tbody");
  tbody.innerHTML = "";
  history.forEach(item => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.date}</td>
      <td>${item.stream}</td>
      <td>${item.subject}</td>
      <td>${item.difficulty}</td>
      <td>${item.score.toFixed(2)}</td>
    `;
    tbody.appendChild(row);
  });

  // Draw Progress Chart
  drawProgressChart(history);
}

// ✅ Draw Chart.js line chart
function drawProgressChart(history) {
  let ctx = document.getElementById('progressChart').getContext('2d');

  // Destroy previous chart if exists
  if(window.historyChart) window.historyChart.destroy();

  window.historyChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: history.map(q => q.date),
      datasets: [{
        label: 'Score %',
        data: history.map(q => q.score),
        backgroundColor: 'rgba(33, 150, 243, 0.2)',
        borderColor: '#2196F3',
        borderWidth: 2,
        tension: 0.3,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: '#2196F3'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}
